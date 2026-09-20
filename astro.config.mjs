import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  integrations: [tailwind()],
  site: "https://bengitshub.github.io",
  base: "/seq-accountant-preview-kit/",
  outDir: "dist",
});
