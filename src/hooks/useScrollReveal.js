import { useEffect } from "react";

const useScrollReveal = (refreshKey) => {
  useEffect(() => {
    const root = document.documentElement;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const supportsObserver = "IntersectionObserver" in window;
    const observedElements = new WeakSet();

    root.classList.add("motion-ready");

    const setRevealDelay = (element) => {
      const delay = Math.min(Number(element.dataset.revealDelay) || 0, 500);
      element.style.setProperty("--reveal-delay", `${delay}ms`);
    };

    const observer = !reduceMotion && supportsObserver
      ? new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add("is-revealed");
            observer.unobserve?.(entry.target);
          });
        },
        { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
      )
      : null;

    const prepareElement = (element) => {
      if (!(element instanceof HTMLElement)) return;

      setRevealDelay(element);

      if (!observer) {
        element.classList.add("is-revealed");
        return;
      }

      if (element.classList.contains("is-revealed") || observedElements.has(element)) return;
      observedElements.add(element);
      observer.observe(element);
    };

    const prepareRevealTree = (node) => {
      if (!(node instanceof Element)) return;
      if (node.matches("[data-reveal]")) prepareElement(node);
      node.querySelectorAll("[data-reveal]").forEach(prepareElement);
    };

    document.querySelectorAll("[data-reveal]").forEach(prepareElement);

    const mutationObserver = "MutationObserver" in window
      ? new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          mutation.addedNodes.forEach(prepareRevealTree);
        });
      })
      : null;

    mutationObserver?.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer?.disconnect();
      mutationObserver?.disconnect();
      root.classList.remove("motion-ready");
    };
  }, [refreshKey]);
};

export default useScrollReveal;
