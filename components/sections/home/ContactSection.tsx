import Image from "next/image";
import { HERO_IMAGE, phoneHref, siteConfig, whatsappHref } from "@/data/site";
import { ContactForm } from "@/components/forms/ContactForm";
import { Icon, type IconName } from "@/components/ui/Icon";
import { PageSection } from "@/components/ui/PageSection";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const contactLinks: { label: string; href: string; icon: IconName }[] = [
  { label: siteConfig.email, href: `mailto:${siteConfig.email}`, icon: "mail" },
  { label: siteConfig.phone, href: phoneHref, icon: "phone" },
  { label: "WhatsApp", href: whatsappHref, icon: "whatsapp" },
];

export function ContactSection() {
  return (
    <PageSection
      id="contact"
      className="relative isolate overflow-hidden bg-deep-2 text-white"
      containerClassName="grid items-center gap-7 md:grid-cols-[.9fr_1.1fr] md:gap-[35px] lg:gap-[65px]"
    >
      <Image src={HERO_IMAGE} alt="" fill sizes="100vw" className="-z-20 object-cover object-[center_64%]" />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,#1a0e28f7,#2a143de8)]" />

      <Reveal>
        <SectionHeading kicker="Contact" title="Écrivez-moi." tone="dark" className="md:[&_h2]:text-5xl" />
        <p className="mt-2 max-w-[380px] text-[13px] text-white/72">
          Une question, une collaboration ou une proposition de prestation ? Je serai ravi d’échanger avec vous.
        </p>
        <ul className="mt-6 grid gap-2.5">
          {contactLinks.map((link) => (
            <li key={link.icon}>
              <a
                href={link.href}
                className="group inline-flex items-center gap-2.5 text-xs text-white/88 transition-colors hover:text-white"
              >
                <span className="grid size-[34px] place-items-center rounded-full bg-lilac-bright/20 text-sm text-[#d8b8ff] transition-colors group-hover:bg-lilac-bright group-hover:text-[#27133c]">
                  <Icon name={link.icon} />
                </span>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </Reveal>

      <Reveal delay={150}>
        <ContactForm email={siteConfig.email} />
      </Reveal>
    </PageSection>
  );
}
