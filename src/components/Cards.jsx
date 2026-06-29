import { Button } from "./Button";
import { ImagePlaceholder } from "./ImagePlaceholder";

export function GuideCard({ title, summary }) {
  return (
    <article className="info-card">
      <h3>{title}</h3>
      <p>{summary}</p>
      <Button to="/buyers-guide" variant="ghost">Read Guide</Button>
    </article>
  );
}

export function PromoCard({ promo }) {
  return (
    <article className="info-card">
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
    <article className="testimonial-card">
      <p>"{quote}"</p>
      <strong>{person}</strong>
      <small>Real client feedback can be added after approval.</small>
    </article>
  );
}

export function VideoTourCard({ title, unitType }) {
  return (
    <article className="tour-card">
      <ImagePlaceholder label={title} compact variant="gallery" />
      <h3>{title}</h3>
      <p>{unitType}</p>
      <div className="card-actions">
        <Button to="/contact" variant="secondary">Request Tour Link</Button>
        <Button to="/book-viewing" variant="ghost">Book Viewing</Button>
      </div>
    </article>
  );
}
