import type { IconName } from "@/components/ui/Icon";

export type NavLink = {
  label: string;
  /** Identifiant de la section sur la page d'accueil (ancre). */
  sectionId: string;
};

export type SocialLink = {
  label: string;
  href: string;
  icon: IconName;
};

export type UniverseTag = {
  label: string;
  icon: IconName;
};

export type Video = {
  /** Identifiant YouTube, ex. « 62tMckThdhE » dans youtube.com/watch?v=62tMckThdhE. */
  youtubeId: string;
  title: string;
  meta: string;
  /** Aperçu choisi à la main, à la place de la miniature YouTube. */
  poster?: string;
  /** Vidéo au format paysage (16:9). Par défaut : format vertical des Shorts. */
  landscape?: boolean;
};

export type GalleryImage = {
  id: string;
  src: string;
  alt: string;
};
