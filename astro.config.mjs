import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Configure site URL (e.g. 'https://sanivada.github.io' or custom domain)
  site: 'https://sanivada.github.io',
  output: 'static',
  build: {
    format: 'directory'
  }
});
