import { About } from "@/components/sections/About";
import { Booking } from "@/components/sections/Booking";
import { Contacts } from "@/components/sections/Contacts";
import { Gallery } from "@/components/sections/Gallery";
import { Hero } from "@/components/sections/Hero";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Gallery />
      <Booking />
      <Contacts />
    </main>
  );
}
