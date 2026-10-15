import type { EventItem } from "@/types/content";
import { PLACEHOLDER_IMAGE } from "./site";

// TODO: remplacer par les événements validés.
export const events: EventItem[] = [
  {
    id: "prochain-evenement",
    label: "Prochain événement",
    title: "Nom de l’événement",
    meta: "Date · Heure · Ville",
    description: "Les informations essentielles, sans réservation ni billetterie.",
    image: PLACEHOLDER_IMAGE,
  },
  {
    id: "deuxieme-evenement",
    label: "À venir",
    title: "Deuxième événement",
    meta: "Date · Heure · Ville",
    description:
      "Une courte description suffit. D’autres événements seront accessibles avec le slider.",
    image: PLACEHOLDER_IMAGE,
  },
];
