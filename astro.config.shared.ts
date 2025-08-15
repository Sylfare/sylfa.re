import { defineConfig, passthroughImageService } from "astro/config";

import compressor from "astro-compressor";

// https://astro.build/config
export const base = {
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
    service: passthroughImageService(),
  },

  experimental: {
    contentIntellisense: true,
  },
  integrations: [compressor()],
  i18n: {
    locales: ["en", "fr"],
  },
};
