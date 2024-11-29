import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    vite:{
        build:{
            assetsInlineLimit: 1024
        },
    },
    scopedStyleStrategy: "where",
    experimental: {
        contentIntellisense: true
    }
});