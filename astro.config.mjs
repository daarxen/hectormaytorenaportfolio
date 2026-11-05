// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Update `site` once the custom domain is connected.
export default defineConfig({
  site: 'https://hectormaytorena.com',
  integrations: [sitemap()],
  build: {
    // The CSS is small: inline it so it never blocks first paint.
    inlineStylesheets: 'always',
  },
  image: {
    responsiveStyles: true,
  },
});
