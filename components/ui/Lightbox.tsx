"use client";

import { useEffect, useRef, type KeyboardEvent, type PointerEvent, type ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Icon } from "./Icon";

const SWIPE_THRESHOLD = 50;

const controlClasses =
  "grid size-11 cursor-pointer place-items-center rounded-full bg-deep/70 text-white/80 backdrop-blur-sm md:bg-white/5 transition hover:bg-brand hover:text-white focus-visible:outline-2 focus-visible:outline-lilac-bright";

type LightboxProps<T> = {
  items: T[];
  /** Index de l'élément affiché, ou `null` quand la visionneuse est fermée. */
  index: number | null;
  onIndexChange: (index: number) => void;
  onClose: () => void;
  /** Nom accessible de la visionneuse, ex. « Visionneuse de photos ». */
  label: string;
  /** Nom d'un élément pour les boutons, ex. « Photo » → « Photo précédente ». */
  itemLabel: string;
  renderItem: (item: T) => ReactNode;
  caption: (item: T) => ReactNode;
};

/**
 * Visionneuse plein écran : un élément à la fois, navigation par flèches,
 * clavier (← → Échap) et balayage. S'appuie sur <dialog> pour le piège
 * de focus et le retour du focus sur la vignette d'origine.
 */
export function Lightbox<T>({
  items,
  index,
  onIndexChange,
  onClose,
  label,
  itemLabel,
  renderItem,
  caption,
}: LightboxProps<T>) {
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

  const item = open ? items[index] : null;

  function go(step: 1 | -1) {
    if (index === null) return;
    onIndexChange((index + step + items.length) % items.length);
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
      aria-label={label}
      onCancel={(event) => {
        event.preventDefault();
        onClose();
      }}
      onKeyDown={handleKeyDown}
      className="m-0 size-full max-h-none max-w-none bg-[radial-gradient(ellipse_at_50%_40%,#2a173b,#140b1e_70%)] p-0 text-white backdrop:bg-deep/80"
    >
      {item !== null && index !== null && (
        <div className="flex h-full flex-col">
          <div className="flex items-center justify-between px-3 pt-3 md:px-5 md:pt-4">
            <p className="pl-2 text-xs font-bold tracking-[.08em] text-lilac-soft" aria-live="polite">
              {index + 1} / {items.length}
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
            {renderItem(item)}
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label={`${itemLabel} précédente`}
              className={cn(controlClasses, "absolute left-2 top-1/2 -translate-y-1/2 md:left-6")}
            >
              <Icon name="chevron-left" className="text-xl" />
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              aria-label={`${itemLabel} suivante`}
              className={cn(controlClasses, "absolute right-2 top-1/2 -translate-y-1/2 md:right-6")}
            >
              <Icon name="chevron-right" className="text-xl" />
            </button>
          </div>

          <div className="px-6 pb-5 pt-3 text-center text-xs text-white/60">{caption(item)}</div>
        </div>
      )}
    </dialog>
  );
}
