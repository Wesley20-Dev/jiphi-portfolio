import Image from "next/image";
import { aboutContent } from "@/data/about";
import { universeTags } from "@/data/site";
import { ButtonLink } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { PageSection } from "@/components/ui/PageSection";
import { Reveal } from "@/components/ui/Reveal";
import { RevealList } from "@/components/ui/RevealList";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function AboutPreview() {
  return (
    <PageSection
      id="apropos"
      className="bg-[linear-gradient(#f6f0fa,#fbf9fc)]"
      containerClassName="grid items-center gap-[25px] md:grid-cols-[.9fr_1.2fr] md:gap-[34px] lg:grid-cols-[.92fr_1.2fr_.68fr]"
    >
      <Reveal className="relative">
        <div className="relative h-80 overflow-hidden rounded-[20px] bg-media shadow-[0_12px_32px_#2b183b17] md:h-[330px]">
          <Image
            src={aboutContent.portrait}
            alt={aboutContent.portraitAlt}
            fill
            sizes="(max-width: 768px) 100vw, 360px"
            className="object-cover object-[center_35%] saturate-[.75]"
          />
        </div>
        <p className="absolute -left-1 bottom-5 -rotate-[5deg] rounded-xl bg-brand px-3.5 py-2.5 font-serif text-base italic text-white shadow-[0_8px_20px_#8750b55c] md:-left-3">
          {aboutContent.stamp}
        </p>
      </Reveal>

      <Reveal delay={150}>
        <SectionHeading kicker="À propos" title={aboutContent.title} />
        {aboutContent.summary.map((paragraph) => (
          <p key={paragraph} className="my-3 text-[13px] text-muted">
            {paragraph}
          </p>
        ))}
        <ButtonLink href="/a-propos" className="mt-2">
          Découvrir son parcours
          <Icon name="arrow-right" />
        </ButtonLink>
      </Reveal>

      <RevealList
        aria-label="Univers musical"
        className="grid gap-[13px] min-[391px]:grid-cols-2 md:col-span-2 md:flex md:flex-wrap md:gap-x-[22px] md:gap-y-3 lg:col-span-1 lg:grid lg:grid-cols-1"
      >
        {universeTags.map((tag) => (
          <span key={tag.label} className="flex items-center gap-2.5 text-xs font-bold text-brand-dark">
            <span className="grid size-[34px] place-items-center rounded-full border border-line bg-paper text-sm text-brand">
              <Icon name={tag.icon} />
            </span>
            {tag.label}
          </span>
        ))}
      </RevealList>
    </PageSection>
  );
}
