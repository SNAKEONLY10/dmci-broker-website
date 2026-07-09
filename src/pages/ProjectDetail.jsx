import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Badge } from "../components/Badge";
import { Button } from "../components/Button";
import { DisclaimerBanner } from "../components/DisclaimerBanner";
import { EmptyState } from "../components/EmptyState";
import { ImagePlaceholder } from "../components/ImagePlaceholder";
import { ProjectGrid } from "../components/ProjectGrid";
import { SectionHeader } from "../components/SectionHeader";
import { projects } from "../data/projects";
import { buyerSafePriceNote, formatInlineGuide, formatPriceGuide } from "../utils/displayText";

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
  ["Rental Pool", "rental-pool"],
  ["Units", "unit-options"],
  ["Floor Plans", "floor-plans"],
  ["Payment", "payment"],
  ["Fit-out", "fit-out"],
  ["Unit Holding", "unit-holding"],
  ["Reservation", "reservation"],
  ["Gallery", "gallery"],
  ["Contact", "contact-project"]
];

function formatTurnoverLabel(value) {
  if (value === "Ready") return "Ready For Occupancy";
  if (/20\d{2}/.test(String(value))) return `${value} turnover`;
  return value || "Turnover for confirmation";
}

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
  const sectionLinks = isRichProject
    ? (project.sectionLinks || richSectionLinks).filter(([, id]) => {
      if (id === "rental-pool") return project.rentalPoolProgram;
      if (id === "fit-out") return project.fitOutOptions;
      return true;
    })
    : defaultSectionLinks;
  const similar = projects
    .filter((item) => item.id !== project.id && item.assetStatus === "complete" && (item.location === project.location || item.status === project.status || project.nearbyProperties.includes(item.slug)))
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
        <div className="container" data-reveal="text-group">
          <h2>Interested in {project.name}?</h2>
          <p>Request updated computation, availability, and viewing assistance before deciding.</p>
          <div className="hero-actions center">
            <Button to={projectInquiryPath("/request-computation", project, "Computation")}>Request Latest Computation</Button>
            <Button to={projectInquiryPath("/availability", project, "Availability")} variant="secondary">Check Availability with Luisa</Button>
            <Button to={projectInquiryPath("/book-viewing", project, "Site viewing")} variant="ghost">Book Site Viewing</Button>
            <Button to={projectInquiryPath("/contact", project, "Other")} variant="ghost">Message Luisa</Button>
          </div>
          <DisclaimerBanner text={project.disclaimer} />
        </div>
      </section>
    </>
  );
}

function ProjectHero({ project, isRichProject }) {
  const heroFacts = [
    { label: "Turnover", value: formatTurnoverLabel(project.turnoverYear) },
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
  const heroActions = project.heroCtas || [
    { label: "Request Latest Computation", to: projectInquiryPath("/request-computation", project, "Computation"), variant: "primary" },
    { label: "Check Availability with Luisa", to: projectInquiryPath("/availability", project, "Availability"), variant: "secondary" },
    { label: "Book a Site Viewing", to: projectInquiryPath("/book-viewing", project, "Site viewing"), variant: "ghost" },
    { label: "Message Luisa", to: projectInquiryPath("/contact", project, "Other"), variant: "ghost" }
  ];

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
          <div className="project-media-note" aria-label={`${project.name} visual review note`}>
            <span>Broker-assisted review</span>
            <strong>Review the visuals, then confirm the latest details before reserving.</strong>
            <p>Availability, pricing, promos, payment terms, and viewing access are confirmed with Luisa before any decision.</p>
          </div>
        </div>
        <article className="project-hero-copy" data-reveal="hero-text">
          {project.logoImage && <img className="project-logo-mark" src={project.logoImage} alt={`${project.name} logo`} loading="lazy" decoding="async" />}
          <div className="hero-meta-line">
            <Badge>{project.status}</Badge>
            <span>{project.location}</span>
            {project.targetRfo && <span className="target-rfo-chip">Target RFO: {project.targetRfo}</span>}
          </div>
          <p className="mini">{project.detailTitle || project.developmentType}</p>
          <h1>{project.heroHeadline || project.name}</h1>
          <p className="project-tagline">{project.tagline}</p>
          <p>{project.overview}</p>
          <div className="price-panel reference-price-panel">
            <strong>{formatPriceGuide(project.priceRangeLabel)}</strong>
            <span>{buyerSafePriceNote(project.priceSourceNote)}</span>
            <span>Subject to final confirmation. Ask Luisa for latest computation.</span>
          </div>
          <div className="project-facts">
            {heroFacts.map((fact) => <Fact key={fact.label} label={fact.label} value={fact.value} />)}
          </div>
          <div className="hero-actions">
            {heroActions.map((action) => (
              <Button key={action.label} to={action.to} href={action.href} variant={action.variant || "primary"}>{action.label}</Button>
            ))}
          </div>
        </article>
      </div>
      <ImageLightbox image={zoomImage} onClose={() => setZoomImage(null)} />
    </section>
  );
}

function RichProjectSections({ project }) {
  if (project.richProjectType === "oriana") {
    return <OrianaProjectSections project={project} />;
  }

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
              <strong>{item.range || item.price}</strong>
              <p>{item.floorArea || item.size}</p>
              {item.monthlyDp && <p>{item.monthlyDp}</p>}
              {item.status && <small>{item.status}</small>}
              <small>{item.note}</small>
            </article>
          ))}
        </div>
        {project.summaryPricingNote && <p className="safety-note">{project.summaryPricingNote}</p>}
        <div className="compact-cta-row">
          <Button to={projectInquiryPath("/request-computation", project, "Computation")}>Request Latest Computation</Button>
          <Button to={projectInquiryPath("/availability", project, "Availability")} variant="secondary">Ask for Updated Units</Button>
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
        {project.locationDetails?.note && <p className="safety-note">{project.locationDetails.note}</p>}
        <GroupedList groups={project.nearbyDestinations} />
        <LocationMap project={project} />
      </DetailSection>

      <DetailSection id="site-development" eyebrow="Site Development" title={project.siteDevelopment?.title || "Site Development Plan"}>
        <div className="site-development-card">
          <ImagePlaceholder src={project.masterPlanImage} label={`${project.name} site development`} compact variant="masterPlan" />
          <div>
            {(project.siteDevelopment?.paragraphs || [project.siteDevelopment?.text || project.masterPlanNotes]).map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            <div className="mini-stat-grid">
              {(project.siteDevelopment?.keyStats || []).map((item) => <Spec key={item.label} label={item.label} value={item.value} />)}
            </div>
            <p className="safety-note">Site development, tower details, and final project materials must be confirmed through Luisa or official project channels.</p>
          </div>
        </div>
      </DetailSection>

      <DetailSection id="views" eyebrow="Views and Tour" title="360 View and Guided Presentation">
        <div className="view-card-grid">
          {project.viewHighlights.map((item) => (
            <article className="view-card" key={typeof item === "string" ? item : item.title}>
              <h3>{typeof item === "string" ? item : item.title}</h3>
              {typeof item === "string" ? <p>Ask Luisa to confirm current views, tour links, and approved presentation materials.</p> : <p>{item.text}</p>}
            </article>
          ))}
        </div>
        <VideoTourBlock project={project} />
      </DetailSection>

      <DetailSection id="amenities" eyebrow="Amenities" title="Amenities and Lifestyle Spaces">
        <GroupedList groups={project.amenityGroups} compact />
        {project.amenityNote && <p className="safety-note">{project.amenityNote}</p>}
      </DetailSection>

      {project.rentalPoolProgram && (
        <DetailSection id="rental-pool" eyebrow="Rental Pool" title={project.rentalPoolProgram.title}>
          <p>{project.rentalPoolProgram.intro}</p>
          <div className="premium-card-grid">
            {project.rentalPoolProgram.cards.map((card) => (
              <article className="info-card" key={card.title}>
                <h3>{card.title}</h3>
                <ul>{card.items.map((item) => <li key={item}>{item}</li>)}</ul>
              </article>
            ))}
          </div>
          <p className="safety-note">{project.rentalPoolProgram.warning}</p>
          <Button to="/contact" variant="secondary">Ask Luisa About Rental Pool Program</Button>
        </DetailSection>
      )}

      <DetailSection id="unit-options" eyebrow="Unit Types" title="Unit Options and Guide Ranges">
        <p className="reference-note">{project.unitIntro || "For guidance only. Unit cuts, floor areas, prices, promos, and availability can change."}</p>
        {project.unitQualityNote && <p className="safety-note">{project.unitQualityNote}</p>}
        {project.unitSections.map((section) => <UnitSection section={section} project={project} key={section.title} />)}
      </DetailSection>

      <DetailSection id="floor-plans" eyebrow="Floor Plans" title={project.floorPlansTitle || "Floor Plans"}>
        {project.floorPlansDescription && <p className="reference-note">{project.floorPlansDescription}</p>}
        <div className="floor-plan-grid">
          {project.floorPlans.map((item) => (
            <article className="floor-plan-card" key={item.title}>
              <ImagePlaceholder src={item.src} label={item.title} compact variant="gallery" />
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
          {project.paymentTerms.rfoSchedule && (
            <article className="payment-card payment-card-wide">
              <h3>Building RFO Schedule</h3>
              {project.paymentTerms.rfoSchedule.map((item, index) => <Spec key={`${item.label}-${index}`} label={item.label} value={item.value} />)}
            </article>
          )}
          <article className="payment-card">
            <h3>Sample Unit</h3>
            {project.paymentTerms.sampleComputation.map((item, index) => <Spec key={`${item.label}-${index}`} label={item.label} value={item.value} />)}
          </article>
          <article className="payment-card">
            <h3>Sample Monthly Amortization</h3>
            {project.paymentTerms.monthlyAmortization.map((item, index) => <Spec key={`${item.label}-${index}`} label={item.label} value={item.value} />)}
          </article>
          {project.paymentTerms.contractBreakdown && (
            <article className="payment-card payment-card-wide">
              <h3>Contract Price</h3>
              {project.paymentTerms.contractBreakdown.map((item, index) => <Spec key={`${item.label}-${index}`} label={item.label} value={item.value} />)}
            </article>
          )}
          {project.paymentTerms.downPaymentBreakdown && (
            <article className="payment-card">
              <h3>Down Payment</h3>
              {project.paymentTerms.downPaymentBreakdown.map((item, index) => <Spec key={`${item.label}-${index}`} label={item.label} value={item.value} />)}
            </article>
          )}
          {project.paymentTerms.balanceBreakdown && (
            <article className="payment-card">
              <h3>Balance / Financing</h3>
              {project.paymentTerms.balanceBreakdown.map((item, index) => <Spec key={`${item.label}-${index}`} label={item.label} value={item.value} />)}
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

      {project.fitOutOptions && (
        <DetailSection id="fit-out" eyebrow="Fit-out Options" title={project.fitOutOptions.title}>
          <p>{project.fitOutOptions.copy}</p>
          <div className="premium-card-grid">
            {project.fitOutOptions.highlights.map((item) => <article className="info-card" key={item}><p>{item}</p></article>)}
          </div>
          <p className="safety-note">{project.fitOutOptions.warning}</p>
          <Button to="/contact" variant="secondary">{project.fitOutOptions.cta || "Ask Luisa About Fit-out Options"}</Button>
        </DetailSection>
      )}

      <DetailSection id="unit-holding" eyebrow="Unit Holding" title={project.unitHoldingPortal.title}>
        <div className="reservation-grid">
          <article className="unit-holding-card">
            <p>{project.unitHoldingPortal.text}</p>
            <ol>{project.unitHoldingPortal.steps.map((step) => <li key={step}>{step}</li>)}</ol>
            {project.unitHoldingPortal.notes?.length ? <ul>{project.unitHoldingPortal.notes.map((note) => <li key={note}>{note}</li>)}</ul> : null}
            <Button to="/availability" variant="secondary">Ask Luisa About Unit Holding</Button>
          </article>
          <article className="unit-holding-card">
            <h3>Buyer reminder</h3>
            <p>Holding rules, unit availability, and reservation windows can change. Ask Luisa to confirm the current process before proceeding.</p>
            <Button to="/contact" variant="secondary">Message Luisa</Button>
          </article>
        </div>
      </DetailSection>

      <DetailSection id="reservation" eyebrow="Reservation" title={project.reservationTitle || "Reservation Requirements"}>
        <div className="reservation-grid">
          <article className="reservation-checklist">
            <h3>Checklist to Prepare</h3>
            <ReservationChecklist items={project.reservationRequirements} />
            <Button to="/contact" variant="secondary">Ask for Reservation Guidance</Button>
          </article>
          <article className="unit-holding-card">
            <h3>Before paying reservation</h3>
            <p>{project.reservationNote || "Confirm computation, availability, payment method, and official requirements with Luisa before making any reservation decision."}</p>
          </article>
        </div>
      </DetailSection>

      <DetailSection id="gallery" eyebrow="Gallery" title={`${project.name} Gallery`}>
        <Gallery project={project} />
      </DetailSection>
    </>
  );
}

function OrianaProjectSections({ project }) {
  return (
    <>
      <ReferenceNotice text={project.disclaimer} />

      <DetailSection id="facts" eyebrow="Project Facts" title={`${project.detailTitle || project.name} at a Glance`}>
        <div className="rich-fact-grid">
          {project.projectFacts.map((fact) => <Spec key={fact.label} label={fact.label} value={fact.value} />)}
        </div>
      </DetailSection>

      <DetailSection id="pricing" eyebrow="Availability" title={project.availabilitySummary.title}>
        <p className="reference-note">{project.availabilitySummary.note}</p>
        <AvailabilityTable columns={project.availabilitySummary.columns} rows={project.availabilitySummary.rows} />
        <div className="compact-cta-row">
          <Button to={projectInquiryPath("/availability", project, "Availability")}>Check Available Units & Computations</Button>
          <Button to={projectInquiryPath("/request-computation", project, "Computation")} variant="secondary">Ask Luisa for Latest Computation</Button>
          <Button to={projectInquiryPath("/contact", project, "Reservation")} variant="ghost">Reserve / Inquire Now</Button>
        </div>
      </DetailSection>

      <DetailSection id="overview" eyebrow="Overview" title="Project Overview">
        {(project.introParagraphs || [project.overview]).map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        <div className="premium-card-grid">
          {project.whyInvest.map((item) => <article className="info-card" key={item}><p>{item}</p></article>)}
        </div>
      </DetailSection>

      <DetailSection id="audio-visual-presentation" eyebrow="AVP" title={project.audioVisualPresentation.title}>
        <div className="oriana-media-card">
          {project.audioVisualPresentation.embedUrl ? (
            <MediaEmbed title={`${project.name} AVP`} src={project.audioVisualPresentation.embedUrl} />
          ) : (
            <ImagePlaceholder src={project.image} label={`${project.name} AVP preview`} compact variant="gallery" />
          )}
          <div>
            <p>{project.audioVisualPresentation.text}</p>
            <MediaLinks
              links={project.audioVisualPresentation.links}
              fallback={{ label: project.audioVisualPresentation.label, url: project.audioVisualPresentation.url, variant: "secondary" }}
            />
          </div>
        </div>
      </DetailSection>

      <DetailSection id="location" eyebrow="Prime Location" title={project.locationDetails.title}>
        <div className="oriana-image-copy">
          <ImagePlaceholder src={project.locationDetails.image} label={project.locationDetails.imageLabel} compact variant="masterPlan" />
          <div>
            <p>{project.locationDetails.text}</p>
            <div className="address-card">
              <strong>Exact Address</strong>
              <span>{project.locationDetails.exactAddress}</span>
            </div>
          </div>
        </div>
        <LocationMap project={project} />
      </DetailSection>

      <DetailSection id="nearby-establishments" eyebrow="Nearby Establishments" title="Convenient Living: Nearby Establishments">
        <p>{project.nearbyIntro}</p>
        <GroupedList groups={project.nearbyEstablishments} />
      </DetailSection>

      <DetailSection id="site-development" eyebrow="Site Development Plan" title={project.siteDevelopment.title}>
        <div className="site-development-card">
          <ImagePlaceholder src={project.masterPlanImage} label={project.siteDevelopment.imageLabel} compact variant="masterPlan" />
          <div>
            <p>{project.siteDevelopment.text}</p>
            <div className="mini-stat-grid">
              {project.siteDevelopment.keyStats.map((item) => <Spec key={item.label} label={item.label} value={item.value} />)}
            </div>
          </div>
        </div>
      </DetailSection>

      <DetailSection id="virtual-tour" eyebrow="360 Virtual Tour" title={project.virtualTour.title}>
        <div className="video-tour-card">
          <ImagePlaceholder src={project.virtualTour.image || project.gallery[1]} label={`${project.name} virtual tour preview`} compact variant="gallery" />
          <div>
            <p>{project.virtualTour.text}</p>
            {project.virtualTour.url ? (
              <MediaLinks
                links={project.virtualTour.links}
                fallback={{ label: project.virtualTour.label, url: project.virtualTour.url, variant: "secondary" }}
              />
            ) : (
              <p className="safety-note">Virtual tour available upon request.</p>
            )}
          </div>
        </div>
      </DetailSection>

      <DetailSection id="amenities" eyebrow="Amenities" title="Amenities and Facilities: Enhancing Your Lifestyle at The Oriana">
        <p>{project.amenityIntro}</p>
        <GroupedList groups={project.amenityGroups} compact />
        <div className="oriana-amenity-gallery">
          {project.amenityGallery.map((image) => (
            <article key={image.label}>
              <ImagePlaceholder src={image.src} label={image.label} compact variant="gallery" />
              <strong>{image.label}</strong>
            </article>
          ))}
        </div>
        <LabeledChips title="Amenity image references" items={project.amenityImageLabels} />
      </DetailSection>

      <DetailSection id="unit-options" eyebrow="Units and Availability" title="Units and Availability: Discover Your Ideal Home at The Oriana">
        <p className="reference-note">{project.unitIntro}</p>
        {project.unitTypeDetails.map((section) => <OrianaUnitSection section={section} project={project} key={section.title} />)}
      </DetailSection>

      <DetailSection id="floor-plans" eyebrow="Floorplans" title={project.floorPlansTitle}>
        <p>{project.floorPlansDescription}</p>
        <div className="floor-plan-grid">
          {project.floorPlans.map((item) => (
            <article className="floor-plan-card" key={item.title}>
              <ImagePlaceholder src={item.src} label={item.title} compact variant="gallery" />
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <Button to={projectInquiryPath("/contact", project, "Floor plans")} variant="secondary">Request Layout Sheet</Button>
            </article>
          ))}
        </div>
      </DetailSection>

      <DetailSection id="payment" eyebrow="Payment Terms" title={project.paymentTerms.title}>
        <p>{project.paymentTerms.text}</p>
        <p className="oriana-sample-banner">{project.paymentTerms.warning}</p>
        <div className="payment-grid">
          <article className="payment-card">
            <h3>Sample Unit</h3>
            {project.paymentTerms.sampleComputation.map((item, index) => <Spec key={`${item.label}-${index}`} label={item.label} value={item.value} />)}
          </article>
          <article className="payment-card payment-card-wide">
            <h3>12% DP, 88% Bank Financing</h3>
            {project.paymentTerms.contractBreakdown.map((item, index) => <Spec key={`${item.label}-${index}`} label={item.label} value={item.value} />)}
          </article>
          <article className="payment-card">
            <h3>Downpayment for 36 months</h3>
            {project.paymentTerms.downPaymentBreakdown.map((item, index) => <Spec key={`${item.label}-${index}`} label={item.label} value={item.value} />)}
          </article>
          <article className="payment-card">
            <h3>Balance - Bank Financing</h3>
            {project.paymentTerms.balanceBreakdown.map((item, index) => <Spec key={`${item.label}-${index}`} label={item.label} value={item.value} />)}
          </article>
          <article className="payment-card">
            <h3>Monthly Amortization</h3>
            {project.paymentTerms.monthlyAmortization.map((item, index) => <Spec key={`${item.label}-${index}`} label={item.label} value={item.value} />)}
          </article>
        </div>
        <div className="promo-card-grid">
          {project.paymentTerms.promoCards.map((promo) => (
            <article className="promo-card" key={promo.title}>
              <h3>{promo.title}</h3>
              <ul>{promo.items.map((item) => <li key={item}>{item}</li>)}</ul>
            </article>
          ))}
        </div>
        <h3 className="oriana-subheading">Available sample units</h3>
        <AvailabilityTable columns={project.paymentTerms.sampleAvailableUnits.columns} rows={project.paymentTerms.sampleAvailableUnits.rows} />
        <p className="safety-note">{project.paymentTerms.promoReference}</p>
        <div className="compact-cta-row">
          <Button to={projectInquiryPath("/availability", project, "Current computations")}>Get Current Availability & Computations</Button>
        </div>
      </DetailSection>

      <DetailSection id="unit-holding" eyebrow="Unit Holding" title={project.unitHoldingPortal.title}>
        <div className="reservation-grid">
          <article className="unit-holding-card">
            <p>{project.unitHoldingPortal.text}</p>
            <ol>{project.unitHoldingPortal.steps.map((step) => <li key={step}>{step}</li>)}</ol>
            <Button to={project.unitHoldingPortal.ctaTo} variant="secondary">{project.unitHoldingPortal.ctaLabel}</Button>
          </article>
          <article className="unit-holding-card">
            <h3>Holding windows</h3>
            <ul>{project.unitHoldingPortal.notes.map((note) => <li key={note}>{note}</li>)}</ul>
          </article>
        </div>
      </DetailSection>

      <DetailSection id="reservation" eyebrow="Reservation" title={project.reservationTitle}>
        <p>{project.reservationNote}</p>
        <div className="reservation-grid oriana-reservation-grid">
          {project.reservationRequirements.map((group) => (
            <article className="reservation-checklist" key={group.title}>
              <h3>{group.title}</h3>
              <ul>{group.items.map((item) => <li key={item}>{item}</li>)}</ul>
            </article>
          ))}
        </div>
      </DetailSection>

      <DetailSection id="gallery" eyebrow="Gallery" title={`${project.name} Gallery`}>
        <Gallery project={project} />
      </DetailSection>

      <DetailSection id="news-media" eyebrow="Sources" title="Project Updates and Reference Links">
        <div className="premium-card-grid">
          {project.newsMedia.map((item) => (
            <article className="info-card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.label}</p>
              {item.url && <Button href={item.url} target="_blank" rel="noreferrer" variant="secondary">Open Source</Button>}
            </article>
          ))}
        </div>
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
          <Spec label="Status / Turnover" value={`${formatTurnoverLabel(project.turnoverYear)} | ${project.status}`} />
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
        <div className="map-placeholder">Map, directions, and travel references can be reviewed with Luisa during project shortlisting.</div>
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
          <ImagePlaceholder src={project.gallery?.[0] || project.image} label={`${project.name} design inspiration`} compact variant="gallery" />
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
          {project.newsMedia.map((item) => (
            <article className="info-card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.label}</p>
              {item.url && <Button href={item.url} target="_blank" rel="noreferrer" variant="secondary">Open Source</Button>}
            </article>
          ))}
        </div>
      </DetailSection>
    </>
  );
}

function LatestDetailsCard({ project }) {
  return (
    <aside className="detail-cta-card sticky-project-cta" data-reveal="card">
      <span className="mini">Project Inquiry</span>
      <strong>Ask Luisa about {project.name}</strong>
      <p>Get the latest computation, available units, payment terms, and viewing schedule for this project.</p>
      <div className="sticky-project-actions">
        <Button to={projectInquiryPath("/request-computation", project, "Computation")}>Request Computation</Button>
        <Button to={projectInquiryPath("/availability", project, "Availability")} variant="secondary">Check Availability</Button>
      </div>
      <div className="sticky-project-secondary">
        <Button to={projectInquiryPath("/book-viewing", project, "Site viewing")} variant="ghost">Book Viewing</Button>
        <Button to={projectInquiryPath("/contact", project, "Other")} variant="ghost">Message Luisa</Button>
      </div>
      <DisclaimerBanner text={buyerSafePriceNote(project.priceSourceNote)} />
    </aside>
  );
}

function projectInquiryPath(path, project, inquiryType) {
  const params = new URLSearchParams({ project: project.name });
  if (inquiryType) params.set("inquiryType", inquiryType);
  return `${path}?${params.toString()}`;
}

function UnitSection({ section, project }) {
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
            {section.rows.map((row, index) => (
              <tr key={`${section.title}-${row.layout}-${row.floorArea}-${index}`}>
                <td data-label="Layout">{row.layout}</td>
                <td data-label="Floor Area">{row.floorArea}</td>
                <td data-label="Guide Range">{formatInlineGuide(row.priceRange)}</td>
                <td data-label="Status">{row.status}</td>
                <td data-label="Computation">{row.monthlyDp}</td>
                <td data-label="Action"><Button to={projectInquiryPath("/request-computation", project, "Computation")} variant="secondary">Request Computation</Button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="unit-section-cta">
        <Button to={projectInquiryPath("/request-computation", project, "Computation")} variant="secondary">Request latest computation for this unit type</Button>
      </div>
    </article>
  );
}

function OrianaUnitSection({ section, project }) {
  const columns = [
    { key: "type", label: "Type" },
    { key: "status", label: "Status" },
    { key: "price", label: "Price" },
    { key: "dp", label: "12% DP" }
  ];

  return (
    <article className="oriana-unit-detail">
      <div className="oriana-unit-copy">
        <div>
          <h3>{section.title}</h3>
          <p>{section.copy}</p>
        </div>
        <ImagePlaceholder src={section.image} label={section.imageLabel} compact variant="gallery" />
      </div>
      {section.rows.length > 0 && <AvailabilityTable columns={columns} rows={section.rows} />}
      <LabeledChips title="Layout references" items={section.labels} />
      <div className="unit-section-cta">
        <Button to={projectInquiryPath("/request-computation", project, "Computation")} variant="secondary">Request latest computation for this unit type</Button>
      </div>
    </article>
  );
}

function AvailabilityTable({ columns = [], rows = [] }) {
  if (!rows.length) return null;

  return (
    <div className="rich-table-wrap">
      <table className="rich-table">
        <thead>
          <tr>{columns.map((column) => <th key={column.key}>{column.label}</th>)}</tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={`${row.type || row.unit || "row"}-${index}`}>
              {columns.map((column) => (
                <td key={column.key} data-label={column.label}>{row[column.key]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function LabeledChips({ title, items = [] }) {
  if (!items.length) return null;

  return (
    <div className="oriana-label-cloud">
      <strong>{title}</strong>
      <div>{items.map((item) => <span key={item}>{item}</span>)}</div>
    </div>
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
      {items.map((item, index) => (
        <article className="sample-computation-card" key={`${item.type}-${item.size}-${item.price}-${index}`}>
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

function ReservationChecklist({ items = [] }) {
  return (
    <ul>
      {items.map((item) => {
        if (typeof item === "string") return <li key={item}>{item}</li>;
        return (
          <li key={item.title}>
            <strong>{item.title}</strong>
            <ul>{item.items.map((entry) => <li key={entry}>{entry}</li>)}</ul>
          </li>
        );
      })}
    </ul>
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
          <span>{formatInlineGuide(item.indicativeRange || item.computation)}</span>
          <span>{item.status || item.availability}</span>
          <Button to={projectInquiryPath("/request-computation", project, "Computation")} variant="secondary">Request Computation</Button>
        </div>
      ))}
    </div>
  );
}

function Gallery({ project }) {
  const [zoomImage, setZoomImage] = useState(null);
  const images = project.gallery.map((src, index) => ({
    src,
    label: project.galleryLabels?.[index] || `${project.name} gallery ${index + 1}`,
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
      data-reveal="image"
      aria-label={`Open ${image.label} preview`}
      onClick={() => onOpen(image)}
    >
      <ImagePlaceholder src={image.src} label={image.label} compact={compact} variant={image.variant} />
    </button>
  );
}

function ImageLightbox({ image, onClose }) {
  useEffect(() => {
    if (!image) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };
    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [image, onClose]);

  if (!image) return null;

  const lightboxVariant = image.variant || "gallery";

  return (
    <div className="image-lightbox" role="dialog" aria-modal="true" aria-label={image.label}>
      <button className="image-lightbox-backdrop" type="button" aria-label="Close image preview" onClick={onClose} />
      <div className="image-lightbox-panel">
        <button className="image-lightbox-close" type="button" aria-label="Close zoomed image" onClick={onClose}>X</button>
        <ImagePlaceholder src={image.src} label={image.label} variant={lightboxVariant} />
        <p>{image.label}</p>
      </div>
    </div>
  );
}

function VideoTourBlock({ project }) {
  return (
    <div className="video-tour-card" data-reveal="section">
      {project.videoTourEmbedUrl ? (
        <MediaEmbed title={`${project.name} video presentation`} src={project.videoTourEmbedUrl} />
      ) : (
        <ImagePlaceholder src={project.videoTourImage} label={`${project.name} virtual tour`} compact variant="gallery" />
      )}
      <div>
        <strong>{project.videoTourTitle || "Virtual tour link available upon request"}</strong>
        <p>{project.videoTourCopy || "Large videos are not loaded directly here so the website stays fast on mobile. Ask Luisa for the latest approved tour link or project presentation."}</p>
        {project.videoTourNote && <p className="safety-note">{project.videoTourNote}</p>}
        {project.videoTourUrl ? (
          <MediaLinks
            links={project.videoTourLinks}
            fallback={{ label: "Open Virtual Tour", url: project.videoTourUrl, variant: "secondary" }}
          />
        ) : (
          <Button to="/contact" variant="secondary">Request Virtual Tour Link</Button>
        )}
      </div>
    </div>
  );
}

function MediaEmbed({ title, src }) {
  return (
    <div className="media-embed-frame">
      <iframe
        title={title}
        src={src}
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
}

function MediaLinks({ links, fallback }) {
  const items = links?.length ? links : (fallback?.url ? [fallback] : []);
  if (!items.length) return null;

  return (
    <div className="compact-cta-row media-link-row">
      {items.map((item) => (
        <Button key={`${item.label}-${item.url}`} href={item.url} target="_blank" rel="noreferrer" variant={item.variant || "secondary"}>
          {item.label}
        </Button>
      ))}
    </div>
  );
}

function LocationMap({ project }) {
  const location = project.locationDetails || {};
  const mapLabel = `${project.name} map`;

  return (
    <div className="location-map-card" data-reveal="section">
      <div className="location-map-frame">
        {location.mapEmbedUrl ? (
          <iframe
            title={mapLabel}
            src={location.mapEmbedUrl}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        ) : project.locationMapImage ? (
          <ImagePlaceholder src={project.locationMapImage} label={mapLabel} compact variant="masterPlan" />
        ) : (
          <div className="map-placeholder compact-map">Map and travel references can be reviewed during Luisa's project presentation.</div>
        )}
      </div>
      <div className="location-map-copy">
        <strong>{location.mapTitle || "Map and Directions"}</strong>
        <p>{location.mapText || "Open Google Maps for live traffic, route options, and turn-by-turn directions to the project location."}</p>
        <div className="compact-cta-row map-actions">
          {location.directionsUrl && (
            <Button href={location.directionsUrl} target="_blank" rel="noreferrer">Get Directions</Button>
          )}
          {location.mapUrl && (
            <Button href={location.mapUrl} target="_blank" rel="noreferrer" variant="secondary">Open in Google Maps</Button>
          )}
          <Button to={projectInquiryPath("/book-viewing", project, "Site viewing")} variant="ghost">Book a Site Viewing</Button>
        </div>
      </div>
    </div>
  );
}

function ReferenceNotice({ text } = {}) {
  return (
    <div className="reference-warning" data-reveal="section">
      <strong>Guide information only</strong>
      <span>{text || "Prices, unit availability, promos, payment terms, unit details, and turnover schedules are subject to final confirmation. Request the latest computation from Luisa before making decisions."}</span>
    </div>
  );
}

function DetailSection({ id, eyebrow, title, children }) {
  return (
    <section className="detail-section" id={id} data-reveal="section">
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
