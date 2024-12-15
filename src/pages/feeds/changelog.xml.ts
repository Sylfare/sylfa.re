import rss, { type RSSFeedItem, type RSSOptions } from '@astrojs/rss';
import { getCollection, type CollectionEntry } from 'astro:content';
import MarkdownIt from "markdown-it";
import sanitizeHtml from "sanitize-html";

const parser = new MarkdownIt();

const changelogs = await getCollection("changelog");
const latestChangelogs: RSSFeedItem[] = changelogs
    .sort((a: CollectionEntry<'changelog'>, b: CollectionEntry<'changelog'>) => b.data.order - a.data.order)
    .map((log: CollectionEntry<'changelog'>) => ({
        title: `${log.data.version}${log.data.name ? ' - ' + log.data.name : ""}`,
        description: log.data.description,
        pubDate: log.data.date,
        customData: `<guid isPermaLink="false">${log.id}</guid>`,
        content: log.body ? sanitizeHtml(parser.render(log.body ?? "")): undefined
    })
);

export function GET(context: RSSOptions) {
    return rss({
        title: 'Sylfare - changelog',
        description: 'Les nouveautés du site',
        items: latestChangelogs,
        site: context.site,
    });
}