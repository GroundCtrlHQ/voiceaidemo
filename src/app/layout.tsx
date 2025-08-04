import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "sonner";

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: "VoiceAI Demo 1 - Real-time Voice Chat Interface",
  description: "A production-ready Next.js demo showcasing advanced voice interaction capabilities using Hume AI. Features real-time voice conversations, emotion detection, and modern UI design.",
  keywords: "voice AI, Hume AI, voice chat, emotion detection, Next.js, AI demo, voice interface",
  authors: [{ name: "GroundCtrl" }],
  creator: "GroundCtrl",
  publisher: "GroundCtrl",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "VoiceAI Demo 1 - Real-time Voice Chat Interface",
    description: "A production-ready Next.js demo showcasing advanced voice interaction capabilities using Hume AI. Features real-time voice conversations, emotion detection, and modern UI design.",
    siteName: 'VoiceAI Demo 1',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "VoiceAI Demo 1 - Real-time Voice Chat Interface",
    description: "A production-ready Next.js demo showcasing advanced voice interaction capabilities using Hume AI. Features real-time voice conversations, emotion detection, and modern UI design.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="min-h-screen bg-background text-foreground">
            {children}
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
