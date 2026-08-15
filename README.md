---
title: MiniMax Music3
emoji: 🎵
colorFrom: purple
colorTo: indigo
sdk: gradio
sdk_version: 6.24.0
app_file: app.py
pinned: false
short_description: Generate complete songs with MiniMax-Music3
---

# MiniMax-Music3 demo

A Gradio demo for [MiniMaxAI/MiniMax-Music3](https://huggingface.co/MiniMaxAI/MiniMax-Music3),
an open-weights text-to-music model that generates complete songs — vocals, arrangement and
production — in a single pass. Output is 32 kHz stereo, up to about five minutes.

You give it two things:

- **Lyrics**, optionally with section tags (`[Verse]`, `[Chorus]`, `[Bridge]`, `[Intro]`)
  that shape the song's structure.
- **Style instructions**, a free-text description like
  `A warm acoustic pop song, brushed drums, close female vocal, 92 BPM`.

## Architecture

This Space is a **client**, not a host. MiniMax-Music3 is ~11B parameters, the repo is
around 57 GB, and the reference implementation splits inference across two CUDA GPUs, so
running the weights inside a small Space is not realistic. Instead the app talks to an
SGLang-Omni server over its OpenAI-compatible `/v1/audio/speech` endpoint:

```
Gradio (this Space)  ──POST /v1/audio/speech──▶  sgl-omni serving MiniMax-Music3
                     ◀────── 32 kHz WAV ───────
```

That keeps the Space on CPU-basic hardware and lets the weights live wherever you have the
GPUs — your own machine, a dedicated server, or an HF Inference Endpoint.

## Running the backend

```bash
hf download MiniMaxAI/MiniMax-Music3 --local-dir ./minimax_ttm
sgl-omni serve --model-path MiniMaxAI/MiniMax-Music3 --port 8000
```

GPU 0 runs Qwen3 and the eight-codebook RVQ autoregressive generation; GPU 1 runs Flow
Matching and DAV waveform decoding. The model card lists 24 GB+ of VRAM at full precision,
about 22 GB with CPU offloading, and a path down to 8 GB with layer-by-layer streaming.

Verify it directly before pointing the Space at it:

```bash
curl http://127.0.0.1:8000/v1/audio/speech \
  -H 'Content-Type: application/json' \
  -d '{
    "model": "minimax_ttm",
    "input": "[Verse]\nMorning light...\n[Chorus]\nSoftly the world...",
    "instructions": "A warm acoustic pop song...",
    "response_format": "wav",
    "seed": 7,
    "max_new_tokens": 9000,
    "stream": false
  }' --output song.wav
```

## Configuration

Set these as Space variables (or secrets, for the key):

| Variable | Default | Purpose |
| --- | --- | --- |
| `MUSIC3_BASE_URL` | `http://127.0.0.1:8000/v1` | Base URL of the SGLang-Omni server |
| `MUSIC3_API_KEY` | *(empty)* | Sent as `Authorization: Bearer …` if set |
| `MUSIC3_MODEL` | `minimax_ttm` | Model name the server serves |
| `MUSIC3_TIMEOUT` | `900` | Request timeout in seconds |

The app shows a connection banner at the top and has a **Test connection** button under
the *Backend* accordion, so a misconfigured URL is obvious rather than silent.

## Generation parameters

- **Length** — the slider maps to `max_new_tokens` at roughly 30 acoustic frames per
  second. The documented ceiling is 9000 frames, about five minutes.
- **Seed** — fixed for reproducible results, or randomized per run.
- The server caps the tokenized prompt at 5000 tokens; the app guards against
  obviously oversized prompts before sending.

## Local development

```bash
pip install gradio requests
MUSIC3_BASE_URL=http://127.0.0.1:8000/v1 python app.py
```

## License

The demo code here is yours to reuse. MiniMax-Music3's own weights are covered by the
license in the [model repository](https://huggingface.co/MiniMaxAI/MiniMax-Music3) —
check it before any production or commercial use.
