import type { MediaItem } from "@/types/content";
import { PLACEHOLDER_IMAGE } from "./site";

// TODO: remplacer par les vraies vidéos.
export const videos: MediaItem[] = [
  {
    id: "performance-live",
    title: "Performance live",
    meta: "Concert · Performance",
    href: "https://youtube.com/",
    image: PLACEHOLDER_IMAGE,
  },
  {
    id: "session-musicale",
    title: "Session musicale",
    meta: "Musique · Création",
    href: "https://youtube.com/",
    image: PLACEHOLDER_IMAGE,
  },
  {
    id: "rencontre",
    title: "Rencontre",
    meta: "Interview",
    href: "https://youtube.com/",
    image: PLACEHOLDER_IMAGE,
  },
];
