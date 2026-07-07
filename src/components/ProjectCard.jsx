import { Link } from "react-router-dom";
import { Badge } from "./Badge";
import { Button } from "./Button";
import { ImagePlaceholder } from "./ImagePlaceholder";
import { buyerSafePriceNote, formatPriceGuide } from "../utils/displayText";

function formatTurnoverLabel(value) {
  if (value === "Ready") return "RFO";
  if (/20\d{2}/.test(String(value))) return `${value} turnover`;
  if (String(value).toLowerCase() === "for confirmation") return "Turnover for confirmation";
  return value || "Turnover for confirmation";
}

export function ProjectCard({ project, index = 0 }) {
  const priceLabel = formatPriceGuide(project.priceRangeLabel);
  const hasPriceGuide = /PHP|\d/.test(priceLabel) && !/request latest/i.test(priceLabel);
  const buyerNote = hasPriceGuide
    ? buyerSafePriceNote(project.priceSourceNote)
    : "Updated computation available upon request.";
  const revealDelay = `${Math.min(index, 5) * 70}ms`;
  const projectQuery = encodeURIComponent(project.name);

  return (
    <article className="project-card" data-reveal="card" style={{ "--reveal-delay": revealDelay }}>
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
          <span>{formatTurnoverLabel(project.turnoverYear)}</span>
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
          <Button to={`/request-computation?project=${projectQuery}&inquiryType=Computation`}>Request Computation</Button>
          <Button to={`/availability?project=${projectQuery}&inquiryType=Availability`} variant="ghost">Check Available Units</Button>
        </div>
      </div>
    </article>
  );
}
