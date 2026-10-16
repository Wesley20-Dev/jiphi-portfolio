import { achievements } from "@/data/about";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { RevealList } from "@/components/ui/RevealList";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Achievements() {
  return (
    <section>
      <Container size="narrow" className="py-12 md:py-[55px]">
        <SectionHeading kicker="Réalisations" title="Distinctions et moments marquants" className="mb-6" />
        {achievements.length > 0 ? (
          <RevealList aria-label="Distinctions et réalisations" className="grid gap-3.5 md:grid-cols-3">
            {achievements.map((achievement) => (
              <article
                key={achievement.id}
                className="h-full rounded-[14px] border border-line bg-paper p-5 transition duration-300 hover:-translate-y-1 hover:border-lilac-line"
              >
                <h3 className="font-serif text-[22px] font-medium">{achievement.title}</h3>
                <p className="text-xs text-muted">{achievement.description}</p>
              </article>
            ))}
          </RevealList>
        ) : (
          <Reveal>
            <p className="rounded-[14px] border border-line bg-paper p-5 text-muted">
              Les distinctions et réalisations seront ajoutées ici prochainement.
            </p>
          </Reveal>
        )}
      </Container>
    </section>
  );
}
