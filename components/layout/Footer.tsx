import Link from "next/link";
import { siteConfig, socialLinks } from "@/data/site";
import { isExternalUrl } from "@/lib/utils";
import { Container } from "@/components/ui/Container";
import { ExternalLink } from "@/components/ui/ExternalLink";
import { Icon } from "@/components/ui/Icon";

const socialClasses =
  "grid size-[35px] place-items-center rounded-full border border-white/35 text-[15px] transition duration-200 hover:-translate-y-0.5 hover:bg-white hover:text-brand-dark";

const bottomLinkClasses = "transition-colors hover:text-white";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[linear-gradient(120deg,#68369a,#57277d_58%,#43205f)] text-white">
      <Icon name="sparkle" className="pointer-events-none absolute -bottom-14 -left-8 size-[155px] text-white/7" />
      <Icon name="sparkle" className="pointer-events-none absolute -right-4 -top-12 size-[155px] text-white/7" />

      <Container className="relative">
        <div className="grid gap-x-5 gap-y-7 pb-[30px] pt-[42px] min-[391px]:grid-cols-2 md:grid-cols-3 md:gap-9">
          <div className="min-[391px]:col-span-2 md:col-span-1">
            <Link href="/#accueil" className="inline-block font-serif text-[31px] font-medium uppercase leading-[.9] tracking-[.04em]">
              {siteConfig.name}
              <small className="mt-[5px] block font-sans text-[8px] font-bold uppercase leading-[1.7] tracking-[.17em] text-[#d7b9f5]">
                Artiste chanteur & instrumentaliste
              </small>
            </Link>
            <p className="mt-4 max-w-[240px] text-[11px] text-white/72">
              Une musique libre, inspirée par les cultures, les rencontres et les émotions.
            </p>
          </div>

          <div>
            <h2 className="mb-3.5 mt-1 text-xs font-bold">Suivez-moi</h2>
            <ul className="flex flex-wrap gap-2" aria-label="Réseaux et contact">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  {isExternalUrl(link.href) ? (
                    <ExternalLink href={link.href} aria-label={link.label} className={socialClasses}>
                      <Icon name={link.icon} />
                    </ExternalLink>
                  ) : (
                    <a href={link.href} aria-label={link.label} className={socialClasses}>
                      <Icon name={link.icon} />
                    </a>
                  )}
                </li>
              ))}
            </ul>
            <p className="mt-3 text-[11px] text-white/72">Les nouveautés et les nouvelles créations.</p>
          </div>

          <div>
            <h2 className="mb-3.5 mt-1 text-xs font-bold">Rester connecté</h2>
            <p className="max-w-[240px] text-[11px] text-white/72">
              Retrouvez les actualités et les prochaines dates sur les réseaux sociaux.
            </p>
            <Link
              href="/#contact"
              className="mt-3.5 inline-flex items-center gap-2 rounded-full border border-white/35 py-1.5 pl-4 pr-1.5 text-[11px] font-bold transition-colors hover:bg-white/10"
            >
              Écrire à {siteConfig.name}
              <span className="grid size-8 place-items-center rounded-full bg-[#b780f5] text-[#2b1640]">
                <Icon name="arrow-right" />
              </span>
            </Link>
          </div>
        </div>

        <div className="flex flex-col items-start justify-between gap-[15px] border-t border-white/20 pb-5 pt-4 text-[10px] text-white/68 md:flex-row">
          <p>
            © {siteConfig.copyrightYear} {siteConfig.name}. Tous droits réservés.
          </p>
          <nav aria-label="Liens de bas de page" className="flex flex-wrap gap-[18px]">
            <Link href="/a-propos" className={bottomLinkClasses}>
              À propos
            </Link>
            <Link href="/#contact" className={bottomLinkClasses}>
              Contact
            </Link>
            <a href="#" className={`${bottomLinkClasses} inline-flex items-center gap-1`}>
              Retour en haut
              <Icon name="arrow-up" />
            </a>
          </nav>
        </div>
      </Container>
    </footer>
  );
}
