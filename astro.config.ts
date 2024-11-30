import { defineConfig } from "astro/config";

import compressor from "astro-compressor";

// https://astro.build/config
export default defineConfig({
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

  scopedStyleStrategy: "where",

  experimental: {
    contentIntellisense: true,
  },
  integrations: [compressor()],
});
