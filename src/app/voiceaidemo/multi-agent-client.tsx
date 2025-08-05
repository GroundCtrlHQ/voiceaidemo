"use client";

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, CheckCircle } from 'lucide-react';
import HumeVoiceChat from '@/components/multi-agent/hume-voice-chat';
import Link from 'next/link';

interface MultiAgentPageClientProps {
  accessToken: string;
}

interface ConversationMessage {
  role: string;
  content: string;
  timestamp: string;
  emotions?: Record<string, number>;
}

export default function MultiAgentPageClient({ accessToken }: MultiAgentPageClientProps) {
  const [activeAgent, setActiveAgent] = useState('orchestrator');
  const [capturedExpertise, setCapturedExpertise] = useState<any[]>([]);
  const [conversation, setConversation] = useState<ConversationMessage[]>([]);

  const handleMessageReceived = (message: string) => {
    console.log('Message received from Hume:', message);
    
    // Add to conversation history
    const newMessage: ConversationMessage = {
      role: 'user',
      content: message,
      timestamp: new Date().toISOString()
    };
    setConversation(prev => [...prev, newMessage]);
  };

  const handleAgentResponse = (response: string) => {
    console.log('Agent response received:', response);
    
    // Check if the response contains tool calling data
    try {
      // Look for tool calling results in the response
      if (response.includes('captured_expertise') || response.includes('tool_result')) {
        // Extract captured expertise data
        const expertiseMatch = response.match(/captured_expertise[:\s]*({.*?})/);
        if (expertiseMatch) {
          const expertiseData = JSON.parse(expertiseMatch[1]);
          setCapturedExpertise(prev => [...prev, expertiseData]);
        }
      }
    } catch (error) {
      console.log('No tool calling data found in response');
    }

    // Add to conversation history
    const newMessage: ConversationMessage = {
      role: 'assistant',
      content: response,
      timestamp: new Date().toISOString()
    };
    setConversation(prev => [...prev, newMessage]);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Full Screen Hume AI Interface */}
      <main className="h-screen">
        <HumeVoiceChat
          accessToken={accessToken}
          activeAgent={activeAgent}
          onMessageReceived={handleMessageReceived}
          onAgentResponse={handleAgentResponse}
        />
      </main>

      {/* Optional: Expertise Summary (only show if there's captured data) */}
      {capturedExpertise.length > 0 && (
        <div className="fixed bottom-4 right-4 z-40">
          <Card className="w-80 shadow-lg border-green-200 bg-green-50/90 backdrop-blur">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span className="text-sm font-medium text-green-800">
                    Expertise Captured
                  </span>
                </div>
                <Badge variant="outline" className="text-green-700 border-green-300">
                  {capturedExpertise.length} items
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
} 