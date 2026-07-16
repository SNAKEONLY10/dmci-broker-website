import { Link } from "react-router-dom";
import {
  ArrowRight,
  Building2,
  CalendarCheck2,
  Compass,
  House,
  MapPin,
  Route,
  WalletCards
} from "lucide-react";
import { Button } from "../components/Button";
import { DisclaimerBanner } from "../components/DisclaimerBanner";
import { ImagePlaceholder } from "../components/ImagePlaceholder";
import { SectionHeader } from "../components/SectionHeader";
import { locations } from "../data/locations";
import { projects } from "../data/projects";
import { cityPath } from "../data/seo";

const comparisonPoints = [
  {
    icon: Route,
    title: "Daily routes",
    text: "Start with work, school, family, and transport routes you expect to use most often."
  },
  {
    icon: House,
    title: "Home and community fit",
    text: "Compare the unit mix, project setting, nearby services, and the kind of daily routine each area supports."
  },
  {
    icon: CalendarCheck2,
    title: "Turnover timing",
    text: "Match ready, ongoing, and future projects with your move-in or investment timeline."
  },
  {
    icon: WalletCards,
    title: "Complete financial plan",
    text: "Request a current unit-specific computation before comparing down payment schedules or financing options."
  }
];

function projectsForLocation(name) {
  return projects.filter((project) => project.location === name);
}

export default function Locations() {
  const metroLocations = locations.filter((location) => !["Baguio City / Benguet", "San Juan Batangas"].includes(location.name));
  const destinationLocations = locations.filter((location) => ["Baguio City / Benguet", "San Juan Batangas"].includes(location.name));

  return (
    <div className="support-page locations-page">
      <section className="support-hero locations-hero">
        <div className="container support-hero-inner">
          <nav className="support-breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">Locations</span>
          </nav>
          <div className="support-hero-copy" data-reveal="hero-text">
            <span className="eyebrow">Location Directory</span>
            <h1>Choose the area that works for real life.</h1>
            <p>
              Compare approved DMCI projects by city, daily access, project status, and unit fit before
              requesting current figures.
            </p>
            <ul className="support-hero-points" aria-label="Location directory summary">
              <li><MapPin size={17} aria-hidden="true" /> 10 city and destination areas</li>
              <li><Building2 size={17} aria-hidden="true" /> 18 approved project pages</li>
              <li><Compass size={17} aria-hidden="true" /> One focused shortlist</li>
            </ul>
            <div className="support-hero-actions">
              <Button to="#location-directory">Browse by Location <ArrowRight size={17} aria-hidden="true" /></Button>
              <Button to="/contact?inquiryType=Sales%20Inquiry" variant="secondary">Ask for a Recommendation</Button>
            </div>
          </div>
        </div>
      </section>

      <nav className="support-jump-nav" aria-label="Location page sections">
        <div className="container">
          <strong>On this page</strong>
          <div>
            <a href="#location-directory">Location Directory</a>
            <a href="#compare-locations">What to Compare</a>
            <a href="#shortlist-help">Shortlist Help</a>
          </div>
        </div>
      </nav>

      <section className="section location-directory" id="location-directory">
        <div className="container">
          <SectionHeader
            eyebrow="Metro Manila"
            title="Compare projects around your daily routine"
            text="Open a location page to see its approved projects, unit types, project status, and direct inquiry options."
          />
          <div className="location-directory-grid">
            {metroLocations.map((location) => (
              <LocationDirectoryCard location={location} key={location.id} />
            ))}
          </div>
        </div>
      </section>

      <section className="section soft destination-directory">
        <div className="container">
          <SectionHeader
            eyebrow="Destination Living"
            title="Explore projects beyond Metro Manila"
            text="Compare the setting, travel pattern, intended use, and turnover plan before treating a destination property as a home or investment."
          />
          <div className="destination-location-grid">
            {destinationLocations.map((location) => (
              <LocationDirectoryCard location={location} key={location.id} wide />
            ))}
          </div>
        </div>
      </section>

      <section className="section location-comparison" id="compare-locations">
        <div className="container">
          <div className="support-section-heading" data-reveal="text-group">
            <span className="eyebrow">A Better Comparison</span>
            <h2>Do not choose by city name alone.</h2>
            <p>A practical location decision combines daily convenience, timing, unit fit, and the full financial commitment.</p>
          </div>
          <div className="location-comparison-grid">
            {comparisonPoints.map(({ icon: Icon, title, text }) => (
              <article key={title} data-reveal="card">
                <Icon size={24} aria-hidden="true" />
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section soft location-shortlist" id="shortlist-help">
        <div className="container location-shortlist-layout">
          <div data-reveal="text-group">
            <span className="eyebrow">Broker-Guided Shortlist</span>
            <h2>Share the routine you want the property to support.</h2>
            <p>
              Tell Luisa where you work or study, who will use the property, your preferred unit size,
              budget range, and target move-in date. She can narrow the 18 approved projects into a more useful comparison.
            </p>
            <div className="support-hero-actions">
              <Button to="/contact?inquiryType=Sales%20Inquiry">Request a Location Shortlist</Button>
              <Button to="/projects" variant="secondary">View All Projects</Button>
            </div>
          </div>
          <aside className="location-shortlist-questions" data-reveal="section">
            <strong>Helpful details to share</strong>
            <ul>
              <li>Preferred city or daily destination</li>
              <li>Residence, family use, or investment goal</li>
              <li>Unit type and parking requirement</li>
              <li>Budget and payment preference</li>
              <li>Target move-in or turnover timing</li>
            </ul>
          </aside>
        </div>
      </section>

      <div className="container support-disclaimer-wrap">
        <DisclaimerBanner text="Location details, travel times, project status, turnover schedules, prices, and availability are planning references. Confirm current project and unit details before deciding." />
      </div>
    </div>
  );
}

function LocationDirectoryCard({ location, wide = false }) {
  const locationProjects = projectsForLocation(location.name);
  const leadProject = locationProjects[0];
  const statuses = [...new Set(locationProjects.map((project) => project.status))];

  return (
    <Link className={`location-directory-card ${wide ? "is-wide" : ""}`} to={cityPath(location.name)} data-reveal="card">
      <div className="location-directory-image">
        <ImagePlaceholder
          src={leadProject?.thumbnail || leadProject?.image}
          label={`${location.name} DMCI project preview`}
          compact
          variant="gallery"
        />
        <span><MapPin size={15} aria-hidden="true" /> {location.name}</span>
      </div>
      <div className="location-directory-copy">
        <small>{locationProjects.length} approved {locationProjects.length === 1 ? "project" : "projects"}</small>
        <h3>{locationProjects.map((project) => project.name).join(", ")}</h3>
        <p>{statuses.join(" | ")}</p>
        <strong>Compare {location.name} projects <ArrowRight size={17} aria-hidden="true" /></strong>
      </div>
    </Link>
  );
}
