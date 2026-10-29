"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

type TypewriterProps = {
  text: string;
  /** Délai avant la première lettre, en millisecondes. */
  delay?: number;
  /** Durée d'affichage d'une lettre, en millisecondes. */
  speed?: number;
  className?: string;
};

/**
 * Écrit le texte lettre par lettre, avec un curseur clignotant.
 * La suite du texte est déjà présente mais transparente : la place est réservée et
 * les retours à la ligne ne bougent pas pendant l'écriture. Avec « réduire les
 * animations », le texte s'affiche d'emblée (voir app/globals.css).
 */
export function Typewriter({ text, delay = 0, speed = 35, className }: TypewriterProps) {
  const [count, setCount] = useState(0);
  const done = count >= text.length;

  useEffect(() => {
    let interval: number | undefined;
    const timeout = window.setTimeout(() => {
      interval = window.setInterval(() => {
        setCount((value) => {
          if (value + 1 >= text.length) window.clearInterval(interval);
          return value + 1;
        });
      }, speed);
    }, delay);

    return () => {
      window.clearTimeout(timeout);
      window.clearInterval(interval);
    };
  }, [text, delay, speed]);

  return (
    <span className={cn("typewriter", done && "is-done", className)}>
      <span className="sr-only">{text}</span>
      <span aria-hidden="true">
        {text.slice(0, count)}
        <span className="typewriter-caret" />
        <span className="typewriter-rest">{text.slice(count)}</span>
      </span>
    </span>
  );
}
