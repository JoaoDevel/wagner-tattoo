import type { ReactNode } from "react";
import { hero } from "@/constants/classes";
import { syne } from "@/lib/fonts";
import { cn } from "@/lib/cn";

type SectionTitleSize = "hero" | "section";

type SectionTitleProps = {
  children: ReactNode;
  as?: "h1" | "h2" | "h3";
  size?: SectionTitleSize;
  className?: string;
};

const sizeStyles: Record<SectionTitleSize, string> = {
  hero: hero.title,
  section:
    "text-3xl font-extrabold uppercase leading-tight tracking-tight sm:text-4xl md:text-5xl",
};

export function SectionTitle({
  children,
  as: Component = "h2",
  size = "section",
  className,
}: SectionTitleProps) {
  return (
    <Component className={cn(syne.className, sizeStyles[size], className)}>
      {children}
    </Component>
  );
}
