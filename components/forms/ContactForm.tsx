"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import { buildContactMailto, cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";

const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";
const WEB3FORMS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;

const inputClasses =
  "w-full rounded-[10px] border border-[#dcc6f14d] bg-white/5 px-[13px] py-3 text-[13px] text-white outline-none transition-colors placeholder:text-white/50 focus:border-[#c79aff] focus:bg-white/8";

type Status = "idle" | "sending" | "success" | "error";

type ContactFormProps = {
  email: string;
};

/**
 * Envoie le message via Web3Forms. Sans clé configurée, ouvre la messagerie
 * du visiteur avec un email pré-rempli (mailto).
 */
export function ContactForm({ email }: ContactFormProps) {
  const [status, setStatus] = useState<Status>("idle");
  const [mailto, setMailto] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const field = (name: string) => String(data.get(name) ?? "").trim();

    const message = { name: field("name"), email: field("email"), message: field("message") };
    const fallback = buildContactMailto({ to: email, ...message });

    if (!WEB3FORMS_KEY) {
      window.location.href = fallback;
      return;
    }

    setStatus("sending");
    try {
      const response = await fetch(WEB3FORMS_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        // Les clés servent d'intitulés dans l'email reçu ; « email » sert aussi d'adresse de réponse.
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `🎵 ${message.name} vous a écrit depuis votre site`,
          from_name: "Site de Jiphi",
          botcheck: data.get("botcheck") === "on",
          Nom: message.name,
          email: message.email,
          Message: message.message,
          "Reçu le": new Date().toLocaleString("fr-FR", { dateStyle: "full", timeStyle: "short" }),
        }),
      });
      const result: { success?: boolean } = await response.json();
      if (!result.success) throw new Error("Échec de l’envoi");

      form.reset();
      setStatus("success");
    } catch {
      setMailto(fallback);
      setStatus("error");
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="grid gap-3 rounded-[20px] border border-white/18 bg-white/7 p-[18px] backdrop-blur-md md:grid-cols-2 md:p-[23px]"
    >
      <Field label="Nom">
        <input name="name" type="text" placeholder="Votre nom" autoComplete="name" required className={inputClasses} />
      </Field>
      <Field label="Email">
        <input
          name="email"
          type="email"
          placeholder="vous@exemple.com"
          autoComplete="email"
          required
          className={inputClasses}
        />
      </Field>
      <Field label="Message" className="md:col-span-2">
        <textarea
          name="message"
          placeholder="Écrivez votre message..."
          required
          className={cn(inputClasses, "min-h-[105px] resize-y")}
        />
      </Field>
      {/* Piège anti-spam : invisible pour les visiteurs, coché par les robots. */}
      <input type="checkbox" name="botcheck" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />
      <Button
        type="submit"
        disabled={status === "sending"}
        className="justify-self-start disabled:pointer-events-none disabled:opacity-60 md:col-span-2"
      >
        <Icon name="send" />
        {status === "sending" ? "Envoi en cours..." : "Envoyer le message"}
      </Button>
      <p role="status" className="text-[11px] text-white/72 md:col-span-2">
        {status === "success" && "Merci ! Votre message a bien été envoyé, je vous réponds au plus vite."}
        {status === "error" && (
          <>
            L’envoi a échoué.{" "}
            <a href={mailto} className="font-bold text-[#d8b8ff] underline underline-offset-2 hover:text-white">
              Écrivez-moi directement par email
            </a>
            .
          </>
        )}
      </p>
    </form>
  );
}

type FieldProps = {
  label: string;
  children: ReactNode;
  className?: string;
};

function Field({ label, children, className }: FieldProps) {
  return (
    <label className={cn("grid gap-1.5 text-[11px] text-white/82", className)}>
      {label}
      {children}
    </label>
  );
}
