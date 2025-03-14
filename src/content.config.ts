import { defineCollection, z } from 'astro:content';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';

export const collections = {
	docs: defineCollection({ loader: docsLoader(), schema: docsSchema({
		extend: z.object({
			// Make a built-in field required instead of optional.
			description: z.string().optional(),
		}),
	}), }),
};
