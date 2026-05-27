import Image from "next/image";
import { HeroContent } from "@/components/sections/HeroContent";
import { hero } from "@/constants/classes";
import { heroContent } from "@/constants/hero";
import heroBackground from "@/assets/images/background.png";

export function Hero() {
  const { background } = heroContent;

  return (
    <section id="hero" className={hero.section}>
      <div className="pointer-events-none absolute inset-0 z-0 bg-black" />

      <div className="pointer-events-none absolute right-0 top-0 z-20 overflow-visible">
        <Image
          src={heroBackground}
          alt={background.alt}
          priority
          unoptimized
          quality={100}
          placeholder="empty"
          className="h-auto w-auto max-w-none scale-[1.6] origin-top-right"
          sizes="100vw"
        />
      </div>

      <div className="relative z-30 -mb-10 flex min-h-[calc(100svh-4.5rem)] w-full items-center justify-center overflow-visible px-4 py-12 sm:-mb-14 sm:px-6 sm:py-16">
        <HeroContent />
      </div>
    </section>
  );
}
