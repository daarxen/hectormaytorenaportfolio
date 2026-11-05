// Progressive enhancement only — every section is fully readable without JS.

const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* Reveal on scroll */
const revealEls = document.querySelectorAll<HTMLElement>('.reveal');
if ('IntersectionObserver' in window && !reduce) {
  const io = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          io.unobserve(e.target);
        }
      }
    },
    { rootMargin: '0px 0px -8% 0px', threshold: 0.08 },
  );
  revealEls.forEach((el) => io.observe(el));
} else {
  revealEls.forEach((el) => el.classList.add('in'));
}

/* Nav: solid on scroll, hide on scroll down, show on scroll up */
const navEl = document.querySelector<HTMLElement>('[data-nav]');
let lastY = window.scrollY;
const onScroll = () => {
  const y = window.scrollY;
  navEl?.classList.toggle('scrolled', y > 24);
  navEl?.classList.toggle('hide', y > 400 && y > lastY + 4);
  if (y < lastY - 4 || y < 400) navEl?.classList.remove('hide');
  lastY = y;
};
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

/* Mobile menu */
const btn = document.querySelector<HTMLButtonElement>('[data-menu-btn]');
const menu = document.querySelector<HTMLElement>('[data-menu]');
const setMenu = (open: boolean) => {
  if (!btn || !menu) return;
  btn.setAttribute('aria-expanded', String(open));
  menu.hidden = !open;
  navEl?.classList.toggle('open', open);
  document.body.style.overflow = open ? 'hidden' : '';
};
btn?.addEventListener('click', () => setMenu(btn.getAttribute('aria-expanded') !== 'true'));
menu?.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => setMenu(false)));
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && btn?.getAttribute('aria-expanded') === 'true') {
    setMenu(false);
    btn.focus();
  }
});
window.matchMedia('(min-width: 1081px)').addEventListener('change', (m) => m.matches && setMenu(false));

/* Scroll-spy for nav links */
const spyLinks = document.querySelectorAll<HTMLAnchorElement>('[data-spy]');
if (spyLinks.length) {
  const map = new Map<string, HTMLAnchorElement>();
  spyLinks.forEach((a) => map.set(a.dataset.spy!, a));
  const spy = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (!e.isIntersecting) continue;
        spyLinks.forEach((a) => a.classList.remove('active'));
        map.get(e.target.id)?.classList.add('active');
      }
    },
    { rootMargin: '-45% 0px -50% 0px' },
  );
  map.forEach((_, id) => {
    const s = document.getElementById(id);
    if (s) spy.observe(s);
  });
}

/* Evolution: chapter progress rail */
const chapters = document.querySelectorAll<HTMLElement>('[data-chapter]');
const railItems = document.querySelectorAll<HTMLElement>('[data-rail-item]');
if (chapters.length && railItems.length) {
  const chapterIO = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (!e.isIntersecting) continue;
        const idx = Number((e.target as HTMLElement).dataset.chapter);
        railItems.forEach((r, i) => {
          r.classList.toggle('current', i === idx);
          r.classList.toggle('done', i < idx);
        });
      }
    },
    { rootMargin: '-40% 0px -55% 0px' },
  );
  chapters.forEach((c) => chapterIO.observe(c));
}

/* Subtle parallax on [data-parallax] images */
const parallax = document.querySelectorAll<HTMLElement>('[data-parallax]');
if (parallax.length && !reduce) {
  let ticking = false;
  const update = () => {
    const vh = window.innerHeight;
    parallax.forEach((el) => {
      const r = el.getBoundingClientRect();
      if (r.bottom < 0 || r.top > vh) return;
      const p = (r.top + r.height / 2 - vh / 2) / vh; // -1..1
      el.style.setProperty('--py', `${(p * -40).toFixed(1)}px`);
    });
    ticking = false;
  };
  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(update);
      ticking = true;
    }
  }, { passive: true });
  update();
}
