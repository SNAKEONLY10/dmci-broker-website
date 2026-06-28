import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { ProjectFilters } from "../components/ProjectFilters";
import { ProjectGrid } from "../components/ProjectGrid";
import { SectionHeader } from "../components/SectionHeader";
import { DisclaimerBanner } from "../components/DisclaimerBanner";
import { projects } from "../data/projects";

export default function Projects() {
  const [params] = useSearchParams();
  const [filters, setFilters] = useState({ location: params.get("location") || "" });
  const [sort, setSort] = useState("featured");
  const filtered = useMemo(() => sortProjects(projects.filter((project) => matches(project, filters)), sort), [filters, sort]);
  return (
    <section className="page-section">
      <div className="container">
        <SectionHeader align="left" eyebrow="Project Directory" title="DMCI Homes Project Listings" text="Browse sample project data and request updated computation instead of relying on hardcoded prices." />
        <ProjectFilters projects={projects} filters={filters} setFilters={setFilters} sort={sort} setSort={setSort} />
        <ProjectGrid projects={filtered} />
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
