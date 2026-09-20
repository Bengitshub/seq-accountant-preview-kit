import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  site: 'https://bengitshub.github.io',
  base: '/seq-accountant-preview-kit/',
  outDir: 'dist',
});
