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
an open-weights model that generates complete songs — vocals, arrangement and production —
from lyrics plus a music description.

An 8B Qwen3 autoregressive stage predicts one semantic audio token per frame while a depth
decoder fills seven residual RVQ codebooks; their fused hidden states condition a 2.4B
flow-matching transformer that produces Flow-VAE latents in overlapping chunks, and a
DAC-style vocoder decodes them to 44.1 kHz stereo.

## Writing good input

Two rules carry most of the quality:

- **Structure tags each need their own line.** `[intro]`, `[verse]`, `[pre-chorus]`,
  `[chorus]`, `[bridge]`, `[instrumental]`, `[solo]`, `[outro]`. Text on the same line as a
  leading tag is dropped by the model's input contract.
- **Name the vocal explicitly** in the description (e.g. "warm female vocal") or the model
  may drift instrumental.

For fine-grained control, structure the description as global metadata (genre, BPM, key,
emotional progression), then vocal details, then arrangement:

```
Genre: acoustic pop. BPM: 92. Key: G major. Warm and intimate, blooming into the chorus.
Vocals: soft female lead, close and breathy, light harmonies in the chorus.
Arrangement: fingerpicked guitar and upright bass; brushed drums enter at the chorus.
```

## Two backends

Select with `MUSIC3_BACKEND`.

### `server` (default)

Posts to an SGLang-Omni server over its OpenAI-compatible `/v1/audio/speech` endpoint. The
Space stays on CPU hardware and the weights live wherever you have GPUs.

```bash
hf download MiniMaxAI/MiniMax-Music3 --local-dir ./minimax_ttm
sgl-omni serve --model-path MiniMaxAI/MiniMax-Music3 --port 8000
```

GPU 0 runs Qwen3 and the RVQ generation; GPU 1 runs flow matching and waveform decoding.
This path returns **32 kHz** — the reference server resamples the vocoder output.

### `local`

Loads the weights in-process through the diffusers modular pipeline and returns the
vocoder's native **44.1 kHz** stereo. Needs a CUDA GPU and
`pip install -r requirements-local.txt`.

The pipeline is not in a tagged diffusers release yet, so diffusers must come from `main`.

| | VRAM |
| --- | --- |
| Full pipeline, bfloat16 | ~23 GB |
| With automatic CPU offloading | ~22 GB |
| Additionally group-offloading the language model | ~8 GB |

The reference usage, for running it outside this Space:

```py
import soundfile as sf
import torch
from diffusers import ModularPipeline

pipe = ModularPipeline.from_pretrained("MiniMaxAI/MiniMax-Music3")
pipe.load_components(dtype=torch.bfloat16)
pipe.to("cuda")

lyrics = """[verse]
Morning light filtering through the pine
[chorus]
Softly the world begins to breathe"""

audio = pipe(
    prompt="Genre: acoustic pop. BPM: 96. Vocals: soft female lead, close and breathy.",
    lyrics=lyrics,
    audio_duration=60.0,
    generator=torch.Generator("cuda").manual_seed(7),
    output="audios",
)[0]

sf.write("minimax_music3.wav", audio.T, pipe.sampling_rate)
```

Note the shape of this API: it is `ModularPipeline`, not `DiffusionPipeline`; the output is
selected with `output="audios"` and is a waveform of shape `(channels, samples)`, not
`.images[0]`; and `prompt` is the *music description* while the words to sing go in the
separate `lyrics` argument.

## Configuration

Set these as Space variables (or secrets, for the key):

| Variable | Default | Purpose |
| --- | --- | --- |
| `MUSIC3_BACKEND` | `server` | `server` or `local` |
| `MUSIC3_BASE_URL` | `http://127.0.0.1:8000/v1` | SGLang-Omni base URL (server backend) |
| `MUSIC3_API_KEY` | *(empty)* | Sent as `Authorization: Bearer …` if set |
| `MUSIC3_MODEL` | `minimax_ttm` | Model name the server serves |
| `MUSIC3_TIMEOUT` | `900` | Request timeout in seconds |
| `MUSIC3_REPO` | `MiniMaxAI/MiniMax-Music3` | Repo id (local backend) |

The app shows a status banner at the top and a **Test connection** button under the
*Backend* accordion, so a misconfigured setup is obvious rather than silent.

## Generation parameters

- **Length** is an upper bound, not a target — the language model may end the song earlier
  with a stop token. The autoregressive stage runs at **25 frames per second** and is capped
  at 9000 frames, so the slider tops out at 360 s. On the server backend the slider maps to
  `max_new_tokens`; on the local backend it maps to `audio_duration`.
- **Seed** is fixed for reproducible results, or randomized per run.
- **Flow-matching steps** (default 30) and **guidance scale** (reference value 1.7) apply to
  the local backend only; the server exposes neither.
- The tokenized prompt is capped at 5000 tokens; the app guards against obviously oversized
  input before sending.

## Local development

```bash
pip install gradio requests
MUSIC3_BASE_URL=http://127.0.0.1:8000/v1 python app.py
```

## License

The demo code here is yours to reuse. MiniMax-Music3's own weights are covered by the
license in the [model repository](https://huggingface.co/MiniMaxAI/MiniMax-Music3) —
check it before any production or commercial use.
