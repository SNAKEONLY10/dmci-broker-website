import { useState } from "react";
import { VideoTourCard } from "../components/Cards";
import { SectionHeader } from "../components/SectionHeader";
import { projects } from "../data/projects";

const tours = projects
  .filter((project) => project.videoTourUrl || project.videoTourEmbedUrl)
  .map((project) => ({
    title: `${project.name} AVP / Virtual Tour`,
    unitType: project.location,
    image: project.thumbnail || project.image,
    to: `/projects/${project.slug}#views`
  }));

export default function VirtualTours() {
  const [filter, setFilter] = useState("");
  const filtered = tours.filter((tour) => !filter || tour.title.toLowerCase().includes(filter.toLowerCase()) || tour.unitType.toLowerCase().includes(filter.toLowerCase()));
  return (
    <section className="page-section">
      <div className="container">
        <SectionHeader as="h1" align="left" eyebrow="Virtual Tours" title="Tour Library" text="Open project pages with approved AVP or virtual tour references. Ask Luisa to confirm the latest official links before sharing with buyers." />
        <div className="status-chips">{["", "Quezon City", "Pasig", "Mandaluyong", "Taguig", "Paranaque", "Batangas"].map((item) => <button key={item || "all"} onClick={() => setFilter(item)}>{item || "All"}</button>)}</div>
        <div className="card-grid">{filtered.map((tour) => <VideoTourCard key={tour.title} {...tour} />)}</div>
      </div>
    </section>
  );
}
