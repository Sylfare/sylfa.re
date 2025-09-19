import { base, env } from "./astro.config.shared";
import { defineConfig } from "astro/config";

export default defineConfig({
    ...base,
    srcDir: './src/en',
    outDir: './dist/en.sylfa.re',
    site: env.ENGLISH_BASE_URL,
    server: {port: 4324},
    i18n: {
        locales: ["en"],
        defaultLocale: "en",
    }
});