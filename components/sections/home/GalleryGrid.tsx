"use client";

import Image from "next/image";
import { useState } from "react";
import type { GalleryImage } from "@/types/content";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Lightbox } from "@/components/ui/Lightbox";
import { RevealList } from "@/components/ui/RevealList";

/** Deux rangées de trois sur ordinateur. */
const PREVIEW_COUNT = 8;

const GRID_ID = "galerie-photos";

export function GalleryGrid({ images }: { images: GalleryImage[] }) {
  const [expanded, setExpanded] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const visible = expanded ? images : images.slice(0, PREVIEW_COUNT);
  const hiddenCount = images.length - PREVIEW_COUNT;

  return (
    <>
      <div id={GRID_ID}>
        <RevealList aria-label="Galerie photos" className="grid grid-cols-2 gap-2.5 md:grid-cols-4 md:gap-3.5">
          {visible.map((photo, index) => (
            <button
              key={photo.id}
              type="button"
              onClick={() => setOpenIndex(index)}
              aria-label={`Agrandir la photo : ${photo.alt}`}
              className="group relative block aspect-square w-full cursor-zoom-in overflow-hidden rounded-[6px] bg-media focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
            >
              <Image
                src={photo.src}
                alt=""
                fill
                sizes="(max-width: 768px) 50vw, 380px"
                className="object-cover transition-transform duration-500 group-hover:scale-[1.05]"
              />
              <span
                aria-hidden="true"
                className="absolute inset-0 grid place-items-center bg-deep/0 text-white opacity-0 transition duration-300 group-hover:bg-deep/35 group-hover:opacity-100"
              >
                <span className="grid size-11 place-items-center rounded-full bg-brand/90 shadow-[0_8px_22px_#8750b54d]">
                  <Icon name="arrow-up-right" className="text-lg" />
                </span>
              </span>
            </button>
          ))}
        </RevealList>
      </div>

      {hiddenCount > 0 && (
        <div className="mt-8 flex justify-center">
          <Button aria-expanded={expanded} aria-controls={GRID_ID} onClick={() => setExpanded((value) => !value)}>
            {expanded ? "Afficher moins" : `Voir toutes les photos (${images.length})`}
            <Icon name="chevron-down" className={expanded ? "rotate-180 text-base" : "text-base"} />
          </Button>
        </div>
      )}

      <Lightbox images={images} index={openIndex} onIndexChange={setOpenIndex} onClose={() => setOpenIndex(null)} />
    </>
  );
}
