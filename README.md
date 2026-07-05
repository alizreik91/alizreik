# Ali Zreik - Digital Portfolio

An ultra-premium, Swiss-minimalist digital portfolio for Ali Zreik, a Lebanese Graphic Designer & Brand Strategist based in Beirut, Lebanon.

## Technology Stack

- **Frontend Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS + Custom Animations
- **Motion Graphics**: Framer Motion
- **UI Components**: Lucide React Icons
- **Design Philosophy**: Swiss-minimalism with luxury gold accents

## Features

- ✨ Elegant preloader with progress tracking
- 🎨 Sticky navigation with IntersectionObserver
- 🎯 Golden cursor spotlight tracker
- 📄 Smooth scroll progress indicator
- 🖼️ Seven immersive portfolio sections
- 🎬 Interactive project case studies with modal dialogs
- 📱 Fully responsive design
- ⚡ Hardware-accelerated animations

## Getting Started

```bash
npm install
npm run dev
```

## Build for Production

```bash
npm run build
```

## Project Structure

```
src/
├── components/
│   ├── Preloader.tsx
│   ├── Navigation.tsx
│   ├── CursorTracker.tsx
│   ├── ScrollProgress.tsx
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Skills.tsx
│   │   ├── Experience.tsx
│   │   ├── Certificates.tsx
│   │   ├── Projects.tsx
│   │   └── Contact.tsx
│   └── common/
├── layouts/
│   └── MainLayout.tsx
├── hooks/
│   ├── useIntersection.ts
│   ├── useCursorPosition.ts
│   └── useScrollProgress.ts
├── types/
│   └── index.ts
├── utils/
│   └── constants.ts
├── styles/
│   └── globals.css
├── App.tsx
└── main.tsx
```
