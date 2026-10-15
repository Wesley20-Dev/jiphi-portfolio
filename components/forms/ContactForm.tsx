"use client";

import type { FormEvent, ReactNode } from "react";
import { buildContactMailto, cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";

const inputClasses =
  "w-full rounded-lg border border-field-line bg-paper px-3 py-[11px] text-xs font-normal outline-none transition-colors focus:border-brand";

type ContactFormProps = {
  email: string;
};

/** Ouvre la messagerie du visiteur avec un email pré-rempli (mailto). */
export function ContactForm({ email }: ContactFormProps) {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const field = (name: string) => String(data.get(name) ?? "").trim();

    window.location.href = buildContactMailto({
      to: email,
      name: field("name"),
      email: field("email"),
      message: field("message"),
    });
  }

  return (
    <form onSubmit={handleSubmit} className="grid content-center gap-3 md:grid-cols-2">
      <Field label="Nom">
        <input name="name" type="text" placeholder="Votre nom" autoComplete="name" required className={inputClasses} />
      </Field>
      <Field label="Email">
        <input
          name="email"
          type="email"
          placeholder="votre@email.com"
          autoComplete="email"
          required
          className={inputClasses}
        />
      </Field>
      <Field label="Message" className="md:col-span-2">
        <textarea
          name="message"
          placeholder="Votre message..."
          required
          className={cn(inputClasses, "min-h-[95px] resize-y")}
        />
      </Field>
      <Button type="submit" className="justify-self-start md:col-span-2">
        Envoyer le message
      </Button>
      <p className="-mt-[7px] text-[10px] text-muted md:col-span-2">
        Votre application de messagerie s’ouvrira pour envoyer l’email.
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
    <label className={cn("grid gap-[5px] text-[10px] font-bold", className)}>
      {label}
      {children}
    </label>
  );
}
