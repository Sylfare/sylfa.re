import { build } from "astro";

Promise.all([
    build({
        configFile: './astro.config.fr.ts',
    }),
    build({
        configFile: './astro.config.en.ts',
    })
])
.then(() => {
    Bun.spawn(['mv', './dist/fr/assets/', './dist/assets']);

    Bun.spawn(['rm', '-r', 'dist/en/assets/'])
    Bun.spawn(['rm', '-r', 'dist/assets/assets/'])

});
