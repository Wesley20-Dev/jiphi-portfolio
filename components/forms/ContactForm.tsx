"use client";

import type { FormEvent, ReactNode } from "react";
import { buildContactMailto, cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";

const inputClasses =
  "w-full rounded-[10px] border border-[#dcc6f14d] bg-white/5 px-[13px] py-3 text-[13px] text-white outline-none transition-colors placeholder:text-white/50 focus:border-[#c79aff] focus:bg-white/8";

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
      <Button type="submit" className="justify-self-start md:col-span-2">
        <Icon name="send" />
        Envoyer le message
      </Button>
      <p className="text-[11px] text-white/55 md:col-span-2">
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
    <label className={cn("grid gap-1.5 text-[11px] text-white/82", className)}>
      {label}
      {children}
    </label>
  );
}
