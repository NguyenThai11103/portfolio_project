import { useEffect } from "react";

const useScrollReveal = (refreshKey) => {
  useEffect(() => {
    const root = document.documentElement;
    const elements = [...document.querySelectorAll("[data-reveal]")];
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    root.classList.add("motion-ready");

    elements.forEach((element) => {
      const delay = Math.min(Number(element.dataset.revealDelay) || 0, 500);
      element.style.setProperty("--reveal-delay", `${delay}ms`);
    });

    if (reduceMotion || !("IntersectionObserver" in window)) {
      elements.forEach((element) => element.classList.add("is-revealed"));
      return () => root.classList.remove("motion-ready");
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-revealed");
          observer.unobserve?.(entry.target);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );

    elements.forEach((element) => observer.observe(element));

    return () => {
      observer.disconnect();
      root.classList.remove("motion-ready");
    };
  }, [refreshKey]);
};

export default useScrollReveal;
