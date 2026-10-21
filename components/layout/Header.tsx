"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navLinks, sectionIds, siteConfig } from "@/data/site";
import { useActiveSection } from "@/hooks/useActiveSection";
import { useIsInView } from "@/hooks/useIsInView";
import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";

export function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const activeSection = useActiveSection(sectionIds, isHome);
  // Transparent par-dessus le hero de l'accueil, opaque partout ailleurs.
  const heroInView = useIsInView("accueil", { enabled: isHome, rootMargin: "-80px 0px 0px 0px" });
  const solid = !isHome || !heroInView;
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!menuOpen) return;

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setMenuOpen(false);
    }

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 text-white transition-[background-color,box-shadow,backdrop-filter] duration-300",
        solid && "bg-deep/92 shadow-[0_8px_30px_#1a0e2833] backdrop-blur-md",
      )}
    >
      <Container
        className={cn(
          "relative flex items-center justify-between gap-6 transition-[height] duration-300",
          solid ? "h-[64px] md:h-[68px]" : "h-[72px] md:h-[82px]",
        )}
      >
        <Link href="/#accueil" className="font-serif text-[28px] font-medium uppercase leading-[.9] tracking-[.04em] md:text-[31px]">
          {siteConfig.name}
          <small className="mt-[5px] block font-sans text-[8px] font-bold uppercase leading-[1.7] tracking-[.17em] text-[#d7b9f5]">
            {siteConfig.tagline}
          </small>
        </Link>

        <nav
          id="main-menu"
          aria-label="Navigation principale"
          className={cn(
            "absolute inset-x-0 top-[calc(100%-6px)] flex-col gap-0.5 rounded-2xl border border-white/15 bg-[#1d102cf5] p-3.5 backdrop-blur-[15px]",
            "md:static md:flex md:flex-row md:items-center md:gap-[clamp(15px,2.2vw,28px)] md:rounded-none md:border-0 md:bg-transparent md:p-0 md:backdrop-blur-none",
            menuOpen ? "flex" : "hidden",
          )}
        >
          {navLinks.map((link) => {
            const active = isHome && activeSection === link.sectionId;
            return (
              <Link
                key={link.sectionId}
                href={`/#${link.sectionId}`}
                aria-current={active ? "page" : undefined}
                onClick={() => setMenuOpen(false)}
                className={cn(
                  "relative rounded-lg p-2.5 text-[13px] font-semibold text-[#e5dce9] transition-colors hover:bg-white/6 hover:text-white md:rounded-none md:px-0 md:text-xs md:hover:bg-transparent",
                  "md:after:absolute md:after:inset-x-0 md:after:bottom-0.5 md:after:h-0.5 md:after:origin-left md:after:scale-x-0 md:after:bg-lilac-bright md:after:transition-transform md:after:duration-200 md:hover:after:scale-x-100",
                  active && "bg-white/8 text-white md:bg-transparent md:after:scale-x-100",
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <Link
          href="/#contact"
          className="hidden items-center gap-1.5 whitespace-nowrap rounded-full border border-[#b88ce3] px-[15px] py-2.5 text-[11px] font-bold transition-colors hover:bg-brand lg:inline-flex"
        >
          Parlons musique
          <Icon name="arrow-up-right" />
        </Link>

        <button
          type="button"
          className="grid size-[42px] cursor-pointer place-items-center rounded-full border border-white/35 bg-white/8 text-[21px] md:hidden"
          aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={menuOpen}
          aria-controls="main-menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <Icon name={menuOpen ? "close" : "menu"} />
        </button>
      </Container>
    </header>
  );
}
