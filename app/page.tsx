import { AboutSection } from "@/components/sections/home/AboutSection";
import { ContactSection } from "@/components/sections/home/ContactSection";
import { GallerySection } from "@/components/sections/home/GallerySection";
import { Hero } from "@/components/sections/home/Hero";
import { VideosSection } from "@/components/sections/home/VideosSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutSection />
      <VideosSection />
      <GallerySection />
      <ContactSection />
    </>
  );
}
