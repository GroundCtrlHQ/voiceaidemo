# HALO - AI-Powered Immigration Assessment Platform

A cutting-edge immigration assessment platform built with Next.js, featuring advanced AI-powered consultation flows, multi-agent systems, and voice interaction capabilities.

## 🚀 Features

- **AI-Powered Multi-Agent System** - Advanced conversational AI with specialized agents
- **Voice Interaction** - Real-time voice chat with Hume AI integration
- **Personalized Assessment Flows** - Dynamic questionnaire and consultation processes
- **Multi-Country Immigration Support** - Canadian and US immigration expertise
- **Modern React Architecture** - Built with Next.js 14+ and TypeScript
- **Responsive Design** - Optimized for all devices with Tailwind CSS
- **Real-time Communication** - WebSocket integration for live interactions

## 🛠 Tech Stack

- **Framework**: Next.js 14+ with App Router
- **Styling**: Tailwind CSS with shadcn/ui components
- **AI Integration**: 
  - Vercel AI SDK with OpenAI
  - Hume AI for voice interactions
  - Multi-agent orchestration
- **Voice Processing**: Hume Voice SDK
- **State Management**: React hooks and context
- **TypeScript**: Full type safety
- **Icons**: Lucide React

## 🎨 Design System

### Colors
- **Primary**: Modern blue palette for trust and professionalism
- **Accent**: Strategic use of red for Canadian flag elements
- **Neutral**: Clean whites and grays for optimal readability
- **System**: Consistent success, warning, and error states

### Typography
- **Font Family**: Inter (Google Fonts)
- **Responsive Scale**: 14px to 48px
- **Font Weights**: 400 (regular) to 700 (bold)

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn
- OpenAI API key (for AI chatbot)
- Hume AI credentials (for voice features)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/ArkMaster123/HALO.git
   cd HALO
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory:
   ```env
   OPENAI_API_KEY=your_openai_api_key_here
   HUME_API_KEY=your_hume_api_key_here
   NEXT_PUBLIC_APP_URL=http://localhost:3000
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
HALO/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── api/               # API routes
│   │   │   ├── assessment/    # Assessment endpoints
│   │   │   ├── chat/          # AI chat endpoints
│   │   │   ├── multi-agent/   # Multi-agent system
│   │   │   └── hume-tools/    # Hume AI integration
│   │   ├── assessment/        # Assessment pages
│   │   ├── multi-agent/       # Multi-agent interface
│   │   └── how-it-works/      # Documentation pages
│   ├── components/            # React components
│   │   ├── ui/               # shadcn/ui components
│   │   ├── multi-agent/      # Multi-agent components
│   │   └── assessment/       # Assessment components
│   ├── lib/                  # Utility libraries
│   └── utils/                # Helper functions
├── public/                   # Static assets
├── scripts/                  # Build and setup scripts
└── docs/                     # Documentation
```

## 🤖 AI Features

### Multi-Agent System
- **Orchestrator Agent**: Coordinates conversation flow
- **Narrative Agent**: Manages storytelling and engagement
- **Protocol Agent**: Handles structured processes
- **Questionnaire Agent**: Manages assessment flows
- **Simulation Agent**: Provides scenario-based guidance

### Voice Integration
- **Real-time Voice Chat**: Live voice conversations
- **Emotion Recognition**: Advanced sentiment analysis
- **Voice Synthesis**: Natural speech generation
- **Multi-modal Interaction**: Seamless text and voice

### Assessment Capabilities
- **Dynamic Questionnaires**: Adaptive assessment flows
- **Progress Tracking**: Real-time consultation progress
- **Expertise Capture**: Intelligent knowledge extraction
- **Personalized Recommendations**: AI-driven guidance

## 🎯 Key Pages & Components

### Homepage
- Hero section with immigration pathways
- Multi-agent system overview
- Voice interaction demos
- Assessment flow preview

### Multi-Agent Interface
- Real-time agent conversations
- Voice interaction controls
- Emotion and expression tracking
- Dynamic response generation

### Assessment Platform
- Interactive questionnaires
- Progress indicators
- Expert consultation booking
- Personalized recommendations

### Documentation
- How-it-works guides
- Setup instructions
- API documentation
- Integration examples

## 🎨 Design Principles

1. **User-Centric**: Intuitive, accessible interface design
2. **Performance-First**: Optimized for speed and responsiveness
3. **Accessibility**: WCAG 2.1 AA compliance
4. **Mobile-First**: Responsive design starting from mobile
5. **Modern Aesthetics**: Clean, professional appearance

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

## 📊 Performance Targets

- **Lighthouse Score**: 90+ across all categories
- **Core Web Vitals**:
  - LCP: < 2.5 seconds
  - FID: < 100 milliseconds
  - CLS: < 0.1

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
| `OPENAI_API_KEY` | OpenAI API key for AI chatbot | Yes |
| `HUME_API_KEY` | Hume AI key for voice features | Yes |
| `NEXT_PUBLIC_APP_URL` | Application URL | No |

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is proprietary and confidential. All rights reserved.

## 📞 Support

For technical support or questions about this project, please contact the development team.

---

**Built with ❤️ for HALO Immigration Assessment Platform**
