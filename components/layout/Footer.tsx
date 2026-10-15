import { siteConfig, socialLinks } from "@/data/site";
import { isExternalUrl } from "@/lib/utils";
import { Container } from "@/components/ui/Container";
import { ExternalLink } from "@/components/ui/ExternalLink";

const linkClasses = "text-[11px] text-[#f0e4f7] underline-offset-[5px] hover:underline";

export function Footer() {
  return (
    <footer className="mt-7 bg-brand-dark pb-10 pt-[35px] text-[#f3eafa]">
      <Container className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
        <div>
          <p className="font-serif text-[30px] font-semibold text-white">{siteConfig.name}</p>
          <p className="text-[10px] text-[#d6c3e4]">
            © {siteConfig.copyrightYear} {siteConfig.name}. Tous droits réservés.
          </p>
        </div>

        <nav aria-label="Réseaux et contact">
          <ul className="flex flex-wrap gap-[13px] md:justify-end md:gap-[17px]">
            {socialLinks.map((link) => (
              <li key={link.label}>
                {isExternalUrl(link.href) ? (
                  <ExternalLink href={link.href} className={linkClasses}>
                    {link.label}
                  </ExternalLink>
                ) : (
                  <a href={link.href} className={linkClasses}>
                    {link.label}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </footer>
  );
}
