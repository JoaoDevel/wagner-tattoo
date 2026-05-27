import gallery3 from "@/assets/images/gallery-3.png";
import type { StaticImageData } from "next/image";

export type GalleryImage = {
  id: string;
  src: StaticImageData;
  alt: string;
};

/** Imagem de exemplo (gallery-3) — substitui cada entrada quando tiveres as fotos finais. */
const exampleImage = gallery3;

export const galleryContent = {
  watermark: "TATTOO",
  title: "OUR GALLERY",
  description:
    "WE TAKE PRIDE IN OUR METICULOUS ATTENTION TO DETAIL, ENSURING THAT EVERY DESIGN IS CRAFTED TO PERFECTION.",
  cta: {
    label: "CHOOSE AN ARTIST",
    href: "#artists",
  },
  images: [
    {
      id: "gallery-1",
      src: exampleImage,
      alt: "Exemplo de tatuagem — substituir imagem",
    },
    {
      id: "gallery-2",
      src: exampleImage,
      alt: "Exemplo de tatuagem — substituir imagem",
    },
    {
      id: "gallery-3",
      src: exampleImage,
      alt: "Exemplo de tatuagem — substituir imagem",
    },
  ] satisfies GalleryImage[],
} as const;
