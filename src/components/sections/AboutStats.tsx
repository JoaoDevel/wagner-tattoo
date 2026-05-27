import Image, { type StaticImageData } from "next/image";
import { about } from "@/constants/classes";
import { cn } from "@/lib/cn";

type AboutStatsProps = {
  workImage: StaticImageData;
  workAlt: string;
  badge: string;
};

export function AboutStats({ workImage, workAlt, badge }: AboutStatsProps) {
  return (
    <div className={about.bottomGrid}>
      <div className={cn(about.workCard, "opacity-0 animate-fade-in-up animation-delay-200")}>
        <div className={about.workMedia}>
          <Image
            src={workImage}
            alt={workAlt}
            fill
            sizes="(max-width: 1024px) 100vw, 60vw"
            className={about.workImage}
          />
          <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/65 via-transparent to-transparent" />
        </div>
      </div>

      <div className={cn(about.badge, "opacity-0 animate-fade-in-up animation-delay-300")}>
        {badge}
      </div>
    </div>
  );
}

