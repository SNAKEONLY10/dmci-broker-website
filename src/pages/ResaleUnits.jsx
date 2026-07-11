import { Button } from "../components/Button";
import { DisclaimerBanner } from "../components/DisclaimerBanner";
import { SectionHeader } from "../components/SectionHeader";
import { resaleUnits } from "../data/promos";
import { projects } from "../data/projects";

export default function ResaleUnits() {
  return (
    <section className="page-section">
      <div className="container">
        <SectionHeader as="h1" align="left" eyebrow="Resale Units" title="Resale and Re-opened Unit Inquiries" text="Availability must be verified before discussion." />
        <div className="card-grid">
          {resaleUnits.map((unit) => (
            <article className="info-card" key={unit.id}>
              <span className="mini">{unit.status}</span>
              <h3>{unit.project}</h3>
              <p>{unit.location} | {unit.unitType}</p>
              <p>{unit.notes}</p>
              <Button to={`/contact?project=${encodeURIComponent(resolveApprovedProjectName(unit.project))}&inquiryType=${encodeURIComponent("Resale Inquiry")}`} variant="ghost">Ask About This Resale Unit</Button>
            </article>
          ))}
        </div>
        <DisclaimerBanner text="Resale/re-opened unit availability must be verified before discussion." />
      </div>
    </section>
  );
}

function resolveApprovedProjectName(name) {
  const normalized = String(name || "").toLowerCase();
  const exact = projects.find((project) => project.name.toLowerCase() === normalized);
  if (exact) return exact.name;

  const closeMatch = projects.find((project) => (
    project.name.toLowerCase().startsWith(normalized) || normalized.startsWith(project.name.toLowerCase())
  ));
  return closeMatch?.name || name;
}
