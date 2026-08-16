"""Gradio demo for MiniMax-Music3.

Three backends, selected with MUSIC3_BACKEND:

  "server" (default) — post to an SGLang-Omni server's OpenAI-compatible
      /v1/audio/speech endpoint. Keeps the Space on CPU hardware; the server
      resamples the vocoder output to 32 kHz.

          sgl-omni serve --model-path MiniMaxAI/MiniMax-Music3 --port 8000

  "local" — run the weights in-process with the diffusers modular pipeline,
      which returns the vocoder's native 44.1 kHz stereo. Needs a CUDA GPU
      (~23 GB VRAM in bfloat16) and diffusers from main.

  "space" — call another Gradio Space over its /gradio_api. No GPU and no
      weights needed, but you are a guest on someone else's hardware. The
      endpoint and parameter names are configured rather than guessed; the
      status banner lists what the target Space actually exposes.

See README.md for configuration.
"""

import json
import os
import random
import tempfile
import wave

import gradio as gr
import requests

BACKEND = os.environ.get("MUSIC3_BACKEND", "server").strip().lower()
MODEL_REPO = os.environ.get("MUSIC3_REPO", "MiniMaxAI/MiniMax-Music3")

# server backend
BASE_URL = os.environ.get("MUSIC3_BASE_URL", "http://127.0.0.1:8000/v1").rstrip("/")
API_KEY = os.environ.get("MUSIC3_API_KEY", "")
MODEL = os.environ.get("MUSIC3_MODEL", "minimax_ttm")
REQUEST_TIMEOUT = int(os.environ.get("MUSIC3_TIMEOUT", "900"))

# space backend
SPACE_URL = os.environ.get(
    "MUSIC3_SPACE_URL", "https://minimaxai-minimax-music3-workflow.hf.space"
).rstrip("/")
SPACE_ENDPOINT = os.environ.get("MUSIC3_SPACE_ENDPOINT", "").strip().lstrip("/")
HF_TOKEN = os.environ.get("HF_TOKEN", "")
# Maps this app's fields onto the target endpoint's parameter names. Discover
# them from the status banner, then set this to a JSON object. A field mapped
# to an empty name is not sent.
SPACE_PARAMS = os.environ.get(
    "MUSIC3_SPACE_PARAMS",
    '{"lyrics": "lyrics", "caption": "prompt", "duration": "audio_duration", "seed": "seed"}',
)

# The autoregressive stage generates 25 frames per second of audio and the
# checkpoint caps generation at 9000 frames.
FRAMES_PER_SECOND = 25
MAX_FRAMES = 9000
MAX_DURATION = MAX_FRAMES // FRAMES_PER_SECOND  # 360 s
DEFAULT_INFERENCE_STEPS = 30
DEFAULT_GUIDANCE = 1.7  # reference inference value for the flow-matching stage
SEED_MAX = 2**31 - 1

# The server caps the tokenized prompt at 5000 tokens. We can't tokenize here,
# so this is a generous character-level guard that only warns.
SOFT_PROMPT_CHAR_LIMIT = 12000

# Sent as the lyrics when the box is left empty. One of the model's own structure tags.
INSTRUMENTAL_TAG = "[instrumental]"

_pipe = None


def _headers():
    headers = {"Content-Type": "application/json"}
    if API_KEY:
        headers["Authorization"] = f"Bearer {API_KEY}"
    return headers


def _describe(path):
    """Report what the audio actually is, rather than asserting a rate."""
    try:
        with wave.open(path) as handle:
            rate, channels, frames = handle.getframerate(), handle.getnchannels(), handle.getnframes()
    except Exception:
        return "audio"
    layout = {1: "mono", 2: "stereo"}.get(channels, f"{channels} ch")
    return f"{rate / 1000:g} kHz {layout}, {frames / rate:.1f}s"


def backend_status() -> str:
    if BACKEND == "local":
        try:
            import torch
        except ImportError:
            return (
                "⚠️ **Local backend selected but PyTorch is missing.** Install the local "
                "requirements (`pip install -r requirements-local.txt`) or set "
                "`MUSIC3_BACKEND=server`."
            )
        if not torch.cuda.is_available():
            return "⚠️ **Local backend selected but no CUDA device is visible.** This model needs a GPU."
        loaded = "loaded" if _pipe is not None else "loads on first generation (several minutes)"
        name = torch.cuda.get_device_name(0)
        return f"✅ **Local backend** on `{name}` — `{MODEL_REPO}` {loaded}."

    if BACKEND == "space":
        try:
            info = _space_info()
        except requests.exceptions.RequestException as exc:
            return (
                f"⚠️ **Cannot reach `{SPACE_URL}`** ({type(exc).__name__}). Check "
                "`MUSIC3_SPACE_URL`, and set `HF_TOKEN` if the Space is gated."
            )
        except ValueError:
            return f"⚠️ `{SPACE_URL}/gradio_api/info` did not return JSON."

        named = info.get("named_endpoints") or {}
        if not named:
            return f"⚠️ `{SPACE_URL}` reports no named endpoints to call."

        lines = []
        for name, spec in list(named.items())[:12]:
            params = ", ".join(
                f"`{p.get('parameter_name') or p.get('label') or '?'}`"
                for p in (spec.get("parameters") or [])
            )
            marker = " ← selected" if name.lstrip("/") == SPACE_ENDPOINT else ""
            lines.append(f"- `{name}` ({params or 'no parameters'}){marker}")

        listing = "\n".join(lines)
        if not SPACE_ENDPOINT:
            return (
                f"⚠️ **Connected to `{SPACE_URL}`, but no endpoint selected.** Set "
                f"`MUSIC3_SPACE_ENDPOINT` to one of these and map its parameters with "
                f"`MUSIC3_SPACE_PARAMS`:\n\n{listing}"
            )
        return f"✅ **Space backend** — `{SPACE_URL}`, calling `{SPACE_ENDPOINT}`.\n\n{listing}"

    try:
        response = requests.get(f"{BASE_URL}/models", headers=_headers(), timeout=10)
        response.raise_for_status()
        served = [entry.get("id", "?") for entry in response.json().get("data", [])]
    except requests.exceptions.RequestException as exc:
        return (
            f"⚠️ **No backend reachable at `{BASE_URL}`** ({type(exc).__name__}).\n\n"
            "Start one with `sgl-omni serve --model-path MiniMaxAI/MiniMax-Music3 "
            "--port 8000`, then set `MUSIC3_BASE_URL` to its `/v1` URL. "
            "See the README for details."
        )
    except ValueError:
        return f"⚠️ `{BASE_URL}/models` did not return JSON — is that an SGLang-Omni server?"

    listed = ", ".join(f"`{name}`" for name in served) or "none reported"
    note = "" if (not served or MODEL in served) else f"\n\n⚠️ Configured model `{MODEL}` is not in that list."
    return f"✅ **Connected to `{BASE_URL}`** — served models: {listed}{note}"


def _load_pipeline(guidance):
    global _pipe
    import torch
    from diffusers import ModularPipeline

    if _pipe is None:
        pipe = ModularPipeline.from_pretrained(MODEL_REPO)
        pipe.load_components(dtype=torch.bfloat16)
        pipe.to("cuda")
        _pipe = pipe

    if abs(guidance - DEFAULT_GUIDANCE) > 1e-6:
        from diffusers import ClassifierFreeGuidance

        _pipe.update_components(guider=ClassifierFreeGuidance(guidance_scale=guidance))
    return _pipe


def _generate_local(lyrics, instructions, duration, seed, steps, guidance):
    import soundfile as sf
    import torch

    pipe = _load_pipeline(guidance)
    audio = pipe(
        prompt=instructions,
        lyrics=lyrics,
        audio_duration=float(duration),
        generator=torch.Generator("cuda").manual_seed(seed),
        num_inference_steps=int(steps),
        output="audios",
    )[0]

    path = tempfile.NamedTemporaryFile(suffix=".wav", delete=False).name
    # audio is (channels, samples); soundfile writes (samples, channels).
    sf.write(path, audio.T, pipe.sampling_rate)
    return path


def _space_headers():
    headers = {"Content-Type": "application/json"}
    if HF_TOKEN:
        headers["Authorization"] = f"Bearer {HF_TOKEN}"
    return headers


def _space_info():
    response = requests.get(
        f"{SPACE_URL}/gradio_api/info", headers=_space_headers(), timeout=30
    )
    response.raise_for_status()
    return response.json()


def _find_audio(payload):
    """Walk a Gradio result for the first thing that looks like returned audio."""
    if isinstance(payload, dict):
        for key in ("url", "path"):
            value = payload.get(key)
            if isinstance(value, str) and value:
                return value
        for value in payload.values():
            found = _find_audio(value)
            if found:
                return found
    elif isinstance(payload, (list, tuple)):
        for value in payload:
            found = _find_audio(value)
            if found:
                return found
    elif isinstance(payload, str) and payload.startswith(("http://", "https://", "/file=")):
        return payload
    return None


def _parse_events(text):
    """Pull (event, data) pairs out of an SSE stream."""
    events, name, data = [], None, []
    for line in text.splitlines():
        if line.startswith("event:"):
            name = line[6:].strip()
        elif line.startswith("data:"):
            data.append(line[5:].strip())
        elif not line.strip():
            if name or data:
                events.append((name, "\n".join(data)))
            name, data = None, []
    if name or data:
        events.append((name, "\n".join(data)))
    return events


def _generate_space(lyrics, instructions, duration, seed):
    if not SPACE_ENDPOINT:
        raise gr.Error(
            "No endpoint configured. Set MUSIC3_SPACE_ENDPOINT to one of the endpoints "
            "listed in the status banner, and MUSIC3_SPACE_PARAMS to its parameter names."
        )
    try:
        mapping = json.loads(SPACE_PARAMS)
    except json.JSONDecodeError as exc:
        raise gr.Error(f"MUSIC3_SPACE_PARAMS is not valid JSON: {exc}")

    values = {"lyrics": lyrics, "caption": instructions, "duration": duration, "seed": seed}
    payload = {mapping[key]: value for key, value in values.items() if mapping.get(key)}

    try:
        started = requests.post(
            f"{SPACE_URL}/gradio_api/call/v2/{SPACE_ENDPOINT}",
            headers=_space_headers(),
            json=payload,
            timeout=60,
        )
    except requests.exceptions.RequestException as exc:
        raise gr.Error(f"Could not reach {SPACE_URL}: {exc}")
    if started.status_code != 200:
        raise gr.Error(f"Space returned HTTP {started.status_code}: {started.text[:400]}")

    try:
        event_id = started.json()["event_id"]
    except (ValueError, KeyError, TypeError):
        raise gr.Error(f"Space did not return an event_id: {started.text[:400]}")

    try:
        polled = requests.get(
            f"{SPACE_URL}/gradio_api/call/{SPACE_ENDPOINT}/{event_id}",
            headers=_space_headers(),
            timeout=REQUEST_TIMEOUT,
        )
    except requests.exceptions.Timeout:
        raise gr.Error(f"The Space did not finish within {REQUEST_TIMEOUT}s.")
    except requests.exceptions.RequestException as exc:
        raise gr.Error(f"Lost the connection while waiting on {SPACE_URL}: {exc}")
    if polled.status_code != 200:
        raise gr.Error(f"Polling returned HTTP {polled.status_code}: {polled.text[:400]}")

    result = None
    for name, data in _parse_events(polled.text):
        if name == "error":
            raise gr.Error(f"The Space reported an error: {data[:400] or 'no detail given'}")
        if name in ("complete", "generating") and data:
            try:
                result = json.loads(data)
            except json.JSONDecodeError:
                continue
    if result is None:
        raise gr.Error(f"No usable result in the Space's response: {polled.text[:400]}")

    location = _find_audio(result)
    if not location:
        raise gr.Error(f"No audio in the Space's result: {str(result)[:400]}")
    if location.startswith("/"):
        location = f"{SPACE_URL}/gradio_api/file={location.lstrip('/').removeprefix('file=')}"

    audio = requests.get(location, headers=_space_headers(), timeout=REQUEST_TIMEOUT)
    if audio.status_code != 200 or not audio.content:
        raise gr.Error(f"Could not download the generated audio from {location}")

    suffix = ".wav" if location.lower().endswith(".wav") else ".mp3"
    with tempfile.NamedTemporaryFile(suffix=suffix, delete=False) as handle:
        handle.write(audio.content)
        return handle.name


def _generate_server(lyrics, instructions, duration, seed):
    max_new_tokens = max(1, min(int(round(duration * FRAMES_PER_SECOND)), MAX_FRAMES))
    payload = {
        "model": MODEL,
        "input": lyrics,
        "instructions": instructions,
        "response_format": "wav",
        "seed": seed,
        "max_new_tokens": max_new_tokens,
        "stream": False,
    }

    try:
        response = requests.post(
            f"{BASE_URL}/audio/speech",
            headers=_headers(),
            json=payload,
            timeout=REQUEST_TIMEOUT,
        )
    except requests.exceptions.Timeout:
        raise gr.Error(
            f"The server did not answer within {REQUEST_TIMEOUT}s. Longer songs take longer — "
            "raise MUSIC3_TIMEOUT or ask for a shorter duration."
        )
    except requests.exceptions.RequestException as exc:
        raise gr.Error(f"Could not reach the MiniMax-Music3 server at {BASE_URL}: {exc}")

    if response.status_code != 200:
        raise gr.Error(f"Server returned HTTP {response.status_code}: {response.text[:500]}")
    if "json" in response.headers.get("content-type", "").lower():
        raise gr.Error(f"Expected audio but the server returned JSON: {response.text[:500]}")
    if not response.content:
        raise gr.Error("The server returned an empty response.")

    with tempfile.NamedTemporaryFile(suffix=".wav", delete=False) as handle:
        handle.write(response.content)
        return handle.name


def generate(lyrics, instructions, duration, seed, randomize_seed, steps, guidance, progress=gr.Progress()):
    lyrics = (lyrics or "").strip()
    instructions = (instructions or "").strip()

    # An empty lyrics box means an instrumental track: [instrumental] is one of the
    # model's own structure tags, so say so explicitly rather than sending nothing.
    if not lyrics:
        lyrics = INSTRUMENTAL_TAG
    if not instructions:
        raise gr.Error(
            "Describe the music. Name the vocal explicitly (e.g. 'warm female vocal') "
            "or the model may drift instrumental."
        )
    if len(lyrics) + len(instructions) > SOFT_PROMPT_CHAR_LIMIT:
        raise gr.Error(
            "That prompt is very long — the model caps the tokenized prompt at 5000 tokens. "
            "Try trimming the lyrics."
        )

    if randomize_seed:
        seed = random.randint(0, SEED_MAX)
    seed = int(seed)

    progress(0.1, desc=f"Generating up to {int(duration)}s of audio…")
    if BACKEND == "local":
        path = _generate_local(lyrics, instructions, duration, seed, steps, guidance)
    elif BACKEND == "space":
        path = _generate_space(lyrics, instructions, duration, seed)
    else:
        path = _generate_server(lyrics, instructions, duration, seed)

    progress(0.95, desc="Writing audio…")
    note = f" · instrumental (`{INSTRUMENTAL_TAG}`)" if lyrics == INSTRUMENTAL_TAG else ""
    return path, seed, f"Generated **{_describe(path)}** — seed `{seed}`{note}."


CAPTION_SKELETON = """Global Metadata
Basic Attributes: bpm is 92. key is G, and scale is major. Acoustic Pop.
Global Emotional Progression:
Sonics & Production Profile:
Vocal Details
Vocal Gender & Timbre:
Vocal Style:
Harmony/Backing Vocals:
Arrangement
Instrument Lifecycle Description (Primary/Secondary Layering):
Primary:
Secondary:
Groove & Foundation Progression:
Embellishments, Textures & Spatial FX:"""

EXAMPLES = [
    [
        "[verse]\nMorning light on the kitchen floor\nCoffee going cold beside the door\n"
        "I keep the radio low\nSo the quiet has somewhere to go\n"
        "[chorus]\nSoftly the world wakes up without me\nSoftly, and I let it be",
        "Global Metadata\n"
        "Basic Attributes: bpm is 92. key is G, and scale is major. Acoustic Pop / Singer-Songwriter.\n"
        "Global Emotional Progression: Opens hushed and unhurried, a private morning stillness. The chorus "
        "widens into warm resignation rather than release, and the final chorus settles back down into "
        "acceptance without ever raising its voice.\n"
        "Sonics & Production Profile: Clean and organic, favouring the natural timbre of wood and string. "
        "Moderately wide soundstage with the vocal centred and close; warm mid-focused balance, gentle "
        "dynamics, no aggressive compression.\n"
        "Vocal Details\n"
        "Vocal Gender & Timbre: Female lead, soft and breathy, with a light rasp on sustained notes.\n"
        "Vocal Style: Conversational and near-spoken in the verses, phrasing just behind the beat. The "
        "chorus lifts into sustained legato lines without added force.\n"
        "Harmony/Backing Vocals: Quiet thirds double the lead through the chorus only, mixed well under "
        "the lead to thicken rather than announce themselves.\n"
        "Arrangement\n"
        "Instrument Lifecycle Description (Primary/Secondary Layering):\n"
        "Primary: Fingerpicked steel-string acoustic guitar carries harmony and pulse from intro to outro, "
        "opening into loose strums at the chorus.\n"
        "Secondary: Upright bass enters at the end of the first verse; brushed drums join at the chorus and "
        "drop out for the final verse.\n"
        "Groove & Foundation Progression: Laid-back and lightly swung, driven by the guitar's picking hand. "
        "Energy lifts once at the chorus through bass movement and brushwork, then recedes.\n"
        "Embellishments, Textures & Spatial FX: Occasional guitar fills answer the vocal between phrases. "
        "A faint pad warms the second chorus without becoming audible as a synth.",
        45,
    ],
    [
        "[intro]\n[verse]\nNeon on the overpass, engine running low\n"
        "Every exit looks the same at four in the morning glow\n"
        "[chorus]\nDrive until the signal drops\nDrive until the city stops",
        "Global Metadata\n"
        "Basic Attributes: bpm is 110. key is A, and scale is minor. Synthwave / Cinematic Electronic.\n"
        "Global Emotional Progression: Begins suspended and weightless, then locks into relentless forward "
        "motion at the first verse. The chorus opens the horizon wide; the outro thins back to the opening "
        "pulse, unresolved.\n"
        "Sonics & Production Profile: Analog-leaning and deliberately hazy, with saturated tape colour on "
        "the top end. Very wide stereo field, deep reverb tails, strong low-mid weight.\n"
        "Vocal Details\n"
        "Vocal Gender & Timbre: Male lead, breathy and mid-register, sitting slightly back in the mix.\n"
        "Vocal Style: Restrained and steady in the verses, almost deadpan. The chorus doubles the line an "
        "octave up and lets it stretch across the bar.\n"
        "Harmony/Backing Vocals: Wide unison doubles in the chorus only, panned hard and drenched in the "
        "same plate as the lead.\n"
        "Arrangement\n"
        "Instrument Lifecycle Description (Primary/Secondary Layering):\n"
        "Primary: Analog bass arpeggio runs unbroken from the intro, driving the whole track and dropping "
        "only for the final bar.\n"
        "Secondary: Gated-reverb drums enter at the verse; wide pad layers bloom at the chorus; a single "
        "lead synth line answers the vocal from the second chorus onward.\n"
        "Groove & Foundation Progression: Straight, machine-locked and insistent, with the arpeggio "
        "supplying all forward motion. The chorus adds weight rather than speed.\n"
        "Embellishments, Textures & Spatial FX: Tape delay throws on the ends of vocal phrases. Filtered "
        "noise sweeps mark each section transition.",
        60,
    ],
    [
        "[verse]\nI counted every stair up to your door\nSaid I wouldn't come back anymore\n"
        "[bridge]\nBut the lock still knows my hand\n"
        "[chorus]\nSome doors don't forget you\nSome doors never do",
        "Global Metadata\n"
        "Basic Attributes: bpm is 68. key is E-flat, and scale is major. Soul Ballad / Gospel-Inflected.\n"
        "Global Emotional Progression: Aching and patient from the first bar, holding back deliberately "
        "through the verses. The bridge cracks the restraint open and the final chorus arrives full and "
        "unguarded.\n"
        "Sonics & Production Profile: Warm, roomy and analog, with audible air around the kit. Natural "
        "dynamics preserved so the final chorus genuinely lands louder than the first.\n"
        "Vocal Details\n"
        "Vocal Gender & Timbre: Female lead, rich and full-bodied, with gospel phrasing and a controlled "
        "break at the top of the register.\n"
        "Vocal Style: Restrained and behind the beat in the verses, opening into melisma and sustained "
        "belted lines by the final chorus.\n"
        "Harmony/Backing Vocals: Stacked four-part backing vocals answer the lead in the chorus and carry "
        "the bridge almost alone.\n"
        "Arrangement\n"
        "Instrument Lifecycle Description (Primary/Secondary Layering):\n"
        "Primary: Rhodes piano holds the harmony throughout, sparse in the verses and fuller in the "
        "choruses.\n"
        "Secondary: Upright bass and a soft kit with rimshots enter at the first chorus; a restrained "
        "string pad joins for the bridge and stays to the end.\n"
        "Groove & Foundation Progression: Slow, deep and unhurried, with the kit playing well behind the "
        "beat. Energy builds by accumulation rather than tempo.\n"
        "Embellishments, Textures & Spatial FX: Rhodes fills answer vocal phrases in the verses. Plate "
        "reverb on the backing stack widens the chorus against the dry, close lead.",
        50,
    ],
]

with gr.Blocks(title="MiniMax-Music3") as demo:
    gr.Markdown(
        """
        # 🎵 MiniMax-Music3

        Generate complete songs — vocals, arrangement and production in one pass — with
        [MiniMaxAI/MiniMax-Music3](https://huggingface.co/MiniMaxAI/MiniMax-Music3),
        an open-weights model that pairs an 8B Qwen3 autoregressive stage with a 2.4B
        flow-matching transformer and a DAC-style vocoder.

        Write the **lyrics** and describe the **music**. Three rules carry most of the quality:
        structure tags (`[verse]`, `[chorus]`, `[bridge]`) each need their own line; the
        description should name the vocal explicitly or the model may drift instrumental; and
        the description works best as a **structured caption** — `Global Metadata`,
        `Vocal Details`, `Arrangement`, roughly 250–450 words. Load an example to see the shape.
        """
    )

    status = gr.Markdown(backend_status())

    with gr.Row():
        with gr.Column(scale=3):
            lyrics = gr.Textbox(
                label="Lyrics",
                placeholder="[verse]\nYour opening line here…\n\n[chorus]\nThe hook…",
                lines=12,
                info=f"Leave empty for an instrumental track — `{INSTRUMENTAL_TAG}` is sent instead.",
            )
            instructions = gr.Textbox(
                label="Music description (structured caption)",
                placeholder=CAPTION_SKELETON,
                lines=14,
            )
            skeleton_button = gr.Button("Insert caption skeleton", size="sm")

        with gr.Column(scale=2):
            duration = gr.Slider(
                label="Maximum length (seconds)",
                minimum=15,
                maximum=MAX_DURATION,
                value=45,
                step=5,
                info=f"Upper bound — the model may stop earlier. {FRAMES_PER_SECOND} frames/s, cap {MAX_FRAMES}.",
            )
            with gr.Row():
                seed = gr.Number(label="Seed", value=7, precision=0, minimum=0, maximum=SEED_MAX)
                randomize_seed = gr.Checkbox(label="Randomize", value=True)
            generate_button = gr.Button("Generate", variant="primary", size="lg")

            with gr.Accordion("Advanced", open=False):
                steps = gr.Slider(
                    label="Flow-matching steps",
                    minimum=10,
                    maximum=60,
                    value=DEFAULT_INFERENCE_STEPS,
                    step=1,
                )
                guidance = gr.Slider(
                    label="Guidance scale",
                    minimum=1.0,
                    maximum=4.0,
                    value=DEFAULT_GUIDANCE,
                    step=0.1,
                )
                gr.Markdown(
                    "<sub>Both apply to the local backend only — the server exposes neither.</sub>"
                )

    audio = gr.Audio(label="Result", type="filepath")
    result_info = gr.Markdown()

    gr.Examples(examples=EXAMPLES, inputs=[lyrics, instructions, duration], label="Examples")

    with gr.Accordion("Backend", open=False):
        gr.Markdown(
            f"""
            Running the **`{BACKEND}`** backend.

            - **`server`** — posts to `{BASE_URL}/audio/speech` with model `{MODEL}`. Start it with
              `sgl-omni serve --model-path MiniMaxAI/MiniMax-Music3 --port 8000`, then set
              `MUSIC3_BASE_URL`. Output is resampled to 32 kHz by the server.
            - **`local`** — loads `{MODEL_REPO}` through the diffusers modular pipeline and returns
              the vocoder's native 44.1 kHz stereo. Needs a CUDA GPU (~23 GB VRAM in bfloat16,
              ~8 GB with group offloading) and diffusers from main.
            """
        )
        refresh = gr.Button("Test connection")
        refresh.click(fn=backend_status, outputs=status)

    skeleton_button.click(fn=lambda: CAPTION_SKELETON, outputs=instructions)

    generate_button.click(
        fn=generate,
        inputs=[lyrics, instructions, duration, seed, randomize_seed, steps, guidance],
        outputs=[audio, seed, result_info],
    )

if __name__ == "__main__":
    demo.queue(max_size=20).launch(theme=gr.themes.Soft())
