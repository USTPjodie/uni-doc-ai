import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import DocumentDashboard from "@/components/DocumentDashboard";
import AIChatInterface from "@/components/AIChatInterface";
import TemplateGallery from "@/components/TemplateGallery";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <DocumentDashboard />
      <AIChatInterface />
      <TemplateGallery />
    </div>
  );
};

export default Index;
