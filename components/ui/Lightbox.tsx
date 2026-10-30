"use client";

import Image from "next/image";
import { useEffect, useRef, type KeyboardEvent, type PointerEvent } from "react";
import { cn } from "@/lib/utils";
import type { GalleryImage } from "@/types/content";
import { Icon } from "./Icon";

const SWIPE_THRESHOLD = 50;

const controlClasses =
  "grid size-11 cursor-pointer place-items-center rounded-full bg-deep/70 text-white/80 backdrop-blur-sm md:bg-white/5 transition hover:bg-brand hover:text-white focus-visible:outline-2 focus-visible:outline-lilac-bright";

type LightboxProps = {
  images: GalleryImage[];
  /** Index de l'image affichée, ou `null` quand la visionneuse est fermée. */
  index: number | null;
  onIndexChange: (index: number) => void;
  onClose: () => void;
};

/**
 * Visionneuse plein écran : une image à la fois, navigation par flèches,
 * clavier (← → Échap) et balayage. S'appuie sur <dialog> pour le piège
 * de focus et le retour du focus sur la vignette d'origine.
 */
export function Lightbox({ images, index, onIndexChange, onClose }: LightboxProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const swipeStartX = useRef<number | null>(null);
  const open = index !== null;

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog || !open) return;

    dialog.showModal();
    document.documentElement.style.overflow = "hidden";
    return () => {
      dialog.close();
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  const image = open ? images[index] : null;

  function go(step: 1 | -1) {
    if (index === null) return;
    onIndexChange((index + step + images.length) % images.length);
  }

  function handleKeyDown(event: KeyboardEvent) {
    if (event.key === "ArrowRight") go(1);
    else if (event.key === "ArrowLeft") go(-1);
  }

  function handlePointerUp(event: PointerEvent) {
    if (swipeStartX.current === null) return;
    const delta = event.clientX - swipeStartX.current;
    swipeStartX.current = null;
    if (Math.abs(delta) > SWIPE_THRESHOLD) go(delta < 0 ? 1 : -1);
  }

  return (
    <dialog
      ref={dialogRef}
      aria-label="Visionneuse de photos"
      onCancel={(event) => {
        event.preventDefault();
        onClose();
      }}
      onKeyDown={handleKeyDown}
      className="m-0 size-full max-h-none max-w-none bg-[radial-gradient(ellipse_at_50%_40%,#2a173b,#140b1e_70%)] p-0 text-white backdrop:bg-deep/80"
    >
      {image && index !== null && (
        <div className="flex h-full flex-col">
          <div className="flex items-center justify-between px-3 pt-3 md:px-5 md:pt-4">
            <p className="pl-2 text-xs font-bold tracking-[.08em] text-lilac-soft" aria-live="polite">
              {index + 1} / {images.length}
            </p>
            <button type="button" onClick={onClose} aria-label="Fermer la visionneuse" className={controlClasses}>
              <Icon name="close" className="text-xl" />
            </button>
          </div>

          <div
            className="relative flex-1 touch-pan-y select-none"
            onPointerDown={(event) => (swipeStartX.current = event.clientX)}
            onPointerUp={handlePointerUp}
            onPointerCancel={() => (swipeStartX.current = null)}
          >
            <Image
              key={image.id}
              src={image.src}
              alt={image.alt}
              fill
              sizes="100vw"
              draggable={false}
              className="animate-lightbox-in object-contain px-4 py-2 md:px-24 md:py-4"
            />
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Photo précédente"
              className={cn(controlClasses, "absolute left-2 top-1/2 -translate-y-1/2 md:left-6")}
            >
              <Icon name="chevron-left" className="text-xl" />
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Photo suivante"
              className={cn(controlClasses, "absolute right-2 top-1/2 -translate-y-1/2 md:right-6")}
            >
              <Icon name="chevron-right" className="text-xl" />
            </button>
          </div>

          <p className="px-6 pb-5 pt-3 text-center text-xs text-white/60">{image.alt}</p>
        </div>
      )}
    </dialog>
  );
}
