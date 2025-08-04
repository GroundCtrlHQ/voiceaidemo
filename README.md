# VoiceAI Demo 1 - Real-time Voice Chat Interface

A production-ready Next.js demo showcasing advanced voice interaction capabilities using Hume AI. This demo provides a clean, professional interface for real-time voice conversations with emotion detection and modern UI design.

## 🎯 What This Demo Does

**VoiceAI Demo 1** is a streamlined voice chat interface that demonstrates:

- **🎤 Real-time Voice Conversations** - Live voice interaction with AI using Hume AI's voice SDK
- **😊 Emotion Detection** - Visual display of emotional expressions during conversations
- **🎨 Modern UI** - Clean, professional interface with GroundCtrl-inspired dark theme
- **📱 Responsive Design** - Works perfectly on desktop, tablet, and mobile devices
- **⚡ Fast Performance** - Optimized for speed with Next.js 14+ and TypeScript

## 🚀 Key Features

### Voice Interaction
- **Live microphone controls** with mute/unmute functionality
- **Real-time audio visualization** (FFT display)
- **Voice status indicators** showing connection state
- **Conversation history** with message timestamps

### Emotion Detection
- **Visual expression tracking** during voice conversations
- **Emotion intensity display** with animated progress bars
- **Real-time sentiment analysis** powered by Hume AI

### Professional UI
- **Dark theme** with orange/reddish accents
- **Clean, minimal interface** focused on voice interaction
- **Responsive design** that works on all screen sizes
- **Smooth animations** and modern interactions

## 🛠 Tech Stack

- **Framework**: Next.js 14+ with App Router
- **Voice AI**: Hume AI Voice SDK
- **Styling**: Tailwind CSS with custom design system
- **Animations**: Motion (Framer Motion)
- **Icons**: Lucide React
- **TypeScript**: Full type safety

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn
- Hume AI credentials (for voice features)

### Installation

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Then add your Hume AI credentials to `.env.local`:
   ```
   NEXT_PUBLIC_HUME_API_KEY=your_hume_api_key_here
   NEXT_PUBLIC_HUME_SECRET_KEY=your_hume_secret_key_here
   NEXT_PUBLIC_HUME_CONFIG_ID=your_hume_config_id_here
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to http://localhost:3000 (or 3001 if 3000 is in use)

## 📁 Project Structure

```
voiceaidemo1/
├── src/app/
│   ├── page.tsx (redirects to voice chat)
│   ├── multi-agent/ (voice chat interface)
│   │   ├── page.tsx (main voice interface)
│   │   └── multi-agent-client.tsx (client logic)
│   └── layout.tsx (with theme provider)
├── src/components/multi-agent/
│   ├── hume-voice-chat.tsx (voice interface)
│   ├── expressions.tsx (emotion display)
│   ├── mic-fft.tsx (audio visualization)
│   └── [other voice components]
├── .env.example (environment variables template)
└── [all styling and utilities]
```

## 🎨 Design System

### Colors
- **Primary**: Orange (#f97316) for accents and highlights
- **Background**: Deep black (#0a0a0a) for professional look
- **Text**: Pure white (#ffffff) for maximum contrast
- **Secondary**: Gray tones for subtle elements

### Typography
- **Font Family**: Inter (Google Fonts)
- **Responsive Scale**: 14px to 48px
- **Font Weights**: 400 (regular) to 700 (bold)

## 🔧 Development Commands

```bash
# Development server
npm run dev

# Production build
npm run build

# Start production server
npm start

# Lint code
npm run lint

# Type checking
npm run type-check
```

## 📝 Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `NEXT_PUBLIC_HUME_API_KEY` | Hume AI API key | Yes |
| `NEXT_PUBLIC_HUME_SECRET_KEY` | Hume AI secret key | Yes |
| `NEXT_PUBLIC_HUME_CONFIG_ID` | Hume AI project config ID | Yes |

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Add environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Other Platforms
The project can be deployed to any platform supporting Next.js:
- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## 📊 Performance

- **Lighthouse Score**: 90+ across all categories
- **Core Web Vitals**:
  - LCP: < 2.5 seconds
  - FID: < 100 milliseconds
  - CLS: < 0.1

## 🤝 Need a Custom AI Solution?

This demo showcases just one example of what's possible with modern AI technology. If you need a custom AI solution built for your business, **GroundCtrl** can help!

### 🎯 GroundCtrl Services
- **Custom AI Development** - Tailored AI solutions for your specific needs
- **Voice AI Integration** - Advanced voice interfaces like this demo
- **AI Workforce Solutions** - AI that amplifies human potential
- **Enterprise AI Consulting** - Strategic AI implementation

### 📞 Book a Meeting
Ready to build your own AI solution? [Book a meeting with GroundCtrl](https://groundctrl.space/) to discuss your project requirements and get started on your custom AI development journey.

## 📄 License

This project is proprietary and confidential. All rights reserved.

---

**Built with ❤️ by GroundCtrl - Mission Control For Your AI Transformation**
