import { aboutContent } from "@/data/about";
import { Container } from "@/components/ui/Container";
import { Kicker } from "@/components/ui/SectionHeading";

export function AboutIntro() {
  return (
    <section className="pb-[55px] pt-[75px]">
      <Container size="narrow">
        <div className="max-w-[800px]">
          <Kicker className="animate-fade-up [animation-delay:100ms]">À propos</Kicker>
          <h1 className="my-3 animate-fade-up font-serif text-[clamp(48px,7vw,80px)] font-medium leading-[1.1] [animation-delay:200ms]">
            L’artiste derrière la musique.
          </h1>
          <p className="animate-fade-up text-muted [animation-delay:350ms]">{aboutContent.intro}</p>
        </div>
      </Container>
    </section>
  );
}
