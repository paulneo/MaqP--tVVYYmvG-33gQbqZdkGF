import { defineConfig, passthroughImageService } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';

import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
  site: 'https://blog.maquinariaspesadas.org',
  integrations: [sitemap(), tailwind(), react()],
  image: {
    service: passthroughImageService(),
  },
  output: 'server',
  adapter: netlify({
    cacheOnDemandPages: true,
  }),
});