import type { CSSProperties } from "react";
import { cn } from "@/lib/utils";

type SplitTextProps = {
  text: string;
  /** Découpe en lettres (titre court) ou en mots (titre de section). */
  by?: "chars" | "words";
  /** Classes appliquées à chaque morceau, par exemple une animation au chargement. */
  pieceClassName?: string;
  /** Délai avant le premier morceau et écart entre deux morceaux, en millisecondes. */
  delay?: number;
  stagger?: number;
};

function pieceDelay(ms: number): CSSProperties {
  return { animationDelay: `${ms}ms`, transitionDelay: `${ms}ms` };
}

/**
 * Découpe un texte en morceaux qui glissent chacun derrière un masque.
 * Sans animation propre : soit `pieceClassName` (au chargement), soit un parent
 * `<Reveal variant="mask">` (au scroll). Le texte complet reste lisible par les
 * lecteurs d'écran ; les morceaux sont masqués pour eux.
 */
export function SplitText({ text, by = "words", pieceClassName, delay = 0, stagger = 80 }: SplitTextProps) {
  const pieces = by === "chars" ? Array.from(text) : text.split(" ");

  return (
    <>
      <span className="sr-only">{text}</span>
      <span aria-hidden="true">
        {pieces.map((piece, index) => (
          <span key={index}>
            {by === "words" && index > 0 && " "}
            <span className="split-mask">
              <span
                className={cn("split-inner", pieceClassName)}
                style={pieceDelay(delay + index * stagger)}
              >
                {piece}
              </span>
            </span>
          </span>
        ))}
      </span>
    </>
  );
}
