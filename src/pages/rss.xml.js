import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { siteConfig } from '../consts';

export async function get(context) {
	const posts = await getCollection('blog');
	return rss({
		title: siteConfig.name,
		description: siteConfig.description,
		site: context.site,
		items: blog.map((post) => ({
            title: post.data.title,
            pubDate: post.data.pubDate,
            description: post.data.description,
            customData: post.data.customData,
            // Compute RSS link from post `slug`
            // This example assumes all posts are rendered as `/blog/[slug]` routes
            link: `/blog/${post.slug}/`,
		})),
	});
}