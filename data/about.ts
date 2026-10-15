import type { Achievement, GalleryImage } from "@/types/content";
import { PLACEHOLDER_IMAGE } from "./site";

export const aboutContent = {
  portrait: PLACEHOLDER_IMAGE,
  portraitAlt: "Visuel de Jiphi",
  summary:
    "Artiste chanteur, interprète et instrumentaliste, Jiphi développe un univers de World Music où se rencontrent voyage, fusion, élégance et cultures.",
  intro:
    "Le parcours, la vision artistique, les distinctions et les photographies de Jiphi, présentés simplement.",
  bio: [
    "Artiste chanteur, interprète et instrumentaliste, Jiphi développe un univers de World Music nourri par le voyage, la fusion, l’élégance et le panafricanisme.",
    "Le parcours détaillé sera ajouté lorsque la biographie définitive aura été validée avec l’artiste.",
  ],
} as const;

// TODO: compléter avec des informations validées.
export const achievements: Achievement[] = [
  { id: "distinction", title: "Distinction", description: "À compléter avec une information validée." },
  { id: "recompense", title: "Récompense", description: "À compléter avec une information validée." },
  { id: "projet", title: "Projet", description: "À compléter avec une information validée." },
];

// TODO: remplacer par les photos de Jiphi.
export const gallery: GalleryImage[] = [
  { id: "photo-1", src: PLACEHOLDER_IMAGE, alt: "Photo de Jiphi 1" },
  { id: "photo-2", src: PLACEHOLDER_IMAGE, alt: "Photo de Jiphi 2" },
  { id: "photo-3", src: PLACEHOLDER_IMAGE, alt: "Photo de Jiphi 3" },
  { id: "photo-4", src: PLACEHOLDER_IMAGE, alt: "Photo de Jiphi 4" },
];
