import { getCollection, type CollectionEntry } from 'astro:content';
import { DEFAULT_LANG, localePath, type Lang } from '../i18n';

export type ProjectEntry = CollectionEntry<'projects'>;
export type JournalEntry = CollectionEntry<'journal'>;

export interface Item<E> {
  slug: string;
  lang: Lang;
  /** 해당 언어 번역이 없어 다른 언어 원문으로 대체된 경우 true */
  fallback: boolean;
  entry: E;
}

/** "ko/airship-world" → { lang: 'ko', slug: 'airship-world' } */
function split(id: string): { lang: Lang; slug: string } {
  const [lang, ...rest] = id.split('/');
  return { lang: lang as Lang, slug: rest.join('/') };
}

function merge<E extends { id: string; data: { date: Date } }>(all: E[], lang: Lang): Item<E>[] {
  const bySlug = new Map<string, Partial<Record<Lang, E>>>();
  for (const e of all) {
    const { lang: l, slug } = split(e.id);
    bySlug.set(slug, { ...(bySlug.get(slug) ?? {}), [l]: e });
  }
  const items: Item<E>[] = [];
  for (const [slug, versions] of bySlug) {
    const entry = versions[lang] ?? versions[DEFAULT_LANG] ?? versions.en;
    if (!entry) continue;
    items.push({ slug, lang, fallback: !versions[lang], entry });
  }
  return items.sort((a, b) => b.entry.data.date.getTime() - a.entry.data.date.getTime());
}

export async function getProjects(lang: Lang): Promise<Item<ProjectEntry>[]> {
  return merge(await getCollection('projects'), lang);
}

export async function getJournal(lang: Lang): Promise<Item<JournalEntry>[]> {
  const all = await getCollection('journal', (e) => !e.data.draft);
  return merge(all, lang);
}

export const yearOf = (d: Date) => d.getUTCFullYear();
export const dotDate = (d: Date) =>
  `${d.getUTCFullYear()}.${String(d.getUTCMonth() + 1).padStart(2, '0')}.${String(d.getUTCDate()).padStart(2, '0')}`;

/** 홈 화면의 클라이언트 스크립트가 쓰는 가벼운 목록 (본문은 포함하지 않음) */
export function toIndex(items: Item<ProjectEntry>[], lang: Lang) {
  return items.map(({ slug, entry, fallback }) => ({
    slug,
    title: entry.data.title,
    summary: entry.data.summary,
    year: yearOf(entry.data.date),
    ts: entry.data.date.getTime(),
    category: entry.data.category,
    tags: entry.data.tags,
    image: entry.data.image ?? '',
    featured: entry.data.featured,
    url: localePath(lang, `/projects/${slug}/`),
    fallback,
  }));
}
