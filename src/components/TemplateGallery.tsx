import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FileText, Download, Eye, Star, Clock, Users } from "lucide-react";

const TemplateGallery = () => {
  const templates = [
    {
      id: 1,
      name: "Financial Aid Application",
      category: "Student Services",
      description: "Complete FAFSA and institutional aid application form",
      downloads: 2456,
      rating: 4.8,
      lastUpdated: "2024-01-10",
      popular: true,
      fields: 24
    },
    {
      id: 2,
      name: "Research Proposal",
      category: "Academic",
      description: "Template for research project proposals and grant applications",
      downloads: 1823,
      rating: 4.9,
      lastUpdated: "2024-01-08",
      popular: true,
      fields: 18
    },
    {
      id: 3,
      name: "Course Registration",
      category: "Enrollment",
      description: "Semester course selection and registration form",
      downloads: 3654,
      rating: 4.7,
      lastUpdated: "2024-01-12",
      popular: false,
      fields: 12
    },
    {
      id: 4,
      name: "Transcript Request",
      category: "Records",
      description: "Official transcript request for graduates and current students",
      downloads: 987,
      rating: 4.6,
      lastUpdated: "2024-01-05",
      popular: false,
      fields: 8
    },
    {
      id: 5,
      name: "Internship Report",
      category: "Academic",
      description: "Comprehensive internship experience and evaluation report",
      downloads: 1456,
      rating: 4.5,
      lastUpdated: "2024-01-09",
      popular: false,
      fields: 16
    },
    {
      id: 6,
      name: "Graduation Application",
      category: "Student Services",
      description: "Application for degree conferral and graduation ceremony",
      downloads: 2109,
      rating: 4.9,
      lastUpdated: "2024-01-11",
      popular: true,
      fields: 14
    }
  ];

  const categories = ["All", "Student Services", "Academic", "Enrollment", "Records"];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Student Services": return "bg-primary/10 text-primary";
      case "Academic": return "bg-ai-primary/10 text-ai-primary";
      case "Enrollment": return "bg-ai-accent/10 text-ai-accent";
      case "Records": return "bg-yellow-500/10 text-yellow-700";
      default: return "bg-muted";
    }
  };

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            University Template Gallery
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Pre-built forms and templates for all your academic and administrative needs. Save time with intelligent auto-fill.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {categories.map((category) => (
            <Button
              key={category}
              variant={category === "All" ? "default" : "outline"}
              size="sm"
              className={category === "All" ? "bg-gradient-primary hover:opacity-90" : ""}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Templates Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {templates.map((template) => (
            <Card key={template.id} className="shadow-soft hover:shadow-medium transition-shadow duration-300">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="bg-gradient-primary p-2 rounded-lg">
                    <FileText className="h-6 w-6 text-white" />
                  </div>
                  {template.popular && (
                    <Badge className="bg-yellow-500/10 text-yellow-700">
                      <Star className="h-3 w-3 mr-1" />
                      Popular
                    </Badge>
                  )}
                </div>
                
                <div className="space-y-2">
                  <CardTitle className="text-lg">{template.name}</CardTitle>
                  <Badge className={getCategoryColor(template.category)}>
                    {template.category}
                  </Badge>
                  <CardDescription className="text-sm">
                    {template.description}
                  </CardDescription>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="flex items-center justify-center space-x-1">
                      <Download className="h-3 w-3 text-muted-foreground" />
                      <span className="text-sm font-medium">{template.downloads.toLocaleString()}</span>
                    </div>
                    <p className="text-xs text-muted-foreground">Downloads</p>
                  </div>
                  
                  <div>
                    <div className="flex items-center justify-center space-x-1">
                      <Star className="h-3 w-3 text-yellow-500" />
                      <span className="text-sm font-medium">{template.rating}</span>
                    </div>
                    <p className="text-xs text-muted-foreground">Rating</p>
                  </div>
                  
                  <div>
                    <div className="flex items-center justify-center space-x-1">
                      <Users className="h-3 w-3 text-muted-foreground" />
                      <span className="text-sm font-medium">{template.fields}</span>
                    </div>
                    <p className="text-xs text-muted-foreground">Fields</p>
                  </div>
                </div>

                {/* Last Updated */}
                <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                  <Clock className="h-3 w-3" />
                  <span>Updated {template.lastUpdated}</span>
                </div>

                {/* Actions */}
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm" className="flex-1">
                    <Eye className="h-3 w-3 mr-1" />
                    Preview
                  </Button>
                  <Button size="sm" className="flex-1 bg-gradient-primary hover:opacity-90">
                    <Download className="h-3 w-3 mr-1" />
                    Use Template
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <Card className="max-w-md mx-auto shadow-medium">
            <CardContent className="p-8">
              <div className="space-y-4">
                <div className="bg-gradient-ai p-4 rounded-full w-16 h-16 mx-auto flex items-center justify-center">
                  <FileText className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Need a Custom Template?</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Can't find what you're looking for? Our AI can help create custom forms tailored to your needs.
                  </p>
                  <Button className="bg-gradient-ai hover:opacity-90">
                    Request Custom Template
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TemplateGallery;