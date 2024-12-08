import rss, { type RSSOptions } from '@astrojs/rss';

export function GET(context: RSSOptions) {
    return rss({
        title: 'Sylfare - changelog',
        description: 'Les nouveautés du site',
        items: [],
        site: context.site
    });
}