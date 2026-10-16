"use client";

import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Icon } from "./Icon";
import { RevealList } from "./RevealList";
import type { Tone } from "./SectionHeading";

type CarouselProps = {
  heading: ReactNode;
  /** Nom accessible de la liste, ex. « Musique ». */
  label: string;
  variant?: "card" | "wide";
  tone?: Tone;
  children: ReactNode;
};

const trackVariants = {
  card: "auto-cols-[78%] gap-3.5 md:auto-cols-[calc((100%-36px)/3)] md:gap-[18px] lg:auto-cols-[calc((100%-54px)/4)]",
  wide: "auto-cols-[92%] gap-3.5 md:auto-cols-[80%] md:gap-[22px] lg:auto-cols-[calc((100%-22px)/2)]",
};

type TrackState = { pages: number; page: number; atStart: boolean; atEnd: boolean };

const initialState: TrackState = { pages: 1, page: 0, atStart: true, atEnd: false };

export function Carousel({ heading, label, variant = "card", tone = "light", children }: CarouselProps) {
  const trackRef = useRef<HTMLUListElement>(null);
  const [state, setState] = useState(initialState);

  const measure = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;

    const maxScroll = track.scrollWidth - track.clientWidth;
    const pages = maxScroll > 2 ? Math.ceil(track.scrollWidth / track.clientWidth - 0.05) : 1;
    const progress = maxScroll > 0 ? track.scrollLeft / maxScroll : 0;

    setState({
      pages,
      page: Math.round(progress * (pages - 1)),
      atStart: track.scrollLeft <= 2,
      atEnd: track.scrollLeft >= maxScroll - 2,
    });
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    measure();
    const resizeObserver = new ResizeObserver(measure);
    resizeObserver.observe(track);
    track.addEventListener("scroll", measure, { passive: true });

    return () => {
      resizeObserver.disconnect();
      track.removeEventListener("scroll", measure);
    };
  }, [measure]);

  function scrollBehavior(): ScrollBehavior {
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth";
  }

  function scrollStep(direction: 1 | -1) {
    const track = trackRef.current;
    if (!track) return;

    const firstItem = track.firstElementChild as HTMLElement | null;
    const gap = parseFloat(getComputedStyle(track).columnGap) || 0;
    const step = firstItem ? firstItem.offsetWidth + gap : track.clientWidth * 0.8;

    track.scrollBy({ left: direction * step, behavior: scrollBehavior() });
  }

  function scrollToPage(page: number) {
    const track = trackRef.current;
    if (!track || state.pages < 2) return;

    const maxScroll = track.scrollWidth - track.clientWidth;
    track.scrollTo({ left: (maxScroll * page) / (state.pages - 1), behavior: scrollBehavior() });
  }

  const dark = tone === "dark";

  return (
    <div>
      <div className="mb-6 flex flex-col gap-4 min-[391px]:flex-row min-[391px]:items-start min-[391px]:justify-between min-[391px]:gap-5 md:items-end">
        {heading}
        <div className="flex shrink-0 gap-2 self-end min-[391px]:self-auto">
          <ArrowButton
            label={`${label} : précédent`}
            direction="left"
            dark={dark}
            disabled={state.atStart}
            onClick={() => scrollStep(-1)}
          />
          <ArrowButton
            label={`${label} : suivant`}
            direction="right"
            dark={dark}
            primary
            disabled={state.atEnd}
            onClick={() => scrollStep(1)}
          />
        </div>
      </div>

      <RevealList
        listRef={trackRef}
        aria-label={label}
        className={cn(
          "no-scrollbar grid snap-x snap-mandatory grid-flow-col overflow-x-auto px-0.5 pb-4 pt-2",
          trackVariants[variant],
        )}
        itemClassName="min-w-0 snap-start"
      >
        {children}
      </RevealList>

      {state.pages > 1 && (
        <div className="mt-1 flex justify-center gap-0.5">
          {Array.from({ length: state.pages }, (_, page) => {
            const active = page === state.page;
            return (
              <button
                key={page}
                type="button"
                aria-label={`${label} : page ${page + 1} sur ${state.pages}`}
                aria-current={active ? "true" : undefined}
                onClick={() => scrollToPage(page)}
                className="group cursor-pointer p-1"
              >
                <span
                  className={cn(
                    "block h-1.5 rounded-full transition-all duration-300",
                    active ? "w-[18px]" : "w-1.5",
                    active
                      ? dark
                        ? "bg-lilac-bright"
                        : "bg-brand"
                      : dark
                        ? "bg-white/25 group-hover:bg-white/45"
                        : "bg-[#d8cce2] group-hover:bg-lilac-bright",
                  )}
                />
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

type ArrowButtonProps = {
  label: string;
  direction: "left" | "right";
  dark: boolean;
  primary?: boolean;
  disabled: boolean;
  onClick: () => void;
};

function ArrowButton({ label, direction, dark, primary = false, disabled, onClick }: ArrowButtonProps) {
  const palette = dark
    ? primary
      ? "border-lilac-bright bg-lilac-bright text-[#27133c]"
      : "border-white/15 bg-white/7 text-white enabled:hover:border-lilac-bright enabled:hover:bg-lilac-bright enabled:hover:text-[#27133c]"
    : primary
      ? "border-brand bg-brand text-white enabled:hover:bg-brand-hover"
      : "border-line bg-[#f0e9f5] text-brand-dark enabled:hover:border-brand enabled:hover:bg-brand enabled:hover:text-white";

  return (
    <button
      type="button"
      aria-label={label}
      disabled={disabled}
      onClick={onClick}
      className={cn(
        "grid size-9 cursor-pointer place-items-center rounded-full border text-[20px] transition duration-200 md:size-[41px]",
        "enabled:hover:-translate-y-0.5 disabled:cursor-default disabled:opacity-35",
        "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lilac-bright",
        palette,
      )}
    >
      <Icon name={direction === "left" ? "chevron-left" : "chevron-right"} className="stroke-[2.2]" />
    </button>
  );
}
