"use client";

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type RevealProps = {
  children: ReactNode;
  /** Si vrai, anime les descendants `.reveal-item` en cascade plutôt que le bloc lui-même. */
  group?: boolean;
  /** Délai avant l'apparition, en millisecondes. */
  delay?: number;
  className?: string;
};

/**
 * Fait apparaître son contenu (fondu + légère montée) quand il entre dans l'écran.
 * Les styles sont dans app/globals.css (.reveal, .reveal-group, .reveal-item).
 */
export function Reveal({ children, group = false, delay = 0, className }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={cn(group ? "reveal-group" : "reveal", visible && "is-visible", className)}
      style={delay ? ({ "--reveal-delay": `${delay}ms` } as CSSProperties) : undefined}
    >
      {children}
    </div>
  );
}
