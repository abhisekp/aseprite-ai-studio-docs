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
