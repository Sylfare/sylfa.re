import { defineConfig, passthroughImageService } from "astro/config";

import compressor from "astro-compressor";

// https://astro.build/config
export default {
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
    assetsPrefix: 'https://assets.sylfa.re'
  },
  image: {
    service: passthroughImageService()  
  },

  experimental: {
    contentIntellisense: true,
  },
  integrations: [compressor()],
};
