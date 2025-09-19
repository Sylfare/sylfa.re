import { base, env } from "./astro.config.shared";
import { defineConfig } from "astro/config";

export default defineConfig({
    ...base,
    srcDir: './src/fr',
    outDir: './dist/sylfa.re',
    site: env.FRENCH_BASE_URL,
    server: {port: 4321},
    i18n: {
        locales: ["fr"],
        defaultLocale: "fr",
    }
});