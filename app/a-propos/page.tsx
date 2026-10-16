import type { Metadata } from "next";
import { AboutIntro } from "@/components/sections/about/AboutIntro";
import { Achievements } from "@/components/sections/about/Achievements";
import { Bio } from "@/components/sections/about/Bio";
import { ContactCta } from "@/components/sections/about/ContactCta";
import { Gallery } from "@/components/sections/about/Gallery";

export const metadata: Metadata = {
  title: "À propos",
  description: "Le parcours, la vision artistique et les photographies de Jiphi.",
};

export default function AboutPage() {
  return (
    <>
      <AboutIntro />
      <Bio />
      <Gallery />
      <Achievements />
      <ContactCta />
    </>
  );
}
