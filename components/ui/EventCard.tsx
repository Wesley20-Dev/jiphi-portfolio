import Image from "next/image";
import Link from "next/link";
import type { EventItem } from "@/types/content";
import { Icon } from "./Icon";

type EventCardProps = {
  event: EventItem;
};

export function EventCard({ event }: EventCardProps) {
  return (
    <article className="group grid h-full overflow-hidden rounded-[17px] border border-line bg-paper shadow-[0_8px_24px_#2b183b0f] transition duration-300 hover:-translate-y-1 hover:shadow-[0_16px_30px_#2b183b1f] md:grid-cols-[42%_1fr]">
      <div className="relative min-h-[180px] overflow-hidden bg-[linear-gradient(135deg,#2c183c,#9d69c4)] md:min-h-[190px]">
        <Image
          src={event.image}
          alt={event.imageAlt ?? ""}
          fill
          sizes="(max-width: 768px) 92vw, (max-width: 1024px) 34vw, 240px"
          className="object-cover saturate-[.85] transition-transform duration-500 group-hover:scale-[1.05]"
        />
      </div>
      <div className="self-center p-4 md:p-[18px]">
        <span className="mb-2.5 inline-flex items-center gap-1.5 rounded-lg bg-[#f0e5fa] px-[9px] py-[5px] text-[10px] font-extrabold text-brand-dark">
          <Icon name="calendar" />
          {event.label}
        </span>
        <h3 className="mb-[9px] font-serif text-[22px] font-semibold leading-[1.1]">{event.title}</h3>
        <p className="mb-2.5 flex items-center gap-1.5 text-[11px] text-muted">
          <Icon name="map-pin" />
          {event.meta}
        </p>
        <p className="mb-3 text-xs text-muted">{event.description}</p>
        <Link
          href="/#contact"
          className="inline-flex items-center gap-1.5 text-[11px] font-bold text-brand-dark transition-colors hover:text-brand"
        >
          Contacter Jiphi
          <Icon name="arrow-up-right" />
        </Link>
      </div>
    </article>
  );
}
