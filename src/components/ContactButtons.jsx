import { contact } from "../data/contact";

const items = [
  ["Messenger", contact.messenger],
  ["Viber", contact.viber],
  ["WhatsApp", contact.whatsapp],
  ["Phone", `tel:${contact.phone.replace(/\s/g, "")}`],
  ["Email", `mailto:${contact.email}`],
  ["Facebook", contact.facebook],
  ["Instagram", contact.instagram]
];

export function ContactButtons({ compact = false }) {
  return (
    <div className={`contact-buttons ${compact ? "compact" : ""}`}>
      {items.map(([label, href]) => (
        <a key={label} href={href} className="contact-chip">
          <span>{label}</span>
        </a>
      ))}
    </div>
  );
}
