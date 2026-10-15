"use client";

import { useRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";
import { RevealList } from "./RevealList";

type CarouselProps = {
  heading: ReactNode;
  /** Nom accessible de la liste, ex. « Musique ». */
  label: string;
  variant?: "card" | "wide";
  children: ReactNode;
};

const trackVariants = {
  card: "auto-cols-[minmax(215px,72vw)] gap-[15px] p-0.5 pb-2.5 md:auto-cols-[250px]",
  wide: "auto-cols-[85vw] gap-4 pb-2 md:auto-cols-[calc((100%-16px)/2)]",
};

export function Carousel({ heading, label, variant = "card", children }: CarouselProps) {
  const trackRef = useRef<HTMLUListElement>(null);

  function scrollTrack(direction: 1 | -1) {
    const track = trackRef.current;
    if (!track) return;

    const firstItem = track.firstElementChild as HTMLElement | null;
    const gap = parseFloat(getComputedStyle(track).columnGap) || 0;
    const step = firstItem ? firstItem.offsetWidth + gap : track.clientWidth * 0.8;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    track.scrollBy({ left: direction * step, behavior: reduceMotion ? "auto" : "smooth" });
  }

  return (
    <div>
      <div className="mb-[22px] flex items-start justify-between gap-5 md:items-end">
        {heading}
        <div className="flex shrink-0 gap-2">
          <ArrowButton label={`${label} : précédent`} onClick={() => scrollTrack(-1)}>
            ←
          </ArrowButton>
          <ArrowButton label={`${label} : suivant`} onClick={() => scrollTrack(1)}>
            →
          </ArrowButton>
        </div>
      </div>

      <RevealList
        listRef={trackRef}
        aria-label={label}
        className={cn("no-scrollbar grid snap-x snap-mandatory grid-flow-col overflow-x-auto", trackVariants[variant])}
        itemClassName="min-w-0 snap-start"
      >
        {children}
      </RevealList>
    </div>
  );
}

type ArrowButtonProps = {
  label: string;
  onClick: () => void;
  children: ReactNode;
};

function ArrowButton({ label, onClick, children }: ArrowButtonProps) {
  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      className="grid size-9 cursor-pointer place-items-center rounded-full border border-line bg-paper text-brand transition hover:border-brand hover:bg-lilac focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
    >
      <span aria-hidden="true">{children}</span>
    </button>
  );
}
