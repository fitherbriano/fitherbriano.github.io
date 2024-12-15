import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const blog = await getCollection('archive');
  return rss({
    title: 'Brutal Blog',
    description: 'Brutal is a theme for Astro',
    stylesheet: false,
    site: context.site,
    items: blog.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `/archive/${post.slug}/`,
    })),
    customData: '<language>en-us</language>',
    canonicalUrl: 'https://brutal.elian.codes',
  });
}
