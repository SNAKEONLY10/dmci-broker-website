import { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout.jsx";

const Home = lazy(() => import("./pages/Home.jsx"));
const Projects = lazy(() => import("./pages/Projects.jsx"));
const ProjectDetail = lazy(() => import("./pages/ProjectDetail.jsx"));
const Locations = lazy(() => import("./pages/Locations.jsx"));
const CityProjects = lazy(() => import("./pages/CityProjects.jsx"));
const Availability = lazy(() => import("./pages/Availability.jsx"));
const RequestComputation = lazy(() => import("./pages/RequestComputation.jsx"));
const BookViewing = lazy(() => import("./pages/BookViewing.jsx"));
const BuyersGuide = lazy(() => import("./pages/BuyersGuide.jsx"));
const ReservationRequirements = lazy(() => import("./pages/ReservationRequirements.jsx"));
const VirtualTours = lazy(() => import("./pages/VirtualTours.jsx"));
const Promos = lazy(() => import("./pages/Promos.jsx"));
const ResaleUnits = lazy(() => import("./pages/ResaleUnits.jsx"));
const About = lazy(() => import("./pages/About.jsx"));
const Contact = lazy(() => import("./pages/Contact.jsx"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy.jsx"));
const Disclaimer = lazy(() => import("./pages/Disclaimer.jsx"));
const Showcase = lazy(() => import("./pages/Showcase.jsx"));
const NotFound = lazy(() => import("./pages/NotFound.jsx"));

export default function App() {
  return (
    <Layout>
      <Suspense fallback={<RouteLoading />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:slug" element={<ProjectDetail />} />
          <Route path="/locations" element={<Locations />} />
          <Route path="/locations/:locationSlug" element={<CityProjects />} />
          <Route path="/availability" element={<Availability />} />
          <Route path="/request-computation" element={<RequestComputation />} />
          <Route path="/book-viewing" element={<BookViewing />} />
          <Route path="/buyers-guide" element={<BuyersGuide />} />
          <Route path="/reservation-requirements" element={<ReservationRequirements />} />
          <Route path="/virtual-tours" element={<VirtualTours />} />
          <Route path="/promos" element={<Promos />} />
          <Route path="/resale-units" element={<ResaleUnits />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/contact`" element={<Navigate to="/contact" replace />} />
          <Route path="/contact%60" element={<Navigate to="/contact" replace />} />
          <Route path="/privacy" element={<Navigate to="/privacy-policy" replace />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
          <Route path="/showcase" element={<Showcase />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Layout>
  );
}

function RouteLoading() {
  return (
    <div className="route-loading" role="status" aria-live="polite">
      Loading page...
    </div>
  );
}
