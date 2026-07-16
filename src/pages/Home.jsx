import { Link } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import { Button } from "../components/Button";
import { DemoForm } from "../components/LeadForm";
import { LocationCard } from "../components/LocationCard";
import { ProjectGrid } from "../components/ProjectGrid";
import { SectionHeader } from "../components/SectionHeader";
import { GuideCard, PromoCard, VideoTourCard } from "../components/Cards";
import { DisclaimerBanner } from "../components/DisclaimerBanner";
import { projects, unitTypes, statuses } from "../data/projects";
import { locations } from "../data/locations";
import { guideCards } from "../data/guides";
import { promos } from "../data/promos";
import { contact } from "../data/contact";
import { useResponsiveProjectPageSize } from "../hooks/useResponsiveProjectPageSize";
import { projectMatchesPurpose, sortProjectsForGoal } from "../utils/projectGoals";

const HOME_BUYER_GOAL_KEY = "dmci_home_buyer_goal";
const HOME_GOAL_PROMPT_KEY = "dmci_home_goal_prompt_seen";
const primaryBuyerGoals = [
  { value: "Own Use", label: "Residence", description: "For own use or family living" },
  { value: "Investment", label: "Investment", description: "For rental, resale, or portfolio planning" }
];
const validPrimaryBuyerGoals = new Set(primaryBuyerGoals.map((goal) => goal.value));
const homeContactTimes = ["Anytime", "Morning (Philippine time)", "Afternoon (Philippine time)", "Evening (Philippine time)"];

const computationFields = [
  { name: "fullName", label: "Full Name", section: "Your Details", autoComplete: "name" },
  { name: "contactNumber", label: "Phone Number", type: "tel", autoComplete: "tel", inputMode: "tel", helper: "Use the number where Luisa can reach you. Include the country code if you are overseas." },
  { name: "email", label: "Email Address", type: "email", autoComplete: "email" },
  { name: "location", label: "Project Location", section: "Property Preferences", options: locations.map((item) => item.name), helper: "Select an area to see its approved projects." },
  { name: "project", label: "Project Interested In", options: projects.map((item) => item.name) },
  { name: "unitType", label: "Unit Type", options: unitTypes },
  { name: "budgetRange", label: "Budget Range", options: ["Still exploring", "Below PHP 6M", "PHP 6M - 10M", "PHP 10M - 15M", "PHP 15M and above"] },
  {
    name: "purpose",
    label: "Buyer Goal",
    options: [
      { value: "Own Use", label: "For Residence" },
      { value: "Investment", label: "For Investment" },
      { value: "Family", label: "For Family Living" },
      { value: "Rental", label: "For Rental Potential" }
    ]
  },
  { name: "nationality", label: "Nationality", options: ["Filipino", "Dual citizen", "Foreign national", "Prefer not to say"] },
  { name: "contactMethod", label: "Preferred Contact Method", section: "Contact Preference", options: ["Email and Mobile", "Call", "Viber", "Email", "SMS"], placeholder: "Choose a contact method" },
  { name: "bestTimeToContact", label: "Best Time to Contact", options: homeContactTimes, placeholder: "Choose a contact time" },
  { name: "leadSource", label: "How Did You Find This Website?", options: ["Facebook", "Google", "TikTok", "Instagram", "Referral", "Website", "Viber", "Other"], placeholder: "Choose a source" },
  { name: "message", label: "Additional Details", section: "Message", type: "textarea", full: true, placeholder: "Share your preferred payment term or anything Luisa should consider." }
];

export default function Home() {
  const [buyerGoal, setBuyerGoal] = useState(readStoredBuyerGoal);
  const [intentPromptDismissed, setIntentPromptDismissed] = useState(readIntentPromptSeen);
  const projectPageSize = useResponsiveProjectPageSize();
  const showIntentPrompt = !intentPromptDismissed && !buyerGoal;
  const homepageProjects = useMemo(
    () => sortProjectsForGoal(
      projects.filter((project) => projectMatchesPurpose(project, buyerGoal)),
      buyerGoal
    ),
    [buyerGoal]
  );
  const visibleProjects = homepageProjects.slice(0, projectPageSize);
  const goalCopy = buyerGoal === "Investment"
    ? {
      title: "Compare DMCI properties with your investment goals in mind",
      text: "Review location, turnover, unit mix, and payment options with current details confirmed before you decide.",
      projectTitle: "Projects ranked for investment review",
      projectText: "All approved projects stay visible, ordered to surface rental, upcoming, and comparison-friendly options first."
    }
    : buyerGoal === "Own Use"
      ? {
      title: "Find a DMCI home that fits the way you live",
      text: "Explore communities by location, unit type, and turnover, with clear guidance from shortlist to viewing.",
      projectTitle: "Projects ranked for residence",
      projectText: "All approved projects stay visible, ordered to prioritize ready, family-friendly, and near-turnover options first."
    }
      : {
        title: "Explore DMCI homes for living or investment",
        text: "Compare communities, unit options, and turnover schedules, then choose the path that fits your plans.",
        projectTitle: "Selected DMCI projects",
        projectText: "Start with the approved directory, then refine your shortlist by goal, location, and timing."
      };
  const projectDirectoryLink = buyerGoal
    ? `/projects?purpose=${encodeURIComponent(buyerGoal)}`
    : "/projects";
  const computationLink = buyerGoal
    ? `/request-computation?purpose=${encodeURIComponent(buyerGoal)}`
    : "/request-computation";

  function selectBuyerGoal(goal, options = {}) {
    setBuyerGoal(goal);
    persistBuyerGoal(goal);

    if (options.closePrompt || showIntentPrompt) {
      markIntentPromptSeen();
      setIntentPromptDismissed(true);
    }
  }

  function dismissIntentPrompt() {
    markIntentPromptSeen();
    setIntentPromptDismissed(true);
  }

  useEffect(() => {
    if (!showIntentPrompt) return undefined;

    function closeOnEscape(event) {
      if (event.key === "Escape") {
        markIntentPromptSeen();
        setIntentPromptDismissed(true);
      }
    }

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [showIntentPrompt]);

  return (
    <>
      {showIntentPrompt && (
        <HomeGoalPrompt
          onChoose={(goal) => selectBuyerGoal(goal, { closePrompt: true })}
          onDismiss={dismissIntentPrompt}
        />
      )}
      <section className="hero-section hero-landing">
        <div className="container hero-landing-inner">
          <div className="hero-copy hero-landing-copy" data-reveal="hero-text">
            <span className="eyebrow">{contact.brokerName} | Licensed Real Estate Broker</span>
            <h1>{goalCopy.title}</h1>
            <p>{goalCopy.text}</p>
            <div className={`home-intent-switch ${buyerGoal ? "has-selection" : "needs-selection"}`} role="group" aria-label="Choose your property goal">
              <span className="home-intent-label">{buyerGoal ? "Selected property goal" : "Choose your property goal"}</span>
              {primaryBuyerGoals.map((goal) => (
                <button
                  key={goal.value}
                  type="button"
                  className={buyerGoal === goal.value ? "active" : ""}
                  aria-pressed={buyerGoal === goal.value}
                  onClick={() => selectBuyerGoal(goal.value)}
                >
                  <span>{goal.label}</span>
                  <small>{goal.description}</small>
                </button>
              ))}
            </div>
            <div className="hero-actions center">
              <Button to={projectDirectoryLink}>Browse Projects</Button>
              <Button to={computationLink} variant="secondary">Get Computation</Button>
            </div>
          </div>
        </div>
      </section>

      <QuickSearch buyerGoal={buyerGoal} onBuyerGoalChange={selectBuyerGoal} />

      <section className="section home-featured-projects">
        <div className="container">
          <SectionHeader eyebrow="Selected Projects" title={goalCopy.projectTitle} text={goalCopy.projectText} />
          <div className="home-project-toolbar" data-reveal="text-group">
            <p className="pagination-summary" aria-live="polite">
              Showing {visibleProjects.length} of {homepageProjects.length} approved projects{buyerGoal ? " ranked for this goal" : ""}
            </p>
            <Link to={projectDirectoryLink}>View the complete shortlist</Link>
          </div>
          <ProjectGrid key={`home-projects-${buyerGoal}-${projectPageSize}`} projects={visibleProjects} />
        </div>
      </section>

      <section className="section soft home-locations">
        <div className="container">
          <SectionHeader eyebrow="Locations" title="Explore by city" text="See approved DMCI projects in the areas that matter to you." />
          <div className="location-grid">
            {locations.map((location) => (
              <LocationCard key={location.id} location={location} count={projects.filter((project) => project.location === location.name).length} />
            ))}
          </div>
        </div>
      </section>

      <AboutCompact />
      <BuyerJourney />
      <PreviewSections />
      <HomeFAQ />

      <section className="section">
        <div className="container narrow">
          <DemoForm
            title="Request a current computation"
            subtitle="Share your preferred project and unit type. Luisa will confirm the latest figures, terms, and availability."
            fields={computationFields}
            storageKey="dmci_leads"
            submitLabel="Send Computation Request"
            required={["fullName", "contactMethod"]}
            inquiryType="Request Computation"
            projectCatalog={projects}
          />
        </div>
      </section>

      <FinalCTA />
    </>
  );
}

function HomeGoalPrompt({ onChoose, onDismiss }) {
  return (
    <div className="home-goal-prompt-backdrop" onClick={onDismiss}>
      <section
        className="home-goal-prompt"
        role="dialog"
        aria-modal="true"
        aria-labelledby="home-goal-prompt-title"
        aria-describedby="home-goal-prompt-copy"
        onClick={(event) => event.stopPropagation()}
      >
        <button className="home-goal-prompt-close" type="button" onClick={onDismiss} aria-label="Close buyer goal prompt">×</button>
        <span className="eyebrow">Buyer Goal</span>
        <h2 id="home-goal-prompt-title">What are you comparing today?</h2>
        <p id="home-goal-prompt-copy">
          Select a goal to refine the project shortlist. You can change this anytime.
        </p>
        <div className="home-goal-prompt-options">
          {primaryBuyerGoals.map((goal) => (
            <button key={goal.value} type="button" onClick={() => onChoose(goal.value)}>
              <strong>{goal.label}</strong>
              <span>{goal.description}</span>
            </button>
          ))}
        </div>
      </section>
    </div>
  );
}

function QuickSearch({ buyerGoal, onBuyerGoalChange }) {
  const [filters, setFilters] = useState({ location: "", status: "", unitType: "", purpose: buyerGoal });
  const matches = useMemo(() => projects.filter((project) => (
    (!filters.location || project.location === filters.location) &&
    (!filters.status || project.status === filters.status) &&
    (!filters.unitType || project.unitTypes.includes(filters.unitType)) &&
    projectMatchesPurpose(project, filters.purpose)
  )), [filters]);

  useEffect(() => {
    setFilters((current) => ({ ...current, purpose: buyerGoal }));
  }, [buyerGoal]);

  function update(event) {
    const { name, value } = event.target;
    setFilters((current) => ({ ...current, [name]: value }));
    if (name === "purpose") onBuyerGoalChange(value);
  }

  const query = new URLSearchParams(
    Object.entries(filters).filter(([, value]) => value)
  ).toString();
  const projectSearchLink = query ? `/projects?${query}` : "/projects";

  return (
    <section className="quick-search">
      <div className="container search-panel" data-reveal="text-group">
        <div>
          <span className="eyebrow">Refine Your Shortlist</span>
          <h2>Find projects suited to your plans</h2>
          <p>Filter the approved directory by location, status, unit type, and buyer goal.</p>
        </div>
        <div className="search-fields">
          <label className="sr-only" htmlFor="quick-location">Preferred Location</label>
          <select id="quick-location" name="location" value={filters.location} onChange={update}><option value="">Preferred Location</option>{locations.map((item) => <option key={item.name}>{item.name}</option>)}</select>
          <label className="sr-only" htmlFor="quick-status">Project Status</label>
          <select id="quick-status" name="status" value={filters.status} onChange={update}><option value="">Status</option>{statuses.map((item) => <option key={item}>{item}</option>)}</select>
          <label className="sr-only" htmlFor="quick-unit-type">Unit Type</label>
          <select id="quick-unit-type" name="unitType" value={filters.unitType} onChange={update}><option value="">Unit Type</option>{unitTypes.map((item) => <option key={item}>{item}</option>)}</select>
          <label className="sr-only" htmlFor="quick-purpose">Buyer Purpose</label>
          <select id="quick-purpose" name="purpose" value={filters.purpose} onChange={update}>
            <option value="">Any Buyer Goal</option>
            <option value="Own Use">For Residence</option>
            <option value="Investment">For Investment</option>
          </select>
        </div>
        <div className="search-result-row">
          <Button to={projectSearchLink}>View {matches.length} Matching Projects</Button>
          <Link to="/contact">Ask Luisa to help refine the shortlist</Link>
        </div>
      </div>
    </section>
  );
}

function readStoredBuyerGoal() {
  if (typeof window === "undefined") return "";

  try {
    const value = window.localStorage.getItem(HOME_BUYER_GOAL_KEY);
    return validPrimaryBuyerGoals.has(value) ? value : "";
  } catch {
    return "";
  }
}

function readIntentPromptSeen() {
  if (typeof window === "undefined") return true;

  try {
    return window.localStorage.getItem(HOME_GOAL_PROMPT_KEY) === "1";
  } catch {
    return true;
  }
}

function persistBuyerGoal(goal) {
  if (typeof window === "undefined") return;

  try {
    if (validPrimaryBuyerGoals.has(goal)) {
      window.localStorage.setItem(HOME_BUYER_GOAL_KEY, goal);
      return;
    }

    window.localStorage.removeItem(HOME_BUYER_GOAL_KEY);
  } catch {
    // Browsing still works if local storage is unavailable.
  }
}

function markIntentPromptSeen() {
  if (typeof window === "undefined") return;

  try {
    window.localStorage.setItem(HOME_GOAL_PROMPT_KEY, "1");
  } catch {
    // Browsing still works if local storage is unavailable.
  }
}

export function AboutCompact() {
  return (
    <section className="section about-compact">
      <div className="container about-card">
        <div className="portrait-panel">
          <img src="/assets/img/luisa-corral.jpg" alt={`${contact.brokerName} portrait`} loading="lazy" />
        </div>
        <div className="about-details" data-reveal="text-group">
          <span className="eyebrow">Your DMCI Broker</span>
          <h2>One point of contact, from shortlist to reservation</h2>
          <p>Luisa helps you compare projects, review current computations, confirm availability, and arrange viewings.</p>
          <div className="credential-grid">
            {["PRC licensed", "Current computations", "Viewing coordination", "Local and OFW buyers"].map((item) => <span key={item}>{item}</span>)}
          </div>
          <div className="hero-actions">
            <Button to="/contact">Speak with Luisa</Button>
            <Button to="/about" variant="secondary">View Credentials</Button>
          </div>
        </div>
      </div>
    </section>
  );
}

function BuyerJourney() {
  const steps = [
    "Share your priorities",
    "Compare a focused shortlist",
    "Review current figures and availability",
    "Arrange a viewing and next steps"
  ];
  return (
    <section className="section soft">
      <div className="container">
        <SectionHeader eyebrow="How It Works" title="A clear path from shortlist to viewing" />
        <div className="timeline" data-reveal="text-group">{steps.map((step, index) => <div key={step}><strong>{index + 1}</strong><p>{step}</p></div>)}</div>
      </div>
    </section>
  );
}

function HomeFAQ() {
  const faqs = [
    {
      question: "Are prices and promos current?",
      answer: "Published figures are guides. Luisa confirms the latest price, payment terms, promos, and availability for the unit you are considering."
    },
    {
      question: "Can I reserve a unit online?",
      answer: "Luisa will first confirm availability and the official computation, then guide you through DMCI Homes' authorized reservation process."
    },
    {
      question: "Can Luisa help me compare projects?",
      answer: "Yes. Share your preferred location, budget, unit type, timeline, and goal so she can prepare a focused comparison."
    }
  ];

  return (
    <section className="section soft home-faq">
      <div className="container" data-reveal="text-group">
        <SectionHeader eyebrow="Before You Decide" title="Important questions, answered clearly" />
        <div className="card-grid">
          {faqs.map((faq) => (
            <article className="info-card" key={faq.question} data-reveal="card">
              <h3>{faq.question}</h3>
              <p>{faq.answer}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function PreviewSections() {
  const tourProjects = projects
    .filter((project) => (project.videoTourUrl || project.videoTourEmbedUrl) && (project.thumbnail || project.image))
    .slice(0, 5);

  return (
    <>
      <section className="section home-tours">
        <div className="container">
          <SectionHeader eyebrow="Virtual Tours" title="See the properties before your visit" />
          <div className="card-grid five">
            {tourProjects.map((project) => (
              <VideoTourCard
                key={project.slug}
                title={`${project.name} AVP / Virtual Tour`}
                unitType={project.location}
                image={project.thumbnail || project.image}
                to={`/projects/${project.slug}#views`}
              />
            ))}
          </div>
        </div>
      </section>
      <section className="section soft">
        <div className="container">
          <SectionHeader eyebrow="Buyer's Guide" title="Essential reading before reserving" />
          <div className="card-grid">{guideCards.slice(0, 6).map((guide) => <GuideCard key={guide.id} {...guide} />)}</div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <SectionHeader eyebrow="Promos & Payment Terms" title="Understand the offer before you compare" text="Review dated references, then ask Luisa to confirm the term that applies to your preferred unit." />
          <div className="card-grid">{promos.map((promo) => <PromoCard key={promo.id} promo={promo} />)}</div>
        </div>
      </section>
    </>
  );
}

function FinalCTA() {
  return (
    <section className="final-cta">
      <div className="container" data-reveal="text-group">
        <h2>Ready to discuss your shortlist?</h2>
        <p>Send your preferences and receive current project details from Luisa.</p>
        <div className="hero-actions center">
          <Button to="/request-computation">Request Computation</Button>
          <Button to="/book-viewing" variant="secondary">Book a Site Viewing</Button>
        </div>
        <DisclaimerBanner />
      </div>
    </section>
  );
}
