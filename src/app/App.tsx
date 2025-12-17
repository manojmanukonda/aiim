import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { FloatingShapes } from "./components/FloatingShapes";
import { HomePage } from "./pages/HomePage";
import { AboutUsPage } from "./pages/AboutUsPage";
import { TeamPage } from "./pages/TeamPage";
import { LocationsPage } from "./pages/LocationsPage";
import { InsurancePage } from "./pages/InsurancePage";
import { FAQPage } from "./pages/FAQPage";
import { ResourcesPage } from "./pages/ResourcesPage";
import { ServicesPage } from "./pages/ServicesPage";
import { ContactPage } from "./pages/ContactPage";
import { GalleryPage } from "./pages/GalleryPage";
import { CareersPage } from "./pages/CareersPage";
import { ABAPage } from "./pages/services/ABAPage";
import { IBIPage } from "./pages/services/IBIPage";
import { ParentCoachingPage } from "./pages/services/ParentCoachingPage";
import { CreativeArtTherapiesPage } from "./pages/services/CreativeArtTherapiesPage";
import { RelaxationPage } from "./pages/services/RelaxationPage";
import { SocialSkillsPage } from "./pages/services/SocialSkillsPage";
import { SpeechLanguageTherapyPage } from "./pages/services/SpeechLanguageTherapyPage";
import { OccupationalTherapyPage } from "./pages/services/OccupationalTherapyPage";
import { RespiteCarePage } from "./pages/services/RespiteCarePage";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <FloatingShapes />
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutUsPage />} />
            <Route path="/team" element={<TeamPage />} />
            <Route path="/locations" element={<LocationsPage />} />
            <Route path="/insurance" element={<InsurancePage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/resources" element={<ResourcesPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/careers" element={<CareersPage />} />
            <Route path="/services/aba" element={<ABAPage />} />
            <Route path="/services/ibi" element={<IBIPage />} />
            <Route path="/services/parent-coaching" element={<ParentCoachingPage />} />
            <Route path="/services/creative-art-therapies" element={<CreativeArtTherapiesPage />} />
            <Route path="/services/relaxation-self-regulation" element={<RelaxationPage />} />
            <Route path="/services/social-skills" element={<SocialSkillsPage />} />
            <Route path="/services/speech-language-therapy" element={<SpeechLanguageTherapyPage />} />
            <Route path="/services/occupational-therapy" element={<OccupationalTherapyPage />} />
            <Route path="/services/respite-care" element={<RespiteCarePage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}