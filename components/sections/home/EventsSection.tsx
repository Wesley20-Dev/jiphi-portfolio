import { events } from "@/data/events";
import { Carousel } from "@/components/ui/Carousel";
import { EventCard } from "@/components/ui/EventCard";
import { PageSection } from "@/components/ui/PageSection";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function EventsSection() {
  return (
    <PageSection id="evenements">
      <Carousel label="Événements" variant="wide" heading={<SectionHeading kicker="Agenda" title="Événements" />}>
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </Carousel>
    </PageSection>
  );
}
