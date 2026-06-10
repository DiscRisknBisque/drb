import { createRequire } from "node:module";
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

const require = createRequire(import.meta.url);
const viteEnvPath = require.resolve("vite/dist/client/env.mjs");

/** Work around duplicate Vite peer resolutions breaking @vite/env in dev. */
function fixViteEnv() {
  return {
    name: "fix-vite-env",
    enforce: "pre",
    resolveId(id) {
      if (id === "@vite/env") {
        return viteEnvPath;
      }
    },
  };
}

export default defineConfig({
  site: "https://astro-nano-demo.vercel.app",
  integrations: [mdx(), sitemap()],
  vite: {
    plugins: [fixViteEnv(), tailwindcss()],
  },
});
