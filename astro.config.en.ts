import shared from "./astro.config.shared";
import { defineConfig } from "astro/config";

export default defineConfig({
    ...shared,
    srcDir: './src/en',
    outDir: './dist/en',
    site: "https://en.sylfa.re"
});