/**
 * Shared scroll-reveal observer used on every page via Layout.astro.
 * Adds both "visible" (used by about.astro's fadeUp keyframe) and
 * "is-visible" (used by index.astro compound rules + privacy.astro)
 * so every page keeps its existing CSS without changes.
 *
 * animationDelay inline style (e.g. style="animation-delay:0.1s") is
 * respected via setTimeout — index.astro's staggered cards use this.
 * about.astro's --stagger CSS variable is handled entirely in CSS so
 * no JS delay is needed there.
 */
export function initScrollReveal() {
  const els = Array.from(document.querySelectorAll('.animate-on-scroll'));
  if (!els.length) return;

  const reveal = (el) => {
    const delay = parseFloat(el.style.animationDelay) * 1000 || 0;
    const apply = () => el.classList.add('visible', 'is-visible');
    delay > 0 ? setTimeout(apply, delay) : apply();
  };

  if ('IntersectionObserver' in window) {
    const obs = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        reveal(entry.target);
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -6% 0px' });
    els.forEach((el) => obs.observe(el));
  } else {
    els.forEach((el) => el.classList.add('visible', 'is-visible'));
  }
}
