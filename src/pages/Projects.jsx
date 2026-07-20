import { useEffect, useMemo, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import { ProjectFilters } from "../components/ProjectFilters";
import { ProjectGrid } from "../components/ProjectGrid";
import { SectionHeader } from "../components/SectionHeader";
import { DisclaimerBanner } from "../components/DisclaimerBanner";
import { Button } from "../components/Button";
import { projects } from "../data/projects";
import { useResponsiveProjectPageSize } from "../hooks/useResponsiveProjectPageSize";
import {
  buyerGoalLabel,
  isPrimaryBuyerGoal,
  isReadyForOccupancy,
  isUpcomingProject,
  latestTurnoverYear,
  projectMatchesPurpose,
  sortProjectsForGoal
} from "../utils/projectGoals";

export default function Projects() {
  const [params, setParams] = useSearchParams();
  const resultsRef = useRef(null);
  const filters = useMemo(() => readDirectoryFilters(params), [params]);
  const sort = readDirectorySort(params);
  const requestedPage = readDirectoryPage(params);
  const projectPageSize = useResponsiveProjectPageSize();
  const filtered = useMemo(() => sortProjects(projects.filter((project) => matches(project, filters)), sort, filters.purpose), [filters, sort]);
  const totalPages = Math.ceil(filtered.length / projectPageSize);
  const safePage = Math.min(requestedPage, totalPages || 1);
  const startIndex = (safePage - 1) * projectPageSize;
  const endIndex = Math.min(startIndex + projectPageSize, filtered.length);
  const paginatedProjects = filtered.slice(startIndex, endIndex);
  const isGoalView = isPrimaryBuyerGoal(filters.purpose);
  const goalLabel = buyerGoalLabel(filters.purpose);

  useEffect(() => {
    if (requestedPage === safePage) return;
    setParams(buildDirectoryParams(params, filters, sort, safePage), { replace: true });
  }, [filters, params, requestedPage, safePage, setParams, sort]);

  function setFilters(update) {
    const nextFilters = typeof update === "function" ? update(filters) : update;
    setParams(buildDirectoryParams(params, nextFilters, sort, 1), { replace: true });
  }

  function setSort(nextSort) {
    setParams(buildDirectoryParams(params, filters, nextSort, 1), { replace: true });
  }

  function selectBuyerGoal(purpose) {
    setFilters((current) => ({ ...current, purpose }));
  }

  function changePage(page) {
    const nextPage = Math.max(1, Math.min(page, totalPages || 1));
    setParams(buildDirectoryParams(params, filters, sort, nextPage));
    window.requestAnimationFrame(() => {
      const reduceMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
      resultsRef.current?.scrollIntoView({ block: "start", behavior: reduceMotion ? "auto" : "smooth" });
    });
  }

  return (
    <section className="page-section projects-page">
      <div className="container">
        <div className="project-listing-hero">
          <SectionHeader
            as="h1"
            align="left"
            eyebrow="18 Approved DMCI Projects"
            title="Find a DMCI home that fits your plan"
            text="Whether you are choosing a future home or comparing an investment, start with your goal. Then narrow the shortlist by location, turnover, unit type, and budget with Luisa's guidance."
          />
          <div className="listing-hero-card buyer-intent-card" data-reveal="text-group">
            <span className="intent-eyebrow">Start with your goal</span>
            <strong>What are you looking for?</strong>
            <div className="buyer-intent-options" role="group" aria-label="Choose your buyer goal">
              <button
                type="button"
                className={filters.purpose === "Own Use" ? "active" : ""}
                aria-pressed={filters.purpose === "Own Use"}
                onClick={() => selectBuyerGoal("Own Use")}
              >
                <span>For my home</span>
                <small>Live in the unit</small>
              </button>
              <button
                type="button"
                className={filters.purpose === "Investment" ? "active" : ""}
                aria-pressed={filters.purpose === "Investment"}
                onClick={() => selectBuyerGoal("Investment")}
              >
                <span>For investment</span>
                <small>Compare growth or rental options</small>
              </button>
              <button
                type="button"
                className={!filters.purpose ? "active" : ""}
                aria-pressed={!filters.purpose}
                onClick={() => selectBuyerGoal("")}
              >
                <span>Show all projects</span>
                <small>Browse the complete directory</small>
              </button>
            </div>
            <p className="intent-note">Not sure yet? Luisa can help compare projects based on your budget and preferred timeline.</p>
            <Button to="/contact" variant="secondary">Ask for Recommendations</Button>
          </div>
        </div>
        <ProjectFilters projects={projects} filters={filters} setFilters={setFilters} sort={sort} setSort={setSort} />
        <div className="results-bar" data-reveal="text-group" ref={resultsRef}>
          <strong>{isGoalView ? `${filtered.length} approved projects ranked for ${goalLabel}` : `${filtered.length} matching approved projects`}</strong>
          <span>{isGoalView ? "Goal views keep all approved projects visible; use location, status, and unit filters to narrow the list." : "Updated price available upon request. Availability subject to confirmation."}</span>
        </div>
        {filtered.length > 0 && (
          <p className="pagination-summary" aria-live="polite" data-reveal="text">
            Page {safePage} of {totalPages} &middot; Showing projects {startIndex + 1} to {endIndex} of {filtered.length} approved projects
          </p>
        )}
        <ProjectGrid key={`projects-${safePage}-${projectPageSize}-${filtered.length}-${sort}`} projects={paginatedProjects} />
        <Pagination currentPage={safePage} totalPages={totalPages} onPageChange={changePage} />
        <div className="cta-strip" data-reveal="text-group">
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

  const pages = paginationWindow(currentPage, totalPages);

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
    projectMatchesPurpose(project, filters.purpose)
  );
}

const directoryFilterNames = ["search", "location", "purpose", "status", "turnoverYear", "unitType", "propertyType"];
const directorySortOptions = new Set(["featured", "rfo", "preselling", "turnover", "location"]);

function readDirectoryFilters(params) {
  return Object.fromEntries(directoryFilterNames.map((name) => [name, params.get(name) || ""]));
}

function readDirectorySort(params) {
  const value = params.get("sort") || "featured";
  return directorySortOptions.has(value) ? value : "featured";
}

function readDirectoryPage(params) {
  const value = Number.parseInt(params.get("page") || "1", 10);
  return Number.isFinite(value) && value > 0 ? value : 1;
}

function buildDirectoryParams(currentParams, filters, sort, page) {
  const next = new URLSearchParams(currentParams);
  [...directoryFilterNames, "sort", "page"].forEach((name) => next.delete(name));

  directoryFilterNames.forEach((name) => {
    if (filters[name]) next.set(name, filters[name]);
  });
  if (sort && sort !== "featured") next.set("sort", sort);
  if (page > 1) next.set("page", String(page));
  return next;
}

function paginationWindow(currentPage, totalPages) {
  const windowSize = Math.min(3, totalPages);
  let start = Math.max(1, currentPage - 1);
  let end = Math.min(totalPages, start + windowSize - 1);

  if (end - start + 1 < windowSize) {
    start = Math.max(1, end - windowSize + 1);
  }

  return Array.from({ length: end - start + 1 }, (_, index) => start + index);
}

function normalizeFilterValue(value) {
  return String(value || "").normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
}

function sortProjects(items, sort, purpose) {
  const sorted = [...items];
  if (sort === "featured") {
    if (isPrimaryBuyerGoal(purpose)) {
      return sortProjectsForGoal(sorted, purpose);
    }
    return sorted.sort((a, b) => {
      const aOrder = a.directoryOrder ?? 999;
      const bOrder = b.directoryOrder ?? 999;
      return aOrder - bOrder;
    });
  }
  if (sort === "rfo") return sorted.sort((a, b) => Number(isReadyForOccupancy(b)) - Number(isReadyForOccupancy(a)) || ((a.directoryOrder ?? 999) - (b.directoryOrder ?? 999)));
  if (sort === "preselling") return sorted.sort((a, b) => Number(isUpcomingProject(b)) - Number(isUpcomingProject(a)) || ((a.directoryOrder ?? 999) - (b.directoryOrder ?? 999)));
  if (sort === "turnover") return sorted.sort((a, b) => latestTurnoverYear(b) - latestTurnoverYear(a) || ((a.directoryOrder ?? 999) - (b.directoryOrder ?? 999)));
  return sorted.sort((a, b) => a.location.localeCompare(b.location));
}
