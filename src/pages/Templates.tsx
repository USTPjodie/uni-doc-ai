import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { FileText, Download, Eye, Star, Clock, Users, Search, Filter, Plus } from "lucide-react";

const Templates = () => {
  const templates = [
    { id: 1, name: "Financial Aid Application", category: "Student Services", description: "Complete FAFSA and institutional aid application form", downloads: 2456, rating: 4.8, lastUpdated: "2024-01-10", popular: true, fields: 24 },
    { id: 2, name: "Research Proposal", category: "Academic", description: "Template for research project proposals and grant applications", downloads: 1823, rating: 4.9, lastUpdated: "2024-01-08", popular: true, fields: 18 },
    { id: 3, name: "Course Registration", category: "Enrollment", description: "Semester course selection and registration form", downloads: 3654, rating: 4.7, lastUpdated: "2024-01-12", popular: false, fields: 12 },
    { id: 4, name: "Transcript Request", category: "Records", description: "Official transcript request for graduates and current students", downloads: 987, rating: 4.6, lastUpdated: "2024-01-05", popular: false, fields: 8 },
    { id: 5, name: "Internship Report", category: "Academic", description: "Comprehensive internship experience and evaluation report", downloads: 1456, rating: 4.5, lastUpdated: "2024-01-09", popular: false, fields: 16 },
    { id: 6, name: "Graduation Application", category: "Student Services", description: "Application for degree conferral and graduation ceremony", downloads: 2109, rating: 4.9, lastUpdated: "2024-01-11", popular: true, fields: 14 },
    { id: 7, name: "Housing Application", category: "Housing", description: "Dormitory and campus housing application form", downloads: 1789, rating: 4.4, lastUpdated: "2024-01-07", popular: false, fields: 20 },
    { id: 8, name: "Scholarship Application", category: "Financial", description: "Merit-based and need-based scholarship application", downloads: 2234, rating: 4.7, lastUpdated: "2024-01-09", popular: true, fields: 22 }
  ];

  const categories = ["All", "Student Services", "Academic", "Enrollment", "Records", "Housing", "Financial"];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Student Services": return "bg-primary/10 text-primary";
      case "Academic": return "bg-ai-primary/10 text-ai-primary";
      case "Enrollment": return "bg-ai-accent/10 text-ai-accent";
      case "Records": return "bg-yellow-500/10 text-yellow-700";
      case "Housing": return "bg-purple-500/10 text-purple-700";
      case "Financial": return "bg-green-500/10 text-green-700";
      default: return "bg-muted";
    }
  };

  return (
    <div className="h-full p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Template Gallery</h1>
          <p className="text-muted-foreground">Pre-built forms and templates for university processes</p>
        </div>
        
        <Button className="bg-gradient-ai hover:opacity-90">
          <Plus className="mr-2 h-4 w-4" />
          Request Custom Template
        </Button>
      </div>

      {/* Filters and Search */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search templates..." className="pl-10" />
          </div>
          <Button variant="outline">
            <Filter className="mr-2 h-4 w-4" />
            Advanced Filter
          </Button>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2">
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
      </div>

      {/* Templates Grid */}
      <div className="flex-1 overflow-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {templates.map((template) => (
            <Card key={template.id} className="shadow-soft hover:shadow-medium transition-shadow duration-300 h-fit">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="bg-gradient-primary p-2 rounded-lg">
                    <FileText className="h-5 w-5 text-white" />
                  </div>
                  {template.popular && (
                    <Badge className="bg-yellow-500/10 text-yellow-700">
                      <Star className="h-3 w-3 mr-1" />
                      Popular
                    </Badge>
                  )}
                </div>
                
                <div className="space-y-2">
                  <CardTitle className="text-base leading-tight">{template.name}</CardTitle>
                  <Badge className={getCategoryColor(template.category)}>
                    {template.category}
                  </Badge>
                  <CardDescription className="text-xs line-clamp-2">
                    {template.description}
                  </CardDescription>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* Stats */}
                <div className="grid grid-cols-3 gap-2 text-center">
                  <div>
                    <div className="flex items-center justify-center space-x-1">
                      <Download className="h-3 w-3 text-muted-foreground" />
                      <span className="text-xs font-medium">{template.downloads > 1000 ? `${Math.floor(template.downloads/1000)}k` : template.downloads}</span>
                    </div>
                    <p className="text-xs text-muted-foreground">Downloads</p>
                  </div>
                  
                  <div>
                    <div className="flex items-center justify-center space-x-1">
                      <Star className="h-3 w-3 text-yellow-500" />
                      <span className="text-xs font-medium">{template.rating}</span>
                    </div>
                    <p className="text-xs text-muted-foreground">Rating</p>
                  </div>
                  
                  <div>
                    <div className="flex items-center justify-center space-x-1">
                      <Users className="h-3 w-3 text-muted-foreground" />
                      <span className="text-xs font-medium">{template.fields}</span>
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
                <div className="grid grid-cols-2 gap-2">
                  <Button variant="outline" size="sm">
                    <Eye className="h-3 w-3 mr-1" />
                    Preview
                  </Button>
                  <Button size="sm" className="bg-gradient-primary hover:opacity-90">
                    <Download className="h-3 w-3 mr-1" />
                    Use
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Templates;