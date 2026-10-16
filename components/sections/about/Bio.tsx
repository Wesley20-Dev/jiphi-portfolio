import Image from "next/image";
import { aboutContent } from "@/data/about";
import { siteConfig, universeTags } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Bio() {
  return (
    <section>
      <Container size="narrow" className="grid items-center gap-[38px] py-[38px] md:grid-cols-[1fr_1.1fr] md:py-[55px]">
        <Reveal className="relative">
          <div className="relative h-[330px] overflow-hidden rounded-[20px] bg-media shadow-[0_12px_32px_#2b183b17] md:h-[430px]">
            <Image
              src={aboutContent.portrait}
              alt={aboutContent.portraitAlt}
              fill
              preload
              sizes="(max-width: 768px) 100vw, 500px"
              className="object-cover object-[center_35%]"
            />
          </div>
          <p className="absolute -left-1 bottom-5 -rotate-[5deg] rounded-xl bg-brand px-3.5 py-2.5 font-serif text-base italic text-white shadow-[0_8px_20px_#8750b55c] md:-left-3">
            {aboutContent.stamp}
          </p>
        </Reveal>

        <Reveal delay={150}>
          <SectionHeading kicker="Mon parcours" title={`L’univers de ${siteConfig.name}`} />
          <div className="mt-4 space-y-3 text-muted">
            {aboutContent.bio.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <blockquote className="my-5 border-l-2 border-brand pl-4 font-serif text-lg italic leading-snug text-ink">
            « {siteConfig.motto} »
          </blockquote>
          <ul aria-label="Univers musical" className="flex flex-wrap gap-2">
            {universeTags.map((tag) => (
              <li
                key={tag.label}
                className="inline-flex items-center gap-1.5 rounded-full bg-lilac px-[13px] py-2 text-[11px] font-bold text-brand-dark"
              >
                <Icon name={tag.icon} className="text-brand" />
                {tag.label}
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}
