import React, { useState, useEffect } from "react";
import { AnnouncementBar } from "./components/AnnouncementBar";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { PainPointsSection } from "./components/PainPointsSection";
import { FounderStorySection } from "./components/FounderStorySection";
import { RootCauseSection } from "./components/RootCauseSection";
import { RoadmapSection } from "./components/RoadmapSection";
import { OutcomesSection } from "./components/OutcomesSection";
import { ProductStackSection } from "./components/ProductStackSection";
import { SupportBenefitsSection } from "./components/SupportBenefitsSection";
import { TrainerProfileSection } from "./components/TrainerProfileSection";
import { CaseStudiesSection } from "./components/CaseStudiesSection";
import { AudienceSection } from "./components/AudienceSection";
import { FaqSection } from "./components/FaqSection";
import { PricingSection } from "./components/PricingSection";
import { RegistrationForm } from "./components/RegistrationForm";
import { FinalCTA } from "./components/FinalCTA";
import { Footer } from "./components/Footer";
import { StickyMobileCTA } from "./components/StickyMobileCTA";
import { ExitPopup } from "./components/ExitPopup";
import { AdminDashboard } from "./components/AdminDashboard";

import { trackEvent } from "./utils/tracking";

export default function App() {
  const [hash, setHash] = useState(window.location.hash);
  const [formDefaultParticipation, setFormDefaultParticipation] = useState<string | undefined>(undefined);

  useEffect(() => {
    // Initial page_view tracking
    trackEvent("page_view", "User visited Landing Page YDVN.VN");

    const handleHashChange = () => {
      setHash(window.location.hash);
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const scrollToRegistration = (defaultParticipation?: string) => {
    if (defaultParticipation) {
      setFormDefaultParticipation(defaultParticipation);
    }
    const element = document.querySelector("#dang-ky");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Render Admin Dashboard if hash is #admin
  if (hash === "#admin") {
    return (
      <AdminDashboard
        onBackToPage={() => {
          window.location.hash = "";
        }}
      />
    );
  }

  return (
    <div className="min-h-screen bg-[#FFFEFB] text-[#201515] font-sans selection:bg-[#FF4F00] selection:text-white">
      {/* 1. Announcement Bar */}
      <AnnouncementBar />

      {/* 2. Header */}
      <Header onRegisterClick={() => scrollToRegistration()} />

      {/* 3. Hero Section */}
      <HeroSection
        onPrimaryCta={() => scrollToRegistration()}
        onConsultCta={() => scrollToRegistration("Chưa rõ, cần tư vấn")}
      />

      {/* 4. Pain Points Section */}
      <PainPointsSection />

      {/* 5. Founder Story Section */}
      <FounderStorySection />

      {/* 6. Root Cause Section */}
      <RootCauseSection />

      {/* 7. Roadmap (8 Steps) Section */}
      <RoadmapSection onRegisterClick={() => scrollToRegistration()} />

      {/* 8. Outcomes Deliverables Section */}
      <OutcomesSection />

      {/* 9. Product Stack Section */}
      <ProductStackSection onRegisterClick={() => scrollToRegistration()} />

      {/* 10. Support & Benefits Section */}
      <SupportBenefitsSection />

      {/* 11. Trainer Profile Section */}
      <TrainerProfileSection />

      {/* 12. Case Studies Section */}
      <CaseStudiesSection />

      {/* 13. Audience Fit Section */}
      <AudienceSection />

      {/* 14. FAQ Accordion Section */}
      <FaqSection />

      {/* 15. Pricing Section */}
      <PricingSection
        onRegisterClick={() => scrollToRegistration()}
        onConsultClick={() => scrollToRegistration("Chưa rõ, cần tư vấn")}
      />

      {/* 16. Registration Form Section */}
      <RegistrationForm defaultParticipation={formDefaultParticipation} />

      {/* 17. Final CTA Section */}
      <FinalCTA onRegisterClick={() => scrollToRegistration()} />

      {/* 18. Footer */}
      <Footer />

      {/* Mobile Sticky CTA Bar */}
      <StickyMobileCTA onRegisterClick={() => scrollToRegistration()} />

      {/* Desktop Exit Intent Popup */}
      <ExitPopup onConsultClick={() => scrollToRegistration("Chưa rõ, cần tư vấn")} />
    </div>
  );
}
