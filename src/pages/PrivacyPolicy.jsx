import { Button } from "../components/Button";
import { SectionHeader } from "../components/SectionHeader";
import { contact } from "../data/contact";

export default function PrivacyPolicy() {
  return (
    <section className="page-section legal-page">
      <div className="container narrow">
        <SectionHeader
          as="h1"
          align="left"
          eyebrow="Privacy"
          title="Privacy Policy"
          text="This page explains how buyer inquiry details are handled for DMCI project assistance."
        />
        <div className="content-panel legal-content">
          <h2>Information Collected</h2>
          <p>Inquiry forms may ask for your name, contact number, email, preferred project, location, unit type, budget range, buyer purpose, schedule preference, and message.</p>

          <h2>Purpose of Use</h2>
          <p>Details are used to assist with project recommendations, latest computation requests, availability checks, site viewing coordination, reservation preparation, and follow-up through your preferred contact method.</p>

          <h2>How Form Delivery Works</h2>
          <p>When an inquiry is successfully submitted, the website shows a reference number and sends the details for Luisa&apos;s follow-up. If online delivery is temporarily unavailable, the form will say so clearly and provide direct contact options.</p>

          <h2>Sharing and Confirmation</h2>
          <p>Inquiry details are used by {contact.displayName} for buyer assistance. When needed to answer your request, relevant details may be coordinated with the appropriate DMCI Homes team. Luisa will confirm current price, promo, payment term, and availability details before they are relied upon.</p>

          <h2>Contact</h2>
          <p>For privacy-related requests or corrections, contact {contact.displayName} through {contact.phone} or {contact.email}.</p>

          <div className="hero-actions">
            <Button to="/contact">Contact Luisa</Button>
            <Button to="/disclaimer" variant="secondary">Read Disclaimer</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
