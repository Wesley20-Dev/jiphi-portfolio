/** Concatène des classes CSS en ignorant les valeurs falsy. */
export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function isExternalUrl(href: string) {
  return /^https?:\/\//.test(href);
}

type MailtoOptions = {
  to: string;
  name: string;
  email: string;
  message: string;
};

export function buildContactMailto({ to, name, email, message }: MailtoOptions) {
  const subject = "Message depuis le portfolio de Jiphi";
  const body = `Bonjour Jiphi,\n\n${message}\n\nNom : ${name}\nEmail : ${email}`;
  return `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
