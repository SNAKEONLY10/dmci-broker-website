import { Button } from "./Button";

export function EmptyState({ title = "No matching projects", text = "Try adjusting filters or ask Luisa for recommendations." }) {
  return (
    <div className="empty-state">
      <h3>{title}</h3>
      <p>{text}</p>
      <Button to="/contact" variant="secondary">Ask for Help</Button>
    </div>
  );
}
