import { defineConfig, passthroughImageService } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import netlify from '@astrojs/netlify';

import partytown from '@astrojs/partytown';

// https://astro.build/config
export default defineConfig({
  site: 'https://blog.maquinariaspesadas.org',
  integrations: [
    sitemap(),
    tailwind(),
    react(),
    partytown({
      config: {
        forward: ['dataLayer.push'],
      },
    }),
  ],
  image: {
    service: passthroughImageService(),
  },
  output: 'server',
  adapter: netlify({
    cacheOnDemandPages: true,
  }),
});