import Image, { type StaticImageData } from "next/image";
import { about } from "@/constants/classes";
import { cn } from "@/lib/cn";
import { syne } from "@/lib/fonts";

type AboutImageProps = {
  portrait: StaticImageData;
  portraitAlt: string;
  topTitle: string;
  name: string;
};

export function AboutImage({
  portrait,
  portraitAlt,
  topTitle,
  name,
}: AboutImageProps) {
  return (
    <div className={about.portraitCard}>
      <div className={about.portraitMedia}>
        <Image
          src={portrait}
          alt={portraitAlt}
          fill
          priority={false}
          sizes="(max-width: 1024px) 100vw, 40vw"
          className={about.portraitImage}
        />
        <div className={about.portraitVignette} />
        <div
          className={cn(
            syne.className,
            about.portraitTopTitle,
            "opacity-0 animate-fade-in-up",
          )}
        >
          {topTitle}
        </div>
        <div
          className={cn(
            syne.className,
            about.portraitName,
            "opacity-0 animate-fade-in-up animation-delay-200",
          )}
        >
          {name}
        </div>
      </div>
    </div>
  );
}

