import rss from '@astrojs/rss';
import { g as getCollection } from './index_DdG6oe52.mjs';

const SITE_TITLE = "Maquinarias Pesadas";
const SITE_DESCRIPTION = "Welcome to my website!";

async function GET(context) {
	const posts = await getCollection('blog');
	return rss({
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		site: context.site,
		items: posts.map((post) => ({
			...post.data,
			link: `/blog/${post.slug}/`,
		})),
	});
}

export { GET };
