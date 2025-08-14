import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Upload, FileText, Image, FileCheck, Clock, AlertCircle } from "lucide-react";

const DocumentDashboard = () => {
  const recentDocuments = [
    {
      id: 1,
      name: "Financial Aid Application",
      type: "PDF",
      status: "Processing",
      uploadDate: "2024-01-15",
      size: "2.3 MB"
    },
    {
      id: 2,
      name: "Research Proposal Draft",
      type: "DOCX",
      status: "Approved",
      uploadDate: "2024-01-14",
      size: "1.8 MB"
    },
    {
      id: 3,
      name: "Transcript Request",
      type: "PDF",
      status: "Pending Review",
      uploadDate: "2024-01-13",
      size: "856 KB"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Approved": return "bg-ai-accent/10 text-ai-accent";
      case "Processing": return "bg-primary/10 text-primary";
      case "Pending Review": return "bg-yellow-500/10 text-yellow-700";
      default: return "bg-muted";
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "PDF": return <FileText className="h-4 w-4 text-doc-pdf" />;
      case "DOCX": return <FileText className="h-4 w-4 text-doc-word" />;
      case "IMG": return <Image className="h-4 w-4 text-doc-image" />;
      default: return <FileText className="h-4 w-4" />;
    }
  };

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Document Management Hub
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Upload, process, and manage all your university documents with AI-powered intelligence.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Upload Section */}
          <div className="lg:col-span-1">
            <Card className="shadow-medium border-dashed border-2 border-primary/20 hover:border-primary/40 transition-colors duration-300">
              <CardHeader className="text-center">
                <div className="bg-gradient-primary p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Upload className="h-8 w-8 text-white" />
                </div>
                <CardTitle>Upload Documents</CardTitle>
                <CardDescription>
                  Drag & drop or click to upload PDF, DOCX, or image files
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button className="w-full bg-gradient-primary hover:opacity-90">
                  Choose Files
                </Button>
                <div className="text-xs text-muted-foreground text-center space-y-1">
                  <p>Supported formats: PDF, DOCX, PNG, JPG</p>
                  <p>Maximum file size: 50MB</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Recent Documents */}
          <div className="lg:col-span-2">
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <FileCheck className="h-5 w-5 text-primary" />
                  <span>Recent Documents</span>
                </CardTitle>
                <CardDescription>
                  Your latest uploaded and processed documents
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentDocuments.map((doc) => (
                    <div key={doc.id} className="flex items-center space-x-4 p-4 rounded-lg border border-border hover:bg-muted/50 transition-colors">
                      <div className="bg-card p-2 rounded-lg shadow-soft">
                        {getTypeIcon(doc.type)}
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium text-foreground truncate">{doc.name}</h4>
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                          <span className="flex items-center space-x-1">
                            <Clock className="h-3 w-3" />
                            <span>{doc.uploadDate}</span>
                          </span>
                          <span>{doc.size}</span>
                        </div>
                      </div>

                      <div className="flex items-center space-x-3">
                        <Badge className={getStatusColor(doc.status)}>
                          {doc.status}
                        </Badge>
                        <Button variant="outline" size="sm">
                          View
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-12">
          <Card className="shadow-soft">
            <CardContent className="p-6 text-center">
              <div className="bg-primary/10 p-3 rounded-full w-12 h-12 mx-auto mb-3 flex items-center justify-center">
                <FileText className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">156</h3>
              <p className="text-sm text-muted-foreground">Total Documents</p>
            </CardContent>
          </Card>

          <Card className="shadow-soft">
            <CardContent className="p-6 text-center">
              <div className="bg-ai-primary/10 p-3 rounded-full w-12 h-12 mx-auto mb-3 flex items-center justify-center">
                <FileCheck className="h-6 w-6 text-ai-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">89</h3>
              <p className="text-sm text-muted-foreground">Processed</p>
            </CardContent>
          </Card>

          <Card className="shadow-soft">
            <CardContent className="p-6 text-center">
              <div className="bg-yellow-500/10 p-3 rounded-full w-12 h-12 mx-auto mb-3 flex items-center justify-center">
                <Clock className="h-6 w-6 text-yellow-600" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">12</h3>
              <p className="text-sm text-muted-foreground">Pending</p>
            </CardContent>
          </Card>

          <Card className="shadow-soft">
            <CardContent className="p-6 text-center">
              <div className="bg-destructive/10 p-3 rounded-full w-12 h-12 mx-auto mb-3 flex items-center justify-center">
                <AlertCircle className="h-6 w-6 text-destructive" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">3</h3>
              <p className="text-sm text-muted-foreground">Need Review</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default DocumentDashboard;