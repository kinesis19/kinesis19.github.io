// 스크롤하면 .rv 요소가 아래에서 올라오며 나타납니다. (모든 페이지 공통)
const els = Array.from(document.querySelectorAll<HTMLElement>('.rv'));
els.forEach((e, i) => (e.style.animationDelay = `${(i % 4) * 80}ms`));

if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          io.unobserve(e.target);
        }
      }
    },
    { threshold: 0.08 },
  );
  els.forEach((e) => io.observe(e));
} else {
  els.forEach((e) => e.classList.add('in'));
}
