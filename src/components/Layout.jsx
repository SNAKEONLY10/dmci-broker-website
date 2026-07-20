import { useCallback, useEffect, useRef, useState } from "react";
import { CalendarDays, Calculator, MessageCircle, Phone, X } from "lucide-react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { contact } from "../data/contact";
import { projects } from "../data/projects";
import { cityPages } from "../data/seo";
import { useDialogFocusTrap } from "../hooks/useDialogFocusTrap";
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
  const menuRef = useRef(null);
  const menuCloseRef = useRef(null);
  const { pathname, search } = useLocation();
  useScrollReveal();
  const hideQuickActions = open || formRoutePaths.has(pathname);
  const closeMobileMenu = useCallback(() => {
    setOpen(false);
  }, []);

  useDialogFocusTrap({
    open,
    containerRef: menuRef,
    initialFocusRef: menuCloseRef,
    restoreFocusRef: menuButtonRef,
    onClose: closeMobileMenu
  });

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <>
      <SeoManager />
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <header className="site-header">
        <div className="container nav-wrap">
          <NavLink className="brand" to="/" onClick={closeMobileMenu}>
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
            <button className="mobile-menu-backdrop" type="button" tabIndex={-1} aria-label="Close mobile menu" onClick={closeMobileMenu} />
            <MobileMenu menuRef={menuRef} closeButtonRef={menuCloseRef} onClose={closeMobileMenu} />
          </div>
        )}
      </header>
      <main id="main-content" tabIndex={-1}>{children}</main>
      <Footer />
      <MobileStickyCTA hidden={hideQuickActions} pathname={pathname} search={search} />
    </>
  );
}

function MobileMenu({ menuRef, closeButtonRef, onClose }) {
  return (
    <div
      className="mobile-menu"
      id="mobile-site-menu"
      ref={menuRef}
      role="dialog"
      aria-modal="true"
      aria-label="Site navigation"
      tabIndex={-1}
    >
      <div className="mobile-menu-head">
        <span>Menu</span>
        <button className="mobile-menu-close" ref={closeButtonRef} type="button" onClick={onClose} aria-label="Close menu">
          <X size={20} strokeWidth={2.2} aria-hidden="true" />
        </button>
      </div>
      <nav className="mobile-menu-nav" aria-label="Mobile navigation">
        {navItems.map(([label, to]) => (
          <NavLink key={to} to={to} onClick={onClose}>{label}</NavLink>
        ))}
        <Button to="/request-computation" onClick={onClose}>Request Computation</Button>
      </nav>
    </div>
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
          <p>Direct assistance from project shortlisting and computation review to site viewing and reservation preparation.</p>
          <p className="footer-note">Luisa confirms current unit details and the correct DMCI Homes reservation process before any commitment.</p>
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
          <h4>About & Buyer Safety</h4>
          <NavLink to="/about">About Maria Luisa</NavLink>
          <NavLink to="/privacy-policy">Privacy Policy</NavLink>
          <NavLink to="/disclaimer">Disclaimer</NavLink>
        </div>
      </div>
      <div className="container"><DisclaimerBanner /></div>
    </footer>
  );
}

function MobileStickyCTA({ hidden = false, pathname, search }) {
  const context = resolveQuickActionContext(pathname, search);
  const sourcePath = `${pathname}${search}`;
  const returnState = { from: sourcePath };

  return (
    <aside className={`mobile-sticky-cta${hidden ? " is-hidden" : ""}`} aria-label="Quick contact and inquiry actions" aria-hidden={hidden}>
      <a className="cta-call" href={contact.phoneHref} aria-label={`Call ${contact.displayName}; opens your phone dialer`}>
        <Phone size={17} strokeWidth={2.2} aria-hidden="true" />
        <span>Call</span>
      </a>
      <Link className="cta-message" to={inquiryPath("/contact", context, "Sales Inquiry")} state={returnState} aria-label={`Message ${contact.displayName}`}>
        <MessageCircle size={17} strokeWidth={2.2} aria-hidden="true" />
        <span>Message</span>
      </Link>
      <Link className="cta-compute is-primary" to={inquiryPath("/request-computation", context, "Computation")} state={returnState} aria-label="Request latest computation">
        <Calculator size={17} strokeWidth={2.2} aria-hidden="true" />
        <span>Compute</span>
      </Link>
      <Link className="cta-viewing" to={inquiryPath("/book-viewing", context, "Viewing")} state={returnState} aria-label="Book a site viewing">
        <CalendarDays size={17} strokeWidth={2.2} aria-hidden="true" />
        <span>Viewing</span>
      </Link>
    </aside>
  );
}

function resolveQuickActionContext(pathname, search) {
  const projectSlug = pathname.match(/^\/projects\/([^/]+)\/?$/)?.[1];
  const project = projects.find((item) => item.slug === projectSlug);
  if (project) return { project: project.name };

  const city = cityPages.find((item) => item.path === pathname.replace(/\/+$/, ""));
  if (city) return { location: city.name };

  if (pathname === "/projects") {
    const location = new URLSearchParams(search).get("location");
    if (location) return { location };
  }

  return {};
}

function inquiryPath(path, context, inquiryType) {
  const params = new URLSearchParams();
  if (context.project) params.set("project", context.project);
  if (context.location) params.set("location", context.location);
  if (inquiryType) params.set("inquiryType", inquiryType);
  const query = params.toString();
  return query ? `${path}?${query}` : path;
}
