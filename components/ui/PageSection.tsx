import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Container } from "./Container";

type PageSectionProps = {
  id?: string;
  children: ReactNode;
  className?: string;
  containerSize?: "default" | "narrow";
};

export function PageSection({ id, children, className, containerSize }: PageSectionProps) {
  return (
    <section id={id} className={cn("py-[42px] md:py-[58px]", className)}>
      <Container size={containerSize}>{children}</Container>
    </section>
  );
}
