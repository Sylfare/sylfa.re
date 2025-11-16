import { getCollection } from 'astro:content';
import type { Language } from '../i18n/ui';
import type { GetStaticPaths } from 'astro';

export const trucsSympasPaths = async function ({paginate}, posts, tagCount: {[tag: string]: number}, language: Language) {
    const postsTries = posts.sort((a, b) => new Intl.Collator(language).compare(a.data.nom, b.data.nom));

    return paginate(postsTries, {
        props: { tagCount },
        pageSize: 10
    });
}

export const trucsSympasTagPaths = async function ({paginate}, posts, tagCount: {[tag: string]: number}, language: Language) {
    const tags = [...new Set(posts.flatMap(truc => truc.data.tags))];
    const postsTries = posts
        .sort((a, b) => new Intl.Collator(language).compare(a.data.nom, b.data.nom));
        const postsByTag = tags.flatMap(tag => {
            if(tag) {
                const filteredPosts = postsTries.filter(truc => truc.data.tags?.includes(tag));
                return paginate(filteredPosts, {
                    params: { tag },
                    props: { tagCount },
                    pageSize: 10
                });
            } else {
                return null;
            }
    });
    return postsByTag;
}

export const trucsSympasDetailPaths = async function (trucs) {
    return trucs.map(truc => ({
        params: {id: truc.id},
        props: {truc},
    }));
};
 
export const trucsSympaTagsCount = function(posts: {data: {tags?: any}}[], tags: string[]): {[tag: string]: number} {
    const tagCount = Object.fromEntries(tags.map(tag => [tag, 0]));
    posts.flatMap(post => post.data.tags).forEach(tag => tag && tagCount[tag]++);
    return tagCount;
}

export const initTrucsSympas = async function(language: Language) {
    const posts = await getCollection(`trucsympa-${language}`);
    const tags = [...new Set(posts.flatMap(truc => truc.data.tags))];
    const tagCount = trucsSympaTagsCount(posts, tags);
    const postCount = posts.length;
    return {
        tagCount,
        tags,
        postCount,
        staticPaths: (async (paginate) => trucsSympasPaths(paginate, posts, tagCount, language)) satisfies GetStaticPaths,
        staticPathsTag: (async (paginate) => trucsSympasTagPaths(paginate, posts, tagCount, language)) satisfies GetStaticPaths,
        staticPathsDetail: (async (paginate) => trucsSympasDetailPaths(posts)) satisfies GetStaticPaths,
    }
}