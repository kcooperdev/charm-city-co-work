# Charm City Co-Work

A city-wide co-working experience during Baltimore Tech Week. This web app serves as the landing page and information hub for Baltimore's first co-working crawl event.

## About

Charm City Co-Work brings Baltimore's tech community together through a unique multi-day, multi-location co-working experience. The event aims to transform the way Baltimore builds by connecting creators across the city's vibrant neighborhoods.

## Tech Stack

- **Framework:** React 19
- **Build Tool:** Vite
- **Styling:** Tailwind CSS
- **Language:** TypeScript
- **AI Integration:** Google Gemini API

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at `http://localhost:3000`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Environment Variables

Create a `.env` file in the root directory:

```env
GEMINI_API_KEY=your_api_key_here
```

## Deployment (Vercel)

This project is configured for easy deployment on Vercel:

1. Push your code to GitHub
2. Import the repository in Vercel
3. Add environment variables in Vercel dashboard:
   - `GEMINI_API_KEY` - Your Google Gemini API key
4. Deploy

Vercel will automatically detect the Vite configuration and build the project.

## Project Structure

```
├── components/       # React components
├── pages/           # Page components
├── public/          # Static assets
├── services/        # API services
├── App.tsx          # Main app component
├── constants.tsx    # App constants
├── types.ts         # TypeScript types
└── index.html       # HTML entry point
```

## License

All Rights Reserved © 2026

---

Built for the Baltimore Tech Community
