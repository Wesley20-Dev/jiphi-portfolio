import { gallery } from "@/data/about";
import { PageSection } from "@/components/ui/PageSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GalleryGrid } from "./GalleryGrid";

export function GallerySection() {
  return (
    <PageSection id="galerie" className="bg-[#f4edf8]">
      <SectionHeading
        kicker="Galerie"
        title="En images"
        description="Quelques moments de scène et de création."
        className="mb-6"
      />
      <GalleryGrid images={gallery} />
    </PageSection>
  );
}
