import { Button } from "./Button";
import { ImagePlaceholder } from "./ImagePlaceholder";

export function GuideCard({ title, summary, to = "/buyers-guide" }) {
  return (
    <article className="info-card" data-reveal="card">
      <h3>{title}</h3>
      <p>{summary}</p>
      <Button to={to} variant="ghost">Open Guide</Button>
    </article>
  );
}

export function PromoCard({ promo }) {
  return (
    <article className="info-card" data-reveal="card">
      <span className="mini">{promo.type}</span>
      <h3>{promo.title}</h3>
      <p>{promo.summary}</p>
      <small>Promo details subject to confirmation.</small>
      <Button to="/contact" variant="ghost">Ask if this applies</Button>
    </article>
  );
}

export function TestimonialCard({ quote, person }) {
  return (
    <article className="testimonial-card" data-reveal="card">
      <p>"{quote}"</p>
      <strong>{person}</strong>
      <small>Real client feedback can be added after approval.</small>
    </article>
  );
}

export function VideoTourCard({ title, unitType, image, to = "/virtual-tours" }) {
  return (
    <article className="tour-card" data-reveal="card">
      {image ? (
        <ImagePlaceholder src={image} label={title} compact variant="gallery" />
      ) : (
        <div className="tour-request-banner">
          <span>Approved media link</span>
          <small>Request current AVP or virtual tour</small>
        </div>
      )}
      <h3>{title}</h3>
      <p>{unitType}</p>
      <div className="card-actions">
        <Button to={to} variant="secondary">View Media Details</Button>
        <Button to="/book-viewing" variant="ghost">Book Viewing</Button>
      </div>
    </article>
  );
}
