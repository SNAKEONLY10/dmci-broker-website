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
          text="Know what Luisa can confirm for you before making a reservation or payment decision."
        />
        <div className="content-panel legal-content">
          <p className="reference-note">This is Maria Luisa Corral&apos;s personal broker website for direct DMCI Homes sales and buyer guidance. It is not the DMCI Homes corporate website or a live inventory portal.</p>

          <h2>How Luisa Can Help</h2>
          <p>Luisa can help you shortlist DMCI Homes projects, request computations, check current availability, coordinate viewings, and prepare for reservation. A page or inquiry on this website does not hold a unit or create a final offer.</p>

          <h2>What Must Be Confirmed</h2>
          <p>Prices, unit sizes, floor plans, payment terms, discounts, reservation rules, amenities, map pins, travel times, turnover dates, and availability may change. Luisa will confirm the details that apply to the exact unit before you rely on them.</p>

          <h2>Before Sending Payment</h2>
          <p>Wait for the current unit computation, confirmed availability, reservation documents, and verified DMCI Homes payment instructions. Keep the receipt and all signed records.</p>

          <div className="hero-actions">
            <Button to="/request-computation">Request Latest Computation</Button>
            <Button to="/contact" variant="secondary">Ask About Project Details</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
