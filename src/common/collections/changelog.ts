import { getCollection } from "astro:content";
import type { Language } from "../i18n/ui";

export const initChangelog = async function(language: Language) {
    const changelogListUnsorted = await getCollection(`changelog-${language}`);
    const changelogList = changelogListUnsorted.sort((a, b) => b.data.order - a.data.order);
    return (paginate) => paginate.paginate(changelogList, {pageSize: 10});
}