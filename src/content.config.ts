import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const writingSchema = z.object({
  title: z.string(),
  description: z.string().optional().default(''),
  pubDate: z.coerce.date(),
  updatedDate: z.coerce.date().optional(),
  tags: z.array(z.string()).default([]),
  draft: z.boolean().default(false),
});

export const collections = {
  posts: defineCollection({
    loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
    schema: writingSchema,
  }),
  personal: defineCollection({
    loader: glob({ pattern: '**/*.md', base: './src/content/personal' }),
    schema: writingSchema,
  }),
  notes: defineCollection({
    loader: glob({ pattern: '**/*.md', base: './src/content/notes' }),
    schema: writingSchema,
  }),
};
