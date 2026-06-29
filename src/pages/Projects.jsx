import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { ProjectFilters } from "../components/ProjectFilters";
import { ProjectGrid } from "../components/ProjectGrid";
import { SectionHeader } from "../components/SectionHeader";
import { DisclaimerBanner } from "../components/DisclaimerBanner";
import { Button } from "../components/Button";
import { projects } from "../data/projects";

export default function Projects() {
  const [params] = useSearchParams();
  const [filters, setFilters] = useState({ location: params.get("location") || "" });
  const [sort, setSort] = useState("featured");
  const filtered = useMemo(() => sortProjects(projects.filter((project) => matches(project, filters)), sort), [filters, sort]);
  return (
    <section className="page-section projects-page">
      <div className="container">
        <div className="project-listing-hero">
          <SectionHeader align="left" eyebrow="Project Directory" title="Browse DMCI Homes Projects with Broker Guidance" text="Search sample project listings by location, turnover, unit type, and buyer purpose. Request updated computation and availability confirmation before making any decision." />
          <div className="listing-hero-card">
            <strong>Need help choosing?</strong>
            <p>Ask Luisa for project recommendations based on budget, purpose, location, and preferred turnover.</p>
            <Button to="/contact" variant="secondary">Ask Luisa</Button>
          </div>
        </div>
        <ProjectFilters projects={projects} filters={filters} setFilters={setFilters} sort={sort} setSort={setSort} />
        <div className="results-bar">
          <strong>{filtered.length} matching projects</strong>
          <span>Updated price available upon request. Availability subject to confirmation.</span>
        </div>
        <ProjectGrid projects={filtered} />
        <div className="cta-strip">
          <div>
            <strong>Need help choosing?</strong>
            <p>Ask Luisa for project recommendations before shortlisting.</p>
          </div>
          <Button to="/contact">Message Luisa</Button>
        </div>
        <DisclaimerBanner />
      </div>
    </section>
  );
}

function matches(project, filters) {
  const search = String(filters.search || "").toLowerCase();
  return (
    (!search || `${project.name} ${project.location}`.toLowerCase().includes(search)) &&
    (!filters.location || project.location === filters.location) &&
    (!filters.status || project.status === filters.status) &&
    (!filters.turnoverYear || project.turnoverYear === filters.turnoverYear) &&
    (!filters.unitType || project.unitTypes.includes(filters.unitType)) &&
    (!filters.propertyType || project.propertyType === filters.propertyType) &&
    (!filters.purpose || project.purposeTags.includes(filters.purpose))
  );
}

function sortProjects(items, sort) {
  const sorted = [...items];
  if (sort === "featured") return sorted.sort((a, b) => Number(b.featured) - Number(a.featured));
  if (sort === "rfo") return sorted.sort((a, b) => Number(b.status === "RFO") - Number(a.status === "RFO"));
  if (sort === "preselling") return sorted.sort((a, b) => Number(b.status === "Preselling") - Number(a.status === "Preselling"));
  if (sort === "turnover") return sorted.sort((a, b) => String(b.turnoverYear).localeCompare(String(a.turnoverYear)));
  return sorted.sort((a, b) => a.location.localeCompare(b.location));
}
