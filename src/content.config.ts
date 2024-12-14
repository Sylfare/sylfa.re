import { file } from "astro/loaders";
import { defineCollection, z } from "astro:content";
import { changelog as changelogList } from "./pages/changelog/changelog";
import { glob } from "astro/loaders";

const changelog = defineCollection({
    loader: glob({pattern: "**/*.md", base: "./src/changelog"}),
    schema: z.object({
        order: z.number(),
        name: z.string().optional(),
        version: z.string(),
        date: z.object({
            year: z.number(),
            month: z.number().optional(),
            day: z.number().optional(),
        })
    })
});

export const collections = { changelog };

export type Changelog = {
    id: string,
    order: string,
    version: string,
    date: {
        year: number,
        month?: number,
        day?: number,
    },
    content: string,
};