export type NavLink = {
  label: string;
  /** Identifiant de la section sur la page d'accueil (ancre). */
  sectionId: string;
};

export type SocialLink = {
  label: string;
  href: string;
};

export type MediaItem = {
  id: string;
  title: string;
  meta: string;
  href: string;
  image: string;
  imageAlt?: string;
};

export type EventItem = {
  id: string;
  label: string;
  title: string;
  meta: string;
  description: string;
  image: string;
  imageAlt?: string;
};

export type Achievement = {
  id: string;
  title: string;
  description: string;
};

export type GalleryImage = {
  id: string;
  src: string;
  alt: string;
};
