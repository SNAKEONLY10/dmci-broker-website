import { Button } from "../components/Button";
import { DisclaimerBanner } from "../components/DisclaimerBanner";
import { SectionHeader } from "../components/SectionHeader";
import { resaleUnits } from "../data/promos";

export default function ResaleUnits() {
  return (
    <section className="page-section">
      <div className="container">
        <SectionHeader align="left" eyebrow="Resale Units" title="Resale and Re-opened Unit Inquiries" text="Availability must be verified before discussion." />
        <div className="card-grid">
          {resaleUnits.map((unit) => (
            <article className="info-card" key={unit.id}>
              <span className="mini">{unit.status}</span>
              <h3>{unit.project}</h3>
              <p>{unit.location} | {unit.unitType}</p>
              <p>{unit.notes}</p>
              <Button to="/availability" variant="ghost">Ask Availability</Button>
            </article>
          ))}
        </div>
        <DisclaimerBanner text="Resale/re-opened unit availability must be verified before discussion." />
      </div>
    </section>
  );
}
