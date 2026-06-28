import { PromoCard } from "../components/Cards";
import { DisclaimerBanner } from "../components/DisclaimerBanner";
import { SectionHeader } from "../components/SectionHeader";
import { promos } from "../data/promos";

export default function Promos() {
  return (
    <section className="page-section soft">
      <div className="container">
        <SectionHeader align="left" eyebrow="Promos & Updates" title="Ask for Current Promo Details" text="Promo details are subject to confirmation and may change without prior notice." />
        <div className="card-grid">{promos.map((promo) => <PromoCard key={promo.id} promo={promo} />)}</div>
        <DisclaimerBanner text="Promo details are subject to confirmation and may change without prior notice." />
      </div>
    </section>
  );
}
