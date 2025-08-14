import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, MessageSquare, FileStack, TrendingUp, Clock, CheckCircle, AlertCircle, Upload } from "lucide-react";
import heroImage from "@/assets/hero-university.jpg";

const Dashboard = () => {
  const quickStats = [
    { icon: FileText, label: "Total Documents", value: "156", color: "text-primary" },
    { icon: CheckCircle, label: "Processed", value: "89", color: "text-ai-accent" },
    { icon: Clock, label: "Pending", value: "12", color: "text-yellow-600" },
    { icon: AlertCircle, label: "Need Review", value: "3", color: "text-destructive" }
  ];

  const recentActivity = [
    { action: "Financial Aid Application processed", time: "2 minutes ago", status: "completed" },
    { action: "Research Proposal uploaded", time: "1 hour ago", status: "processing" },
    { action: "Transcript Request approved", time: "3 hours ago", status: "completed" },
    { action: "Course Registration submitted", time: "1 day ago", status: "pending" }
  ];

  return (
    <div className="h-full p-6 space-y-6">
      {/* Welcome Section */}
      <div className="grid lg:grid-cols-2 gap-6 h-[300px]">
        <Card className="shadow-soft overflow-hidden">
          <CardContent className="p-0 h-full">
            <div className="relative h-full">
              <img 
                src={heroImage} 
                alt="University campus"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-primary/80 flex items-center justify-center">
                <div className="text-center text-white p-6">
                  <h1 className="text-3xl font-bold mb-4">Welcome to UniDoc AI</h1>
                  <p className="text-lg opacity-90 mb-6">Transform your university documents with intelligent processing</p>
                  <Button size="lg" variant="secondary">
                    <Upload className="mr-2 h-5 w-5" />
                    Upload Document
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="space-y-4">
          <Card className="shadow-soft">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg">Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button className="w-full justify-start bg-gradient-primary hover:opacity-90">
                <Upload className="mr-3 h-4 w-4" />
                Upload New Document
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <MessageSquare className="mr-3 h-4 w-4" />
                Start AI Chat
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <FileStack className="mr-3 h-4 w-4" />
                Browse Templates
              </Button>
            </CardContent>
          </Card>

          <Card className="shadow-soft">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center">
                <TrendingUp className="mr-2 h-5 w-5 text-primary" />
                Overview
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                {quickStats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <stat.icon className={`h-6 w-6 mx-auto mb-2 ${stat.color}`} />
                    <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                    <div className="text-xs text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Recent Activity */}
      <Card className="shadow-soft flex-1">
        <CardHeader>
          <CardTitle>Recent Activity</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentActivity.map((activity, index) => (
              <div key={index} className="flex items-center justify-between p-3 rounded-lg border border-border hover:bg-muted/50 transition-colors">
                <div className="flex items-center space-x-3">
                  <div className={`w-2 h-2 rounded-full ${
                    activity.status === 'completed' ? 'bg-ai-accent' :
                    activity.status === 'processing' ? 'bg-primary' : 'bg-yellow-500'
                  }`} />
                  <span className="text-foreground">{activity.action}</span>
                </div>
                <span className="text-sm text-muted-foreground">{activity.time}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;