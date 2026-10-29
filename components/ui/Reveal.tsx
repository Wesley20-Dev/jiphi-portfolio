"use client";

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type RevealProps = {
  children: ReactNode;
  /**
   * - `block` : le bloc entier apparaît ;
   * - `group` : ses descendants `.reveal-item` apparaissent en cascade ;
   * - `mask` : les morceaux d'un `<SplitText>` montent derrière leur masque.
   */
  variant?: "block" | "group" | "mask";
  /** Délai avant l'apparition, en millisecondes. */
  delay?: number;
  className?: string;
};

const variantClasses = {
  block: "reveal",
  group: "reveal-group",
  mask: "reveal-mask",
};

/**
 * Fait apparaître son contenu (fondu + légère montée) quand il entre dans l'écran.
 * Les styles sont dans app/globals.css (.reveal, .reveal-group, .reveal-mask…).
 */
export function Reveal({ children, variant = "block", delay = 0, className }: RevealProps) {
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
      className={cn(variantClasses[variant], visible && "is-visible", className)}
      style={delay ? ({ "--reveal-delay": `${delay}ms` } as CSSProperties) : undefined}
    >
      {children}
    </div>
  );
}
