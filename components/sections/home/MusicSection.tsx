import { tracks } from "@/data/music";
import { Carousel } from "@/components/ui/Carousel";
import { MediaCard } from "@/components/ui/MediaCard";
import { PageSection } from "@/components/ui/PageSection";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function MusicSection() {
  return (
    <PageSection id="musique">
      <Carousel
        label="Musique"
        heading={
          <SectionHeading
            kicker="Sélection"
            title="Musique"
            description="Quelques créations à découvrir sur YouTube."
          />
        }
      >
        {tracks.map((track) => (
          <MediaCard key={track.id} item={track} ctaLabel="Écouter sur YouTube" />
        ))}
      </Carousel>
    </PageSection>
  );
}
