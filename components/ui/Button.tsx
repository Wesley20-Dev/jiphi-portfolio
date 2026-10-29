import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "outline-light";

const base =
  "group/button inline-flex min-h-11 cursor-pointer items-center justify-center gap-2.5 rounded-full border border-transparent px-[18px] text-xs font-bold transition duration-200 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lilac-bright";

const variants: Record<Variant, string> = {
  primary: "bg-brand text-white shadow-[0_8px_22px_#8750b54d] hover:bg-brand-hover",
  "outline-light": "border-white/55 bg-white/5 text-white hover:bg-white/12",
};

/**
 * Libellé qui défile au survol : une copie (masquée aux lecteurs d'écran) remonte
 * prendre la place de l'original.
 */
function RollingLabel({ children }: { children: ReactNode }) {
  const row = "flex items-center gap-2.5 transition-transform duration-500 ease-out-soft group-hover/button:-translate-y-full";
  return (
    <span className="relative flex overflow-hidden">
      <span className={row}>{children}</span>
      <span aria-hidden="true" className={cn(row, "absolute inset-x-0 top-full justify-center")}>
        {children}
      </span>
    </span>
  );
}

export function buttonClasses(variant: Variant = "primary", className?: string) {
  return cn(base, variants[variant], className);
}

type ButtonProps = ComponentProps<"button"> & { variant?: Variant };

export function Button({ variant, className, children, ...props }: ButtonProps) {
  return (
    <button className={buttonClasses(variant, className)} {...props}>
      <RollingLabel>{children}</RollingLabel>
    </button>
  );
}

type ButtonLinkProps = ComponentProps<typeof Link> & { variant?: Variant };

export function ButtonLink({ variant, className, children, ...props }: ButtonLinkProps) {
  return (
    <Link className={buttonClasses(variant, className)} {...props}>
      <RollingLabel>{children}</RollingLabel>
    </Link>
  );
}
