import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const blog = await getCollection('archive');
  return rss({
    title: 'the Copy Café',
    description: 'Brew better words, one sip at a time.',
    stylesheet: false,
    site: context.site,
    items: blog.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `/archive/${post.slug}/`,
    })),
    customData: '<language>en-us</language>',
    canonicalUrl: 'https://fitherbriano.github.io',
  });
}
