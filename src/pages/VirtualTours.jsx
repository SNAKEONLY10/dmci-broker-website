import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Building2,
  CalendarCheck2,
  ChevronRight,
  Eye,
  MapPin,
  MonitorPlay,
  PlayCircle,
  Search,
  SlidersHorizontal
} from "lucide-react";
import { Button } from "../components/Button";
import { ImagePlaceholder } from "../components/ImagePlaceholder";
import { SectionHeader } from "../components/SectionHeader";
import { projects } from "../data/projects";

const tourProjects = projects.filter((project) => project.videoTourUrl || project.videoTourEmbedUrl);
const tourLocations = [...new Set(tourProjects.map((project) => project.location))];

const previewSteps = [
  [MonitorPlay, "Preview the project", "Open the project media section to review the available AVP, virtual tour, and visual references."],
  [SlidersHorizontal, "Build a shortlist", "Compare the location, unit mix, project status, and published project details alongside the visuals."],
  [CalendarCheck2, "Verify in person or online", "Ask Luisa to confirm the latest presentation link, available unit details, and viewing options."]
];

export default function VirtualTours() {
  const [query, setQuery] = useState("");
  const [location, setLocation] = useState("");

  const term = query.trim().toLowerCase();
  const filteredProjects = tourProjects.filter((project) => {
    const matchesLocation = !location || project.location === location;
    const matchesText = !term || `${project.name} ${project.location} ${project.status}`.toLowerCase().includes(term);
    return matchesLocation && matchesText;
  });

  return (
    <div className="support-page virtual-tours-page">
      <section className="support-hero virtual-tours-hero">
        <div className="container support-hero-inner">
          <nav className="support-breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <ChevronRight size={15} aria-hidden="true" />
            <span aria-current="page">Virtual Tours</span>
          </nav>
          <div className="support-hero-copy" data-reveal="hero-text">
            <span className="eyebrow">Project Media Library</span>
            <h1>Preview the project, then verify the details.</h1>
            <p>
              Use approved AVP and virtual tour references to understand the project setting before
              requesting a current presentation or arranging a viewing.
            </p>
            <ul className="support-hero-points" aria-label="Media library summary">
              <li><PlayCircle size={17} aria-hidden="true" /> {tourProjects.length} project media pages</li>
              <li><Building2 size={17} aria-hidden="true" /> Project visuals and context</li>
              <li><Eye size={17} aria-hidden="true" /> Click-to-load media</li>
            </ul>
            <div className="support-hero-actions">
              <Button to="#tour-library">Browse the Library <ArrowRight size={17} aria-hidden="true" /></Button>
              <Button to="/book-viewing" variant="secondary">Arrange a Viewing</Button>
            </div>
          </div>
        </div>
      </section>

      <nav className="support-jump-nav" aria-label="Virtual tour page sections">
        <div className="container">
          <strong>On this page</strong>
          <div>
            <a href="#how-to-preview">How to Use Media</a>
            <a href="#tour-library">Tour Library</a>
            <a href="#tour-next-step">Viewing Options</a>
          </div>
        </div>
      </nav>

      <section className="section tour-preview-process" id="how-to-preview">
        <div className="container">
          <SectionHeader
            eyebrow="Use Visuals Well"
            title="A preview is the start of the review"
            text="Visuals help you understand a project, but the current unit, view, condition, and availability still need confirmation."
          />
          <div className="tour-preview-grid">
            {previewSteps.map(([Icon, title, text], index) => (
              <article key={title} data-reveal="card">
                <span>{String(index + 1).padStart(2, "0")}</span>
                <Icon size={25} aria-hidden="true" />
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section soft tour-library" id="tour-library">
        <div className="container">
          <div className="tour-library-heading">
            <div className="support-section-heading" data-reveal="text-group">
              <span className="eyebrow">Approved Projects</span>
              <h2>Find a project media page.</h2>
              <p>Search by project or narrow the library by location.</p>
            </div>
            <p className="tour-result-count" aria-live="polite">
              Showing <strong>{filteredProjects.length}</strong> of {tourProjects.length} projects
            </p>
          </div>

          <div className="tour-library-filters" data-reveal="section">
            <label>
              <span>Search project</span>
              <span className="tour-search-input"><Search size={18} aria-hidden="true" /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Project name or city" /></span>
            </label>
            <label>
              <span>Location</span>
              <select value={location} onChange={(event) => setLocation(event.target.value)}>
                <option value="">All locations</option>
                {tourLocations.map((item) => <option key={item} value={item}>{item}</option>)}
              </select>
            </label>
            {(query || location) && <button type="button" className="tour-clear-button" onClick={() => { setQuery(""); setLocation(""); }}>Clear filters</button>}
          </div>

          {filteredProjects.length ? (
            <div className="tour-library-grid">
              {filteredProjects.map((project) => <ProjectTourCard project={project} key={project.slug} />)}
            </div>
          ) : (
            <div className="tour-empty-state" role="status">
              <Search size={25} aria-hidden="true" />
              <h3>No project matches these filters.</h3>
              <p>Clear the filters or browse all approved projects.</p>
              <Button to="/projects" variant="secondary">View All Projects</Button>
            </div>
          )}
        </div>
      </section>

      <section className="section tour-next-step" id="tour-next-step">
        <div className="container tour-next-step-layout">
          <div data-reveal="text-group">
            <span className="eyebrow">After the Preview</span>
            <h2>Ask to see what matters for your decision.</h2>
            <p>
              Share your preferred project, unit type, schedule, and whether you want a site visit,
              model-unit viewing, online presentation, or current unit-specific guidance.
            </p>
          </div>
          <div className="tour-next-step-actions" data-reveal="section">
            <Button to="/book-viewing">Book a Site Viewing</Button>
            <Button to="/availability" variant="secondary">Check Availability</Button>
            <small>Media and viewing access depend on the project, site schedule, and current approved materials.</small>
          </div>
        </div>
      </section>
    </div>
  );
}

function ProjectTourCard({ project }) {
  return (
    <article className="project-tour-card" data-reveal="card">
      <Link className="project-tour-visual" to={`/projects/${project.slug}#views`} aria-label={`Open ${project.name} media section`}>
        <ImagePlaceholder
          src={project.thumbnail || project.image}
          label={`${project.name} project media preview`}
          compact
          variant="gallery"
        />
        <span><PlayCircle size={21} aria-hidden="true" /> Open media</span>
      </Link>
      <div className="project-tour-copy">
        <small><MapPin size={14} aria-hidden="true" /> {project.location}</small>
        <h3>{project.name}</h3>
        <p>{project.status} | {project.unitTypes.slice(0, 4).join(", ")}</p>
        <div>
          <Button to={`/projects/${project.slug}#views`} variant="secondary">View Project Media</Button>
          <Button to={`/book-viewing?project=${encodeURIComponent(project.name)}&inquiryType=Book%20a%20Site%20Viewing`} variant="ghost">Arrange Viewing</Button>
        </div>
      </div>
    </article>
  );
}
