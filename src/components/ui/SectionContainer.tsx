import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/cn";

type SectionContainerProps = {
  id?: string;
  children: ReactNode;
  className?: string;
  innerClassName?: string;
};

export function SectionContainer({
  id,
  children,
  className,
  innerClassName,
}: SectionContainerProps) {
  return (
    <section id={id} className={cn("relative w-full", className)}>
      <Container className={cn("py-16 sm:py-20 lg:py-24", innerClassName)}>
        {children}
      </Container>
    </section>
  );
}

