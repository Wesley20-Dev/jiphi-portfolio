import type { GalleryImage } from "@/types/content";
import { HERO_IMAGE } from "./site";

export const aboutContent = {
  portrait: HERO_IMAGE,
  portraitAlt: "Jiphi avec sa guitare",
  stamp: "La musique nous rassemble",
  title: "Une voix, une vision.",
  // TODO: remplacer par le texte de Jiphi sur son parcours et son univers.
  bio: [
    "Jiphi est chanteur et interprète. Étudiant en musique, il construit son parcours entre apprentissage, scène et rencontres, porté par une curiosité pour les musiques du monde.",
    "À travers ses interprétations, il invite chacun à voyager, à ressentir et à découvrir une musique sans frontières.",
  ],
} as const;

const GALLERY_DIR = "/images/galerie";

/** Les premières photos sont celles affichées avant « Voir toutes les photos ». */
export const gallery: GalleryImage[] = [
  { id: "foule", src: `${GALLERY_DIR}/jiphi-07.jpg`, alt: "Jiphi à la guitare, de dos, saluant une foule immense" },
  { id: "voice-micro", src: `${GALLERY_DIR}/jiphi-09.jpg`, alt: "Jiphi chantant sur la scène de The Voice Afrique" },
  { id: "studio-guitare", src: `${GALLERY_DIR}/jiphi-13.jpg`, alt: "Jiphi chantant à la guitare en studio, en noir et blanc" },
  { id: "radio-guitare", src: `${GALLERY_DIR}/jiphi-04.jpg`, alt: "Jiphi jouant de la guitare dans un studio radio" },
  { id: "scene-duo", src: `${GALLERY_DIR}/jiphi-16.jpg`, alt: "Jiphi sur scène aux côtés d'une chanteuse" },
  { id: "plateau-tv", src: `${GALLERY_DIR}/jiphi-01.jpg`, alt: "Jiphi et deux invités sur un plateau de télévision" },
  { id: "voice-coulisses", src: `${GALLERY_DIR}/jiphi-08.jpg`, alt: "Jiphi en coulisses de The Voice Afrique" },
  { id: "studio-calebasse", src: `${GALLERY_DIR}/jiphi-11.jpg`, alt: "Jiphi chantant en jouant de la calebasse, en noir et blanc" },
  { id: "radio-equipe", src: `${GALLERY_DIR}/jiphi-03.jpg`, alt: "Jiphi, guitare en main, entouré de l'équipe d'une radio" },
  { id: "studio-portrait", src: `${GALLERY_DIR}/jiphi-14.jpg`, alt: "Jiphi au micro, guitare sur les genoux, en noir et blanc" },
  { id: "groupe-blanc", src: `${GALLERY_DIR}/jiphi-15.jpg`, alt: "Jiphi avec un groupe vêtu de blanc et d'écharpes orange" },
  { id: "radio-interview", src: `${GALLERY_DIR}/jiphi-06.jpg`, alt: "Interview de Jiphi en studio radio" },
  { id: "studio-scene", src: `${GALLERY_DIR}/jiphi-10.jpg`, alt: "Jiphi en concert acoustique, en noir et blanc" },
  { id: "studio-calebasse-2", src: `${GALLERY_DIR}/jiphi-12.jpg`, alt: "Jiphi à la calebasse devant le micro, en noir et blanc" },
  { id: "scene-partagee", src: `${GALLERY_DIR}/jiphi-18.jpg`, alt: "Jiphi posant avec deux artistes après une scène partagée" },
  { id: "plateau-tv-2", src: `${GALLERY_DIR}/jiphi-02.jpg`, alt: "Jiphi souriant sur un plateau de télévision" },
  { id: "studio-guitare-2", src: `${GALLERY_DIR}/jiphi-17.jpg`, alt: "Jiphi chantant à la guitare, en noir et blanc" },
  { id: "radio-equipe-2", src: `${GALLERY_DIR}/jiphi-05.jpg`, alt: "Jiphi et l'équipe d'une radio posant ensemble" },
  // { id: "studio-micro", src: `${GALLERY_DIR}/jiphi-19.jpg`, alt: "Portrait de Jiphi au micro, en noir et blanc" },
];
