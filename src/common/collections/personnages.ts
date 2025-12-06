import { getCollection } from "astro:content";
import type { Language } from "../i18n/ui";
import type { GetStaticPaths } from "astro";

export const personnages = async function({paginate}, posts) {
    // const personnageList = await getCollection(`personnage-${language}`);
    return paginate(posts, {pageSize: 10});
}

export const personnage = async function(personnages) {
    return personnages.map(perso => ({
        params: {id: perso.id},
        props: {perso}
    }));
}

export const initPersonnages = async function(language: Language) {
    const posts = await getCollection(`personnage-${language}`);
    
    return {
        personnages: (async (paginate) => personnages(paginate, posts)) satisfies GetStaticPaths,
        personnage: (async (paginate) => personnage(posts)) satisfies GetStaticPaths,
    };
}