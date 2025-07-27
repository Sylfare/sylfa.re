import shared from "./astro.config.shared";
import { defineConfig } from "astro/config";

export default defineConfig({
    ...shared,
    srcDir: './src/fr',
    outDir: './dist/fr',
    site: "https://sylfa.re"
});