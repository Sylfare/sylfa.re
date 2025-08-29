import { defineConfig, passthroughImageService } from "astro/config";
import compressor from "astro-compressor";
import { loadEnv } from "vite";

export const env = loadEnv(process.env.NODE_ENV ?? "development", process.cwd(), "");

// https://astro.build/config
export const base = {
  vite: {
    build: {
      sourcemap: true,
      rollupOptions: {
        output: {
          // assetFileNames: "assets/[name][extname]",
          // chunkFileNames: "[name].js"
        }
      }
    },
    css: {
      devSourcemap: true,
    },
  },
  build: {
    assets: "assets",
    assetsPrefix: env.ASSETS_BASE_URL
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
