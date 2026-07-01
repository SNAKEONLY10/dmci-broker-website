import { Button } from "../components/Button";
import { SectionHeader } from "../components/SectionHeader";
import { contact } from "../data/contact";

export default function Disclaimer() {
  return (
    <section className="page-section legal-page soft">
      <div className="container narrow">
        <SectionHeader
          as="h1"
          align="left"
          eyebrow="Buyer Safety"
          title="Website Disclaimer"
          text="Please confirm all buyer-facing details before making any reservation or payment decision."
        />
        <div className="content-panel legal-content">
          <p className="reference-note">This website is operated by an independent broker/agent for inquiry assistance. Project details, availability, pricing, promos, and terms are subject to confirmation with the developer and authorized sales channels.</p>

          <h2>Buyer Assistance Only</h2>
          <p>{contact.brand} helps buyers shortlist DMCI Homes projects, request computations, check availability, coordinate viewings, and prepare reservation questions. It is not a live inventory system and should not be treated as a final offer.</p>

          <h2>Project Details</h2>
          <p>Prices, unit sizes, floor plans, payment terms, discounts, reservation rules, amenities, map pins, travel times, turnover dates, and availability may change without prior notice. Missing or uncertain details are marked as to be confirmed or request latest details.</p>

          <h2>Payments</h2>
          <p>Do not send reservation payments without verified official payment instructions, current computation, confirmed availability, and proper documentation.</p>

          <div className="hero-actions">
            <Button to="/request-computation">Request Latest Computation</Button>
            <Button to="/contact" variant="secondary">Ask Luisa</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
