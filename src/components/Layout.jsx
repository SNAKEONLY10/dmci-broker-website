import { useState } from "react";
import { NavLink } from "react-router-dom";
import { contact } from "../data/contact";
import { Button } from "./Button";
import { DisclaimerBanner } from "./DisclaimerBanner";

const navItems = [
  ["Home", "/"],
  ["Projects", "/projects"],
  ["Locations", "/locations"],
  ["Buyer's Guide", "/buyers-guide"],
  ["Availability", "/availability"],
  ["Promos", "/promos"],
  ["About Luisa", "/about"],
  ["Contact", "/contact"]
];

export function Layout({ children }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <header className="site-header">
        <div className="container nav-wrap">
          <NavLink className="brand" to="/" onClick={() => setOpen(false)}>
            <span className="brand-mark">MB</span>
            <span className="brand-copy">
              <strong>My DMCI Broker</strong>
              <small>Luisa Corral | Licensed Real Estate Broker</small>
            </span>
          </NavLink>
          <nav className="desktop-nav" aria-label="Main navigation">
            {navItems.map(([label, to]) => (
              <NavLink key={to} to={to}>{label}</NavLink>
            ))}
          </nav>
          <Button to="/request-computation" className="desktop-cta">Request Computation</Button>
          <button className="menu-toggle" type="button" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Open menu">
            <span />
            <span />
            <span />
          </button>
        </div>
        {open && <MobileMenu onClose={() => setOpen(false)} />}
      </header>
      <main>{children}</main>
      <Footer />
      <MobileStickyCTA />
    </>
  );
}

function MobileMenu({ onClose }) {
  return (
    <nav className="mobile-menu" aria-label="Mobile navigation">
      {navItems.map(([label, to]) => (
        <NavLink key={to} to={to} onClick={onClose}>{label}</NavLink>
      ))}
      <Button to="/request-computation" onClick={onClose}>Request Computation</Button>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <h3>{contact.brand}</h3>
          <p>Luisa Corral's DMCI Homes buyer assistance platform for project browsing, computation requests, availability checks, viewing schedules, and reservation guidance.</p>
          <p><strong>{contact.brokerName}</strong><br />{contact.role}<br />{contact.license}</p>
          <p className="footer-note">Buyer assistance website by Luisa Corral. Final project details are subject to official confirmation.</p>
        </div>
        <div>
          <h4>Buyer Tools</h4>
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/availability">Check Availability</NavLink>
          <NavLink to="/reservation-requirements">Reservation Requirements</NavLink>
          <NavLink to="/virtual-tours">Virtual Tours</NavLink>
        </div>
        <div>
          <h4>Contact Luisa</h4>
          <p>{contact.phone}</p>
          <p>{contact.email}</p>
          <Button to="/contact" variant="secondary">Message Luisa</Button>
        </div>
        <div>
          <h4>Official DMCI References</h4>
          <a href={contact.officialDmciWebsite} target="_blank" rel="noopener">DMCI Homes Website</a>
          <a href={contact.officialDmciFacebook} target="_blank" rel="noopener">DMCI Homes Facebook</a>
          <NavLink to="/showcase">Client Showcase</NavLink>
          <p>Use official channels for corporate announcements and final project confirmation.</p>
        </div>
      </div>
      <div className="container"><DisclaimerBanner /></div>
    </footer>
  );
}

function MobileStickyCTA() {
  return (
    <nav className="mobile-sticky-cta" aria-label="Quick actions">
      <a href={`tel:${contact.phone.replace(/\s/g, "")}`}>Call</a>
      <a href={contact.messenger}>Message</a>
      <NavLink to="/request-computation">Compute</NavLink>
      <NavLink to="/book-viewing">Viewing</NavLink>
    </nav>
  );
}
