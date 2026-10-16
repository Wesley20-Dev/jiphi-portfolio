import { siteConfig } from "@/data/site";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";

export function ContactCta() {
  return (
    <section className="pb-14 md:pb-[72px]">
      <Container size="narrow">
        <Reveal>
          <div className="flex flex-col items-start justify-between gap-5 rounded-[20px] bg-[radial-gradient(ellipse_at_90%_10%,#8750b566,transparent_45%),linear-gradient(120deg,#1e122d,#2a173b)] p-7 text-white md:flex-row md:items-center md:p-10">
            <div>
              <h2 className="font-serif text-[30px] font-medium leading-tight md:text-[36px]">Envie de collaborer ?</h2>
              <p className="mt-1 text-[13px] text-white/70">
                Concert, prestation ou projet commun : {siteConfig.name} sera ravi d’échanger avec vous.
              </p>
            </div>
            <ButtonLink href="/#contact" className="shrink-0">
              Contacter {siteConfig.name}
              <Icon name="arrow-up-right" />
            </ButtonLink>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
