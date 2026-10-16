import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Container } from "./Container";

type PageSectionProps = {
  id?: string;
  children: ReactNode;
  className?: string;
  containerSize?: "default" | "narrow";
  containerClassName?: string;
};

export function PageSection({ id, children, className, containerSize, containerClassName }: PageSectionProps) {
  return (
    <section id={id} className={cn("py-14 md:py-[72px]", className)}>
      <Container size={containerSize} className={containerClassName}>
        {children}
      </Container>
    </section>
  );
}
