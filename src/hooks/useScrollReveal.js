import { useLayoutEffect } from "react";

const reduceMotionQuery = "(prefers-reduced-motion: reduce)";

export function useScrollReveal() {
  useLayoutEffect(() => {
    if (typeof window === "undefined" || typeof document === "undefined") return undefined;

    const reducedMotion = window.matchMedia(reduceMotionQuery);
    const revealNow = (element) => element.classList.add("is-visible");

    if (reducedMotion.matches || !("IntersectionObserver" in window)) {
      document.querySelectorAll("[data-reveal]").forEach(revealNow);
      return undefined;
    }

    document.documentElement.classList.add("reveal-enabled");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        revealNow(entry.target);
        observer.unobserve(entry.target);
      });
    }, {
      rootMargin: "0px 0px -8% 0px",
      threshold: 0.12
    });

    const observe = (element) => {
      if (!(element instanceof Element) || element.classList.contains("is-visible")) return;
      observer.observe(element);
    };

    const revealVisible = () => {
      document.querySelectorAll("[data-reveal]").forEach((element) => {
        if (!(element instanceof Element) || element.classList.contains("is-visible")) return;
        const rect = element.getBoundingClientRect();
        if (rect.height <= 0 || rect.width <= 0) return;
        if (rect.top < window.innerHeight * 0.94 && rect.bottom > window.innerHeight * 0.04) {
          revealNow(element);
          observer.unobserve(element);
        }
      });
    };

    let revealFrame = 0;
    const scheduleRevealVisible = () => {
      if (revealFrame) return;
      revealFrame = window.requestAnimationFrame(() => {
        revealFrame = 0;
        revealVisible();
      });
    };

    const scan = (root = document) => {
      root.querySelectorAll?.("[data-reveal]").forEach(observe);
      scheduleRevealVisible();
    };

    scan();
    window.setTimeout(scheduleRevealVisible, 120);
    window.addEventListener("scroll", scheduleRevealVisible, { passive: true });
    window.addEventListener("resize", scheduleRevealVisible);

    const mutationObserver = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (!(node instanceof Element)) return;
          if (node.matches("[data-reveal]")) observe(node);
          scan(node);
        });
      });
    });

    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      if (revealFrame) window.cancelAnimationFrame(revealFrame);
      window.removeEventListener("scroll", scheduleRevealVisible);
      window.removeEventListener("resize", scheduleRevealVisible);
      mutationObserver.disconnect();
      observer.disconnect();
      document.documentElement.classList.remove("reveal-enabled");
    };
  }, []);
}
