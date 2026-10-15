"use client";

import { useEffect, useState } from "react";

/** Renvoie l'id de la section actuellement visible au centre de l'écran. */
export function useActiveSection(ids: readonly string[], enabled = true) {
  const [activeId, setActiveId] = useState(ids[0]);

  useEffect(() => {
    if (!enabled) return;

    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        }
      },
      { rootMargin: "-35% 0px -55% 0px" },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [ids, enabled]);

  return activeId;
}
