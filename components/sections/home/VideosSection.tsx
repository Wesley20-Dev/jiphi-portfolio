import { videos } from "@/data/videos";
import { Carousel } from "@/components/ui/Carousel";
import { MediaCard } from "@/components/ui/MediaCard";
import { PageSection } from "@/components/ui/PageSection";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function VideosSection() {
  return (
    <PageSection id="videos">
      <Carousel
        label="Vidéos"
        heading={
          <SectionHeading
            kicker="En images"
            title="Vidéos"
            description="Concerts, sessions et moments de scène."
          />
        }
      >
        {videos.map((video) => (
          <MediaCard key={video.id} item={video} ctaLabel="Voir la vidéo" />
        ))}
      </Carousel>
    </PageSection>
  );
}
