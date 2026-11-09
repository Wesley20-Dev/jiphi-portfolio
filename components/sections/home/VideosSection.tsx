import { videos } from "@/data/videos";
import { PageSection } from "@/components/ui/PageSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { VideoCarousel } from "./VideoCarousel";

export function VideosSection() {
  return (
    <PageSection
      id="videos"
      className="relative isolate overflow-hidden bg-[radial-gradient(ellipse_at_90%_10%,#8750b540,transparent_38%),linear-gradient(120deg,#1e122d,#2a173b_55%,#211331)] text-white"
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-[60px] -right-2.5 -z-10 select-none font-serif text-[clamp(140px,22vw,230px)] font-medium uppercase leading-[.9] text-white/3 md:-bottom-[95px]"
      >
        Jiphi
      </span>
      <VideoCarousel
        videos={videos}
        heading={
          <SectionHeading
            kicker="Vidéos"
            title="À découvrir"
            description="Concerts, radio, télé et moments de création."
            tone="dark"
          />
        }
      />
    </PageSection>
  );
}
