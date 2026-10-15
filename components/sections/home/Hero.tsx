import Image from "next/image";
import { PLACEHOLDER_IMAGE, siteConfig } from "@/data/site";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function Hero() {
  return (
    <section id="accueil" className="pb-[35px] pt-4 md:pb-[66px] md:pt-7">
      <Container>
        <div className="relative h-[560px] overflow-hidden rounded-[22px] bg-night md:h-[min(64vw,650px)] md:min-h-[560px]">
          <Image
            src={PLACEHOLDER_IMAGE}
            alt="Visuel temporaire pour le portfolio de Jiphi"
            fill
            preload
            sizes="(max-width: 1200px) 100vw, 1160px"
            className="animate-hero-zoom object-cover"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[linear-gradient(90deg,rgba(22,13,29,.76),rgba(22,13,29,.27)_58%,rgba(22,13,29,.05))]"
          />

          {/* Animation au chargement en pur CSS : le hero est visible même avant l'hydratation. */}
          <div className="absolute left-6 right-[22px] top-1/2 z-[1] max-w-[560px] -translate-y-1/2 text-white md:left-[clamp(28px,7vw,88px)] md:right-auto">
            <p className="animate-fade-up text-[10px] font-bold uppercase tracking-[.17em] [animation-delay:100ms]">
              {siteConfig.genre} · Univers artistique
            </p>
            <h1 className="my-3.5 animate-fade-up font-serif text-[72px] font-medium leading-[.95] tracking-[-.04em] [animation-delay:200ms] md:text-[clamp(64px,9vw,112px)]">
              {siteConfig.name}
            </h1>
            <p className="mb-2 max-w-[330px] animate-fade-up text-base [animation-delay:350ms] md:max-w-none md:text-[clamp(16px,2vw,21px)]">
              {siteConfig.role}
            </p>
            <p className="max-w-[450px] animate-fade-up text-xs text-[#eee4f3] [animation-delay:450ms] md:text-[13px]">
              {siteConfig.motto}
            </p>
            <div className="mt-[26px] flex animate-fade-up flex-wrap gap-3 [animation-delay:600ms]">
              <ButtonLink href="/#musique">Écouter ma musique</ButtonLink>
              <ButtonLink href="/a-propos" variant="outline-light">
                Découvrir mon parcours
              </ButtonLink>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
