import { defineConfig } from 'astro/config';
import { remarkFigures } from './src/plugins/remark-figures.mjs';

// https://astro.build/config
export default defineConfig({
  // Configure site URL (e.g. 'https://sanivada.github.io' or custom domain)
  site: 'https://sanivada.github.io',
  output: 'static',
  markdown: {
    remarkPlugins: [remarkFigures],
  },
  build: {
    format: 'directory'
  }
});
