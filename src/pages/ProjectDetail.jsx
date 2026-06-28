import { Link, useParams } from "react-router-dom";
import { Badge } from "../components/Badge";
import { Button } from "../components/Button";
import { DisclaimerBanner } from "../components/DisclaimerBanner";
import { ImagePlaceholder } from "../components/ImagePlaceholder";
import { ProjectGrid } from "../components/ProjectGrid";
import { projects } from "../data/projects";

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find((item) => item.slug === slug);
  if (!project) return <section className="page-section"><div className="container"><h1>Project not found</h1><Link to="/projects">Back to projects</Link></div></section>;
  const similar = projects.filter((item) => item.location === project.location && item.id !== project.id).slice(0, 3);
  return (
    <section className="page-section">
      <div className="container detail-layout">
        <div>
          <ImagePlaceholder src={project.image} label={project.name} />
          <div className="gallery-row">{project.gallery.map((src) => <ImagePlaceholder key={src} src={src} label={`${project.name} gallery`} compact />)}</div>
        </div>
        <article className="detail-copy">
          <Badge>{project.status}</Badge>
          <h1>{project.name}</h1>
          <p>{project.location} | {project.propertyType} | {project.turnoverYear === "Ready" ? "Ready For Occupancy" : `${project.turnoverYear} turnover`}</p>
          <p>{project.description}</p>
          <h3>Highlights</h3>
          <ul>{project.highlights.map((item) => <li key={item}>{item}</li>)}</ul>
          <h3>Unit Options</h3>
          <div className="pill-row">{project.unitTypes.map((item) => <span key={item}>{item}</span>)}</div>
          <h3>Amenities</h3>
          <ul>{project.amenities.map((item) => <li key={item}>{item}</li>)}</ul>
          <h3>Nearby Landmarks</h3>
          <ul>{project.nearbyLandmarks.map((item) => <li key={item}>{item}</li>)}</ul>
          <div className="map-placeholder">Map placeholder. Exact map and directions can be connected later.</div>
          <div className="video-placeholder">Virtual tour/video placeholder. No autoplay video loaded.</div>
          <div className="hero-actions">
            <Button to="/request-computation">Request Latest Computation</Button>
            <Button to="/availability" variant="secondary">Check Availability</Button>
            <Button to="/book-viewing" variant="ghost">Book Site Viewing</Button>
            <Button to="/contact" variant="ghost">Message Luisa</Button>
          </div>
          <DisclaimerBanner text={project.disclaimer} />
        </article>
      </div>
      {similar.length > 0 && <div className="container"><h2>Similar Projects</h2><ProjectGrid projects={similar} /></div>}
    </section>
  );
}
