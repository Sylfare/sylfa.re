import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";
import type { TupleType } from "typescript";

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

const trucSympa = defineCollection({
    loader: glob({pattern: "**/*.md", base: "./src/trucssympas"}),
    schema: z.object({
        nom: z.string(),
        description: z.string().optional(),
        tags: z.array(z.string()).optional(),
        liens: z.record(z.string(), z.string()).optional()
    })
});

export const collections = { changelog, trucSympa };

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

export type TrucSympa = {
    nom: string,
    description?: string,
    tags?: string[],
    content: string,
    liens: {[index: string]: string}
}