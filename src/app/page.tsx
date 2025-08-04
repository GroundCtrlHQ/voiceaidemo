import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mic, Settings, ArrowRight } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container-padding section-padding">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gradient-primary mb-4">
              Voice AI Demo
            </h1>
            <p className="text-xl text-muted-foreground">
              Choose your voice interface demo
            </p>
          </div>

          {/* Demo Cards */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Demo 1 */}
            <Card className="card-modern shadow-lg hover-lift transition-modern">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mic className="h-5 w-5" />
                  Demo 1 - Multi-Agent Voice
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Advanced voice chat interface with multi-agent architecture, emotion detection, and real-time voice processing.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <Settings className="h-4 w-4 text-blue-500" />
                    <span>Uses CONFIG_ID</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mic className="h-4 w-4 text-green-500" />
                    <span>Real-time voice processing</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-4 h-4 rounded-full bg-orange-500"></span>
                    <span>Emotion detection</span>
                  </div>
                </div>
                <Link href="/multi-agent">
                  <Button className="w-full flex items-center gap-2">
                    Launch Demo 1
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Demo 2 */}
            <Card className="card-modern shadow-lg hover-lift transition-modern">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mic className="h-5 w-5" />
                  Demo 2 - Voice Interface
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Alternative voice interface using a different Hume AI configuration for testing different voice models.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <Settings className="h-4 w-4 text-blue-500" />
                    <span>Uses CONFIG_ID_2</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mic className="h-4 w-4 text-green-500" />
                    <span>Real-time voice processing</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-4 h-4 rounded-full bg-purple-500"></span>
                    <span>Alternative configuration</span>
                  </div>
                </div>
                <Link href="/demo-2">
                  <Button className="w-full flex items-center gap-2">
                    Launch Demo 2
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>

          {/* Footer Info */}
          <div className="mt-12 text-center">
            <p className="text-muted-foreground text-sm">
              Both demos require Hume AI credentials. Add your API keys to <code className="bg-muted px-1 rounded">.env.local</code>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
