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

### The structured caption

The description is not a one-liner. MiniMax ships a `music-caption-rewriter` agent skill in
[its GitHub repo](https://github.com/MiniMax-AI/MiniMax-Music3/tree/main/skills), whose output
contract is the format the model was built around: exactly three top-level sections, roughly
250–450 words, no title and no lyric text.

```
Global Metadata
Basic Attributes: bpm is 92. key is G, and scale is major. Acoustic Pop.
Global Emotional Progression: …
Sonics & Production Profile: …
Vocal Details
Vocal Gender & Timbre: …
Vocal Style: …
Harmony/Backing Vocals: …
Arrangement
Instrument Lifecycle Description (Primary/Secondary Layering):
Primary: …
Secondary: …
Groove & Foundation Progression: …
Embellishments, Textures & Spatial FX: …
```

The **Insert caption skeleton** button in the app fills this in, and each bundled example is a
complete caption in the format. Guidance worth knowing from the skill's contract:

- Describe concrete musical changes over sections — what enters, exits, and intensifies —
  rather than listing gear or stacking production adjectives.
- Give an exact BPM or key only when you actually mean it; a range or a qualitative tempo is
  better than a fabricated number.
- Don't put lyric text, a song title, or a track ID in the caption.
- The skill ships 1000 reference captions across 20 genre families if you want worked examples
  of the format.

## Three backends

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

### `space`

Calls another Gradio Space over its `/gradio_api`. No GPU, no weights, no server of
your own — but you are a guest on someone else's hardware, subject to their queue and
their uptime.

The endpoint and its parameter names are **configured, not guessed**. Leave
`MUSIC3_SPACE_ENDPOINT` unset and the status banner lists what the target Space actually
exposes, with each endpoint's real parameter names:

```
⚠️ Connected to https://…hf.space, but no endpoint selected. Set MUSIC3_SPACE_ENDPOINT
   to one of these and map its parameters with MUSIC3_SPACE_PARAMS:

   - /generate_music (prompt, lyrics, audio_duration, seed)
   - /rewrite_caption (text)
```

Then set the endpoint and map this app's four fields onto its parameters:

```bash
MUSIC3_SPACE_ENDPOINT=generate_music
MUSIC3_SPACE_PARAMS='{"lyrics":"lyrics","caption":"prompt","duration":"audio_duration","seed":"seed"}'
```

A field mapped to an empty name is not sent. The protocol implemented is the standard
Gradio one: `POST /gradio_api/call/v2/{endpoint}` with named parameters returns an
`event_id`; `GET /gradio_api/call/{endpoint}/{event_id}` streams server-sent events until
`complete`; the audio is downloaded from the `FileData` in the result. `HF_TOKEN` is sent
as a bearer token when set.

File *inputs* are not implemented — this demo sends only text, so it never needs
`POST /gradio_api/upload`.

## Configuration

Set these as Space variables (or secrets, for the key):

| Variable | Default | Purpose |
| --- | --- | --- |
| `MUSIC3_BACKEND` | `server` | `server`, `local` or `space` |
| `MUSIC3_BASE_URL` | `http://127.0.0.1:8000/v1` | SGLang-Omni base URL (server backend) |
| `MUSIC3_API_KEY` | *(empty)* | Sent as `Authorization: Bearer …` if set |
| `MUSIC3_MODEL` | `minimax_ttm` | Model name the server serves |
| `MUSIC3_TIMEOUT` | `900` | Request timeout in seconds |
| `MUSIC3_REPO` | `MiniMaxAI/MiniMax-Music3` | Repo id (local backend) |
| `MUSIC3_SPACE_URL` | `https://minimaxai-minimax-music3-workflow.hf.space` | Target Space (space backend) |
| `MUSIC3_SPACE_ENDPOINT` | *(empty)* | Named endpoint to call; unset lists the options |
| `MUSIC3_SPACE_PARAMS` | *(see above)* | JSON mapping our fields to its parameter names |
| `HF_TOKEN` | *(empty)* | Bearer token for gated or rate-limited Spaces |

The app shows a status banner at the top and a **Test connection** button under the
*Backend* accordion, so a misconfigured setup is obvious rather than silent.

## Generation parameters

- **Length** is an upper bound, not a target — the language model may end the song earlier
  with a stop token. The autoregressive stage runs at **25 frames per second** and is capped
  at 9000 frames, so the slider tops out at 360 s. On the server backend the slider maps to
  `max_new_tokens`; on the local backend it maps to `audio_duration`.
- **Seed** is fixed for reproducible results, or randomized per run.
- **Output format** is WAV or MP3. MP3 is encoded in-process with `lameenc` from
  whatever WAV the backend returned, rather than requested from the backend: every
  backend is known to return WAV, while `response_format: "mp3"` is undocumented for the
  reference server. That also makes the format work identically on all three backends.
  `MUSIC3_MP3_BITRATE` sets the rate, default 192 kbps. Expect roughly a 5x size
  reduction; the result line reports the source audio's real rate and duration, read
  from the WAV header before encoding.
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
