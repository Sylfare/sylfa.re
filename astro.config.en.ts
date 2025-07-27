import shared from "./astro.config.shared";
import { defineConfig } from "astro/config";

export default defineConfig({
    ...shared,
    srcDir: './src/en',
    outDir: './dist/en',
    site: import.meta.env.ENGLISH_BASE_URL,
    server: {port: 4324},
    i18n: {
        ...shared.i18n,
        defaultLocale: "en",
    }
});