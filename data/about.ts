import type { Achievement, GalleryImage } from "@/types/content";
import { HERO_IMAGE } from "./site";

export const aboutContent = {
  portrait: HERO_IMAGE,
  portraitAlt: "Jiphi avec sa guitare",
  stamp: "La musique nous rassemble",
  title: "Une voix, une vision.",
  summary: [
    "Jiphi est un artiste chanteur, interprète et instrumentaliste qui explore la musique comme un espace de rencontre entre les cultures, les émotions et les histoires.",
    "À travers son univers, il invite chacun à voyager, à ressentir et à découvrir une musique sans frontières.",
  ],
  intro: "La musique comme un voyage, une rencontre et un langage qui dépasse les frontières.",
  bio: [
    "Jiphi est un artiste chanteur, interprète et instrumentaliste. Son approche musicale s’inscrit dans un esprit d’ouverture, de partage et de découverte des cultures.",
    "Cette page sera enrichie avec son histoire et les étapes marquantes de son parcours, à partir des informations confirmées par l’artiste.",
  ],
} as const;

// TODO: ajouter les distinctions validées. Tant que la liste est vide, une note s'affiche à la place.
export const achievements: Achievement[] = [];

// TODO: remplacer par les photos de Jiphi.
export const gallery: GalleryImage[] = [
  { id: "photo-1", src: HERO_IMAGE, alt: "Jiphi avec sa guitare" },
  { id: "photo-2", src: HERO_IMAGE, alt: "Jiphi en performance musicale" },
  { id: "photo-3", src: HERO_IMAGE, alt: "Portrait de Jiphi" },
];
