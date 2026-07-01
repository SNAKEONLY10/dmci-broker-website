import { Navigate, Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout.jsx";
import Home from "./pages/Home.jsx";
import Projects from "./pages/Projects.jsx";
import ProjectDetail from "./pages/ProjectDetail.jsx";
import Locations from "./pages/Locations.jsx";
import CityProjects from "./pages/CityProjects.jsx";
import Availability from "./pages/Availability.jsx";
import RequestComputation from "./pages/RequestComputation.jsx";
import BookViewing from "./pages/BookViewing.jsx";
import BuyersGuide from "./pages/BuyersGuide.jsx";
import ReservationRequirements from "./pages/ReservationRequirements.jsx";
import VirtualTours from "./pages/VirtualTours.jsx";
import Promos from "./pages/Promos.jsx";
import ResaleUnits from "./pages/ResaleUnits.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import PrivacyPolicy from "./pages/PrivacyPolicy.jsx";
import Disclaimer from "./pages/Disclaimer.jsx";
import Showcase from "./pages/Showcase.jsx";
import NotFound from "./pages/NotFound.jsx";

export default function App() {
  return (
    <Layout>
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
        <Route path="/privacy" element={<Navigate to="/privacy-policy" replace />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/disclaimer" element={<Disclaimer />} />
        <Route path="/showcase" element={<Showcase />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}
