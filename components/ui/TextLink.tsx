import Link from "next/link";
import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

type TextLinkProps = ComponentProps<typeof Link>;

export function TextLink({ className, ...props }: TextLinkProps) {
  return (
    <Link
      className={cn(
        "text-[11px] font-bold text-brand underline-offset-4 hover:underline",
        className,
      )}
      {...props}
    />
  );
}
