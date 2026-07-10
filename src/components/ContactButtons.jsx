import { contact } from "../data/contact";

const items = [
  {
    key: "phone",
    label: "Mobile / Viber",
    value: contact.phone,
    href: contact.phoneHref,
    note: "Tap to call. Use the same number on Viber."
  },
  {
    key: "email",
    label: "Email",
    value: contact.email,
    href: contact.emailHref,
    note: "Opens your email app."
  },
  {
    key: "office",
    label: "Office",
    value: contact.office,
    href: contact.officeHref,
    note: "For office-assisted follow-up."
  }
];

export function ContactButtons({ compact = false }) {
  return (
    <div className={`contact-buttons ${compact ? "compact" : ""}`}>
      {items.filter((item) => item.href).map((item) => (
        <a key={item.key} href={item.href} className={`contact-chip is-${item.key}`} aria-label={`${item.label}: ${item.value}`}>
          <span>{item.label}</span>
          <small>{item.note}</small>
          <strong>{item.value}</strong>
        </a>
      ))}
    </div>
  );
}
