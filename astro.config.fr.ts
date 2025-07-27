import shared from "./astro.config.shared";
import { defineConfig } from "astro/config";

export default defineConfig({
    ...shared,
    srcDir: './src/fr',
    outDir: './dist/fr',
    site: import.meta.env.FRENCH_BASE_URL,
    server: {port: 4321},
    i18n: {
        ...shared.i18n,
        defaultLocale: "fr",
    }
});