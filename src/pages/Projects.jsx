import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { ProjectFilters } from "../components/ProjectFilters";
import { ProjectGrid } from "../components/ProjectGrid";
import { SectionHeader } from "../components/SectionHeader";
import { DisclaimerBanner } from "../components/DisclaimerBanner";
import { Button } from "../components/Button";
import { projects } from "../data/projects";
import { useResponsiveProjectPageSize } from "../hooks/useResponsiveProjectPageSize";

export default function Projects() {
  const [params] = useSearchParams();
  const [filters, setFilters] = useState({ location: params.get("location") || "" });
  const [sort, setSort] = useState("featured");
  const [currentPage, setCurrentPage] = useState(1);
  const projectPageSize = useResponsiveProjectPageSize();
  const filtered = useMemo(() => sortProjects(projects.filter((project) => matches(project, filters)), sort), [filters, sort]);
  const totalPages = Math.ceil(filtered.length / projectPageSize);
  const safePage = Math.min(currentPage, totalPages || 1);
  const startIndex = (safePage - 1) * projectPageSize;
  const endIndex = Math.min(startIndex + projectPageSize, filtered.length);
  const paginatedProjects = filtered.slice(startIndex, endIndex);

  useEffect(() => {
    setCurrentPage(1);
  }, [filters, sort]);

  useEffect(() => {
    setCurrentPage((page) => Math.min(page, totalPages || 1));
  }, [totalPages]);

  return (
    <section className="page-section projects-page">
      <div className="container">
        <div className="project-listing-hero">
          <SectionHeader as="h1" align="left" eyebrow="Project Directory" title="Browse DMCI Homes Projects with Broker Guidance" text="Search sample project listings by location, turnover, unit type, and buyer purpose. Request updated computation and availability confirmation before making any decision." />
          <div className="listing-hero-card">
            <strong>Need help choosing?</strong>
            <p>Ask Luisa for project recommendations based on budget, purpose, location, and preferred turnover.</p>
            <Button to="/contact" variant="secondary">Ask Luisa</Button>
          </div>
        </div>
        <ProjectFilters projects={projects} filters={filters} setFilters={setFilters} sort={sort} setSort={setSort} />
        <div className="results-bar">
          <strong>{filtered.length} matching approved projects</strong>
          <span>Updated price available upon request. Availability subject to confirmation.</span>
        </div>
        {filtered.length > 0 && (
          <p className="pagination-summary" aria-live="polite">
            Page {safePage} of {totalPages} &middot; Showing projects {startIndex + 1} to {endIndex} of {filtered.length} approved projects
          </p>
        )}
        <ProjectGrid key={`projects-${safePage}-${projectPageSize}-${filtered.length}-${sort}`} projects={paginatedProjects} />
        <Pagination currentPage={safePage} totalPages={totalPages} onPageChange={setCurrentPage} />
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

function Pagination({ currentPage, totalPages, onPageChange }) {
  if (totalPages <= 1) return null;

  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <nav className="pagination" aria-label="Projects pagination">
      <button type="button" onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1}>
        Previous
      </button>
      {pages.map((page) => (
        <button
          type="button"
          key={page}
          className={page === currentPage ? "active" : ""}
          aria-current={page === currentPage ? "page" : undefined}
          aria-label={`Go to projects page ${page}`}
          onClick={() => onPageChange(page)}
        >
          {page}
        </button>
      ))}
      <button type="button" onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages}>
        Next
      </button>
    </nav>
  );
}

function matches(project, filters) {
  const search = normalizeFilterValue(filters.search);
  const projectLocation = normalizeFilterValue(project.location);
  const locationFilter = normalizeFilterValue(filters.location);
  return (
    (!search || normalizeFilterValue(`${project.name} ${project.location}`).includes(search)) &&
    (!locationFilter || projectLocation === locationFilter) &&
    (!filters.status || project.status === filters.status) &&
    (!filters.turnoverYear || project.turnoverYear === filters.turnoverYear) &&
    (!filters.unitType || project.unitTypes.includes(filters.unitType)) &&
    (!filters.propertyType || project.propertyType === filters.propertyType) &&
    (!filters.purpose || project.purposeTags.includes(filters.purpose))
  );
}

function normalizeFilterValue(value) {
  return String(value || "").normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
}

function sortProjects(items, sort) {
  const sorted = [...items];
  if (sort === "featured") {
    return sorted.sort((a, b) => {
      const aOrder = a.directoryOrder ?? 999;
      const bOrder = b.directoryOrder ?? 999;
      return aOrder - bOrder;
    });
  }
  if (sort === "rfo") return sorted.sort((a, b) => Number(b.status === "RFO") - Number(a.status === "RFO"));
  if (sort === "preselling") return sorted.sort((a, b) => Number(b.status === "Preselling") - Number(a.status === "Preselling"));
  if (sort === "turnover") return sorted.sort((a, b) => String(b.turnoverYear).localeCompare(String(a.turnoverYear)));
  return sorted.sort((a, b) => a.location.localeCompare(b.location));
}
