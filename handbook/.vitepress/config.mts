import { defineConfig } from "vitepress";
export default defineConfig({
  title: "Aseprite AI Studio",
  description: "Game design document for the pixel-art creation workflow",
  base: "./",
  lang: "en-US",
  lastUpdated: false,
  themeConfig: {
    nav: [
      { text: "GDD", link: "/gdd" },
      { text: "Workflows", link: "/workflows" },
      { text: "Desktop setup", link: "/desktop" },
    ],
    sidebar: [
      {
        text: "Design document",
        items: [
          { text: "Overview", link: "/" },
          { text: "GDD", link: "/gdd" },
          { text: "Creation workflows", link: "/workflows" },
          { text: "Desktop & MCP", link: "/desktop" },
          { text: "Quality & delivery", link: "/delivery" },
        ],
      },
    ],
    search: { provider: "local" },
    footer: {
      message:
        "Private personal integration. Model quality must be reviewed by an artist.",
    },
  },
  vite: { server: { host: "127.0.0.1" } },
});
