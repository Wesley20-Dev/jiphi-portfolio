import Image from "next/image";
import { aboutContent } from "@/data/about";
import { siteConfig, universeTags } from "@/data/site";
import { Icon } from "@/components/ui/Icon";
import { PageSection } from "@/components/ui/PageSection";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function AboutSection() {
  return (
    <PageSection
      id="parcours"
      className="bg-[linear-gradient(#f6f0fa,#fbf9fc)]"
      containerClassName="grid items-center gap-[38px] md:grid-cols-[1fr_1.1fr] md:gap-[50px]"
    >
      <Reveal className="relative">
        <div className="relative h-[330px] overflow-hidden rounded-[20px] bg-media shadow-[0_12px_32px_#2b183b17] md:h-[460px]">
          <Image
            src={aboutContent.portrait}
            alt={aboutContent.portraitAlt}
            fill
            sizes="(max-width: 768px) 100vw, 540px"
            className="reveal-zoom object-cover object-[center_35%] saturate-[.85]"
          />
        </div>
        <p className="absolute -left-1 bottom-5 -rotate-[5deg] rounded-xl bg-brand px-3.5 py-2.5 font-serif text-base italic text-white shadow-[0_8px_20px_#8750b55c] md:-left-3">
          {aboutContent.stamp}
        </p>
      </Reveal>

      <Reveal delay={150}>
        <SectionHeading kicker="Mon parcours" title={aboutContent.title} />
        <div className="mt-4 space-y-3 text-[15px] text-muted">
          {aboutContent.bio.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <blockquote className="my-6 border-l-2 border-brand pl-4 font-serif text-lg italic leading-snug text-ink">
          « {siteConfig.motto} »
        </blockquote>
        <ul aria-label="Univers musical" className="flex flex-wrap gap-2">
          {universeTags.map((tag) => (
            <li
              key={tag.label}
              className="inline-flex items-center gap-1.5 rounded-full border border-line bg-paper px-[13px] py-2 text-[11px] font-bold text-brand-dark"
            >
              <Icon name={tag.icon} className="text-brand" />
              {tag.label}
            </li>
          ))}
        </ul>
      </Reveal>
    </PageSection>
  );
}
