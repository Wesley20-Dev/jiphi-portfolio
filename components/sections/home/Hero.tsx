import { getImageProps } from "next/image";
import { HERO_IMAGE, HERO_IMAGE_MOBILE, siteConfig } from "@/data/site";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";

// Art direction : bannière large sur desktop, version portrait dédiée sur mobile
// (la bannière large, étirée en hauteur, devenait floue).
const heroCommon = { alt: "", fill: true, sizes: "100vw", fetchPriority: "high" } as const;
const {
  props: { srcSet: desktopSrcSet },
} = getImageProps({ ...heroCommon, src: HERO_IMAGE, quality: 80 });
const {
  props: { srcSet: mobileSrcSet, ...heroImgProps },
} = getImageProps({ ...heroCommon, src: HERO_IMAGE_MOBILE, quality: 80 });

export function Hero() {
  return (
    <section id="accueil" className="relative isolate min-h-[780px] overflow-hidden bg-deep text-white md:min-h-[610px] lg:min-h-[min(760px,100svh)]">
      <picture>
        <source media="(min-width: 768px)" srcSet={desktopSrcSet} />
        <source srcSet={mobileSrcSet} />
        {/* eslint-disable-next-line jsx-a11y/alt-text */}
        <img
          {...heroImgProps}
          className="-z-20 animate-hero-zoom object-cover object-top saturate-[.75] md:object-[center_42%]"
        />
      </picture>
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(20,10,34,.45),transparent_18%,transparent_42%,rgba(20,10,34,.7)_56%,#140a22_80%)] md:bg-[linear-gradient(90deg,rgba(22,11,36,.94),rgba(30,14,45,.75)_32%,rgba(30,14,45,.14)_72%,rgba(25,12,40,.48)),linear-gradient(0deg,rgba(21,11,34,.6),transparent_48%),radial-gradient(circle_at_82%_15%,rgba(135,80,181,.35),transparent_35%)]"
      />

      {/* Animation au chargement en pur CSS : le hero est visible même avant l'hydratation. */}
      <Container className="flex justify-end pb-[70px] pt-[400px] md:pb-[100px] md:pt-[157px]">
        <div className="max-w-[600px] mt-[30px]">
          <p className="flex animate-fade-up items-center gap-2.5 text-[11px] font-bold uppercase tracking-[.08em] text-lilac-bright [animation-delay:100ms] after:h-px after:w-[52px] after:bg-lilac-bright/45 after:content-['']">
            {siteConfig.genre}
          </p>
          <h1 className="mb-5 mt-3 animate-fade-up font-serif text-[clamp(72px,18vw,100px)] font-medium leading-[.84] tracking-[-.055em] [animation-delay:200ms] md:text-[clamp(78px,10vw,132px)]">
            {siteConfig.name}
          </h1>
          <p className="mb-3.5 max-w-[290px] animate-fade-up text-[15px] font-semibold [animation-delay:350ms] md:max-w-none">
            {siteConfig.role}
          </p>
          <p className="mb-[25px] max-w-[310px] animate-fade-up font-serif text-sm italic leading-[1.7] text-[#eee5f2] [animation-delay:450ms] md:max-w-[420px] md:text-[15px]">
            « {siteConfig.motto} »
          </p>
          <div className="flex max-w-[250px] animate-fade-up flex-col gap-3 [animation-delay:600ms] min-[391px]:max-w-none min-[391px]:flex-row min-[391px]:flex-wrap">
            <ButtonLink href="/#parcours">
              Découvrir mon parcours
              <Icon name="arrow-right" />
            </ButtonLink>
            <ButtonLink href="/#contact" variant="outline-light">
              Me contacter
              <Icon name="arrow-up-right" />
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
