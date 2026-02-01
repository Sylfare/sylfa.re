import { getCollection } from "astro:content";
import type { Language } from "../i18n/ui";
import type { GetStaticPaths } from "astro";

export const blogList = async function({paginate}, blogListUnsorted, language: Language) {
    const blogList = blogListUnsorted.sort((a, b) => b.data.datePublication - a.data.datePublication);
    return paginate(blogList, {pageSize: 10});
}

export const blogArticlePaths = async function (posts) {
    return posts
        .sort((a, b) => a.data.datePublication - b.data.datePublication)
        .map(post => ({
            params: {id: post.id},
            props: {post},
        }));
}

export const blogTagPaths = async function ({paginate}, posts, tagCount: {[tag: string]: number}, language: Language) {
    const tags = [...new Set(posts.flatMap(post => posts.data.tags))];
    const postsTries = posts
        .sort((a, b) => a.data.datePublication - b.data.datePublication);
    const postsByTag = tags.flatMap(tag => {
        if(tag) {
            const filteredPosts = postsTries.filter(post => post.data.tags?.includes(tag));
            return paginate(filteredPosts, {
                params: { tag },
                props: { tagCount },
                pageSize: 10,
            });
        } else {
            return null;
        }
        
    });
    return postsByTag;
}

export const postsTagsCount = function(posts: {data: {tags?: any}}[], tags: string[]){
    const tagCount = Object.fromEntries(tags.map(tag => [tag, 0]));
}

export const initBlog = async function(language: Language) {
    const posts = await getCollection(`blog-${language}`);
    const tags = [...new Set(posts.flatMap(truc => truc.data.tags))];
    const postCount = posts.length;

    return {
        tags,
        postCount,
        staticPaths: (async (paginate) => blogList(paginate, posts, language)) satisfies GetStaticPaths,
        staticArticlePath: (async (paginate) => blogArticlePaths(posts)) satisfies GetStaticPaths,
    }
}

