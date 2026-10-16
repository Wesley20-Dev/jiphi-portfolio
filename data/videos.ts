import type { MediaItem } from "@/types/content";
import { HERO_IMAGE } from "./site";

// TODO: remplacer par les vraies vidéos et leurs miniatures.
export const videos: MediaItem[] = [
  {
    id: "performance-live",
    title: "Performance live",
    meta: "Concert · Performance",
    href: "https://youtube.com/",
    image: HERO_IMAGE,
    imageAlt: "Jiphi en pleine performance",
  },
  { id: "session-musicale", title: "Session musicale", meta: "Musique · Création", href: "https://youtube.com/" },
  { id: "rencontre", title: "Rencontre", meta: "Interview", href: "https://youtube.com/" },
  { id: "coulisses", title: "Dans les coulisses", meta: "Behind the scenes", href: "https://youtube.com/" },
];
