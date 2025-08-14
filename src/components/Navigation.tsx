import { Button } from "@/components/ui/button";
import { GraduationCap, FileText, MessageSquare, Settings, User } from "lucide-react";

const Navigation = () => {
  return (
    <nav className="bg-card border-b border-border shadow-soft">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-primary p-2 rounded-lg">
              <GraduationCap className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">UniDoc AI</h1>
              <p className="text-xs text-muted-foreground">Document Intelligence Platform</p>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="flex items-center space-x-2 text-foreground hover:text-primary transition-colors">
              <FileText className="h-4 w-4" />
              <span>Documents</span>
            </a>
            <a href="#" className="flex items-center space-x-2 text-foreground hover:text-primary transition-colors">
              <MessageSquare className="h-4 w-4" />
              <span>AI Chat</span>
            </a>
            <a href="#" className="flex items-center space-x-2 text-foreground hover:text-primary transition-colors">
              <Settings className="h-4 w-4" />
              <span>Templates</span>
            </a>
          </div>

          {/* User Actions */}
          <div className="flex items-center space-x-4">
            <Button variant="outline" size="sm">
              <User className="h-4 w-4 mr-2" />
              Sign In
            </Button>
            <Button size="sm" className="bg-gradient-primary hover:opacity-90 transition-opacity">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;