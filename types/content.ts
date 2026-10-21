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

export type MediaItem = {
  id: string;
  title: string;
  meta: string;
  href: string;
  /** Sans image, la carte affiche un dégradé avec le titre. */
  image?: string;
  imageAlt?: string;
};

export type GalleryImage = {
  id: string;
  src: string;
  alt: string;
};
