import { AboutCompact } from "./Home";
import { Button } from "../components/Button";
import { ContactButtons } from "../components/ContactButtons";
import { SectionHeader } from "../components/SectionHeader";
import { contact } from "../data/contact";

export default function About() {
  return (
    <>
      <section className="page-section">
        <div className="container">
          <SectionHeader align="left" eyebrow="About Luisa" title={contact.brokerName} text={`${contact.role} | ${contact.license}`} />
        </div>
      </section>
      <AboutCompact />
      <section className="section">
        <div className="container two-column compact">
          <div className="content-panel">
            <h2>Service Promise</h2>
            <p>{contact.brokerName} assists buyers in finding the right DMCI Homes property through updated computations, project recommendations, site viewing coordination, and reservation guidance.</p>
            <div className="checklist-grid">
              {[contact.license, contact.role, "Buyer Assistance Specialist"].map((item) => <span key={item}>{item}</span>)}
            </div>
            <div className="hero-actions"><Button to="/request-computation">Request Computation</Button><Button to="/contact" variant="secondary">Message Luisa</Button></div>
          </div>
          <div className="content-panel">
            <h2>Contact Options</h2>
            <ContactButtons />
          </div>
        </div>
      </section>
    </>
  );
}
