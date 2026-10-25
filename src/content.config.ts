import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const metadataDefinition = () =>
  z
    .object({
      title: z.string().optional(),
      ignoreTitleTemplate: z.boolean().optional(),

      canonical: z.url().optional(),

      robots: z
        .object({
          index: z.boolean().optional(),
          follow: z.boolean().optional(),
        })
        .optional(),

      description: z.string().optional(),

      openGraph: z
        .object({
          url: z.string().optional(),
          siteName: z.string().optional(),
          images: z
            .array(
              z.object({
                url: z.string(),
                width: z.number().optional(),
                height: z.number().optional(),
              })
            )
            .optional(),
          locale: z.string().optional(),
          type: z.string().optional(),
        })
        .optional(),

      twitter: z
        .object({
          handle: z.string().optional(),
          site: z.string().optional(),
          cardType: z.string().optional(),
        })
        .optional(),
    })
    .optional();

const postCollection = defineCollection({
  loader: glob({ pattern: ['*.md', '*.mdx'], base: 'src/data/post' }),
  schema: z.object({
    publishDate: z.date().optional(),
    updateDate: z.date().optional(),
    draft: z.boolean().optional(),

    title: z.string(),
    excerpt: z.string().optional(),
    image: z.string().optional(),
    /** Alternative text for the cover image. Leave empty for decorative stock photos. */
    imageAlt: z.string().optional(),

    category: z.string().optional(),
    tags: z.array(z.string()).optional(),
    author: z.string().optional(),

    metadata: metadataDefinition(),
  }),
});

const classesCollection = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/classes' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    /** Slug of an entry in `src/data/institutions.ts`. */
    institution: z.string(),
    level: z.enum(['graduação', 'pós-graduação', 'extensão', 'técnico']),
    ead: z.boolean().default(false),
    /** `~/assets/images/...` path. */
    cover: z.string().optional(),
    /** Extra photos shown after the cover in the image viewer. */
    images: z.array(z.string()).default([]),
  }),
});

const coursesCollection = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/courses' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    cover: z.string(),
    modality: z.string(),
    category: z.string(),
    status: z.string(),
    tags: z.array(z.string()).default([]),
  }),
});

const eventsCollection = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/events' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    type: z.enum([
      'competição',
      'entrevista',
      'mentoria',
      'oficina',
      'organização',
      'palestra',
      'participação',
      'premiação',
      'visita técnica',
    ]),
    scope: z.enum(['local', 'nacional']).default('local'),
    /** `~/assets/images/...` path. */
    cover: z.string().optional(),
    images: z.array(z.string()).default([]),
    tags: z.array(z.string()).default([]),
  }),
});

const projectsCollection = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    /** End date (the old site's `date`). */
    date: z.coerce.date(),
    kind: z.enum(['p&d', 'consultoria', 'orientação']),
    /** Folder of the old site: ceteli, consultoria, uninorte. */
    organization: z.string(),
    /** Years when the project spanned more than one, e.g. "2009–2011". */
    period: z.string().optional(),
    /** `~/assets/images/...` path. */
    cover: z.string().optional(),
    images: z.array(z.string()).default([]),
    tags: z.array(z.string()).default([]),
  }),
});

export const collections = {
  post: postCollection,
  classes: classesCollection,
  events: eventsCollection,
  projects: projectsCollection,
  courses: coursesCollection,
};
