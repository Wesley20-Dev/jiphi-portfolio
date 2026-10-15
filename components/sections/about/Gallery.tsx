import Image from "next/image";
import { gallery } from "@/data/about";
import { Container } from "@/components/ui/Container";
import { RevealList } from "@/components/ui/RevealList";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Gallery() {
  return (
    <section>
      <Container size="narrow" className="border-t border-line py-[58px]">
        <SectionHeading kicker="Images" title="Galerie" className="mb-5" />
        <RevealList aria-label="Galerie photos" className="grid grid-cols-2 gap-3 md:grid-cols-4">
          {gallery.map((photo) => (
            <div key={photo.id} className="group relative aspect-square overflow-hidden rounded-[11px] bg-media">
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(max-width: 768px) 50vw, 260px"
                className="object-cover transition-transform duration-300 group-hover:scale-[1.04]"
              />
            </div>
          ))}
        </RevealList>
      </Container>
    </section>
  );
}
