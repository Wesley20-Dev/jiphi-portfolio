import Image from "next/image";
import type { EventItem } from "@/types/content";
import { TextLink } from "./TextLink";

type EventCardProps = {
  event: EventItem;
};

export function EventCard({ event }: EventCardProps) {
  return (
    <article className="group h-full overflow-hidden rounded-[15px] border border-line bg-paper transition duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_-18px_rgba(87,39,125,.45)]">
      <div className="relative h-[170px] overflow-hidden bg-media md:h-[180px]">
        <Image
          src={event.image}
          alt={event.imageAlt ?? ""}
          fill
          sizes="(max-width: 768px) 85vw, 560px"
          className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
        />
      </div>
      <div className="p-5">
        <p className="text-[10px] font-bold uppercase tracking-[.12em] text-brand">{event.label}</p>
        <h3 className="my-[7px] font-serif text-[28px] font-medium leading-[1.1]">{event.title}</h3>
        <p className="text-[10px] text-muted">{event.meta}</p>
        <p className="my-[9px] text-[11px] text-muted">{event.description}</p>
        <TextLink href="/#contact">Contacter Jiphi →</TextLink>
      </div>
    </article>
  );
}
