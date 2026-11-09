import type { Video } from "@/types/content";

// Vidéos de la chaîne YouTube de Jiphi, en attendant des captations de meilleure qualité.
export const videos: Video[] = [
  {
    youtubeId: "CWYTopy82Sg",
    title: "The Voice Afrique",
    meta: "Télé · Auditions à l'aveugle",
    // La miniature YouTube montre son entourage : on garde Jiphi au micro.
    poster: "/images/videos/the-voice.jpg",
    landscape: true,
  },
  {
    youtubeId: "62tMckThdhE",
    title: "Concert de Tiken Jah Fakoly",
    meta: "Concert · Chœur de 500 voix",
  },
  {
    youtubeId: "GoFJmhbQFhY",
    title: "MiWA en a cappella",
    meta: "Live · Life Radio",
  },
  {
    youtubeId: "m9b-eubXcVc",
    title: "Chante ton kiff",
    meta: "Télé · NCI",
  },
  {
    youtubeId: "LYSTRPaRS4E",
    title: "Ayoka",
    meta: "Reprise · Dobet Gnahoré",
    landscape: true,
  },
];
