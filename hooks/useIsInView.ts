"use client";

import { useEffect, useState } from "react";

type Options = {
  enabled?: boolean;
  rootMargin?: string;
};

/** Indique si l'élément portant cet id est visible à l'écran. */
export function useIsInView(id: string, { enabled = true, rootMargin = "0px" }: Options = {}) {
  const [inView, setInView] = useState(true);

  useEffect(() => {
    if (!enabled) return;

    const element = document.getElementById(id);
    if (!element) return;

    const observer = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), { rootMargin });
    observer.observe(element);
    return () => observer.disconnect();
  }, [id, enabled, rootMargin]);

  return inView;
}
