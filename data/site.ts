import type { NavLink, SocialLink, UniverseTag } from "@/types/content";

export const HERO_IMAGE = "/images/hero_baner.jpg";
export const HERO_IMAGE_MOBILE = "/images/hero_mobile_baner.jpg";

export const siteConfig = {
  name: "Jiphi",
  title: "Jiphi — Univers musical",
  description: "Découvrez le parcours et l’univers de Jiphi, chanteur, interprète et étudiant en musique.",
  tagline: "Univers musical",
  genre: "World Music",
  role: "Chanteur, interprète qui baigne faisant de la WORD music",
  motto:
    "La musique est une source d’inspiration et un métronome qui n’a ni race ni frontière.",
  email: "jeanphilippenehemiekouassi@gmail.com",
  phone: "+225 05 06 59 83 23",
  copyrightYear: 2026,
} as const;

export const phoneHref = `tel:${siteConfig.phone.replace(/\s/g, "")}`;

/** WhatsApp attend le numéro international sans « + » ni espaces. */
export const whatsappHref = `https://wa.me/${siteConfig.phone.replace(/\D/g, "")}`;

export const navLinks: NavLink[] = [
  { label: "Accueil", sectionId: "accueil" },
  { label: "Parcours", sectionId: "parcours" },
  { label: "Vidéos", sectionId: "videos" },
  { label: "Galerie", sectionId: "galerie" },
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

const allSocialLinks: SocialLink[] = [
  { label: "Instagram", href: "https://www.instagram.com/jiphi_jiphi/", icon: "instagram" },
  { label: "Facebook", href: "https://www.facebook.com/share/1Cv9tGY1ie/", icon: "facebook" },
  { label: "TikTok", href: "https://www.tiktok.com/@jiphi01", icon: "tiktok" },
  { label: "YouTube", href: "https://www.youtube.com/channel/UCzWjjQjraVIGIN1EGjxG7XQ", icon: "youtube" },
  { label: "WhatsApp", href: whatsappHref, icon: "whatsapp" },
  { label: "Téléphone", href: phoneHref, icon: "phone" },
];

export const socialLinks = allSocialLinks.filter((link) => link.href !== "#");
