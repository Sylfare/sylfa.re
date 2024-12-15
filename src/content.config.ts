import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const changelog = defineCollection({
    loader: glob({pattern: "**/*.md", base: "./src/changelog"}),
    schema: z.object({
        order: z.number(),
        name: z.string().optional(),
        version: z.string(),
        description: z.string().optional(),        
        date: z.date(),
    })
});

export const collections = { changelog };

export type Changelog = {
    id: string,
    order: string,
    version: string,
    description?: string,
    date: {
        year: number,
        month?: number,
        day?: number,
    },
    content: string,
};