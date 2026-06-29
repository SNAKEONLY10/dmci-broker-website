import { useParams } from "react-router-dom";
import { Badge } from "../components/Badge";
import { Button } from "../components/Button";
import { DisclaimerBanner } from "../components/DisclaimerBanner";
import { EmptyState } from "../components/EmptyState";
import { ImagePlaceholder } from "../components/ImagePlaceholder";
import { ProjectGrid } from "../components/ProjectGrid";
import { SectionHeader } from "../components/SectionHeader";
import { projects } from "../data/projects";

const sectionLinks = [
  ["Overview", "overview"],
  ["Why Invest", "why-invest"],
  ["Location", "location"],
  ["Site Progress", "site-progress"],
  ["Master Plan", "master-plan"],
  ["Theme", "theme"],
  ["Buildings", "buildings"],
  ["Unit Inventory", "unit-inventory"],
  ["Amenities", "amenities"],
  ["News & Media", "news-media"],
  ["Nearby Properties", "nearby-properties"],
  ["Contact", "contact-project"]
];

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return (
      <section className="page-section">
        <div className="container">
          <EmptyState title="Project not found" text="The project link may have changed. Browse the project directory or ask Luisa for help." />
        </div>
      </section>
    );
  }

  const similar = projects
    .filter((item) => item.id !== project.id && (item.location === project.location || item.status === project.status || project.nearbyProperties.includes(item.slug)))
    .slice(0, 3);

  return (
    <>
      <section className="project-detail-hero">
        <div className="container project-hero-grid">
          <div className="project-hero-media">
            <ImagePlaceholder src={project.image} label={`${project.name} hero preview`} />
            <div className="project-hero-thumbs">
              {project.gallery.slice(0, 3).map((src, index) => (
                <ImagePlaceholder key={src} src={src} label={`${project.name} gallery ${index + 1}`} compact />
              ))}
            </div>
          </div>
          <article className="project-hero-copy">
            <Badge>{project.status}</Badge>
            <p className="mini">{project.location}</p>
            <h1>{project.name}</h1>
            <p className="project-tagline">{project.tagline}</p>
            <p>{project.overview}</p>
            <div className="price-panel">
              <strong>{project.priceRangeLabel}</strong>
              <span>{project.priceSourceNote}</span>
              <span>Project details for confirmation. Ask Luisa for latest computation.</span>
            </div>
            <div className="project-facts">
              <Fact label="Turnover" value={project.turnoverYear === "Ready" ? "Ready For Occupancy" : `${project.turnoverYear} turnover`} />
              <Fact label="Location" value={project.city} />
              <Fact label="Development" value={project.developmentType} />
              <Fact label="Land Area" value={project.landArea} />
              <Fact label="Theme" value={project.architecturalTheme} />
              <Fact label="Unit Types" value={project.unitTypes.join(", ")} />
            </div>
            <div className="hero-actions">
              <Button to="/request-computation">Request Latest Computation</Button>
              <Button to="/availability" variant="secondary">Check Availability with Luisa</Button>
              <Button to="/book-viewing" variant="ghost">Book a Site Viewing</Button>
              <Button to="/contact" variant="ghost">Message Luisa</Button>
            </div>
          </article>
        </div>
      </section>

      <nav className="project-toc" aria-label="Project sections">
        <div className="container">
          {sectionLinks.map(([label, id]) => <a href={`#${id}`} key={id}>{label}</a>)}
        </div>
      </nav>

      <section className="section">
        <div className="container project-detail-layout">
          <main className="detail-sections">
            <DetailSection id="overview" eyebrow="Overview" title="Project Overview">
              <p>{project.overview}</p>
              <div className="spec-grid">
                <Spec label="Development Type" value={project.developmentType} />
                <Spec label="Land Area" value={project.landArea} />
                <Spec label="Architectural Theme" value={project.architecturalTheme} />
                <Spec label="Address" value={project.address} />
                <Spec label="Unit Types" value={project.unitTypes.join(", ")} />
                <Spec label="Status / Turnover" value={project.turnoverYear === "Ready" ? `Ready For Occupancy | ${project.status}` : `${project.turnoverYear} turnover | ${project.status}`} />
              </div>
            </DetailSection>

            <DetailSection id="why-invest" eyebrow="Why Invest" title="Why Consider This Project">
              <div className="premium-card-grid">
                {project.whyInvest.map((item) => <article className="info-card" key={item}><p>{item}</p></article>)}
              </div>
            </DetailSection>

            <DetailSection id="location" eyebrow="Location" title="About the Location">
              <p>{project.aboutLocation}</p>
              <ul className="detail-list">{project.nearbyLandmarks.map((item) => <li key={item}>{item}</li>)}</ul>
              <div className="map-placeholder">Map placeholder. Exact map, directions, and travel times can be connected when approved assets are available.</div>
              <Button to="/book-viewing" variant="secondary">Book a Site Viewing</Button>
            </DetailSection>

            <DetailSection id="site-progress" eyebrow="Site Progress" title="Construction / Site Progress">
              <div className="split-placeholder">
                <ImagePlaceholder src={project.siteProgressImage} label={`${project.name} site progress placeholder`} compact />
                <div>
                  <p>{project.siteProgressStatus}</p>
                  <p className="safety-note">Site progress information should be confirmed through official DMCI channels or Luisa.</p>
                </div>
              </div>
            </DetailSection>

            <DetailSection id="master-plan" eyebrow="Master Plan" title="Master Plan">
              <div className="split-placeholder">
                <ImagePlaceholder src={project.masterPlanImage} label={`${project.name} master plan placeholder`} compact />
                <div>
                  <p>{project.masterPlanNotes}</p>
                  <Button to="/contact" variant="secondary">Request Project Presentation</Button>
                </div>
              </div>
            </DetailSection>

            <DetailSection id="theme" eyebrow="Theme" title={project.architecturalTheme}>
              <div className="split-placeholder">
                <ImagePlaceholder label={`${project.name} theme placeholder`} compact />
                <p>{project.themeDescription}</p>
              </div>
            </DetailSection>

            <DetailSection id="buildings" eyebrow="Buildings" title="Buildings and Features">
              <div className="building-grid">
                {project.buildings.map((building) => (
                  <article className="info-card building-card" key={building.name}>
                    <h3>{building.name}</h3>
                    <p>{building.developmentType}</p>
                    <div className="pill-row">{building.levels.map((level) => <span key={level}>{level}</span>)}</div>
                    <h4>Features</h4>
                    <ul>{building.features.map((feature) => <li key={feature}>{feature}</li>)}</ul>
                  </article>
                ))}
              </div>
            </DetailSection>

            <DetailSection id="unit-inventory" eyebrow="Unit Inventory" title="Unit Inventory Preview">
              <p className="reference-note">This is not live inventory. Treat this as a reference snapshot only and ask Luisa for latest availability before deciding.</p>
              <div className="inventory-table rich">
                <div className="inventory-head"><span>Unit Type</span><span>Floor Area</span><span>Indicative Range / Computation</span><span>Status</span><span>Action</span></div>
                {project.unitInventoryPreview.map((item) => (
                  <div className="inventory-row" key={item.type}>
                    <span>{item.type}</span>
                    <span>{item.floorArea}</span>
                    <span>{item.indicativeRange || item.computation}</span>
                    <span>{item.status || item.availability}</span>
                    <Button to="/request-computation" variant="secondary">Request Computation</Button>
                  </div>
                ))}
              </div>
              <p className="safety-note">Reference only. Availability and prices change. Ask Luisa for latest computation.</p>
            </DetailSection>

            <DetailSection id="amenities" eyebrow="Amenities" title="Amenities and Lifestyle Features">
              <h3>Featured Amenities</h3>
              <div className="amenity-grid">{project.amenities.map((item) => <span key={item}>{item}</span>)}</div>
              <h3>Other Amenities</h3>
              <div className="amenity-grid compact">{project.otherAmenities.map((item) => <span key={item}>{item}</span>)}</div>
            </DetailSection>

            <DetailSection id="news-media" eyebrow="News & Media" title="Project Updates and Reference Links">
              <div className="premium-card-grid">
                {project.newsMedia.map((item) => <article className="info-card" key={item.title}><h3>{item.title}</h3><p>{item.label}</p></article>)}
              </div>
            </DetailSection>

            <DetailSection eyebrow="Gallery" title="Project Gallery Placeholders">
              <div className="gallery-grid">{project.gallery.map((src, index) => <ImagePlaceholder key={src} src={src} label={`${project.name} gallery ${index + 1}`} compact />)}</div>
            </DetailSection>

            <DetailSection eyebrow="Virtual Tour" title="Virtual Tour">
              <div className="video-placeholder">
                <strong>No autoplay video loaded.</strong>
                <p>Request a virtual tour link or online consultation schedule from Luisa.</p>
                <Button to="/contact" variant="secondary">Request Virtual Tour Link</Button>
              </div>
            </DetailSection>
          </main>

          <aside className="detail-cta-card">
            <strong>Need the latest details?</strong>
            <p>Prices, unit availability, promos, and payment terms can change. Ask Luisa for the latest computation and confirmed availability before deciding.</p>
            <Button to="/request-computation">Request Latest Computation</Button>
            <Button to="/availability" variant="secondary">Check Availability with Luisa</Button>
            <Button to="/book-viewing" variant="secondary">Book a Site Viewing</Button>
            <Button to="/contact" variant="ghost">Message Luisa</Button>
            <DisclaimerBanner text="Updated price available upon request. Availability subject to confirmation." />
          </aside>
        </div>
      </section>

      {similar.length > 0 && (
        <section className="section soft" id="nearby-properties">
          <div className="container">
            <SectionHeader eyebrow="Nearby Properties" title="Other Options to Compare" text="Compare nearby or similarly timed projects, then ask Luisa for updated details." />
            <ProjectGrid projects={similar} />
          </div>
        </section>
      )}

      <section className="final-cta" id="contact-project">
        <div className="container">
          <h2>Interested in this project?</h2>
          <p>Request updated details before deciding. No exact prices or availability are guaranteed on this website.</p>
          <div className="hero-actions center">
            <Button to="/request-computation">Request Latest Computation</Button>
            <Button to="/availability" variant="secondary">Check Availability with Luisa</Button>
            <Button to="/book-viewing" variant="ghost">Book Site Viewing</Button>
            <Button to="/contact" variant="ghost">Message Luisa</Button>
          </div>
          <DisclaimerBanner text={project.disclaimer} />
        </div>
      </section>
    </>
  );
}

function DetailSection({ id, eyebrow, title, children }) {
  return (
    <section className="detail-section" id={id}>
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {children}
    </section>
  );
}

function Fact({ label, value }) {
  return <span><strong>{label}</strong>{value}</span>;
}

function Spec({ label, value }) {
  return <div><strong>{label}</strong><span>{value}</span></div>;
}
