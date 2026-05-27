import Image, { type StaticImageData } from "next/image";
import { gallery } from "@/constants/classes";
import { cn } from "@/lib/cn";

type GalleryCardProps = {
  src: StaticImageData;
  alt: string;
  priority?: boolean;
  className?: string;
};

export function GalleryCard({
  src,
  alt,
  priority = false,
  className,
}: GalleryCardProps) {
  return (
    <article className={cn(gallery.card, className)}>
      <Image
        src={src}
        alt={alt}
        fill
        unoptimized
        priority={priority}
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        className={gallery.cardImage}
      />
    </article>
  );
}
