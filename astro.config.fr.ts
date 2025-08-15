import { base } from "./astro.config.shared";
import { defineConfig } from "astro/config";

export default defineConfig({
    ...base,
    srcDir: './src/fr',
    outDir: './dist/fr',
    site: import.meta.env.FRENCH_BASE_URL,
    server: {port: 4321},
    i18n: {
        locales: base.i18n?.locales,
        defaultLocale: "fr",
    }
});