import { defineConfig, passthroughImageService } from "astro/config";
import compressor from "astro-compressor";
import { loadEnv } from "vite";

export const env = loadEnv(process.env.NODE_ENV ?? "development", process.cwd(), "");

export default defineConfig({
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
      preprocessorOptions: {
        less: {
        }
      }
    },
  },
  build: {
    // assets: "assets",
    // assetsPrefix: env.ASSETS_BASE_URL
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
    defaultLocale: "fr"
  },
} );