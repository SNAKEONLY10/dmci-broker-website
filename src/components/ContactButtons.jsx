import { contact } from "../data/contact";

const items = [
  ["Mobile / Viber", contact.viber || contact.phoneHref],
  ["Email", contact.emailHref],
  ["Office", contact.officeHref]
];

export function ContactButtons({ compact = false }) {
  return (
    <div className={`contact-buttons ${compact ? "compact" : ""}`}>
      {items.filter(([, href]) => href).map(([label, href]) => (
        <a key={label} href={href} className="contact-chip">
          <span>{label}</span>
        </a>
      ))}
    </div>
  );
}
