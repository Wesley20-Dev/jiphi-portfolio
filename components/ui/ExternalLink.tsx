import type { ComponentProps } from "react";

type ExternalLinkProps = Omit<ComponentProps<"a">, "target" | "rel">;

/** Lien qui s'ouvre dans un nouvel onglet, annoncé aux lecteurs d'écran. */
export function ExternalLink({ children, ...props }: ExternalLinkProps) {
  return (
    <a target="_blank" rel="noreferrer" {...props}>
      {children}
      <span className="sr-only"> (nouvel onglet)</span>
    </a>
  );
}
