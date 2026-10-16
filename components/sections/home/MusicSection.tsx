import { tracks } from "@/data/music";
import { Carousel } from "@/components/ui/Carousel";
import { MediaCard } from "@/components/ui/MediaCard";
import { PageSection } from "@/components/ui/PageSection";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function MusicSection() {
  return (
    <PageSection id="musique" className="bg-[linear-gradient(#fbf9fc,#f5eff8)]">
      <Carousel
        label="Musique"
        heading={
          <SectionHeading
            kicker="Musique"
            title="Quelques titres"
            description="Plongez dans l’univers de Jiphi à travers sa musique."
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
