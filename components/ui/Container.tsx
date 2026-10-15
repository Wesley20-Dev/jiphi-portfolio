import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type ContainerProps = {
  children: ReactNode;
  size?: "default" | "narrow";
  className?: string;
};

const sizes = {
  default: "max-w-[1160px]",
  narrow: "max-w-[1050px]",
};

export function Container({ children, size = "default", className }: ContainerProps) {
  return (
    <div className={cn("mx-auto w-[calc(100%-30px)] md:w-[calc(100%-44px)]", sizes[size], className)}>
      {children}
    </div>
  );
}
