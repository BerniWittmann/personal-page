import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

export const collections = {
	work: defineCollection({
		// Load Markdown files in the src/content/work directory.
		loader: glob({ base: './src/content/work', pattern: '**/*.{md,mdx}' }),
		schema: ({ image }) => z.object({
			title: z.string(),
			description: z.string(),
			publishDate: z.coerce.date(),
			tags: z.array(z.string()),
			img: image(),
			img_alt: z.string().optional(),
			hiddenOnMain: z.boolean().optional().default(false),
		}),
	}),
	photos: defineCollection({
		// Load Markdown files in the src/content/posts directory.
		loader: glob({ base: './src/content/photos', pattern: '**/*.{md,mdx}' }),
		schema: ({ image}) => z.object({
			title: z.string(),
			description: z.string(),
			img: image(),
			unsplashUrl: z.string().optional(),
			aspectRatio: z.string(),
			publishDate: z.coerce.date(),
			hiddenOnMain: z.boolean().optional().default(false),
		}),
	}),
};
