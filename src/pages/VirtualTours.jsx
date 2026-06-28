import { useState } from "react";
import { VideoTourCard } from "../components/Cards";
import { SectionHeader } from "../components/SectionHeader";

const tours = ["Studio Unit Tour", "1BR Model Unit", "2BR Model Unit", "3BR Model Unit", "Amenities Tour"].map((title) => ({ title, unitType: title.split(" ")[0] }));

export default function VirtualTours() {
  const [filter, setFilter] = useState("");
  const filtered = tours.filter((tour) => !filter || tour.title.includes(filter));
  return (
    <section className="page-section">
      <div className="container">
        <SectionHeader align="left" eyebrow="Virtual Tours" title="Tour Library" text="Image thumbnails only. Optional video placeholders can load later after a buyer clicks." />
        <div className="status-chips">{["", "Studio", "1BR", "2BR", "3BR", "Amenities"].map((item) => <button key={item || "all"} onClick={() => setFilter(item)}>{item || "All"}</button>)}</div>
        <div className="card-grid">{filtered.map((tour) => <VideoTourCard key={tour.title} {...tour} />)}</div>
      </div>
    </section>
  );
}
