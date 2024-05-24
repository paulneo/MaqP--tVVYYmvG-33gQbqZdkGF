import { defineConfig, passthroughImageService } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import netlify from "@astrojs/netlify";
import partytown from "@astrojs/partytown";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: "https://mundoingenieria.org",
  integrations: [sitemap(), tailwind(), react(), partytown({
    config: {
      forward: ["dataLayer.push"]
    }
  }), icon()],
  image: {
    service: passthroughImageService()
  },
  output: "server",
  adapter: netlify({
    cacheOnDemandPages: true
  })
});