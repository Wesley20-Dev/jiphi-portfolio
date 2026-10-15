import Image from "next/image";
import type { MediaItem } from "@/types/content";
import { ExternalLink } from "./ExternalLink";

type MediaCardProps = {
  item: MediaItem;
  ctaLabel: string;
};

export function MediaCard({ item, ctaLabel }: MediaCardProps) {
  return (
    <article className="group h-full overflow-hidden rounded-[13px] border border-line bg-paper transition duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_-18px_rgba(87,39,125,.45)]">
      <div className="relative aspect-[16/10] overflow-hidden bg-media">
        <Image
          src={item.image}
          alt={item.imageAlt ?? ""}
          fill
          sizes="(max-width: 768px) 72vw, 250px"
          className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
        />
      </div>
      <div className="px-3.5 pb-[15px] pt-[13px]">
        <h3 className="mb-1 font-serif text-[21px] font-medium leading-[1.15]">{item.title}</h3>
        <p className="text-[10px] text-muted">{item.meta}</p>
        <ExternalLink
          href={item.href}
          className="mt-[9px] inline-block text-[10px] font-bold text-brand underline-offset-4 hover:underline"
        >
          {ctaLabel} ↗
        </ExternalLink>
      </div>
    </article>
  );
}
