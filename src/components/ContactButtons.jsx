import { contact } from "../data/contact";

const items = [
  ["Mobile / Viber", contact.phone, contact.viber || contact.phoneHref],
  ["Email", contact.email, contact.emailHref],
  ["Office", contact.office, contact.officeHref]
];

export function ContactButtons({ compact = false }) {
  return (
    <div className={`contact-buttons ${compact ? "compact" : ""}`}>
      {items.filter(([, , href]) => href).map(([label, value, href]) => (
        <a key={label} href={href} className="contact-chip">
          <span>{label}</span>
          <strong>{value}</strong>
        </a>
      ))}
    </div>
  );
}
