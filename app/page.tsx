import { AboutPreview } from "@/components/sections/home/AboutPreview";
import { ContactSection } from "@/components/sections/home/ContactSection";
import { EventsSection } from "@/components/sections/home/EventsSection";
import { Hero } from "@/components/sections/home/Hero";
import { MusicSection } from "@/components/sections/home/MusicSection";
import { VideosSection } from "@/components/sections/home/VideosSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <MusicSection />
      <VideosSection />
      <EventsSection />
      <AboutPreview />
      <ContactSection />
    </>
  );
}
