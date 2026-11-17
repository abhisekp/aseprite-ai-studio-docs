# Quality and automated delivery

## Acceptance criteria

- A Windows x64 executable opens the studio without a separately installed Node runtime.
- The renderer has no Node integration; it uses context isolation and process sandboxing.
- Only the studio’s loopback origin is allowed in the desktop window. New windows and permission requests are denied by default.
- Artwork, pairing and user profiles are writable outside the installed application.
- Help opens the offline GDD and workflows, including working navigation and search.
- Still and animation exports retain dimensions, pixels, timing and tags. Model motion quality is assessed separately.
- Existing projects and prior assets are preserved.

## Pipeline

The private repository’s desktop workflow runs on relevant pushes and manual dispatches. It installs the lockfile, checks formatting/types/tests, builds the UI and VitePress site, obtains the pinned verified personal Aseprite package, creates Windows desktop downloads and runs the packaged-app smoke test. Artifacts include installer/portable files, checksums, handbook and smoke-test evidence.

No API keys, pairing credentials, personal artwork or model weights belong in Git. Release creation is a separate manually dispatched **draft** step after reviewing a successful build. Publishing a desktop release requires an owner decision.

The canonical GDD and workflow handbook are public in [aseprite-ai-studio-docs](https://github.com/abhisekp/aseprite-ai-studio-docs). GitHub Actions builds and publishes that repository to GitHub Pages on main-branch changes. The desktop app includes a versioned offline snapshot. Public documentation excludes application credentials, private artwork, model weights, editor binaries and private downloads.

## Verification boundaries

Provider contract tests are not successful paid API calls. Native Aseprite batch verification is not complete GUI coverage. SDK MCP calls are distinct from a separate desktop chat invoking tools. An executable that starts correctly is not proof of model quality, universal Windows compatibility or a completed security audit.

Versioned verification notes record performed tests and remaining gaps. Runtime dependencies are audited separately from build tools; any unresolved build-tool advisory must be documented rather than described as a clean full audit.

## Next quality milestone

Evaluate a dedicated animation model/provider using a fixed acceptance set: idle, four-direction walk, jump plus cross-body sword draw, and a short attack. Measure identity drift, pose/direction correctness, temporal stability, rejected-frame rate, elapsed generation time and cost. Approve a provider only after inspecting actual outputs and its model/output license. No paid benchmark or new model download is authorized automatically by this document.
