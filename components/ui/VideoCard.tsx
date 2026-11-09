import Image from "next/image";
import type { Video } from "@/types/content";
import { cn } from "@/lib/utils";
import { youtubeThumbnail } from "@/lib/youtube";
import { Icon } from "./Icon";
import type { Tone } from "./SectionHeading";

type VideoCardProps = {
  video: Video;
  onPlay: () => void;
  tone?: Tone;
};

export function VideoCard({ video, onPlay, tone = "light" }: VideoCardProps) {
  const dark = tone === "dark";

  return (
    <article
      className={cn(
        "group relative h-full overflow-hidden rounded-[15px] border transition duration-300 hover:-translate-y-1.5",
        dark
          ? "border-white/12 bg-white/5 hover:bg-white/8"
          : "border-[#6a468115] bg-paper shadow-[0_7px_22px_#2a16390f] hover:shadow-[0_16px_30px_#2a163922]",
      )}
    >
      <div className="relative aspect-[1.48] overflow-hidden bg-[linear-gradient(135deg,#251635,#8750b5_70%,#d4b1f1)]">
        <Image
          src={video.poster ?? youtubeThumbnail(video.youtubeId)}
          alt=""
          fill
          sizes="(max-width: 768px) 78vw, (max-width: 1024px) 33vw, 280px"
          className="object-cover saturate-[.85] transition-transform duration-500 group-hover:scale-[1.05]"
        />
        <span
          aria-hidden="true"
          className="absolute bottom-[11px] right-[11px] grid size-9 place-items-center rounded-full bg-white/95 text-[13px] text-brand shadow-[0_5px_15px_#0003] transition-transform duration-300 group-hover:scale-110"
        >
          <Icon name="play" />
        </span>
      </div>
      <div className="px-[15px] pb-[15px] pt-[13px]">
        <h3 className={cn("mb-1 font-serif text-[21px] font-semibold leading-[1.15]", dark && "text-white")}>
          {video.title}
        </h3>
        <p className={cn("mb-2.5 text-[11px]", dark ? "text-white/60" : "text-muted")}>{video.meta}</p>
        {/* Le pseudo-élément rend toute la carte cliquable. */}
        <button
          type="button"
          onClick={onPlay}
          aria-label={`Lire la vidéo : ${video.title}`}
          className={cn(
            "inline-flex cursor-pointer items-center gap-1.5 text-[11px] font-bold after:absolute after:inset-0 after:content-['']",
            "focus-visible:outline-none focus-visible:after:rounded-[15px] focus-visible:after:outline-2 focus-visible:after:outline-lilac-bright",
            dark ? "text-[#d5b4ff]" : "text-brand-dark group-hover:text-brand",
          )}
        >
          Voir la vidéo
          <Icon name="play" className="text-[9px] transition-transform group-hover:translate-x-0.5" />
        </button>
      </div>
    </article>
  );
}
