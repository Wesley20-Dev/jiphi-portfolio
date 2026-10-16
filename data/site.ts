import type { NavLink, SocialLink, UniverseTag } from "@/types/content";

export const HERO_IMAGE = "/images/jiphi-hero.jpg";

export const siteConfig = {
  name: "Jiphi",
  title: "Jiphi — Univers musical",
  description: "Découvrez l’univers musical de Jiphi, artiste chanteur, interprète et instrumentaliste.",
  tagline: "Univers musical",
  genre: "World Music",
  role: "Artiste chanteur, interprète et instrumentaliste.",
  motto:
    "La musique est une source d’inspiration et un métronome qui n’a ni race ni frontière.",
  // TODO: remplacer par les coordonnées réelles de Jiphi.
  email: "EMAIL_A_REMPLACER",
  phone: "+225 00 00 00 00 00",
  whatsapp: "https://wa.me/",
  copyrightYear: 2026,
} as const;

export const phoneHref = `tel:${siteConfig.phone.replace(/\s/g, "")}`;

export const navLinks: NavLink[] = [
  { label: "Accueil", sectionId: "accueil" },
  { label: "Musique", sectionId: "musique" },
  { label: "Vidéos", sectionId: "videos" },
  { label: "Événements", sectionId: "evenements" },
  { label: "À propos", sectionId: "apropos" },
  { label: "Contact", sectionId: "contact" },
];

export const sectionIds = navLinks.map((link) => link.sectionId);

export const universeTags: UniverseTag[] = [
  { label: "World Music", icon: "music" },
  { label: "Voyage", icon: "globe" },
  { label: "Espoir", icon: "heart" },
  { label: "Fusion", icon: "layers" },
  { label: "Panafricanisme", icon: "sparkle" },
];

// TODO: remplacer les « # » par les liens réels.
export const socialLinks: SocialLink[] = [
  { label: "Instagram", href: "#", icon: "instagram" },
  { label: "Facebook", href: "#", icon: "facebook" },
  { label: "TikTok", href: "#", icon: "tiktok" },
  { label: "YouTube", href: "#", icon: "youtube" },
  { label: "WhatsApp", href: siteConfig.whatsapp, icon: "whatsapp" },
  { label: "Téléphone", href: phoneHref, icon: "phone" },
];
