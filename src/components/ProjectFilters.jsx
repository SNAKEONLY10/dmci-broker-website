import { propertyTypes, purposes, statuses, unitTypes } from "../data/projects";
import { unique } from "../utils/format";

const purposeLabels = {
  "Own Use": "For Personal Use",
  Investment: "For Investment",
  Family: "For Family Living",
  Rental: "For Rental Potential"
};

export function ProjectFilters({ projects, filters, setFilters, sort, setSort }) {
  const locations = unique(projects.map((project) => project.location));
  const years = unique(projects.map((project) => project.turnoverYear));

  function update(event) {
    setFilters((current) => ({ ...current, [event.target.name]: event.target.value }));
  }

  return (
    <div className="filters-panel" data-reveal="text-group">
      <input name="search" value={filters.search || ""} onChange={update} placeholder="Search by project or location" aria-label="Search projects" />
      <select name="location" value={filters.location || ""} onChange={update} aria-label="Filter by location">
        <option value="">All Locations</option>
        {locations.map((value) => <option key={value}>{value}</option>)}
      </select>
      <select name="status" value={filters.status || ""} onChange={update} aria-label="Filter by status">
        <option value="">All Statuses</option>
        {statuses.map((value) => <option key={value}>{value}</option>)}
      </select>
      <select name="turnoverYear" value={filters.turnoverYear || ""} onChange={update} aria-label="Filter by turnover">
        <option value="">All Turnover Dates</option>
        {years.map((value) => <option key={value}>{value}</option>)}
      </select>
      <select name="unitType" value={filters.unitType || ""} onChange={update} aria-label="Filter by unit type">
        <option value="">All Unit Types</option>
        {unitTypes.map((value) => <option key={value}>{value}</option>)}
      </select>
      <select name="propertyType" value={filters.propertyType || ""} onChange={update} aria-label="Filter by property type">
        <option value="">All Property Types</option>
        {propertyTypes.map((value) => <option key={value}>{value}</option>)}
      </select>
      <select name="purpose" value={filters.purpose || ""} onChange={update} aria-label="Filter by purpose">
        <option value="">Any Purpose</option>
        {purposes.map((value) => <option key={value} value={value}>{purposeLabels[value] || value}</option>)}
      </select>
      <select value={sort} onChange={(event) => setSort(event.target.value)} aria-label="Sort projects">
        <option value="featured">Featured first</option>
        <option value="rfo">RFO first</option>
        <option value="preselling">Upcoming first</option>
        <option value="turnover">Newest turnover</option>
        <option value="location">By location</option>
      </select>
    </div>
  );
}
