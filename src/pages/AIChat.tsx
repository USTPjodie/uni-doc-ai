import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Bot, User, Send, Sparkles, FileText, CheckCircle, Paperclip, RotateCcw } from "lucide-react";

const AIChat = () => {
  const chatMessages = [
    {
      id: 1,
      type: "ai",
      message: "Hi! I've analyzed your Financial Aid Application. I found a few areas that might need attention. Would you like me to review them with you?",
      timestamp: "2:34 PM"
    },
    {
      id: 2,
      type: "user",
      message: "Yes, please show me what needs to be fixed.",
      timestamp: "2:35 PM"
    },
    {
      id: 3,
      type: "ai",
      message: "I notice the 'Expected Family Contribution' field is missing, and your income documentation appears to be from 2022 instead of 2023. Should I help you generate the correct form sections?",
      timestamp: "2:35 PM"
    },
    {
      id: 4,
      type: "user",
      message: "That would be great! Can you also check if all required signatures are in place?",
      timestamp: "2:36 PM"
    },
    {
      id: 5,
      type: "ai",
      message: "I'll check the signature requirements now. I can see that you have the student signature, but the parent/guardian signature on page 3 appears to be missing. Also, the date format should be MM/DD/YYYY instead of DD/MM/YYYY.",
      timestamp: "2:37 PM"
    }
  ];

  const quickActions = [
    { icon: CheckCircle, label: "Check for Errors", color: "bg-ai-accent/10 text-ai-accent hover:bg-ai-accent/20" },
    { icon: FileText, label: "Generate Form", color: "bg-primary/10 text-primary hover:bg-primary/20" },
    { icon: Sparkles, label: "Summarize Document", color: "bg-ai-primary/10 text-ai-primary hover:bg-ai-primary/20" },
    { icon: RotateCcw, label: "Start Over", color: "bg-muted hover:bg-muted/80" }
  ];

  const activeDocument = {
    name: "Financial Aid Application.pdf",
    pages: 4,
    status: "Processing"
  };

  return (
    <div className="h-full p-6">
      <div className="grid lg:grid-cols-3 gap-6 h-full">
        {/* Document Panel */}
        <div className="lg:col-span-1 space-y-4">
          <Card className="shadow-soft">
            <CardHeader className="pb-4">
              <CardTitle className="text-lg">Active Document</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-4 rounded-lg border border-border bg-muted/30">
                <div className="flex items-center space-x-3 mb-3">
                  <FileText className="h-5 w-5 text-primary" />
                  <div className="flex-1 min-w-0">
                    <h4 className="font-medium text-sm truncate">{activeDocument.name}</h4>
                    <p className="text-xs text-muted-foreground">{activeDocument.pages} pages</p>
                  </div>
                </div>
                <Badge className="bg-primary/10 text-primary">
                  {activeDocument.status}
                </Badge>
              </div>
              
              <Button variant="outline" className="w-full">
                <Paperclip className="mr-2 h-4 w-4" />
                Attach Different Document
              </Button>
            </CardContent>
          </Card>

          <Card className="shadow-soft">
            <CardHeader className="pb-4">
              <CardTitle className="text-lg">Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {quickActions.map((action, index) => (
                <Button
                  key={index}
                  variant="outline"
                  className={`w-full justify-start ${action.color} transition-colors`}
                >
                  <action.icon className="mr-3 h-4 w-4" />
                  {action.label}
                </Button>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Chat Panel */}
        <Card className="lg:col-span-2 shadow-strong flex flex-col h-full">
          <CardHeader className="bg-gradient-ai text-white rounded-t-lg flex-shrink-0">
            <div className="flex items-center space-x-3">
              <div className="bg-white/20 p-2 rounded-lg">
                <Bot className="h-6 w-6" />
              </div>
              <div>
                <CardTitle className="text-white">UniDoc AI Assistant</CardTitle>
                <CardDescription className="text-white/80">
                  Ready to help with document analysis and processing
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          
          {/* Chat Messages */}
          <CardContent className="flex-1 p-0 flex flex-col">
            <div className="flex-1 overflow-y-auto p-6 space-y-4 min-h-0">
              {chatMessages.map((msg) => (
                <div key={msg.id} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-xs lg:max-w-md px-4 py-3 rounded-lg ${
                    msg.type === 'user' 
                      ? 'bg-primary text-primary-foreground ml-12' 
                      : 'bg-ai-secondary text-foreground mr-12'
                  }`}>
                    <div className="flex items-start space-x-2">
                      {msg.type === 'ai' && (
                        <Bot className="h-4 w-4 mt-0.5 text-ai-primary flex-shrink-0" />
                      )}
                      {msg.type === 'user' && (
                        <User className="h-4 w-4 mt-0.5 text-primary-foreground flex-shrink-0" />
                      )}
                      <div className="space-y-1">
                        <p className="text-sm">{msg.message}</p>
                        <p className="text-xs opacity-70">{msg.timestamp}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Message Input */}
            <div className="border-t border-border p-6 flex-shrink-0">
              <div className="flex space-x-3">
                <Input 
                  placeholder="Ask about your document..." 
                  className="flex-1"
                />
                <Button size="icon" className="bg-gradient-ai hover:opacity-90">
                  <Send className="h-4 w-4" />
                </Button>
              </div>
              <p className="text-xs text-muted-foreground mt-2">
                Ask questions about document content, requirements, or get help with processing
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AIChat;