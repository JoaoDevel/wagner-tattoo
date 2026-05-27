import type { ReactNode } from "react";
import { layout } from "@/constants/classes";
import { cn } from "@/lib/cn";

type ContainerProps = {
  children: ReactNode;
  className?: string;
  as?: "div" | "section" | "header" | "main";
};

export function Container({
  children,
  className,
  as: Component = "div",
}: ContainerProps) {
  return (
    <Component className={cn(layout.container, className)}>
      {children}
    </Component>
  );
}
