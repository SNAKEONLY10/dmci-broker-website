import { LocationCard } from "../components/LocationCard";
import { SectionHeader } from "../components/SectionHeader";
import { locations } from "../data/locations";
import { projects } from "../data/projects";

export default function Locations() {
  return (
    <section className="page-section soft">
      <div className="container">
        <SectionHeader align="left" eyebrow="Locations" title="Explore DMCI Projects by Location" text="Choose a city or area, then request the latest computation from Luisa." />
        <div className="location-grid">
          {locations.map((location) => <LocationCard key={location.id} location={location} count={projects.filter((project) => project.location === location.name).length} />)}
        </div>
      </div>
    </section>
  );
}
