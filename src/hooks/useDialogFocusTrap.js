import { useEffect, useRef } from "react";

const focusableSelector = [
  "a[href]",
  "button:not([disabled])",
  "input:not([disabled])",
  "select:not([disabled])",
  "textarea:not([disabled])",
  "[tabindex]:not([tabindex='-1'])"
].join(",");

export function useDialogFocusTrap({ open, containerRef, initialFocusRef, restoreFocusRef, onClose }) {
  const onCloseRef = useRef(onClose);
  onCloseRef.current = onClose;

  useEffect(() => {
    if (!open || typeof document === "undefined") return undefined;

    const container = containerRef.current;
    if (!container) return undefined;

    const previouslyFocused = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    const previousPaddingRight = document.body.style.paddingRight;
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    if (scrollbarWidth > 0) {
      const currentPadding = Number.parseFloat(window.getComputedStyle(document.body).paddingRight) || 0;
      document.body.style.paddingRight = `${currentPadding + scrollbarWidth}px`;
    }
    document.body.style.overflow = "hidden";

    const focusInitialControl = window.requestAnimationFrame(() => {
      const firstFocusable = container.querySelector(focusableSelector);
      (initialFocusRef?.current || firstFocusable || container).focus();
    });

    function handleKeyDown(event) {
      if (event.key === "Escape") {
        event.preventDefault();
        onCloseRef.current?.();
        return;
      }

      if (event.key !== "Tab") return;
      const focusable = [...container.querySelectorAll(focusableSelector)]
        .filter((element) => element.getClientRects().length > 0 && !element.hasAttribute("hidden") && element.getAttribute("aria-hidden") !== "true");

      if (!focusable.length) {
        event.preventDefault();
        container.focus();
        return;
      }

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      window.cancelAnimationFrame(focusInitialControl);
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
      document.body.style.paddingRight = previousPaddingRight;
      const focusTarget = restoreFocusRef?.current || previouslyFocused;
      if (focusTarget && document.contains(focusTarget)) {
        window.requestAnimationFrame(() => focusTarget.focus?.());
      }
    };
  }, [containerRef, initialFocusRef, open, restoreFocusRef]);
}
