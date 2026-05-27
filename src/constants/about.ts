import artistPortrait from "@/assets/images/tatuador.jpg";
import artistWork from "@/assets/images/gallery-3.png";
import type { StaticImageData } from "next/image";

export type AboutBullet = {
  id: string;
  text: string;
};

export type AboutContent = {
  sectionLabel: string;
  headline: string;
  name: string;
  bullets: AboutBullet[];
  badge: string;
  images: {
    portrait: StaticImageData;
    work: StaticImageData;
  };
};

export const aboutContent: AboutContent = {
  sectionLabel: "ABOUT US",
  headline: "Meet The Artist",
  name: "Wagner",
  bullets: [
    {
      id: "b1",
      text: "Before tattooing, I filled sketchbooks with bold, abstract designs. Black ink felt powerful and timeless; my love for drawing evolved into an obsession with skin as a living canvas.",
    },
    {
      id: "b2",
      text: "Tattooing is more than just skill — it requires discipline. I spent years honing clean lines and bold contrasts. In blackwork, every line has intention, making each piece unforgettable.",
    },
    {
      id: "b3",
      text: "Now, I work from my private studio; each piece is designed for focus and creativity. Clients feel comfortable and engaged in the process, ensuring every tattoo is meant to last a lifetime.",
    },
  ],
  badge: "10+ Years of Experience",
  images: {
    portrait: artistPortrait,
    work: artistWork,
  },
};

