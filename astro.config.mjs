// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Update `site` once the custom domain is connected.
export default defineConfig({
  site: 'https://hectormaytorena.com',
  integrations: [sitemap()],
  image: {
    responsiveStyles: true,
  },
});
