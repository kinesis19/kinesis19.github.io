// 홈 화면 인터랙션: 카테고리 bento, 전체 보기(검색/태그/정렬/더 보기), 페이지 이동 없는 상세 패널, 메뉴 강조
interface Project {
  slug: string; title: string; summary: string; year: number; ts: number;
  category: string; tags: string[]; image: string; featured: boolean; url: string; fallback: boolean;
}
interface Category { key: string; name: string; sub: string; icon: string }
interface UI {
  count: string; comingSoon: string; viewAll: string; collapse: string; more: string; search: string; shownOf: string;
  all: string; sort: { rec: string; new: string; old: string }; empty: string; close: string; prev: string; next: string;
}
const data = JSON.parse(document.getElementById('home-data')!.textContent!) as {
  home: string; categories: Category[]; ui: UI; projects: Project[];
};
const { categories, ui, projects, home } = data;
const $ = <T extends HTMLElement = HTMLElement>(s: string) => document.querySelector<T>(s)!;
const bySlug: Record<string, Project> = Object.fromEntries(projects.map((p) => [p.slug, p]));
const catName = (k: string) => categories.find((c) => c.key === k)?.name ?? k;
const fmt = (s: string, v: Record<string, string | number>) => s.replace(/\{(\w+)\}/g, (_, k) => String(v[k] ?? ''));
const esc = (s: string) => s.replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]!);

/* ───── ordering: 대표(featured) → 최신순 ───── */
type Sort = 'rec' | 'new' | 'old';
function ordered(cat: string, sort: Sort = 'rec'): Project[] {
  const L = projects.filter((p) => p.category === cat);
  return L.map((p, i) => [p, i] as const)
    .sort(([a, ai], [b, bi]) => {
      if (sort === 'old') return a.ts - b.ts || ai - bi;
      if (sort === 'new') return b.ts - a.ts || ai - bi;
      return Number(b.featured) - Number(a.featured) || b.ts - a.ts || ai - bi;
    })
    .map(([p]) => p);
}

const media = (p: Project) =>
  p.image
    ? `<img src="${esc(p.image)}" alt="" loading="lazy">`
    : `<div class="ph"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${categories.find((c) => c.key === p.category)?.icon ?? ''}</svg></div>`;

/* ───── 카테고리 + bento ───── */
let cur = categories.find((c) => projects.some((p) => p.category === c.key))?.key ?? categories[0].key;
let allOpen = false, q = '', tag = '', sortK: Sort = 'rec', shown = 8;

function renderCats() {
  document.querySelectorAll<HTMLElement>('#cats .ct').forEach((b) => b.classList.toggle('on', b.dataset.cat === cur));
  $('#catSub').textContent = categories.find((c) => c.key === cur)?.sub ?? '';
}

function renderBento() {
  const L = ordered(cur).slice(0, 5);
  const n = L.length;
  if (!n) {
    $('#bento').innerHTML = `<div class="bento-empty">${esc(ui.comingSoon)}</div>`;
    return;
  }
  const cls = n >= 5 ? ['b2x2', 'b1x1', 'b1x1', 'b1x1', 'b1x1'] : n === 4 ? ['b2x2', 'b1x1', 'b1x1', 'b2x1'] : n === 3 ? ['b2x2', 'b2x1', 'b2x1'] : n === 2 ? ['b2x2', 'b2x2'] : ['b2x2'];
  $('#bento').innerHTML = L.map(
    (p, i) => `<a class="bt ${cls[i]}" href="${esc(p.url)}" data-slug="${p.slug}"><div class="im">${media(p)}</div><span class="y">${p.year}</span><span class="arrow">→</span><div class="cp"><h4>${esc(p.title)}</h4><p>${esc(p.summary)}</p></div></a>`,
  ).join('');
}

function renderAll(keepFocus = false) {
  const L = ordered(cur, sortK);
  const el = $('#allwrap');
  if (L.length <= 5) { el.innerHTML = ''; return; }
  const btn = `<button class="btn o" id="allBtn" type="button">${esc(allOpen ? ui.collapse : fmt(ui.viewAll, { n: L.length }))}</button>`;
  if (!allOpen) { el.innerHTML = `<div class="allbar">${btn}</div>`; return; }

  const cnt: Record<string, number> = {};
  L.forEach((p) => p.tags.forEach((t) => (cnt[t] = (cnt[t] || 0) + 1)));
  const tags = Object.keys(cnt).sort((a, b) => cnt[b] - cnt[a]).slice(0, 10);
  const needle = q.trim().toLowerCase();
  const F = L.filter((p) => (!tag || p.tags.includes(tag)) && (!needle || `${p.title} ${p.summary} ${p.tags.join(' ')}`.toLowerCase().includes(needle)));
  const vis = F.slice(0, shown);

  el.innerHTML =
    `<div class="allbar">${btn}</div><div class="allp"><div class="tb">` +
    `<input id="q" type="search" placeholder="${esc(ui.search)}" value="${esc(q)}">` +
    `<div class="tchips">${[ui.all, ...tags].map((t, i) => `<button type="button" data-t="${i ? esc(t) : ''}" class="${(i ? t : '') === tag ? 'on' : ''}">${esc(t)}</button>`).join('')}</div>` +
    `<select id="sortSel">${(['rec', 'new', 'old'] as Sort[]).map((k) => `<option value="${k}"${k === sortK ? ' selected' : ''}>${esc(ui.sort[k])}</option>`).join('')}</select></div>` +
    `<div class="cnt">${esc(fmt(ui.shownOf, { a: F.length, b: vis.length }))}</div>` +
    (F.length
      ? `<div class="ag">${vis.map((p, i) => `<a class="ac" href="${esc(p.url)}" data-slug="${p.slug}" style="animation-delay:${(i % 8) * 30}ms"><div class="im" style="aspect-ratio:16/10">${media(p)}</div><div class="b"><span class="tg">${p.year}</span><h4>${esc(p.title)}</h4><small>${esc(p.tags.slice(0, 3).join(' · '))}</small></div></a>`).join('')}</div>`
      : `<p class="empty">${esc(ui.empty)}</p>`) +
    (F.length > shown ? `<div class="moreb"><button class="btn o" id="moreBtn" type="button">${esc(fmt(ui.more, { n: F.length - shown }))}</button></div>` : '') +
    `</div>`;
  if (keepFocus) {
    const i = document.getElementById('q') as HTMLInputElement | null;
    if (i) { i.focus(); i.setSelectionRange(i.value.length, i.value.length); }
  }
}

function resetAll() { allOpen = false; q = ''; tag = ''; sortK = 'rec'; shown = 8; }
function refresh() { renderCats(); renderBento(); renderAll(); }
refresh();

$('#cats').addEventListener('click', (e) => {
  const b = (e.target as HTMLElement).closest<HTMLElement>('.ct');
  if (!b) return;
  cur = b.dataset.cat!;
  resetAll();
  refresh();
});
const allwrap = $('#allwrap');
allwrap.addEventListener('click', (e) => {
  const t = e.target as HTMLElement;
  if (t.closest('#allBtn')) {
    allOpen = !allOpen; shown = 8; renderAll();
    if (allOpen) window.scrollTo({ top: allwrap.getBoundingClientRect().top + scrollY - 90, behavior: 'smooth' });
    return;
  }
  if (t.closest('#moreBtn')) { shown += 8; renderAll(); return; }
  const c = t.closest<HTMLElement>('.tchips button');
  if (c) { tag = c.dataset.t ?? ''; shown = 8; renderAll(); }
});
allwrap.addEventListener('input', (e) => {
  const t = e.target as HTMLInputElement;
  if (t.id === 'q') { q = t.value; shown = 8; renderAll(true); }
});
allwrap.addEventListener('change', (e) => {
  const t = e.target as HTMLSelectElement;
  if (t.id === 'sortSel') { sortK = t.value as Sort; shown = 8; renderAll(); }
});

/* ───── 페이지 이동 없는 상세 패널 ───── */
const mo = $('#mo');
const pn = $('#pn');
const cache: Record<string, string> = {};
let openSlug: string | null = null;
let pushed = false;
let lastFocus: HTMLElement | null = null;

async function loadDetail(p: Project): Promise<string | null> {
  if (cache[p.slug]) return cache[p.slug];
  try {
    const res = await fetch(p.url);
    if (!res.ok) return null;
    const doc = new DOMParser().parseFromString(await res.text(), 'text/html');
    const node = doc.querySelector('#project-detail');
    return node ? (cache[p.slug] = node.outerHTML) : null;
  } catch { return null; }
}

async function openPanel(slug: string, push = true) {
  const p = bySlug[slug];
  if (!p) return;
  const L = ordered(p.category);
  const i = L.indexOf(p);
  const prev = L[i - 1], next = L[i + 1];
  const wasOpen = !!openSlug;
  openSlug = slug;
  const head = `<div class="cl"><span class="tg">${esc(catName(p.category))} / ${i + 1} of ${L.length}</span><button type="button" data-close>${esc(ui.close)} ✕ <span style="opacity:.5">ESC</span></button></div>`;
  pn.innerHTML = `${head}<div class="pn-in"><div class="pn-loading">…</div></div>`;
  if (!wasOpen) lastFocus = document.activeElement as HTMLElement | null;
  mo.classList.add('open');
  mo.setAttribute('aria-hidden', 'false');
  document.body.classList.add('lock');
  pn.setAttribute('tabindex', '-1');
  pn.focus({ preventScroll: true });

  const html = await loadDetail(p);
  if (openSlug !== slug) return;
  if (!html) { location.href = p.url; return; } // 불러오기에 실패하면 일반 페이지로 이동
  const pager = `<div class="pager"><a class="pv${prev ? '' : ' dis'}"${prev ? ` href="${esc(prev.url)}" data-slug="${prev.slug}"` : ''}><small>${esc(ui.prev)}</small>${prev ? esc(prev.title) : '-'}</a><a class="nx${next ? '' : ' dis'}"${next ? ` href="${esc(next.url)}" data-slug="${next.slug}"` : ''}><small>${esc(ui.next)}</small>${next ? esc(next.title) : '-'}</a></div>`;
  pn.innerHTML = `${head}<div class="pn-in">${html}${pager}</div>`;
  pn.scrollTop = 0;
  if (push && !wasOpen) { history.pushState({ slug }, '', p.url); pushed = true; }
  else if (push) history.replaceState({ slug }, '', p.url);
}

function closePanel(fromPop = false) {
  if (!openSlug && !mo.classList.contains('open')) return;
  mo.classList.remove('open');
  mo.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('lock');
  openSlug = null;
  lastFocus?.focus?.({ preventScroll: true });
  lastFocus = null;
  if (!fromPop) {
    if (pushed) { pushed = false; history.back(); }
    else history.replaceState(null, '', home);
  }
}

document.addEventListener('click', (e) => {
  const t = e.target as HTMLElement;
  if (t.closest('[data-close]')) { closePanel(); return; }
  const a = t.closest<HTMLAnchorElement>('.fc[data-slug], .bt[data-slug], .ac[data-slug], .pn .pager a[data-slug]');
  if (!a) return;
  const me = e as MouseEvent;
  if (me.metaKey || me.ctrlKey || me.shiftKey || me.button === 1) return; // 새 탭 열기는 그대로 허용
  e.preventDefault();
  openPanel(a.dataset.slug!);
});
document.addEventListener('keydown', (e) => {
  if (!openSlug) return;
  if (e.key === 'Escape') closePanel();
  else if (e.key === 'ArrowRight') pn.querySelector<HTMLAnchorElement>('.pager .nx[data-slug]')?.click();
  else if (e.key === 'ArrowLeft') pn.querySelector<HTMLAnchorElement>('.pager .pv[data-slug]')?.click();
});
window.addEventListener('popstate', () => {
  const m = location.pathname.match(/\/projects\/([^/]+)\/?$/);
  if (m && bySlug[m[1]]) openPanel(m[1], false);
  else if (openSlug) { pushed = false; closePanel(true); }
});

/* ───── 스크롤 위치에 따라 상단 메뉴 강조 ───── */
const ids = ['top', 'profile', 'projects', 'experience', 'activity', 'journal'];
const navLinks = Array.from(document.querySelectorAll<HTMLElement>('.site-nav .l a[data-nav]'));
function onScroll() {
  const y = scrollY + 200;
  let c = 0;
  ids.forEach((id, i) => { const el = document.getElementById(id); if (el && el.offsetTop <= y) c = i; });
  navLinks.forEach((a, i) => a.classList.toggle('on', i === c));
}
addEventListener('scroll', onScroll, { passive: true });
onScroll();
