import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FileText, Brain, Zap, Shield } from "lucide-react";
import heroImage from "@/assets/hero-university.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-secondary">
      {/* Hero Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Transform Your
                <span className="bg-gradient-primary bg-clip-text text-transparent"> University Documents</span>
                with AI
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg">
                Streamline document processing, automate workflows, and chat with AI about your academic paperwork. Built for students, faculty, and staff.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-gradient-primary hover:opacity-90 transition-opacity shadow-medium">
                <Zap className="mr-2 h-5 w-5" />
                Start Processing Documents
              </Button>
              <Button variant="outline" size="lg" className="shadow-soft">
                Watch Demo
              </Button>
            </div>

            {/* Feature Cards */}
            <div className="grid grid-cols-2 gap-4 pt-8">
              <Card className="shadow-soft hover:shadow-medium transition-shadow duration-300">
                <CardContent className="p-4">
                  <div className="flex items-center space-x-3">
                    <div className="bg-primary/10 p-2 rounded-lg">
                      <FileText className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-sm">Smart Processing</h3>
                      <p className="text-xs text-muted-foreground">Auto-extract & categorize</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-soft hover:shadow-medium transition-shadow duration-300">
                <CardContent className="p-4">
                  <div className="flex items-center space-x-3">
                    <div className="bg-ai-primary/10 p-2 rounded-lg">
                      <Brain className="h-5 w-5 text-ai-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-sm">AI Assistance</h3>
                      <p className="text-xs text-muted-foreground">Chat with documents</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-strong">
              <img 
                src={heroImage} 
                alt="University students using UniDoc AI platform for document processing"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-primary/10" />
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-card rounded-xl p-4 shadow-glow border border-border">
              <div className="flex items-center space-x-2">
                <Shield className="h-5 w-5 text-ai-accent" />
                <span className="text-sm font-medium">FERPA Compliant</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;