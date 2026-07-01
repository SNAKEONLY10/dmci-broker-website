import { Navigate, useParams } from "react-router-dom";
import { Button } from "../components/Button";
import { DisclaimerBanner } from "../components/DisclaimerBanner";
import { ProjectGrid } from "../components/ProjectGrid";
import { SectionHeader } from "../components/SectionHeader";
import { findCityPageBySlug } from "../data/seo";
import { projects } from "../data/projects";

export default function CityProjects() {
  const { locationSlug } = useParams();
  const city = findCityPageBySlug(locationSlug);

  if (!city) {
    return <Navigate to="/locations" replace />;
  }

  if (locationSlug !== city.slug) {
    return <Navigate to={city.path} replace />;
  }

  const cityProjects = projects.filter((project) => project.location === city.name);
  const unitTypes = [...new Set(cityProjects.flatMap((project) => project.unitTypes))];
  const statuses = [...new Set(cityProjects.map((project) => project.status))];

  return (
    <section className="page-section city-page">
      <div className="container">
        <div className="project-listing-hero city-hero">
          <SectionHeader
            as="h1"
            align="left"
            eyebrow="Location Guide"
            title={city.h1}
            text={`Compare ${cityProjects.length} featured DMCI project${cityProjects.length === 1 ? "" : "s"} in ${city.name}. Request latest computation, availability, and viewing guidance before deciding.`}
          />
          <div className="listing-hero-card">
            <strong>Latest details required</strong>
            <p>Prices, promos, unit cuts, payment terms, and availability can change. Ask Luisa to verify the current details for this location.</p>
            <Button to={`/request-computation?location=${encodeURIComponent(city.name)}`} variant="secondary">Request Computation</Button>
          </div>
        </div>

        <div className="city-summary-grid">
          <article className="info-card">
            <span className="mini">Featured Projects</span>
            <strong>{cityProjects.length || "To be confirmed"}</strong>
            <p>{cityProjects.length ? cityProjects.map((project) => project.name).join(", ") : "Request current location options from Luisa."}</p>
          </article>
          <article className="info-card">
            <span className="mini">Unit Types</span>
            <strong>{unitTypes.length ? unitTypes.join(", ") : "Request latest details"}</strong>
            <p>Final unit availability, sizes, and prices must be verified before buyer presentation.</p>
          </article>
          <article className="info-card">
            <span className="mini">Status</span>
            <strong>{statuses.length ? statuses.join(", ") : "To be confirmed"}</strong>
            <p>Turnover and construction status are reference-only until confirmed through current project materials.</p>
          </article>
        </div>

        {cityProjects.length ? (
          <ProjectGrid projects={cityProjects} />
        ) : (
          <div className="content-panel">
            <h2>Project list to be confirmed</h2>
            <p>Luisa can help check current DMCI options in {city.name} and recommend nearby alternatives.</p>
            <Button to="/contact">Ask Luisa</Button>
          </div>
        )}

        <div className="cta-strip">
          <div>
            <strong>Shortlisting in {city.name}?</strong>
            <p>Send your budget, preferred unit type, and timeline so Luisa can recommend the next step.</p>
          </div>
          <Button to={`/request-computation?location=${encodeURIComponent(city.name)}`}>Request Latest Computation</Button>
        </div>
        <DisclaimerBanner />
      </div>
    </section>
  );
}
