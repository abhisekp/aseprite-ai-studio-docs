# Desktop application and MCP

## Windows app

The Windows x64 build includes Electron’s runtime, the studio service/UI, this offline handbook and the verified personal Aseprite build. Node.js is not required separately. ComfyUI, Ollama and their model weights remain separate applications; they are not silently downloaded or installed.

The installer is per-user and the executable is unsigned. Keep the application source repository and bundled Aseprite downloads private. The separate documentation repository is public. Upstream Aseprite’s EULA and bundled third-party notices apply. This is a personal integration, not an official Aseprite release.

Open **Aseprite AI Studio.exe**. Use File → Open Aseprite to start the bundled editor, then Connect in its AI Studio panel. Allow its specific loopback socket when Aseprite requests permission; full script trust is not required. Existing editor documents are preserved.

Packaged artwork is stored under the app’s user-data directory (`%APPDATA%/Aseprite AI Studio/output`); File → Open artwork folder opens the actual location. Session pairing and profile data are also outside the installed program files. Development mode can reuse the existing workspace studio and its asset library. A new packaged installation starts its own library; it does not silently move or delete workspace assets.

Closing the desktop app stops its owned studio service. If generation is running, the app asks whether to keep it open or cancel owned jobs and quit. Provider computations may finish in their separate service. A reused external workspace service is not stopped by closing the desktop window.

## Offline handbook

Help → GDD & workflow handbook opens these VitePress pages inside the app. Help → Return to studio resumes the workbench. This documentation is bundled; reading it does not require publishing a public website.

## MCP clients

Tools → Copy desktop MCP configuration copies a configuration for a compatible local stdio client. Keep the desktop app open while using that configuration. It points to the bundled executable and adapter without placing the session token in the configuration. The existing workspace MCP registration remains a separate installation.

Available tools cover status, installed models, still/animation generation, bounded waits, cancellation, asset listing/previews, assistant-authored pixel commands, reprocessing, native import and exports. Call status first and inspect actual previews. A hosted web chat cannot directly reach this loopback/stdio server.

## Build from source

```sh
npm ci
npm run build
npm run docs:build
npm test
npm run desktop:prepare
npm run desktop:dist
```

The preparation step needs a verified Aseprite portable directory via `ASEPRITE_PORTABLE_DIR` (or this workspace’s known portable path). It copies only the editor binary, data, DLLs and license/build notices into a staging directory and excludes locally paired studio scripts. Packaging excludes artwork, model files, credentials, logs, `.runtime` and developer caches.


## App updates

From the 0.3.0 build, use **Help > Check for updates (both apps)** in Studio or **App updates** in its Aseprite panel. One initial installation registers the desktop link. The updater reads published private GitHub releases through the local official GitHub CLI sign-in. Startup checks are optional. Tokens are not shipped inside the app. Draft releases are excluded, and downloads require size/SHA-256 verification before a separate install confirmation.

Aseprite updates are installed side by side and used on subsequent launches from Studio. Existing artwork, shared settings and previous editor versions are retained. The original standalone editor directory is not overwritten. Studio updates use the Windows installer after generation finishes and Aseprite is closed. Portable Studio offers the setup installer as its upgrade path. Existing older binaries need one manual installation to gain the updater.

## Reference preservation in 0.3.1 verification

The original reference conditions every frame through IP-Adapter and CLIP ViT-H. A fixed seed and bounded variation reduce identity drift. A local Ollama vision model compares each processed frame against the original in one side-by-side image. Failed or uncertain checks reject the whole sequence. The preview distinguishes checked identity from unverified drafts. Required models must already be installed; there are no automatic downloads or cloud fallbacks.

A two-frame 128px diagnostic preserved the swordsman's identity and passed local checks. It showed little motion and does not establish convincing jumping, sword drawing, direction accuracy or 1024px animation quality. Artist review remains necessary. Vision confidence is a heuristic, not a guarantee.
