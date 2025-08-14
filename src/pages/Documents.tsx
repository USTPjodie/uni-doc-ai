import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Upload, FileText, Image, Search, Filter, MoreVertical, Eye, Download, Trash } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

const Documents = () => {
  const documents = [
    { id: 1, name: "Financial Aid Application.pdf", type: "PDF", status: "Processing", uploadDate: "2024-01-15", size: "2.3 MB", category: "Financial" },
    { id: 2, name: "Research Proposal Draft.docx", type: "DOCX", status: "Approved", uploadDate: "2024-01-14", size: "1.8 MB", category: "Academic" },
    { id: 3, name: "Transcript Request.pdf", type: "PDF", status: "Pending Review", uploadDate: "2024-01-13", size: "856 KB", category: "Records" },
    { id: 4, name: "Course Registration.pdf", type: "PDF", status: "Completed", uploadDate: "2024-01-12", size: "1.2 MB", category: "Enrollment" },
    { id: 5, name: "Internship Report.docx", type: "DOCX", status: "Draft", uploadDate: "2024-01-11", size: "3.1 MB", category: "Academic" },
    { id: 6, name: "ID Card Photo.jpg", type: "JPG", status: "Approved", uploadDate: "2024-01-10", size: "450 KB", category: "Personal" },
    { id: 7, name: "Graduation Application.pdf", type: "PDF", status: "Processing", uploadDate: "2024-01-09", size: "1.7 MB", category: "Graduation" },
    { id: 8, name: "Housing Application.pdf", type: "PDF", status: "Completed", uploadDate: "2024-01-08", size: "2.0 MB", category: "Housing" }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Approved": case "Completed": return "bg-ai-accent/10 text-ai-accent";
      case "Processing": return "bg-primary/10 text-primary";
      case "Pending Review": return "bg-yellow-500/10 text-yellow-700";
      case "Draft": return "bg-muted text-muted-foreground";
      default: return "bg-muted";
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "PDF": return <FileText className="h-4 w-4 text-doc-pdf" />;
      case "DOCX": return <FileText className="h-4 w-4 text-doc-word" />;
      case "JPG": case "PNG": return <Image className="h-4 w-4 text-doc-image" />;
      default: return <FileText className="h-4 w-4" />;
    }
  };

  return (
    <div className="h-full p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Documents</h1>
          <p className="text-muted-foreground">Manage and process your university documents</p>
        </div>
        
        <Button className="bg-gradient-primary hover:opacity-90">
          <Upload className="mr-2 h-4 w-4" />
          Upload Document
        </Button>
      </div>

      {/* Filters and Search */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search documents..." className="pl-10" />
        </div>
        <Button variant="outline">
          <Filter className="mr-2 h-4 w-4" />
          Filter
        </Button>
      </div>

      {/* Upload Zone */}
      <Card className="shadow-soft border-dashed border-2 border-primary/20 hover:border-primary/40 transition-colors duration-300">
        <CardContent className="p-8">
          <div className="text-center space-y-4">
            <div className="bg-gradient-primary p-4 rounded-full w-16 h-16 mx-auto flex items-center justify-center">
              <Upload className="h-8 w-8 text-white" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">Drop files to upload</h3>
              <p className="text-sm text-muted-foreground">or click to browse</p>
            </div>
            <p className="text-xs text-muted-foreground">Supports PDF, DOCX, PNG, JPG • Max 50MB</p>
          </div>
        </CardContent>
      </Card>

      {/* Documents Table */}
      <Card className="shadow-soft flex-1">
        <CardHeader>
          <CardTitle>Your Documents</CardTitle>
          <CardDescription>
            {documents.length} documents • {documents.filter(d => d.status === "Processing").length} processing
          </CardDescription>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-auto max-h-[400px]">
            <div className="space-y-2 p-6">
              {documents.map((doc) => (
                <div key={doc.id} className="flex items-center justify-between p-4 rounded-lg border border-border hover:bg-muted/50 transition-colors">
                  <div className="flex items-center space-x-4 flex-1 min-w-0">
                    <div className="bg-card p-2 rounded-lg shadow-soft">
                      {getTypeIcon(doc.type)}
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-foreground truncate">{doc.name}</h4>
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                        <span>{doc.uploadDate}</span>
                        <span>{doc.size}</span>
                        <span>{doc.category}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Badge className={getStatusColor(doc.status)}>
                      {doc.status}
                    </Badge>
                    
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="sm">
                          <MoreVertical className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>
                          <Eye className="mr-2 h-4 w-4" />
                          View
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Download className="mr-2 h-4 w-4" />
                          Download
                        </DropdownMenuItem>
                        <DropdownMenuItem className="text-destructive">
                          <Trash className="mr-2 h-4 w-4" />
                          Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Documents;