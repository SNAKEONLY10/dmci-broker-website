import { useCallback, useEffect, useRef, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { contact } from "../data/contact";
import { cityPages } from "../data/seo";
import { Button } from "./Button";
import { DisclaimerBanner } from "./DisclaimerBanner";
import { SeoManager } from "./SeoManager";
import { useScrollReveal } from "../hooks/useScrollReveal";

const navItems = [
  ["Home", "/"],
  ["Projects", "/projects"],
  ["Locations", "/locations"],
  ["Buyer's Guide", "/buyers-guide"],
  ["Check Availability", "/availability"],
  ["Promos", "/promos"],
  ["About Luisa", "/about"],
  ["Contact", "/contact"]
];

const formRoutePaths = new Set(["/availability", "/request-computation", "/book-viewing", "/contact"]);

export function Layout({ children }) {
  const [open, setOpen] = useState(false);
  const menuButtonRef = useRef(null);
  const { pathname } = useLocation();
  useScrollReveal();
  const hideQuickActions = open || formRoutePaths.has(pathname);
  const closeMobileMenu = useCallback((restoreFocus = true) => {
    setOpen(false);
    if (restoreFocus) {
      window.requestAnimationFrame(() => menuButtonRef.current?.focus());
    }
  }, []);

  useEffect(() => {
    if (!open) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") closeMobileMenu();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [closeMobileMenu, open]);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <>
      <SeoManager />
      <header className="site-header">
        <div className="container nav-wrap">
          <NavLink className="brand" to="/" onClick={() => closeMobileMenu(false)}>
            <span className="brand-logo">
              <img src="/assets/img/dmci-broker-mark.png" alt={`${contact.brokerName} DMCI broker logo`} />
            </span>
            <span className="brand-copy">
              <strong>{contact.brokerName}</strong>
              <small>{contact.role}</small>
            </span>
          </NavLink>
          <nav className="desktop-nav" aria-label="Main navigation">
            {navItems.map(([label, to]) => (
              <NavLink key={to} to={to}>{label}</NavLink>
            ))}
          </nav>
          <Button to="/request-computation" className="desktop-cta">Request Computation</Button>
          <button
            className="menu-toggle"
            type="button"
            ref={menuButtonRef}
            onClick={() => setOpen((isOpen) => !isOpen)}
            aria-controls="mobile-site-menu"
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
        {open && (
          <div className="mobile-menu-shell">
            <button className="mobile-menu-backdrop" type="button" aria-label="Close mobile menu" onClick={() => closeMobileMenu()} />
            <MobileMenu onClose={closeMobileMenu} />
          </div>
        )}
      </header>
      <main>{children}</main>
      <Footer />
      <MobileStickyCTA hidden={hideQuickActions} />
    </>
  );
}

function MobileMenu({ onClose }) {
  return (
    <nav className="mobile-menu" id="mobile-site-menu" aria-label="Mobile navigation">
      <div className="mobile-menu-head">
        <span>Menu</span>
        <button className="mobile-menu-close" type="button" onClick={() => onClose()} aria-label="Close menu">Close</button>
      </div>
      {navItems.map(([label, to]) => (
        <NavLink key={to} to={to} onClick={() => onClose(false)}>{label}</NavLink>
      ))}
      <Button to="/request-computation" onClick={() => onClose(false)}>Request Computation</Button>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <div className="footer-profile">
            <img className="footer-logo" src="/assets/img/dmci-broker-mark.png" alt="DMCI broker logo" />
            <div>
              <h3>{contact.brokerName}</h3>
              <p>{contact.role}<br />{contact.license}</p>
            </div>
          </div>
          <p>Personal buyer assistance for DMCI Homes inquiries, computations, availability checks, site viewings, and reservation guidance.</p>
          <p className="footer-note">Buyer assistance site. Final project details must be confirmed with authorized sales channels.</p>
        </div>
        <div className="footer-links">
          <h4>Buyer Tools</h4>
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/request-computation">Request Computation</NavLink>
          <NavLink to="/availability">Check Availability</NavLink>
          <NavLink to="/book-viewing">Book Viewing</NavLink>
        </div>
        <div className="footer-contact">
          <h4>Contact Luisa</h4>
          <p><strong>Mobile / Viber</strong><br />{contact.phone}</p>
          <p><strong>Email</strong><br />{contact.email}</p>
          <p><strong>Office</strong><br />{contact.office}</p>
          <p><strong>Business Hours</strong><br />{contact.businessHours}</p>
          <p><strong>PRC License</strong><br />{contact.prcLicense}</p>
          <Button to="/contact" variant="secondary">Message Luisa</Button>
        </div>
        <div className="footer-links">
          <h4>Locations</h4>
          {cityPages.slice(0, 6).map((city) => (
            <NavLink key={city.path} to={city.path}>{city.name}</NavLink>
          ))}
        </div>
        <div className="footer-links">
          <h4>Trust & Legal</h4>
          <a href={contact.officialDmciWebsite} target="_blank" rel="noopener noreferrer">DMCI Homes Website</a>
          <NavLink to="/privacy-policy">Privacy Policy</NavLink>
          <NavLink to="/disclaimer">Disclaimer</NavLink>
        </div>
      </div>
      <div className="container"><DisclaimerBanner /></div>
    </footer>
  );
}

function MobileStickyCTA({ hidden = false }) {
  return (
    <nav className={`mobile-sticky-cta${hidden ? " is-hidden" : ""}`} aria-label="Quick actions" aria-hidden={hidden}>
      <a className="cta-call" href={contact.phoneHref} aria-label={`Call ${contact.displayName}`}>Call</a>
      <NavLink className="cta-message" to="/contact" aria-label={`Message ${contact.displayName}`}>Message</NavLink>
      <NavLink className="cta-compute" to="/request-computation" aria-label="Request latest computation">Compute</NavLink>
      <NavLink className="cta-viewing" to="/book-viewing" aria-label="Book a site viewing">Visit</NavLink>
    </nav>
  );
}
