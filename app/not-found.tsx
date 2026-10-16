import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Kicker } from "@/components/ui/SectionHeading";

export default function NotFound() {
  return (
    <Container size="narrow" className="pb-24 pt-36 text-center">
      <Kicker className="justify-center">Erreur 404</Kicker>
      <h1 className="my-3 font-serif text-[clamp(40px,6vw,64px)] font-medium leading-[1.1]">
        Cette page est introuvable.
      </h1>
      <p className="mb-8 text-muted">La page que vous cherchez n’existe pas ou a été déplacée.</p>
      <ButtonLink href="/">Retour à l’accueil</ButtonLink>
    </Container>
  );
}
