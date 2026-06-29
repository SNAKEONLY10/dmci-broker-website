import { useState } from "react";
import { useParams } from "react-router-dom";
import { Badge } from "../components/Badge";
import { Button } from "../components/Button";
import { DisclaimerBanner } from "../components/DisclaimerBanner";
import { EmptyState } from "../components/EmptyState";
import { ImagePlaceholder } from "../components/ImagePlaceholder";
import { ProjectGrid } from "../components/ProjectGrid";
import { SectionHeader } from "../components/SectionHeader";
import { projects } from "../data/projects";

const defaultSectionLinks = [
  ["Overview", "overview"],
  ["Why Invest", "why-invest"],
  ["Location", "location"],
  ["Site Progress", "site-progress"],
  ["Master Plan", "master-plan"],
  ["Theme", "theme"],
  ["Buildings", "buildings"],
  ["Unit Preview", "unit-inventory"],
  ["Amenities", "amenities"],
  ["Gallery", "gallery"],
  ["Contact", "contact-project"]
];

const richSectionLinks = [
  ["Facts", "facts"],
  ["Pricing", "pricing"],
  ["Overview", "overview"],
  ["Location", "location"],
  ["Site Plan", "site-development"],
  ["Views", "views"],
  ["Amenities", "amenities"],
  ["Units", "unit-options"],
  ["Floor Plans", "floor-plans"],
  ["Payment", "payment"],
  ["Reservation", "reservation"],
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

  const isRichProject = project.contentLevel === "rich" && project.projectFacts?.length;
  const sectionLinks = isRichProject ? richSectionLinks : defaultSectionLinks;
  const similar = projects
    .filter((item) => item.id !== project.id && (item.location === project.location || item.status === project.status || project.nearbyProperties.includes(item.slug)))
    .slice(0, 3);

  return (
    <>
      <ProjectHero project={project} isRichProject={isRichProject} />

      <nav className="project-toc" aria-label="Project sections">
        <div className="container">
          {sectionLinks.map(([label, id]) => <a href={`#${id}`} key={id}>{label}</a>)}
        </div>
      </nav>

      <section className="section project-detail-main">
        <div className="container project-detail-layout">
          <main className="detail-sections">
            {isRichProject ? <RichProjectSections project={project} /> : <StandardProjectSections project={project} />}
          </main>

          <LatestDetailsCard project={project} />
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
          <h2>Interested in {project.name}?</h2>
          <p>Request updated computation, availability, and viewing assistance before deciding.</p>
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

function ProjectHero({ project, isRichProject }) {
  const heroFacts = [
    { label: "Turnover", value: project.turnoverYear === "Ready" ? "Ready For Occupancy" : `${project.turnoverYear} turnover` },
    { label: "Location", value: project.city },
    { label: "Development", value: project.developmentType },
    { label: "Land Area", value: project.landArea },
    { label: "Theme", value: project.architecturalTheme },
    { label: "Unit Types", value: project.unitTypes.join(", ") }
  ].filter((fact) => isDisplayValue(fact.value));
  const heroImages = [
    { src: project.image, label: project.name, variant: "hero" },
    ...project.gallery.slice(0, 3).map((src, index) => ({
      src,
      label: `${project.name} gallery ${index + 1}`,
      variant: "gallery"
    }))
  ];
  const [zoomImage, setZoomImage] = useState(null);

  return (
    <section className={`project-detail-hero ${isRichProject ? "project-detail-hero-rich" : ""}`}>
      <div className="container project-hero-grid">
        <div className="project-hero-media">
          <ZoomableProjectImage image={heroImages[0]} onOpen={setZoomImage} />
          <div className="project-hero-thumbs">
            {heroImages.slice(1).map((image, index) => (
              <ZoomableProjectImage key={`${image.src}-${index}`} image={image} compact onOpen={setZoomImage} />
            ))}
          </div>
        </div>
        <article className="project-hero-copy">
          <div className="hero-meta-line">
            <Badge>{project.status}</Badge>
            <span>{project.location}</span>
            {project.targetRfo && <span>Target RFO: {project.targetRfo}</span>}
          </div>
          <p className="mini">{project.developmentType}</p>
          <h1>{project.name}</h1>
          <p className="project-tagline">{project.tagline}</p>
          <p>{project.overview}</p>
          <div className="price-panel reference-price-panel">
            <strong>{project.priceRangeLabel}</strong>
            <span>{project.priceSourceNote}</span>
            <span>Subject to final confirmation. Ask Luisa for latest computation.</span>
          </div>
          <div className="project-facts">
            {heroFacts.map((fact) => <Fact key={fact.label} label={fact.label} value={fact.value} />)}
          </div>
          <div className="hero-actions">
            <Button to="/request-computation">Request Latest Computation</Button>
            <Button to="/availability" variant="secondary">Check Availability with Luisa</Button>
            <Button to="/book-viewing" variant="ghost">Book a Site Viewing</Button>
            <Button to="/contact" variant="ghost">Message Luisa</Button>
          </div>
        </article>
      </div>
      <ImageLightbox image={zoomImage} onClose={() => setZoomImage(null)} />
    </section>
  );
}

function RichProjectSections({ project }) {
  return (
    <>
      <ReferenceNotice />

      <DetailSection id="facts" eyebrow="Project Facts" title={`${project.name} at a Glance`}>
        <div className="rich-fact-grid">
          {project.projectFacts.map((fact) => <Spec key={fact.label} label={fact.label} value={fact.value} />)}
        </div>
      </DetailSection>

      <DetailSection id="pricing" eyebrow="Price Guide" title="Indicative Price and Unit Summary">
        <p className="reference-note">For buyer guidance only. Prices and availability are subject to final confirmation.</p>
        <div className="pricing-card-grid">
          {project.summaryPricing.map((item) => (
            <article className="pricing-card" key={item.type}>
              <span>{item.type}</span>
              <strong>{item.range}</strong>
              <p>{item.floorArea || item.size}</p>
              {item.monthlyDp && <p>{item.monthlyDp}</p>}
              {item.status && <small>{item.status}</small>}
              <small>{item.note}</small>
            </article>
          ))}
        </div>
        <div className="compact-cta-row">
          <Button to="/request-computation">Request Latest Computation</Button>
          <Button to="/availability" variant="secondary">Ask for Updated Units</Button>
        </div>
      </DetailSection>

      <DetailSection id="overview" eyebrow="Overview" title="Project Overview">
        {(project.introParagraphs || [project.overview]).map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        <div className="premium-card-grid">
          {project.whyInvest.map((item) => <article className="info-card" key={item}><p>{item}</p></article>)}
        </div>
      </DetailSection>

      <DetailSection id="location" eyebrow="Location" title={project.locationDetails?.title || "Location"}>
        <p>{project.locationDetails?.text || project.aboutLocation}</p>
        <div className="address-card">
          <strong>Exact Address</strong>
          <span>{project.locationDetails?.exactAddress || project.address}</span>
        </div>
        <GroupedList groups={project.nearbyDestinations} />
        <div className="map-placeholder compact-map">Map and travel references can be reviewed during Luisa's project presentation.</div>
        <Button to="/book-viewing" variant="secondary">Book a Site Viewing</Button>
      </DetailSection>

      <DetailSection id="site-development" eyebrow="Site Development" title={project.siteDevelopment?.title || "Site Development Plan"}>
        <div className="site-development-card">
          <ImagePlaceholder src={project.masterPlanImage} label={`${project.name} site development`} compact variant="masterPlan" />
          <div>
            <p>{project.siteDevelopment?.text || project.masterPlanNotes}</p>
            <div className="mini-stat-grid">
              {(project.siteDevelopment?.keyStats || []).map((item) => <Spec key={item.label} label={item.label} value={item.value} />)}
            </div>
            <p className="safety-note">Site development, tower details, and technical drawings must be confirmed through official project materials.</p>
          </div>
        </div>
      </DetailSection>

      <DetailSection id="views" eyebrow="Views and Tour" title="360 View and Guided Presentation">
        <div className="view-card-grid">
          {project.viewHighlights.map((item) => (
            <article className="view-card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
        <VideoTourBlock project={project} />
      </DetailSection>

      <DetailSection id="amenities" eyebrow="Amenities" title="Amenities and Lifestyle Spaces">
        <GroupedList groups={project.amenityGroups} compact />
      </DetailSection>

      <DetailSection id="unit-options" eyebrow="Unit Types" title="Unit Options and Guide Ranges">
        <p className="reference-note">For guidance only. Unit cuts, floor areas, prices, promos, and availability can change.</p>
        {project.unitSections.map((section) => <UnitSection section={section} key={section.title} />)}
      </DetailSection>

      <DetailSection id="floor-plans" eyebrow="Floor Plans" title="Floor Plans">
        <div className="floor-plan-grid">
          {project.floorPlans.map((item) => (
            <article className="floor-plan-card" key={item.title}>
              <ImagePlaceholder label={item.title} compact variant="gallery" />
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <Button to="/contact" variant="secondary">Request Layout Sheet</Button>
            </article>
          ))}
        </div>
      </DetailSection>

      <DetailSection id="payment" eyebrow="Payment Terms" title={project.paymentTerms.title}>
        <p>{project.paymentTerms.text}</p>
        <div className="payment-grid">
          <article className="payment-card">
            <h3>Computation Guide</h3>
            {project.paymentTerms.sampleComputation.map((item) => <Spec key={item.label} label={item.label} value={item.value} />)}
          </article>
          <article className="payment-card">
            <h3>Monthly Payment Guide</h3>
            {project.paymentTerms.monthlyAmortization.map((item) => <Spec key={item.label} label={item.label} value={item.value} />)}
          </article>
          {project.paymentTerms.contractBreakdown && (
            <article className="payment-card payment-card-wide">
              <h3>Contract Price and Financing</h3>
              {project.paymentTerms.contractBreakdown.map((item) => <Spec key={item.label} label={item.label} value={item.value} />)}
            </article>
          )}
          <article className="payment-card">
            <h3>Important Notes</h3>
            <ul>{project.paymentTerms.importantNotes.map((item) => <li key={item}>{item}</li>)}</ul>
          </article>
        </div>
        {project.paymentTerms.promoCards && (
          <div className="promo-card-grid">
            {project.paymentTerms.promoCards.map((promo) => (
              <article className="promo-card" key={promo.title}>
                <h3>{promo.title}</h3>
                <ul>{promo.items.map((item) => <li key={item}>{item}</li>)}</ul>
              </article>
            ))}
          </div>
        )}
        <SampleComputationList items={project.paymentTerms.sampleAvailableComputations} />
        <p className="safety-note">{project.paymentTerms.promoReference}</p>
      </DetailSection>

      <DetailSection id="reservation" eyebrow="Reservation" title="Unit Holding and Reservation Requirements">
        <div className="reservation-grid">
          <article className="unit-holding-card">
            <h3>{project.unitHoldingPortal.title}</h3>
            <p>{project.unitHoldingPortal.text}</p>
            <ol>{project.unitHoldingPortal.steps.map((step) => <li key={step}>{step}</li>)}</ol>
          </article>
          <article className="reservation-checklist">
            <h3>Checklist to Prepare</h3>
            <ul>{project.reservationRequirements.map((item) => <li key={item}>{item}</li>)}</ul>
          </article>
        </div>
      </DetailSection>

      <DetailSection id="gallery" eyebrow="Gallery" title={`${project.name} Gallery`}>
        <Gallery project={project} />
      </DetailSection>
    </>
  );
}

function StandardProjectSections({ project }) {
  return (
    <>
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
        <div className="map-placeholder">Map preview, directions, and travel references can be added once approved project materials are available.</div>
        <Button to="/book-viewing" variant="secondary">Book a Site Viewing</Button>
      </DetailSection>

      <DetailSection id="site-progress" eyebrow="Site Progress" title="Construction / Site Progress">
        <div className="split-placeholder">
          <ImagePlaceholder src={project.siteProgressImage} label={`${project.name} site progress`} compact variant="siteProgress" />
          <div>
            <p>{project.siteProgressStatus}</p>
            <p className="safety-note">Site progress information should be confirmed through official DMCI channels or Luisa.</p>
          </div>
        </div>
      </DetailSection>

      <DetailSection id="master-plan" eyebrow="Master Plan" title="Master Plan">
        <div className="split-placeholder">
          <ImagePlaceholder src={project.masterPlanImage} label={`${project.name} master plan`} compact variant="masterPlan" />
          <div>
            <p>{project.masterPlanNotes}</p>
            <Button to="/contact" variant="secondary">Request Project Presentation</Button>
          </div>
        </div>
      </DetailSection>

      <DetailSection id="theme" eyebrow="Theme" title={project.architecturalTheme}>
        <div className="split-placeholder">
          <ImagePlaceholder label={`${project.name} design inspiration`} compact variant="gallery" />
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
        <p className="reference-note">This is not live inventory. Ask Luisa for latest availability before deciding.</p>
        <InventoryPreview project={project} />
      </DetailSection>

      <DetailSection id="amenities" eyebrow="Amenities" title="Amenities and Lifestyle Features">
        <h3>Featured Amenities</h3>
        <div className="amenity-grid">{project.amenities.map((item) => <span key={item}>{item}</span>)}</div>
        <h3>Other Amenities</h3>
        <div className="amenity-grid compact">{project.otherAmenities.map((item) => <span key={item}>{item}</span>)}</div>
      </DetailSection>

      <DetailSection id="gallery" eyebrow="Gallery" title="Project Gallery">
        <Gallery project={project} />
      </DetailSection>

      <DetailSection id="news-media" eyebrow="News & Media" title="Project Updates and Reference Links">
        <div className="premium-card-grid">
          {project.newsMedia.map((item) => <article className="info-card" key={item.title}><h3>{item.title}</h3><p>{item.label}</p></article>)}
        </div>
      </DetailSection>
    </>
  );
}

function LatestDetailsCard({ project }) {
  return (
    <aside className="detail-cta-card sticky-project-cta">
      <strong>Need the latest details?</strong>
      <p>Prices, unit availability, promos, and payment terms can change. Ask Luisa for the latest computation and confirmed availability before deciding.</p>
      <Button to="/request-computation">Request Latest Computation</Button>
      <Button to="/availability" variant="secondary">Check Availability with Luisa</Button>
      <Button to="/book-viewing" variant="secondary">Book a Site Viewing</Button>
      <Button to="/contact" variant="ghost">Message Luisa</Button>
      <DisclaimerBanner text={project.priceSourceNote || "Updated details available upon request."} />
    </aside>
  );
}

function UnitSection({ section }) {
  return (
    <article className="unit-section-card">
      <div className="unit-section-heading">
        <div>
          <h3>{section.title}</h3>
          <p>{section.description}</p>
        </div>
        <div className="unit-layout-pills">{section.layouts.map((layout) => <span key={layout}>{layout}</span>)}</div>
      </div>
      <div className="unit-table-scroll">
        <table className="unit-table">
          <thead>
            <tr>
              <th>Layout</th>
              <th>Floor Area</th>
              <th>Guide Range</th>
              <th>Status</th>
              <th>Computation</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {section.rows.map((row) => (
              <tr key={`${section.title}-${row.layout}`}>
                <td data-label="Layout">{row.layout}</td>
                <td data-label="Floor Area">{row.floorArea}</td>
                <td data-label="Guide Range">{row.priceRange}</td>
                <td data-label="Status">{row.status}</td>
                <td data-label="Computation">{row.monthlyDp}</td>
                <td data-label="Action"><Button to="/request-computation" variant="secondary">Request Computation</Button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="unit-section-cta">
        <Button to="/request-computation" variant="secondary">Request latest computation for this unit type</Button>
      </div>
    </article>
  );
}

function SampleComputationList({ items = [] }) {
  if (!items.length) return null;
  const hasObjects = typeof items[0] === "object";

  if (!hasObjects) {
    return (
      <div className="sample-computation-list">
        {items.map((item) => <span key={item}>{item}</span>)}
      </div>
    );
  }

  return (
    <div className="sample-computation-card-grid">
      {items.map((item) => (
        <article className="sample-computation-card" key={`${item.type}-${item.size}-${item.price}`}>
          <strong>{item.type}</strong>
          <span>{item.size}</span>
          <b>{item.price}</b>
          <small>{item.rfo}</small>
          <small>{item.note}</small>
        </article>
      ))}
    </div>
  );
}

function GroupedList({ groups = [], compact = false }) {
  if (!groups.length) return null;
  return (
    <div className={`grouped-list-grid ${compact ? "compact" : ""}`}>
      {groups.map((group) => (
        <article className="grouped-list-card" key={group.group || group.title}>
          <h3>{group.group || group.title}</h3>
          <ul>{group.items.map((item) => <li key={item}>{item}</li>)}</ul>
        </article>
      ))}
    </div>
  );
}

function InventoryPreview({ project }) {
  return (
    <div className="inventory-table rich">
      <div className="inventory-head"><span>Unit Type</span><span>Floor Area</span><span>Computation</span><span>Status</span><span>Action</span></div>
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
  );
}

function Gallery({ project }) {
  const [zoomImage, setZoomImage] = useState(null);
  const images = project.gallery.map((src, index) => ({
    src,
    label: `${project.name} gallery ${index + 1}`,
    variant: "gallery"
  }));

  return (
    <>
      <div className="gallery-grid rich-gallery-grid">
        {images.map((image, index) => (
          <ZoomableProjectImage key={`${image.src}-${index}`} image={image} compact onOpen={setZoomImage} />
        ))}
      </div>
      <ImageLightbox image={zoomImage} onClose={() => setZoomImage(null)} />
    </>
  );
}

function ZoomableProjectImage({ image, compact = false, onOpen }) {
  return (
    <button
      className="zoomable-image"
      type="button"
      aria-label={`Open ${image.label} preview`}
      onClick={() => onOpen(image)}
    >
      <ImagePlaceholder src={image.src} label={image.label} compact={compact} variant={image.variant} />
    </button>
  );
}

function ImageLightbox({ image, onClose }) {
  if (!image) return null;

  return (
    <div className="image-lightbox" role="dialog" aria-modal="true" aria-label={image.label}>
      <button className="image-lightbox-backdrop" type="button" aria-label="Close image preview" onClick={onClose} />
      <div className="image-lightbox-panel">
        <button className="image-lightbox-close" type="button" aria-label="Close zoomed image" onClick={onClose}>X</button>
        <ImagePlaceholder src={image.src} label={image.label} variant="hero" />
        <p>{image.label}</p>
      </div>
    </div>
  );
}

function VideoTourBlock({ project }) {
  return (
    <div className="video-tour-card">
      <ImagePlaceholder label={`${project.name} virtual tour`} compact variant="gallery" />
      <div>
        <strong>Virtual tour link available upon request</strong>
        <p>Large videos are not loaded directly here so the website stays fast on mobile. Ask Luisa for the latest approved tour link or project presentation.</p>
        {project.videoTourUrl ? (
          <Button href={project.videoTourUrl} target="_blank" rel="noreferrer" variant="secondary">Open Virtual Tour</Button>
        ) : (
          <Button to="/contact" variant="secondary">Request Virtual Tour Link</Button>
        )}
      </div>
    </div>
  );
}

function ReferenceNotice() {
  return (
    <div className="reference-warning">
      <strong>Guide information only</strong>
      <span>Prices, unit availability, promos, payment terms, unit details, and turnover schedules are subject to final confirmation. Request the latest computation from Luisa before making decisions.</span>
    </div>
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

function isDisplayValue(value) {
  if (value == null) return false;
  const normalized = String(value).trim().toLowerCase();
  return normalized !== "" && normalized !== "for confirmation" && normalized !== "undefined" && normalized !== "null";
}
