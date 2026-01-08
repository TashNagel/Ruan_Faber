import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import ResultsSection from "@/components/ResultsSection";
import AchievementsSection from "@/components/AchievementsSection";
import AboutSection from "@/components/AboutSection";
import DonationSection from "@/components/DonationSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <StatsSection />
      <ResultsSection />
      <AchievementsSection />
      <AboutSection />
      <DonationSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
