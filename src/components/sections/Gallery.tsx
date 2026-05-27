import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { GalleryCard } from "@/components/ui/GalleryCard";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { gallery } from "@/constants/classes";
import { galleryContent } from "@/constants/gallery";
import { syne } from "@/lib/fonts";
import { cn } from "@/lib/cn";

export function Gallery() {
  const { watermark, title, description, cta, images } = galleryContent;

  return (
    <section id="gallery" className={gallery.section}>
      <span className={cn(syne.className, gallery.watermark)} aria-hidden>
        {watermark}
      </span>

      <Container>
        <div className={gallery.grid}>
          {images.map((image, index) => (
            <GalleryCard
              key={image.id}
              src={image.src}
              alt={image.alt}
              priority={index === 0}
            />
          ))}
        </div>

        <div className={gallery.footer}>
          <SectionTitle as="h2" size="section" className={gallery.title}>
            {title}
          </SectionTitle>

          <div className="flex flex-col items-start gap-6">
            <p className={gallery.description}>{description}</p>
            <Button href={cta.href} variant="outline" size="md">
              {cta.label}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
