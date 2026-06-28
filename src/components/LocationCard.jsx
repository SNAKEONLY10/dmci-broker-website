import { Link } from "react-router-dom";

export function LocationCard({ location, count = 0 }) {
  return (
    <Link className="location-card" to={`/projects?location=${encodeURIComponent(location.name)}`}>
      <span>{count} featured projects</span>
      <h3>{location.name}</h3>
      <p>{location.description}</p>
      <strong>View Projects</strong>
    </Link>
  );
}
