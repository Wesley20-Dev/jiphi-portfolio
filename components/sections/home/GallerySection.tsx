import Image from "next/image";
import { gallery } from "@/data/about";
import { PageSection } from "@/components/ui/PageSection";
import { RevealList } from "@/components/ui/RevealList";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function GallerySection() {
  return (
    <PageSection id="galerie" className="bg-[#f4edf8]">
      <SectionHeading
        kicker="Galerie"
        title="En images"
        description="Quelques moments de scène et de création."
        className="mb-6"
      />
      <RevealList aria-label="Galerie photos" className="grid grid-cols-2 gap-[15px] md:grid-cols-3">
        {gallery.map((photo) => (
          <div key={photo.id} className="group relative h-[170px] overflow-hidden rounded-[14px] bg-media md:h-[240px]">
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              sizes="(max-width: 768px) 50vw, 380px"
              className="object-cover transition-transform duration-500 group-hover:scale-[1.05]"
            />
          </div>
        ))}
      </RevealList>
    </PageSection>
  );
}
