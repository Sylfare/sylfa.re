import { defineConfig, passthroughImageService } from "astro/config";

import compressor from "astro-compressor";

// https://astro.build/config
export default defineConfig({
  site: "https://sylfa.re",
  vite: {
    build: {
      sourcemap: true,

    },
    css: {
      devSourcemap: true,
    },
  },
  build: {
    assets: "assets",
  },
  image: {
    service: passthroughImageService()  
  },

  experimental: {
    contentIntellisense: true,
  },
  integrations: [compressor()],
});
