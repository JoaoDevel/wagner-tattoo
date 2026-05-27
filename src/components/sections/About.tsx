import { SectionContainer } from "@/components/ui/SectionContainer";
import { AboutContent } from "@/components/sections/AboutContent";
import { AboutImage } from "@/components/sections/AboutImage";
import { AboutStats } from "@/components/sections/AboutStats";
import { about } from "@/constants/classes";
import { aboutContent } from "@/constants/about";

export function About() {
  return (
    <SectionContainer id="about" className={about.section}>
      <div className={about.grid}>
        <div className={about.left}>
          <AboutImage
            portrait={aboutContent.images.portrait}
            portraitAlt="Retrato del artista del estudio"
            topTitle={aboutContent.headline}
            name={aboutContent.name}
          />
        </div>

        <div className={about.right}>
          <AboutContent
            sectionLabel={aboutContent.sectionLabel}
            headline={aboutContent.headline}
            bullets={aboutContent.bullets}
          />

          <AboutStats
            workImage={aboutContent.images.work}
            workAlt="Escena del artista trabajando"
            badge={aboutContent.badge}
          />
        </div>
      </div>
    </SectionContainer>
  );
}

