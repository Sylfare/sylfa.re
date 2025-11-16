import { defineConfig, passthroughImageService } from "astro/config";
import compressor from "astro-compressor";
import { loadEnv } from "vite";
import type { AstroUserConfig } from "astro";
import type { DeepPartial } from "node_modules/astro/dist/type-utils";

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
      defineConfig: {
      },
      preprocessorOptions: {
        less: {
        }
      }
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
} as DeepPartial<AstroUserConfig<any, any, any>>;
