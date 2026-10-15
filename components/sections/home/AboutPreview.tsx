import Image from "next/image";
import { aboutContent } from "@/data/about";
import { PageSection } from "@/components/ui/PageSection";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TextLink } from "@/components/ui/TextLink";

export function AboutPreview() {
  return (
    <PageSection id="apropos">
      <div className="grid items-center gap-[23px] md:grid-cols-[300px_1fr] md:gap-[42px]">
        <Reveal>
          <div className="relative aspect-square w-[min(100%,290px)] overflow-hidden rounded-[17px] bg-media md:w-auto">
            <Image
              src={aboutContent.portrait}
              alt={aboutContent.portraitAlt}
              fill
              sizes="300px"
              className="object-cover"
            />
          </div>
        </Reveal>
        <Reveal delay={150} className="max-w-[650px]">
          <SectionHeading kicker="L’artiste" title="À propos de Jiphi" />
          <p className="mb-5 mt-3 text-[13px] text-muted">{aboutContent.summary}</p>
          <TextLink href="/a-propos">Découvrir son parcours, sa galerie et ses distinctions →</TextLink>
        </Reveal>
      </div>
    </PageSection>
  );
}
