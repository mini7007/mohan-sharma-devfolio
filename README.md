# Mohan Sharma — Software Engineer & Full Stack Developer Portfolio

<div align="center">

**[🌐 Live Portfolio](https://mohan-sharma-portfolio.vercel.app)** • **[📄 Resume](https://ik.imagekit.io/Myimage/Mohan_Sharma_Fullstack_Engineer_AI_Enabled.pdf)** • **[💼 LinkedIn](https://linkedin.com)** • **[🐙 GitHub](https://github.com)**

A high-performance, production-grade portfolio website showcasing 3+ years of full-stack development expertise, 900+ LeetCode problems solved, and 50+ projects delivered.

![Next.js](https://img.shields.io/badge/Next.js-14.2.5-black?style=flat-square&logo=next.js)
![React](https://img.shields.io/badge/React-18-blue?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-06b6d4?style=flat-square&logo=tailwindcss)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-11.3-black?style=flat-square&logo=framer)

</div>

---

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Development](#development)
- [Deployment](#deployment)
- [Performance](#performance)
- [Browser Support](#browser-support)
- [Contributing](#contributing)
- [License](#license)

---

## 🎯 Overview

This is a **modern, performant portfolio website** built with Next.js 14 and React 18, designed to showcase professional expertise in full-stack development. The website features smooth animations, responsive design, dark theme optimization, and PWA capabilities.

**Key Achievements:**
- ⚡ **3+ years** of professional full-stack development experience
- 🎯 **900+ LeetCode problems** solved with focus on algorithmic thinking
- 🚀 **50+ projects** delivered across MERN Stack, Laravel, Angular, and more
- 🤖 **AI-enabled developer** leveraging modern tools to amplify development velocity
- 📱 **Progressive Web App** with offline support and installable capabilities

---

## ✨ Features

### Core Features
- **Responsive Design** — Mobile-first approach, optimized for all screen sizes
- **Dark Theme UI** — Modern dark aesthetic with gradient accents and glass morphism
- **Smooth Animations** — Framer Motion integration for engaging micro-interactions
- **PWA Ready** — Service Worker support for offline access and app installation
- **Performance Optimized** — Lazy loading, image optimization, and production builds
- **SEO Friendly** — Complete metadata, Open Graph, Twitter cards, and structured data
- **Accessibility** — ARIA labels, semantic HTML, keyboard navigation support

### Sections
1. **Hero** — Eye-catching introduction with CTAs
2. **About** — Professional background and philosophy
3. **Coding Profiles** — Links to LeetCode, Codeforces, etc.
4. **Why Hire Me** — Unique value propositions
5. **Tech Stack** — Interactive category-based skill visualization
6. **Projects** — Featured portfolio projects with descriptions
7. **Experience** — Professional timeline and achievements
8. **Contact** — Easy connection options

### Interactive Elements
- Custom cursor animation
- Page loader with smooth transitions
- Background blob animations
- Section reveal animations on scroll
- Interactive tech stack category selector
- Floating action buttons with gradients

---

## 🛠️ Tech Stack

### Frontend
- **Next.js 14.2.5** — React framework with App Router
- **React 18** — UI library with hooks
- **TypeScript 5** — Type-safe JavaScript
- **Tailwind CSS 3.4** — Utility-first CSS framework
- **Framer Motion 11.3** — Animation library
- **Lucide React** — Lightweight icon library
- **CLSX** — Conditional class name utility

### Development Tools
- **PostCSS 8** — CSS processing
- **Autoprefixer** — Browser vendor prefixes
- **ESLint 8** — Code linting
- **Next.js Built-in SWC** — Fast TypeScript/JavaScript transpiler

### Infrastructure
- **Service Worker** — PWA capabilities
- **Web Manifest** — Installable app support
- **Image Optimization** — AVIF & WebP formats
- **Vercel Deployment** — Production hosting

---

## 📁 Project Structure

```
mohan-sharma-portfolio/
├── app/
│   ├── layout.tsx           # Root layout with fonts and metadata
│   ├── page.tsx             # Home page (composition of sections)
│   └── globals.css          # Global styles and design tokens
├── components/
│   ├── sections/            # Page section components
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── CodingProfiles.tsx
│   │   ├── WhyHireMe.tsx
│   │   ├── TechStack.tsx
│   │   ├── Projects.tsx
│   │   ├── Experience.tsx
│   │   └── Contact.tsx
│   ├── ui/                  # Reusable UI components
│   ├── Navbar.tsx           # Navigation header
│   ├── Footer.tsx           # Footer component
│   ├── BackgroundBlobs.tsx  # Animated background
│   ├── CustomCursor.tsx     # Custom cursor effect
│   ├── PageLoader.tsx       # Initial page loader
│   └── theme-provider.tsx   # Theme configuration
├── hooks/
│   ├── use-mobile.ts        # Mobile detection hook
│   └── use-toast.ts         # Toast notifications hook
├── lib/
│   └── utils.ts             # Utility functions
├── styles/
│   └── globals.css          # Additional global styles
├── public/
│   ├── manifest.json        # PWA manifest
│   ├── sw.js               # Service Worker
│   ├── icons/              # App icons and masks
│   └── images/             # Static assets
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── next.config.mjs
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites
- **Node.js** 18.x or higher
- **pnpm** 8.x (or npm/yarn)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/mini7007/mohan-sharma-devfolio.git
   cd mohan-sharma-portfolio
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   # or: npm install
   # or: yarn install
   ```

3. **Start development server**
   ```bash
   pnpm dev
   # or: npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

### Configuration

Update personal information in these files:

- **Metadata & SEO**: `app/layout.tsx`
- **Hero Section**: `components/sections/Hero.tsx`
- **About Section**: `components/sections/About.tsx`
- **Projects**: `components/sections/Projects.tsx`
- **Contact**: `components/sections/Contact.tsx`

---

## 💻 Development

### Available Scripts

```bash
# Development server with hot reload
pnpm dev

# Production build
pnpm build

# Start production server
pnpm start

# Run ESLint
pnpm lint
```

### Key Development Patterns

#### Component Structure
```tsx
'use client'; // Client component for interactivity

import { motion } from 'framer-motion';
import SectionReveal from '@/components/ui/SectionReveal';

export default function Section() {
  return (
    <section className="relative z-10">
      <SectionReveal>
        <h2 className="section-title">Title</h2>
      </SectionReveal>
    </section>
  );
}
```

#### Animation Example
```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
  Content
</motion.div>
```

#### Styling with Tailwind
- Use semantic color tokens from `globals.css`
- Leverage glass morphism: `class="glass"`
- Gradient text: `class="grad-text"`
- Responsive: `md:text-xl`, `lg:grid-cols-3`

---

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git push origin main
   ```

2. **Connect to Vercel**
   - Visit [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Vercel will auto-detect Next.js configuration
   - Click "Deploy"

3. **Environment Variables**
   No environment variables required for basic deployment

### Custom Domain
1. Add domain in Vercel dashboard
2. Update DNS records per Vercel's instructions

### Performance Tips
- Images are automatically optimized in production
- Service Worker caches assets for offline access
- Production builds minify CSS and JavaScript
- Source maps are disabled in production

---

## ⚡ Performance

### Optimization Strategies

✅ **Image Optimization**
- AVIF & WebP format support
- Responsive image loading
- Lazy loading implementation

✅ **Code Splitting**
- Next.js automatic route-based splitting
- Dynamic imports for heavy components

✅ **Caching**
- Service Worker for offline support
- Browser cache headers configured
- Static asset caching

✅ **Build Optimization**
- SWC minification enabled
- Production source maps disabled
- CSS compression enabled

### Lighthouse Targets
- **Performance**: 90+
- **Accessibility**: 95+
- **Best Practices**: 95+
- **SEO**: 100

---

## 🌐 Browser Support

- Chrome/Chromium (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

### PWA Features
- Installable on mobile and desktop
- Offline support via Service Worker
- App shortcuts and splash screens
- Works on home screen

---

## 📱 Responsive Design Breakpoints

```css
/* Tailwind breakpoints */
sm: 640px   /* Tablets */
md: 768px   /* Small desktops */
lg: 1024px  /* Desktops */
xl: 1280px  /* Large desktops */
2xl: 1536px /* Ultra-wide screens */
```

---

## 🔐 Security

✅ **Best Practices Implemented**
- Content Security Policy headers
- XSS protection enabled
- HTTPS enforcement
- External link security (`noopener noreferrer`)
- No sensitive data in frontend code

---

## 📈 SEO

### Metadata Configuration
- Dynamic Open Graph tags
- Twitter card support
- Structured JSON-LD data
- Robots meta tags
- Sitemap auto-generation

### Performance Metrics
- Mobile-friendly design
- Fast Core Web Vitals
- Proper heading hierarchy
- Alt text on all images

---

## 🤝 Contributing

Contributions are welcome! Here's how to help:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Commit changes**
   ```bash
   git commit -m 'Add amazing feature'
   ```
4. **Push to branch**
   ```bash
   git push origin feature/amazing-feature
   ```
5. **Open Pull Request**

### Code Standards
- Use TypeScript for type safety
- Follow Tailwind CSS conventions
- Add meaningful commit messages
- Keep components modular and reusable

---

## 📝 License

This project is open source and available under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 📧 Contact & Links

- **Portfolio**: [mohan-sharma-portfolio.vercel.app](https://mohan-sharma-portfolio.vercel.app)
- **GitHub**: [@mini7007](https://github.com/mini7007)
- **LeetCode**: [900+ Problems Solved](https://leetcode.com)
- **LinkedIn**: [Connect](https://linkedin.com)

---

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org) — React framework
- [Tailwind CSS](https://tailwindcss.com) — Styling framework
- [Framer Motion](https://www.framer.com/motion) — Animation library
- [Vercel](https://vercel.com) — Hosting platform
- [React](https://react.dev) — UI library

---

<div align="center">

**Made with ❤️ by Mohan Sharma**

[⬆ Back to top](#-mohan-sharma--software-engineer--full-stack-developer-portfolio)

</div>
