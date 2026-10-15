import Image from "next/image";
import { aboutContent } from "@/data/about";
import { siteConfig } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

export function Bio() {
  const [intro, ...rest] = aboutContent.bio;

  return (
    <section>
      <Container size="narrow" className="grid gap-[22px] border-t border-line py-[42px] md:grid-cols-[290px_1fr] md:gap-[45px]">
        <Reveal>
          <div className="relative aspect-square w-[min(100%,280px)] overflow-hidden rounded-2xl bg-media md:w-auto">
            <Image src={aboutContent.portrait} alt={aboutContent.portraitAlt} fill sizes="290px" className="object-cover" />
          </div>
        </Reveal>
        <Reveal delay={150} className="space-y-4 text-muted">
          <h2 className="font-serif text-[34px] font-medium leading-[1.1] text-ink md:text-[40px]">{siteConfig.name}</h2>
          <p>{intro}</p>
          <blockquote className="border-l-2 border-brand pl-4 font-serif text-xl italic text-ink">
            « {siteConfig.motto} »
          </blockquote>
          {rest.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
