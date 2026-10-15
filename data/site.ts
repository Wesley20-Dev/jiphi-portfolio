import type { NavLink, SocialLink } from "@/types/content";

export const PLACEHOLDER_IMAGE = "/images/jiphi-placeholder.svg";

export const siteConfig = {
  name: "Jiphi",
  title: "Jiphi — Portfolio artistique",
  description: "Jiphi — artiste chanteur, interprète et instrumentaliste.",
  genre: "World Music",
  role: "Artiste chanteur, interprète et instrumentaliste.",
  motto:
    "La musique est une source d’inspiration et un métronome qui n’a ni race ni frontière.",
  // TODO: remplacer par l'adresse email réelle de Jiphi.
  email: "EMAIL_A_REMPLACER",
  copyrightYear: 2026,
} as const;

export const navLinks: NavLink[] = [
  { label: "Accueil", sectionId: "accueil" },
  { label: "Musique", sectionId: "musique" },
  { label: "Vidéos", sectionId: "videos" },
  { label: "Événements", sectionId: "evenements" },
  { label: "À propos", sectionId: "apropos" },
  { label: "Contact", sectionId: "contact" },
];

export const sectionIds = navLinks.map((link) => link.sectionId);

// TODO: remplacer par les liens et numéros réels.
export const socialLinks: SocialLink[] = [
  { label: "Instagram", href: "#" },
  { label: "Facebook", href: "#" },
  { label: "TikTok", href: "#" },
  { label: "YouTube", href: "#" },
  { label: "WhatsApp", href: "https://wa.me/" },
  { label: "Téléphone", href: "tel:+2250000000000" },
];
