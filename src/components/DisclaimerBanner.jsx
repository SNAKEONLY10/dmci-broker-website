import { contact } from "../data/contact";

export function DisclaimerBanner({ text = contact.disclaimer }) {
  return <aside className="disclaimer-banner">{text}</aside>;
}
