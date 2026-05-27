import { about } from "@/constants/classes";
import { cn } from "@/lib/cn";

type AboutContentProps = {
  sectionLabel: string;
  headline: string;
  bullets: { id: string; text: string }[];
};

export function AboutContent({ sectionLabel, headline, bullets }: AboutContentProps) {
  return (
    <div className="flex flex-col">
      <div className={cn(about.sectionLabel, "opacity-0 animate-fade-in-up")}>
        {sectionLabel}
      </div>
      <h2 className={cn(about.headline, "mt-3 opacity-0 animate-fade-in-up animation-delay-100")}>
        {headline}
      </h2>

      <div className={about.bullets}>
        {bullets.map((b, index) => (
          <div
            key={b.id}
            className={cn(
              about.bulletRow,
              "opacity-0 animate-fade-in-up",
              index === 0 && "animation-delay-200",
              index === 1 && "animation-delay-300",
              index === 2 && "animation-delay-400",
            )}
          >
            <span className={about.bulletIcon} aria-hidden />
            <p className={about.bulletText}>{b.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

