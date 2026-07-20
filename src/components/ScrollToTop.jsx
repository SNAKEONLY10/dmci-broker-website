import { useEffect, useLayoutEffect, useRef } from "react";
import { useLocation, useNavigationType } from "react-router-dom";

export function ScrollToTop() {
  const { pathname, hash } = useLocation();
  const navigationType = useNavigationType();
  const previousPathnameRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined") return undefined;

    const previousScrollRestoration = window.history.scrollRestoration;
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "auto";
    }

    return () => {
      if ("scrollRestoration" in window.history) {
        window.history.scrollRestoration = previousScrollRestoration;
      }
    };
  }, []);

  useLayoutEffect(() => {
    if (typeof window === "undefined") return undefined;
    const pathnameChanged = previousPathnameRef.current !== pathname;
    previousPathnameRef.current = pathname;

    const scrollPage = () => {
      if (hash) {
        const target = document.getElementById(decodeURIComponent(hash.slice(1)));
        if (target) {
          target.scrollIntoView({ block: "start" });
          return;
        }
      }

      if (navigationType === "POP" || !pathnameChanged) return;
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    };

    const frame = window.requestAnimationFrame(scrollPage);

    return () => {
      window.cancelAnimationFrame(frame);
    };
  }, [hash, navigationType, pathname]);

  return null;
}
