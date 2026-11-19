import { ko, type Dict } from './ko';
import { en } from './en';

export type Lang = 'ko' | 'en';
export const LANGS: Lang[] = ['ko', 'en'];
export const DEFAULT_LANG: Lang = 'ko';

const dicts: Record<Lang, Dict> = { ko, en };
export const getDict = (lang: Lang): Dict => dicts[lang];

/** 언어에 맞는 경로를 만듭니다. 한국어는 접두사 없이, 영어는 /en 을 붙입니다. */
export function localePath(lang: Lang, path = '/'): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  return lang === DEFAULT_LANG ? clean : `/en${clean === '/' ? '/' : clean}`;
}

/** "{n}" 같은 자리 표시자를 값으로 치환합니다. */
export function fmt(template: string, vars: Record<string, string | number>): string {
  return template.replace(/\{(\w+)\}/g, (_, k) => String(vars[k] ?? ''));
}
