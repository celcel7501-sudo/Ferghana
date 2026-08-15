"""Gradio demo for MiniMax-Music3.

Two backends, selected with MUSIC3_BACKEND:

  "server" (default) — post to an SGLang-Omni server's OpenAI-compatible
      /v1/audio/speech endpoint. Keeps the Space on CPU hardware; the server
      resamples the vocoder output to 32 kHz.

          sgl-omni serve --model-path MiniMaxAI/MiniMax-Music3 --port 8000

  "local" — run the weights in-process with the diffusers modular pipeline,
      which returns the vocoder's native 44.1 kHz stereo. Needs a CUDA GPU
      (~23 GB VRAM in bfloat16) and diffusers from main.

See README.md for configuration.
"""

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

    if not lyrics:
        raise gr.Error("Write some lyrics. Structure tags like [verse] and [chorus] each need their own line.")
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
    else:
        path = _generate_server(lyrics, instructions, duration, seed)

    progress(0.95, desc="Writing audio…")
    return path, seed, f"Generated **{_describe(path)}** — seed `{seed}`."


EXAMPLES = [
    [
        "[verse]\nMorning light on the kitchen floor\nCoffee going cold beside the door\n"
        "I keep the radio low\nSo the quiet has somewhere to go\n"
        "[chorus]\nSoftly the world wakes up without me\nSoftly, and I let it be",
        "Genre: acoustic pop. BPM: 92. Key: G major. Warm and intimate, opening sparse and blooming into "
        "the chorus. Vocals: soft female lead, close and breathy, light harmonies in the chorus. "
        "Arrangement: fingerpicked guitar and upright bass; brushed drums enter at the chorus.",
        45,
    ],
    [
        "[intro]\n[verse]\nNeon on the overpass, engine running low\n"
        "Every exit looks the same at four in the morning glow\n"
        "[chorus]\nDrive until the signal drops\nDrive until the city stops",
        "Genre: synthwave. BPM: 110. Key: A minor. Driving and cinematic, relentless forward motion. "
        "Vocals: male lead, breathy and reverb-soaked, doubled in the chorus. "
        "Arrangement: analog bass arpeggio, gated reverb drums, wide pad layers, tape delay on the vocal.",
        60,
    ],
    [
        "[verse]\nI counted every stair up to your door\nSaid I wouldn't come back anymore\n"
        "[bridge]\nBut the lock still knows my hand\n"
        "[chorus]\nSome doors don't forget you\nSome doors never do",
        "Genre: soul ballad. BPM: 68. Key: E-flat major. Aching and patient, swelling in the final chorus. "
        "Vocals: rich female lead with gospel phrasing, stacked backing vocals in the chorus. "
        "Arrangement: Rhodes piano, upright bass, soft kit with rimshots, restrained string pad.",
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

        Write the **lyrics** and describe the **music**. Two rules carry most of the quality:
        structure tags (`[verse]`, `[chorus]`, `[bridge]`) each need their own line, and the
        description should name the vocal explicitly or the model may drift instrumental.
        """
    )

    status = gr.Markdown(backend_status())

    with gr.Row():
        with gr.Column(scale=3):
            lyrics = gr.Textbox(
                label="Lyrics",
                placeholder="[verse]\nYour opening line here…\n\n[chorus]\nThe hook…",
                lines=12,
            )
            instructions = gr.Textbox(
                label="Music description",
                placeholder=(
                    "Genre: acoustic pop. BPM: 92. Key: G major. Warm and intimate. "
                    "Vocals: soft female lead, close and breathy. "
                    "Arrangement: fingerpicked guitar, upright bass, brushed drums."
                ),
                lines=4,
            )

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

    generate_button.click(
        fn=generate,
        inputs=[lyrics, instructions, duration, seed, randomize_seed, steps, guidance],
        outputs=[audio, seed, result_info],
    )

if __name__ == "__main__":
    demo.queue(max_size=20).launch(theme=gr.themes.Soft())
