import { defineConfig, passthroughImageService } from "astro/config";
import compressor from "astro-compressor";
import { loadEnv } from "vite";

export const env = loadEnv(process.env.NODE_ENV ?? "development", process.cwd(), "");

export default defineConfig({
  image: {
    service: passthroughImageService(),
  },

  experimental: {
    contentIntellisense: true,
  },
  integrations: [compressor()],
  i18n: {
    locales: ["en", "fr"],
    defaultLocale: "fr",
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: true,
      // fallbackType: "redirect",
    }
  },
} );