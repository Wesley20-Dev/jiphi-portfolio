import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export type Tone = "light" | "dark";

type KickerProps = {
  children: ReactNode;
  tone?: Tone;
  className?: string;
};

/** Sur-titre en capitales, précédé d'une pastille lilas. */
export function Kicker({ children, tone = "light", className }: KickerProps) {
  return (
    <p
      className={cn(
        "flex items-center gap-2.5 text-[11px] font-bold uppercase tracking-[.08em]",
        "before:size-[7px] before:rounded-full before:bg-lilac-bright before:shadow-[0_0_0_4px_#ad79f422] before:content-['']",
        tone === "dark" ? "text-lilac-soft" : "text-brand",
        className,
      )}
    >
      {children}
    </p>
  );
}

type SectionHeadingProps = {
  kicker: string;
  title: string;
  description?: string;
  as?: "h1" | "h2";
  tone?: Tone;
  className?: string;
};

export function SectionHeading({
  kicker,
  title,
  description,
  as: Heading = "h2",
  tone = "light",
  className,
}: SectionHeadingProps) {
  return (
    <div className={className}>
      <Kicker tone={tone}>{kicker}</Kicker>
      <Heading className="mb-[5px] mt-2 font-serif text-[34px] font-medium leading-[1.08] tracking-[-.03em] md:text-[clamp(32px,3.6vw,44px)]">
        {title}
      </Heading>
      {description && (
        <p className={cn("max-w-[300px] text-xs md:max-w-none", tone === "dark" ? "text-white/65" : "text-muted")}>
          {description}
        </p>
      )}
    </div>
  );
}
