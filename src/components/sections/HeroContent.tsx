import { Button } from "@/components/ui/Button";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { hero } from "@/constants/classes";
import { heroContent } from "@/constants/hero";
import { jetbrainsMono } from "@/lib/fonts";
import { cn } from "@/lib/cn";

export function HeroContent() {
  const { title, leftCaption, rightCaption, ctas } = heroContent;

  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col items-center px-4 text-center">
      <div className="flex w-full justify-center overflow-visible opacity-0 animate-fade-in-up">
        <SectionTitle as="h1" size="hero">
          {title}
        </SectionTitle>
      </div>

      <div className="mt-4 grid w-full max-w-4xl grid-cols-1 gap-4 sm:mt-6 sm:grid-cols-2 sm:gap-0">
        <p
          className={cn(
            jetbrainsMono.className,
            hero.caption,
            "text-left",
            "opacity-0 animate-fade-in-up animation-delay-200",
          )}
        >
          {leftCaption.map((line) => (
            <span key={line} className="block lowercase">
              {line}
            </span>
          ))}
        </p>

        <p
          className={cn(
            jetbrainsMono.className,
            hero.caption,
            "text-left sm:text-right",
            "opacity-0 animate-fade-in-up animation-delay-300",
          )}
        >
          {rightCaption.map((line) => (
            <span key={line} className="block lowercase last:normal-case">
              {line}
            </span>
          ))}
        </p>
      </div>

      <div
        className={cn(
          "mt-8 flex w-full flex-col items-center justify-center gap-3 sm:mt-10 sm:flex-row sm:gap-4",
          "opacity-0 animate-fade-in-up animation-delay-400",
        )}
      >
        {ctas.map((cta) => (
          <Button
            key={cta.href}
            href={cta.href}
            variant={cta.variant}
            className="w-full sm:w-auto"
          >
            {cta.label}
          </Button>
        ))}
      </div>
    </div>
  );
}
