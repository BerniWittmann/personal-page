import { defineCollection, z } from 'astro:content';

export const collections = {
	work: defineCollection({
		schema: z.object({
			title: z.string(),
			description: z.string(),
			publishDate: z.coerce.date(),
			tags: z.array(z.string()),
			img: z.string(),
			img_alt: z.string().optional(),
			hiddenOnMain: z.boolean().optional().default(false),
		}),
	}),
	posts: defineCollection({
		schema: z.object({
			title: z.string(),
			description: z.string(),
			publishDate: z.coerce.date(),
			tags: z.array(z.string()),
			img: z.string(),
			img_alt: z.string().optional(),
			hiddenOnMain: z.boolean().optional().default(false),
		}),
	}),
	photos: defineCollection({
		schema: z.object({
			title: z.string(),
			description: z.string(),
			img: z.string(),
			unsplashUrl: z.string().optional(),
			aspectRatio: z.string(),
			publishDate: z.coerce.date(),
			hiddenOnMain: z.boolean().optional().default(false),
		}),
	}),
};
