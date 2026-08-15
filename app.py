"""Gradio demo for MiniMax-Music3.

The model is served by SGLang-Omni, which exposes an OpenAI-compatible
`/v1/audio/speech` endpoint. This app is the client for that endpoint, so the
Space itself stays light and the weights live wherever you run the backend:

    hf download MiniMaxAI/MiniMax-Music3 --local-dir /path/to/minimax_ttm
    sgl-omni serve --model-path MiniMaxAI/MiniMax-Music3 --port 8000

Point the app at that server with MUSIC3_BASE_URL (see README.md).
"""

import os
import random
import tempfile

import gradio as gr
import requests

BASE_URL = os.environ.get("MUSIC3_BASE_URL", "http://127.0.0.1:8000/v1").rstrip("/")
API_KEY = os.environ.get("MUSIC3_API_KEY", "")
MODEL = os.environ.get("MUSIC3_MODEL", "minimax_ttm")
REQUEST_TIMEOUT = int(os.environ.get("MUSIC3_TIMEOUT", "900"))

# The server generates acoustic frames: 9000 frames is the documented ceiling
# and corresponds to roughly five minutes of audio.
FRAMES_PER_SECOND = 30
MAX_NEW_TOKENS = 9000
MAX_DURATION = MAX_NEW_TOKENS // FRAMES_PER_SECOND
SEED_MAX = 2**31 - 1

# The server caps the tokenized prompt at 5000 tokens. We can't tokenize here,
# so this is a generous character-level guard that only warns.
SOFT_PROMPT_CHAR_LIMIT = 12000


def _headers():
    headers = {"Content-Type": "application/json"}
    if API_KEY:
        headers["Authorization"] = f"Bearer {API_KEY}"
    return headers


def backend_status() -> str:
    """Probe the configured server so the UI can say what's wrong up front."""
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


def generate(lyrics, instructions, duration, seed, randomize_seed, progress=gr.Progress()):
    lyrics = (lyrics or "").strip()
    instructions = (instructions or "").strip()

    if not lyrics:
        raise gr.Error("Write some lyrics. Section tags like [Verse] and [Chorus] shape the arrangement.")
    if not instructions:
        raise gr.Error("Describe the style, e.g. 'A warm acoustic pop song with brushed drums'.")
    if len(lyrics) + len(instructions) > SOFT_PROMPT_CHAR_LIMIT:
        raise gr.Error(
            "That prompt is very long — the server caps the tokenized prompt at 5000 tokens. "
            "Try trimming the lyrics."
        )

    if randomize_seed:
        seed = random.randint(0, SEED_MAX)
    seed = int(seed)

    max_new_tokens = max(1, min(int(round(duration * FRAMES_PER_SECOND)), MAX_NEW_TOKENS))
    payload = {
        "model": MODEL,
        "input": lyrics,
        "instructions": instructions,
        "response_format": "wav",
        "seed": seed,
        "max_new_tokens": max_new_tokens,
        "stream": False,
    }

    progress(0.1, desc=f"Generating ~{int(duration)}s of audio…")
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

    progress(0.9, desc="Writing audio…")
    with tempfile.NamedTemporaryFile(suffix=".wav", delete=False) as handle:
        handle.write(response.content)
        audio_path = handle.name

    summary = (
        f"Generated **{len(response.content) / 1_000_000:.1f} MB** of 32 kHz stereo WAV "
        f"— seed `{seed}`, `max_new_tokens={max_new_tokens}`."
    )
    return audio_path, seed, summary


EXAMPLES = [
    [
        "[Verse]\nMorning light on the kitchen floor\nCoffee going cold by the door\n"
        "I keep the radio low\nSo the quiet has somewhere to go\n\n"
        "[Chorus]\nSoftly the world wakes up without me\nSoftly, and I let it be",
        "A warm acoustic pop song, fingerpicked guitar, brushed drums, close female vocal, 92 BPM",
        45,
    ],
    [
        "[Intro]\n\n[Verse]\nNeon on the overpass, engine running low\n"
        "Every exit looks the same at four in the morning glow\n\n"
        "[Chorus]\nDrive until the signal drops\nDrive until the city stops",
        "Synthwave with analog bass, gated reverb drums, male vocal, driving and cinematic, 110 BPM",
        60,
    ],
    [
        "[Verse]\nI counted every stair up to your door\n"
        "Said I wouldn't come back here anymore\n\n"
        "[Bridge]\nBut the lock still knows my hand\n\n"
        "[Chorus]\nSome doors don't forget you\nSome doors never do",
        "Slow soul ballad, Rhodes piano, upright bass, gospel-tinged backing vocals, 68 BPM",
        50,
    ],
]

with gr.Blocks(title="MiniMax-Music3") as demo:
    gr.Markdown(
        """
        # 🎵 MiniMax-Music3

        Generate complete songs — vocals, arrangement and production in one pass — with
        [MiniMaxAI/MiniMax-Music3](https://huggingface.co/MiniMaxAI/MiniMax-Music3),
        an open-weights text-to-music model. Output is 32 kHz stereo, up to five minutes.

        Write the **lyrics** (section tags like `[Verse]`, `[Chorus]`, `[Bridge]` shape the
        structure) and describe the **style** you want, then hit Generate.
        """
    )

    status = gr.Markdown(backend_status())

    with gr.Row():
        with gr.Column(scale=3):
            lyrics = gr.Textbox(
                label="Lyrics",
                placeholder="[Verse]\nYour opening line here…\n\n[Chorus]\nThe hook…",
                lines=12,
            )
            instructions = gr.Textbox(
                label="Style",
                placeholder="A warm acoustic pop song, brushed drums, close female vocal, 92 BPM",
                lines=2,
            )

        with gr.Column(scale=2):
            duration = gr.Slider(
                label="Approximate length (seconds)",
                minimum=15,
                maximum=MAX_DURATION,
                value=45,
                step=5,
                info=f"Mapped to max_new_tokens at ~{FRAMES_PER_SECOND} frames/s (cap {MAX_NEW_TOKENS}).",
            )
            with gr.Row():
                seed = gr.Number(label="Seed", value=7, precision=0, minimum=0, maximum=SEED_MAX)
                randomize_seed = gr.Checkbox(label="Randomize", value=True)
            generate_button = gr.Button("Generate", variant="primary", size="lg")

    audio = gr.Audio(label="Result", type="filepath")
    result_info = gr.Markdown()

    gr.Examples(examples=EXAMPLES, inputs=[lyrics, instructions, duration], label="Examples")

    with gr.Accordion("Backend", open=False):
        gr.Markdown(
            f"""
            This Space is a client. It posts to `{BASE_URL}/audio/speech` with model `{MODEL}`.

            Run the weights yourself:

            ```bash
            hf download MiniMaxAI/MiniMax-Music3 --local-dir ./minimax_ttm
            sgl-omni serve --model-path MiniMaxAI/MiniMax-Music3 --port 8000
            ```

            Then set `MUSIC3_BASE_URL` (and `MUSIC3_API_KEY` if your server needs one).
            Inference wants two CUDA GPUs — GPU 0 runs Qwen3 and RVQ generation, GPU 1 runs
            Flow Matching and waveform decoding.
            """
        )
        refresh = gr.Button("Test connection")
        refresh.click(fn=backend_status, outputs=status)

    generate_button.click(
        fn=generate,
        inputs=[lyrics, instructions, duration, seed, randomize_seed],
        outputs=[audio, seed, result_info],
    )

if __name__ == "__main__":
    demo.queue(max_size=20).launch(theme=gr.themes.Soft())
