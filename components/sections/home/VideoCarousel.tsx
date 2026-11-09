"use client";

import { useState, type ReactNode } from "react";
import type { Video } from "@/types/content";
import { cn } from "@/lib/utils";
import { youtubeEmbed, youtubeWatchUrl } from "@/lib/youtube";
import { Carousel } from "@/components/ui/Carousel";
import { ExternalLink } from "@/components/ui/ExternalLink";
import { Lightbox } from "@/components/ui/Lightbox";
import { VideoCard } from "@/components/ui/VideoCard";

export function VideoCarousel({ videos, heading }: { videos: Video[]; heading: ReactNode }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <>
      <Carousel label="Vidéos" tone="dark" heading={heading}>
        {videos.map((video, index) => (
          <VideoCard key={video.youtubeId} video={video} onPlay={() => setOpenIndex(index)} tone="dark" />
        ))}
      </Carousel>

      <Lightbox
        items={videos}
        index={openIndex}
        onIndexChange={setOpenIndex}
        onClose={() => setOpenIndex(null)}
        label="Lecteur vidéo"
        itemLabel="Vidéo"
        renderItem={(video) => (
          <div className="absolute inset-0 grid place-items-center px-16 py-2 md:px-24 md:py-4">
            {/* La clé recrée l'iframe à chaque changement : la vidéo précédente s'arrête. */}
            <iframe
              key={video.youtubeId}
              src={youtubeEmbed(video.youtubeId)}
              title={video.title}
              allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
              allowFullScreen
              className={cn(
                "animate-lightbox-in max-h-full max-w-full rounded-[10px] bg-black shadow-[0_20px_60px_#0008]",
                video.landscape ? "aspect-video w-full" : "aspect-[9/16] h-full",
              )}
            />
          </div>
        )}
        caption={(video) => (
          <>
            <span className="font-semibold text-white/85">{video.title}</span> · {video.meta} ·{" "}
            <ExternalLink href={youtubeWatchUrl(video.youtubeId)} className="text-lilac-soft underline-offset-2 hover:underline">
              Voir sur YouTube
            </ExternalLink>
          </>
        )}
      />
    </>
  );
}
