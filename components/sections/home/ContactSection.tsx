import { siteConfig } from "@/data/site";
import { ContactForm } from "@/components/forms/ContactForm";
import { PageSection } from "@/components/ui/PageSection";
import { Reveal } from "@/components/ui/Reveal";
import { Kicker } from "@/components/ui/SectionHeading";

export function ContactSection() {
  return (
    <PageSection id="contact">
      <Reveal>
        <div className="grid gap-[22px] rounded-[20px] border border-lilac-line bg-lilac px-5 py-[25px] md:grid-cols-[.8fr_1.2fr] md:gap-11 md:p-[clamp(28px,5vw,54px)]">
          <div>
            <Kicker>Contact</Kicker>
            <h2 className="my-2 font-serif text-[clamp(36px,4vw,48px)] font-medium leading-[1.05]">
              Écrire à {siteConfig.name}
            </h2>
            <p className="max-w-[360px] text-xs text-muted">
              Une prestation, un concert ou une collaboration ? Envoyez simplement un message.
            </p>
          </div>
          <ContactForm email={siteConfig.email} />
        </div>
      </Reveal>
    </PageSection>
  );
}
