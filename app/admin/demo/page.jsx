"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Loader2, CheckCircle, AlertCircle } from "lucide-react";
import { toast } from "sonner";

export default function AdminDemoPage() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const createDemoSnippets = async () => {
    setLoading(true);
    setSuccess(false);
    
    try {
      const response = await fetch('/api/demo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = await response.json();

      if (data.success) {
        setSuccess(true);
        toast.success('Demo snippets created successfully!');
      } else {
        toast.error('Failed to create demo snippets');
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error('An error occurred while creating demo snippets');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">Demo Snippets Admin</h1>
          <p className="text-muted-foreground">
            Create demo snippets to showcase SnipShare features
          </p>
        </div>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-green-500" />
              Demo Snippets Status
            </CardTitle>
            <CardDescription>
              Create demo snippets for the SnipShare platform
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 border rounded-lg">
                  <h3 className="font-semibold mb-2">JavaScript Demo</h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    Welcome to SnipShare! 🚀
                  </p>
                  <Badge variant="outline">ID: tFOrJEARI2SbxKQR92PF</Badge>
                </div>
                
                <div className="p-4 border rounded-lg">
                  <h3 className="font-semibold mb-2">Python Demo</h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    Python Data Analysis 📈
                  </p>
                  <Badge variant="outline">ID: pythonDemo123</Badge>
                </div>
                
                <div className="p-4 border rounded-lg">
                  <h3 className="font-semibold mb-2">Java Demo</h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    Java OOP Concepts 🏗️
                  </p>
                  <Badge variant="outline">ID: javaDemo456</Badge>
                </div>
                
                <div className="p-4 border rounded-lg">
                  <h3 className="font-semibold mb-2">C++ Demo</h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    C++ Algorithms ⚡
                  </p>
                  <Badge variant="outline">ID: cppDemo789</Badge>
                </div>
              </div>

              <div className="flex gap-4 pt-4">
                <Button 
                  onClick={createDemoSnippets} 
                  disabled={loading}
                  className="flex-1"
                >
                  {loading ? (
                    <>
                      <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                      Creating Demo Snippets...
                    </>
                  ) : (
                    'Create Demo Snippets'
                  )}
                </Button>
                
                <Button 
                  variant="outline" 
                  onClick={() => window.open('/demo', '_blank')}
                >
                  View Demo Page
                </Button>
              </div>

              {success && (
                <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-green-700 font-medium">
                      Demo snippets created successfully!
                    </span>
                  </div>
                  <p className="text-green-600 text-sm mt-1">
                    You can now visit the demo page to see them in action.
                  </p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertCircle className="h-5 w-5 text-orange-500" />
              Important Notes
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Demo snippets will be created with specific IDs for consistent linking</li>
              <li>• Each snippet showcases different programming languages and features</li>
              <li>• The main demo link (/s/tFOrJEARI2SbxKQR92PF) will always work</li>
              <li>• Demo snippets are marked with author: "demo" for easy identification</li>
              <li>• You can safely recreate demo snippets if they get deleted</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
} 