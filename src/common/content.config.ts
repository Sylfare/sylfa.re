import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";
import type { TupleType } from "typescript";
import { i18n } from "astro:config/server";
import { languages, type Language } from "./i18n/ui";

const changelog = {
    name: "changelog",
    define: (language: Language) => defineCollection({
        loader: glob({pattern: "**/*.md", base: `./src/${language}/changelog`}),
        schema: z.object({
            order: z.number(),
            name: z.string().optional(),
            version: z.string(),
            description: z.string().optional(),        
            date: z.date(),
        })
    }
)};

const trucSympa = {
    name: "trucsympa",
    define: (language: Language) => defineCollection({
    loader: glob({pattern: "**/*.md", base: `./src/${language}/trucssympas`}),
        schema: z.object({
            nom: z.string(),
            description: z.string().optional(),
            tags: z.array(z.string()).optional(),
            liens: z.record(z.string(), z.string()).optional()
        })
    }),
};

export const collections = Object.fromEntries([ trucSympa, changelog ]
    .flatMap(collection => Object.keys(languages)
        .map(language => [
                `${collection.name}-${language}`,
                collection.define(language as Language)
            ])
        ));

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