import Image from "next/image";
import { HeroContent } from "@/components/sections/HeroContent";
import { hero } from "@/constants/classes";
import { heroContent } from "@/constants/hero";
import tattooBackground from "@/assets/images/tattoo-background.png";

export function Hero() {
  const { background } = heroContent;

  return (
    <section id="hero" className={hero.section}>
      <div className="pointer-events-none absolute inset-0 z-0 bg-black">
        <Image
          src={tattooBackground}
          alt={background.alt}
          fill
          priority
          unoptimized
          quality={100}
          placeholder="empty"
          className="object-cover object-center"
          sizes="100vw"
        />
      </div>

      <div className="relative z-10 flex min-h-[calc(100svh-4.5rem)] w-full items-center justify-center overflow-visible px-4 py-12 sm:px-6 sm:py-16">
        <HeroContent />
      </div>
    </section>
  );
}
