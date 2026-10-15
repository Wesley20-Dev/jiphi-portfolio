"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navLinks, sectionIds, siteConfig } from "@/data/site";
import { useActiveSection } from "@/hooks/useActiveSection";
import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/Container";

export function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const activeSection = useActiveSection(sectionIds, isHome);
  const [menuOpen, setMenuOpen] = useState(false);

  function isActive(sectionId: string) {
    if (isHome) return activeSection === sectionId;
    return pathname === "/a-propos" && sectionId === "apropos";
  }

  return (
    <header className="sticky top-0 z-10 border-b border-line bg-canvas/94 backdrop-blur-md">
      <Container className="flex h-[66px] items-center justify-between md:h-[74px]">
        <Link href="/#accueil" className="font-serif text-[31px] font-semibold text-brand">
          {siteConfig.name}
        </Link>

        <button
          type="button"
          className="cursor-pointer text-[26px] text-brand md:hidden"
          aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={menuOpen}
          aria-controls="main-menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span aria-hidden="true">{menuOpen ? "✕" : "☰"}</span>
        </button>

        <nav
          id="main-menu"
          aria-label="Navigation principale"
          className={cn(
            "absolute inset-x-0 top-[66px] flex-col items-start gap-[13px] border-b border-line bg-canvas px-[22px] pb-[22px] pt-[18px]",
            "md:static md:flex md:flex-row md:items-center md:gap-7 md:border-0 md:bg-transparent md:p-0",
            menuOpen ? "flex" : "hidden",
          )}
        >
          {navLinks.map((link) => {
            const active = isActive(link.sectionId);
            return (
              <Link
                key={link.sectionId}
                href={`/#${link.sectionId}`}
                aria-current={active ? "page" : undefined}
                onClick={() => setMenuOpen(false)}
                className={cn(
                  "relative py-2 text-xs font-bold text-[#554d5a] transition-colors hover:text-brand",
                  "after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 after:origin-left after:scale-x-0 after:rounded-sm after:bg-brand after:transition-transform after:duration-300",
                  active && "text-brand after:scale-x-100",
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      </Container>
    </header>
  );
}
