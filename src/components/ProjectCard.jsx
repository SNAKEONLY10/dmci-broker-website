import { Link } from "react-router-dom";
import { Badge } from "./Badge";
import { Button } from "./Button";
import { ImagePlaceholder } from "./ImagePlaceholder";

export function ProjectCard({ project }) {
  const priceLabel = project.priceRangeLabel || "Request latest computation";
  const hasPriceGuide = /PHP|₱/.test(priceLabel);
  const buyerNote = hasPriceGuide
    ? "Guide range only. Ask Luisa for the latest computation."
    : "Updated computation available upon request.";

  return (
    <article className="project-card">
      <div className="project-image">
        <ImagePlaceholder src={project.thumbnail || project.image} label={project.name} variant="card" />
        <Badge>{project.status}</Badge>
        <span className="location-tag">{project.location}</span>
      </div>
      <div className="project-body">
        <p className="mini">{project.location}</p>
        <h3><Link to={`/projects/${project.slug}`}>{project.name}</Link></h3>
        <p className="card-tagline">{project.tagline}</p>
        <div className="project-meta">
          <span>{project.turnoverYear === "Ready" ? "RFO" : `${project.turnoverYear} turnover`}</span>
          <span>{project.propertyType} | {project.developmentType}</span>
        </div>
        <div className="pill-row">
          {project.unitTypes.slice(0, 4).map((unit) => <span key={unit}>{unit}</span>)}
        </div>
        <ul>
          {project.highlights.slice(0, 2).map((item) => <li key={item}>{item}</li>)}
        </ul>
        <p className="content-hint">Latest details available through Luisa.</p>
        <p className="price-note">{priceLabel}</p>
        <small>{buyerNote}</small>
        <small>Availability subject to confirmation.</small>
        <div className="card-actions">
          <Button to={`/projects/${project.slug}`} variant="secondary">View Details</Button>
          <Button to="/request-computation">Request Computation</Button>
          <Button to="/availability" variant="ghost">Check Availability</Button>
        </div>
      </div>
    </article>
  );
}
