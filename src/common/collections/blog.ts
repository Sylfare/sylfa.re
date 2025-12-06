import { getCollection } from "astro:content";
import type { Language } from "../i18n/ui";

export const initBlog = async function(language: Language) {
    const blogListUnsorted = await getCollection(`blog-${language}`);
    const blogList = blogListUnsorted.sort((a, b) => b.data.datePublication - a.data.datePublication);
    return ({paginate}) => paginate(blogList, {pageSize: 10});
}