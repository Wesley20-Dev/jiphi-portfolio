import { achievements } from "@/data/about";
import { Container } from "@/components/ui/Container";
import { RevealList } from "@/components/ui/RevealList";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Achievements() {
  return (
    <section>
      <Container size="narrow" className="border-t border-line py-[58px]">
        <SectionHeading kicker="Parcours" title="Distinctions & réalisations" className="mb-5" />
        <RevealList aria-label="Distinctions et réalisations" className="grid gap-3.5 md:grid-cols-3">
          {achievements.map((achievement) => (
            <article
              key={achievement.id}
              className="h-full rounded-[13px] border border-line bg-paper p-5 transition duration-300 hover:-translate-y-1 hover:border-lilac-line"
            >
              <h3 className="font-serif text-[22px] font-medium">{achievement.title}</h3>
              <p className="text-[11px] text-muted">{achievement.description}</p>
            </article>
          ))}
        </RevealList>
      </Container>
    </section>
  );
}
