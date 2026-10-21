import type { GalleryImage } from "@/types/content";
import { HERO_IMAGE } from "./site";

export const aboutContent = {
  portrait: HERO_IMAGE,
  portraitAlt: "Jiphi avec sa guitare",
  stamp: "La musique nous rassemble",
  title: "Une voix, une vision.",
  // TODO: remplacer par le texte de Jiphi sur son parcours et son univers.
  bio: [
    "Jiphi est chanteur et interprète. Étudiant en musique, il construit son parcours entre apprentissage, scène et rencontres, porté par une curiosité pour les musiques du monde.",
    "À travers ses interprétations, il invite chacun à voyager, à ressentir et à découvrir une musique sans frontières.",
  ],
} as const;

// TODO: remplacer par les photos de Jiphi.
export const gallery: GalleryImage[] = [
  { id: "photo-1", src: HERO_IMAGE, alt: "Jiphi avec sa guitare" },
  { id: "photo-2", src: HERO_IMAGE, alt: "Jiphi en performance musicale" },
  { id: "photo-3", src: HERO_IMAGE, alt: "Portrait de Jiphi" },
];
