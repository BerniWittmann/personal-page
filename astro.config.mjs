import { defineConfig } from 'astro/config';

import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

import swup from '@swup/astro';

// https://astro.build/config
export default defineConfig({
  site: 'https://bernhardwittmann.com',
  integrations: [mdx(), sitemap(), swup({ globalInstance: true })],
});