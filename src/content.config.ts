import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

import { CATEGORIES } from './lib/categories'; // 카테고리는 4가지로 고정 (표시 이름은 src/i18n/*.ts 에서 번역)

const common = {
  title: z.string(),
  summary: z.string(),
  date: z.coerce.date(),
  category: z.enum(CATEGORIES),
  tags: z.array(z.string()).default([]),
  image: z.string().optional(),
};

// src/content/projects/ko/*.md, src/content/projects/en/*.md
const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    ...common,
    role: z.string().optional(),
    team: z.string().optional(),
    featured: z.boolean().default(false), // true 이면 홈 상단 "대표 프로젝트"에 노출
    links: z
      .array(z.object({ label: z.string(), url: z.string().url() }))
      .default([]),
  }),
});

// src/content/journal/ko/*.md, src/content/journal/en/*.md
const journal = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/journal' }),
  schema: z.object({
    ...common,
    draft: z.boolean().default(false), // true 이면 사이트에 노출되지 않음
  }),
});

export const collections = { projects, journal };
