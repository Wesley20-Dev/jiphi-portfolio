import Link from "next/link";
import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "outline-light";

const base =
  "inline-flex min-h-11 cursor-pointer items-center justify-center gap-2.5 rounded-full border border-transparent px-[18px] text-xs font-bold transition duration-200 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lilac-bright";

const variants: Record<Variant, string> = {
  primary: "bg-brand text-white shadow-[0_8px_22px_#8750b54d] hover:bg-brand-hover",
  "outline-light": "border-white/55 bg-white/5 text-white hover:bg-white/12",
};

export function buttonClasses(variant: Variant = "primary", className?: string) {
  return cn(base, variants[variant], className);
}

type ButtonProps = ComponentProps<"button"> & { variant?: Variant };

export function Button({ variant, className, ...props }: ButtonProps) {
  return <button className={buttonClasses(variant, className)} {...props} />;
}

type ButtonLinkProps = ComponentProps<typeof Link> & { variant?: Variant };

export function ButtonLink({ variant, className, ...props }: ButtonLinkProps) {
  return <Link className={buttonClasses(variant, className)} {...props} />;
}
