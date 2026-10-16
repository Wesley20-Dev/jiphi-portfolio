import type { EventItem } from "@/types/content";
import { HERO_IMAGE } from "./site";

// TODO: remplacer par les événements validés.
export const events: EventItem[] = [
  {
    id: "prochain-evenement",
    label: "Prochaine date",
    title: "Nom de l’événement",
    meta: "Date · Heure · Ville",
    description: "Les informations essentielles, sans réservation ni billetterie.",
    image: HERO_IMAGE,
    imageAlt: "Jiphi jouant de la guitare sur scène",
  },
  {
    id: "deuxieme-evenement",
    label: "À annoncer",
    title: "Deuxième événement",
    meta: "Date · Heure · Ville",
    description:
      "Suivez les réseaux sociaux pour connaître les prochaines scènes.",
    image: HERO_IMAGE,
    imageAlt: "Jiphi jouant de la guitare sur scène",
  },
];
