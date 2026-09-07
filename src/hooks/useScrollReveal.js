import { useEffect } from 'react';

export function useScrollReveal() {
  useEffect(() => {
    const observerCallback = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    };

    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -40px 0px',
      threshold: 0.08
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    const observeElements = () => {
      const revealElements = document.querySelectorAll('.reveal-on-scroll');
      revealElements.forEach(el => {
        if (!el.classList.contains('is-visible')) {
          observer.observe(el);
        }
      });
    };

    // Initial observation
    observeElements();

    // Re-observe if DOM updates
    const timer = setTimeout(observeElements, 300);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, []);
}
