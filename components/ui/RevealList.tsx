import { Children, type CSSProperties, type ReactNode, type Ref } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

const MAX_STAGGER_STEPS = 8;

type RevealListProps = {
  children: ReactNode;
  className?: string;
  itemClassName?: string;
  listRef?: Ref<HTMLUListElement>;
  "aria-label"?: string;
};

/** Liste dont les éléments apparaissent l'un après l'autre à l'entrée dans l'écran. */
export function RevealList({ children, className, itemClassName, listRef, "aria-label": ariaLabel }: RevealListProps) {
  return (
    <Reveal variant="group">
      <ul ref={listRef} aria-label={ariaLabel} className={cn("m-0 list-none p-0", className)}>
        {Children.toArray(children).map((child, index) => (
          <li
            key={index}
            className={cn("reveal-item", itemClassName)}
            style={{ "--i": Math.min(index, MAX_STAGGER_STEPS) } as CSSProperties}
          >
            {child}
          </li>
        ))}
      </ul>
    </Reveal>
  );
}
