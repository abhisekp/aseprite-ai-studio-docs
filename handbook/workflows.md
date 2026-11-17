# Creation workflows

## Still image

1. Keep ComfyUI running at `127.0.0.1:8188` for local image generation.
2. Choose a listed model, describe the subject and select size/style/palette.
3. Generate and inspect the original alongside the processed pixel result.
4. Refine using a still reference or adjust the grid/palette without losing the previous asset.
5. Export PNG or a native Aseprite file; alternatively open a new document in the paired editor.

Sizes include 512×512 and **1024×1024**. The ComfyUI workflow renders a 1024 latent when requested rather than only enlarging a 512 output. Model suitability still matters. Ollama’s bounded shape drawing is limited to 256px; use an image engine for larger art.

## Animation

Select a still reference, enable Generate animation, then choose state(s), direction(s), frames and FPS. At 1024px use no more than eight total frames. A two-state/two-direction job with four frames per clip has sixteen frames and is too large at 1024px.

Inspect every clip with the custom selector and frame slider. Check transition boundaries and direction correctness. Download the PNG sheet, JSON metadata and/or tagged `.aseprite` timeline. JSON ranges are zero-based and inclusive; Aseprite frame numbers are one-based.

## Optional cloud images

Connections → Optional cloud models accepts owner-provided OpenAI or Gemini API keys. Keys entered there remain in server memory for the session. Each generation needs cloud consent and may incur provider charges. No live cloud adapter test is implied by a configured key. Claude API BYOK is not currently implemented.

## Failure and recovery

| Situation | Recovery |
|---|---|
| Model list is empty | Start the corresponding local engine, then Refresh |
| Model output is flat/empty | Select a stronger model or image engine; do not accept the result as complete |
| Native editor is disconnected | Open its AI Studio panel and Connect |
| Import timed out | Inspect the editor before retrying; the outcome may be unknown |
| Large animation exceeds budget | Reduce frames/states/directions, size, or split into separate jobs |
| No disk headroom | Archive/export manually; the app does not silently erase artwork |

Background cleanup is a light-color edge flood fill, not semantic AI masking. Review white details and disable cleanup if it removes wanted content.
