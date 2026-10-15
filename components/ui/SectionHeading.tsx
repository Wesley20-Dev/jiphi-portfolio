import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type KickerProps = {
  children: ReactNode;
  className?: string;
};

export function Kicker({ children, className }: KickerProps) {
  return (
    <p className={cn("mb-[7px] text-[10px] font-bold uppercase tracking-[.17em] text-brand", className)}>
      {children}
    </p>
  );
}

type SectionHeadingProps = {
  kicker: string;
  title: string;
  description?: string;
  as?: "h1" | "h2";
  className?: string;
};

export function SectionHeading({ kicker, title, description, as: Heading = "h2", className }: SectionHeadingProps) {
  return (
    <div className={className}>
      <Kicker>{kicker}</Kicker>
      <Heading className="m-0 font-serif text-[37px] font-medium leading-[1.08] tracking-[-.025em] md:text-[clamp(34px,4vw,45px)]">
        {title}
      </Heading>
      {description && <p className="mt-[7px] text-xs text-muted">{description}</p>}
    </div>
  );
}
