import { aboutContent } from "@/data/about";
import { Container } from "@/components/ui/Container";
import { Kicker } from "@/components/ui/SectionHeading";

export function AboutIntro() {
  return (
    <section className="relative isolate overflow-hidden bg-[radial-gradient(circle_at_85%_20%,#8750b555,transparent_40%),linear-gradient(130deg,#241333,#57277d)] pb-8 pt-[120px] text-white md:pb-[45px] md:pt-[150px]">
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-10 -right-2.5 -z-10 select-none font-serif text-[clamp(120px,20vw,220px)] font-medium uppercase leading-[.9] text-white/4"
      >
        Jiphi
      </span>
      <Container size="narrow">
        <Kicker tone="dark" className="animate-fade-up [animation-delay:100ms]">
          À propos de l’artiste
        </Kicker>
        <h1 className="my-3 animate-fade-up font-serif text-[clamp(42px,7vw,76px)] font-medium leading-[1.05] tracking-[-.03em] [animation-delay:200ms]">
          {aboutContent.title}
        </h1>
        <p className="max-w-[650px] animate-fade-up text-[#e3d9ec] [animation-delay:350ms]">{aboutContent.intro}</p>
      </Container>
    </section>
  );
}
