import { useEffect, useState } from "react";

const PHONE_QUERY = "(max-width: 760px)";

export function useResponsiveProjectPageSize() {
  const [pageSize, setPageSize] = useState(() => getPageSize());

  useEffect(() => {
    const media = window.matchMedia(PHONE_QUERY);
    const update = () => setPageSize(media.matches ? 4 : 6);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  return pageSize;
}

function getPageSize() {
  if (typeof window === "undefined") return 6;
  return window.matchMedia(PHONE_QUERY).matches ? 4 : 6;
}
