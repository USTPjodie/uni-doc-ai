import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Bot, User, Send, Sparkles, FileText, CheckCircle } from "lucide-react";

const AIChatInterface = () => {
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
    }
  ];

  const quickActions = [
    { icon: CheckCircle, label: "Check for Errors", color: "bg-ai-accent/10 text-ai-accent" },
    { icon: FileText, label: "Generate Form", color: "bg-primary/10 text-primary" },
    { icon: Sparkles, label: "Summarize Document", color: "bg-ai-primary/10 text-ai-primary" }
  ];

  return (
    <section className="py-16 bg-gradient-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            AI-Powered Document Assistant
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Chat with your documents, get instant insights, and automate your paperwork with intelligent AI assistance.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Chat Interface */}
          <Card className="shadow-strong">
            <CardHeader className="bg-gradient-ai text-white rounded-t-lg">
              <div className="flex items-center space-x-3">
                <div className="bg-white/20 p-2 rounded-lg">
                  <Bot className="h-6 w-6" />
                </div>
                <div>
                  <CardTitle className="text-white">UniDoc AI Assistant</CardTitle>
                  <CardDescription className="text-white/80">
                    Currently analyzing: Financial Aid Application.pdf
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            
            <CardContent className="p-0">
              {/* Chat Messages */}
              <div className="h-96 overflow-y-auto p-6 space-y-4">
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

              {/* Quick Actions */}
              <div className="border-t border-border p-4">
                <p className="text-sm text-muted-foreground mb-3">Quick Actions:</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {quickActions.map((action, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      size="sm"
                      className="text-xs"
                    >
                      <action.icon className="h-3 w-3 mr-1" />
                      {action.label}
                    </Button>
                  ))}
                </div>

                {/* Message Input */}
                <div className="flex space-x-2">
                  <Input 
                    placeholder="Ask about your document..." 
                    className="flex-1"
                  />
                  <Button size="icon" className="bg-gradient-ai hover:opacity-90">
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Features & Benefits */}
          <div className="space-y-6">
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Sparkles className="h-5 w-5 text-ai-primary" />
                  <span>Smart Analysis</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="bg-ai-accent/10 p-1 rounded-full mt-1">
                      <CheckCircle className="h-3 w-3 text-ai-accent" />
                    </div>
                    <div>
                      <h4 className="font-medium text-sm">Error Detection</h4>
                      <p className="text-xs text-muted-foreground">Automatically identify missing fields and inconsistencies</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="bg-primary/10 p-1 rounded-full mt-1">
                      <FileText className="h-3 w-3 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium text-sm">Smart Extraction</h4>
                      <p className="text-xs text-muted-foreground">Extract key information and categorize documents</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="bg-ai-primary/10 p-1 rounded-full mt-1">
                      <Bot className="h-3 w-3 text-ai-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium text-sm">Contextual Chat</h4>
                      <p className="text-xs text-muted-foreground">Ask questions about document content and requirements</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-soft">
              <CardContent className="p-6">
                <div className="text-center space-y-4">
                  <div className="bg-gradient-primary p-4 rounded-full w-16 h-16 mx-auto flex items-center justify-center">
                    <Sparkles className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Ready to Get Started?</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Upload your first document and experience AI-powered processing
                    </p>
                    <Button className="bg-gradient-primary hover:opacity-90">
                      Try AI Assistant
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIChatInterface;