import { getCollection } from "astro:content";
import type { Language } from "../i18n/ui";
import type { GetStaticPaths } from "astro";

export const blogList = async function({paginate}, blogListUnsorted, language: Language) {
    const blogList = blogListUnsorted.sort((a, b) => b.data.datePublication - a.data.datePublication);
    return paginate(blogList, {pageSize: 10});
}

export const blogArticlePaths = async function (posts) {
    return posts.map(post => ({
        params: {id: post.id},
        props: {post},
    }));
}

export const initBlog = async function(language: Language) {
    const posts = await getCollection(`blog-${language}`);
    const tags = [...new Set(posts.flatMap(truc => truc.data.tags))];
    // const tagCount = trucsSympaTagsCount(posts, tags);
    const postCount = posts.length;

    return {
        tags,
        postCount,
        staticPaths: (async (paginate) => blogList(paginate, posts, language)) satisfies GetStaticPaths,
        staticArticlePath: (async (paginate) => blogArticlePaths(posts)) satisfies GetStaticPaths,
    }
}


// j'arrive