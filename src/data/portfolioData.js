export const personalInfo = {
  name: "Praise Orogun",
  handle: "Genaxx",
  title: "Frontend Engineer & UI/UX Developer",
  status: "Available for new opportunities",
  availability: "Full-time & Freelance",
  location: "Lagos, Nigeria (Remote Worldwide)",
  experienceYears: "3+",
  githubUsername: "PraisEfe",
  summary:
    "I craft responsive, accessible, and high-performance web applications using React, Tailwind CSS, and modern JavaScript. Passionate about turning complex design systems into intuitive, delightful digital experiences.",
  mission:
    "My mission is to assist startups and enterprises in creating interactive, accessible, and responsive user interfaces—building an emotional bond between your products and engaged customers.",
  resumeUrl: "#", // Replace with real resume PDF link
  email: "efeorogun07@gmail.com",
  socials: {
    github: "https://github.com/PraisEfe",
    linkedin: "https://linkedin.com",
    twitter: "https://x.com",
    email: "mailto:efeorogun07@gmail.com",
  },
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const skillCategories = [
  {
    category: "Frontend Core",
    description: "Modern web standards & performant single-page applications",
    skills: [
      { name: "React 19 / 18", level: "Advanced", icon: "Code2" },
      { name: "JavaScript (ES6+)", level: "Advanced", icon: "FileCode" },
      { name: "TypeScript", level: "Proficient", icon: "FileType2" },
      { name: "HTML5 & Semantic SEO", level: "Expert", icon: "Layout" },
      { name: "Next.js", level: "Proficient", icon: "Globe" },
    ],
  },
  {
    category: "Styling & UI Architecture",
    description: "Responsive layouts, design systems & micro-interactions",
    skills: [
      { name: "Tailwind CSS v4/v3", level: "Expert", icon: "Palette" },
      { name: "Framer Motion", level: "Advanced", icon: "Sparkles" },
      { name: "CSS Modules / Sass", level: "Proficient", icon: "Paintbrush" },
      { name: "Responsive UI/UX", level: "Expert", icon: "Smartphone" },
      { name: "Accessibility (WCAG AA)", level: "Proficient", icon: "Eye" },
    ],
  },
  {
    category: "State & Data Flow",
    description: "Clean data management & API integrations",
    skills: [
      { name: "RESTful APIs / Fetch", level: "Advanced", icon: "Workflow" },
      { name: "TanStack Query", level: "Proficient", icon: "RefreshCw" },
      { name: "Zustand & Context API", level: "Advanced", icon: "Layers" },
      { name: "Axios Integration", level: "Advanced", icon: "Send" },
    ],
  },
  {
    category: "Tools & Engineering Practices",
    description: "Developer tooling, version control & deployment workflows",
    skills: [
      { name: "Vite & Modern Bundlers", level: "Advanced", icon: "Zap" },
      { name: "Git & GitHub Workflow", level: "Advanced", icon: "GitBranch" },
      { name: "Figma to React Handoff", level: "Expert", icon: "LayoutTemplate" },
      { name: "Lighthouse & Web Vitals", level: "Proficient", icon: "Gauge" },
      { name: "Vercel / Netlify Deploy", level: "Advanced", icon: "Cloud" },
    ],
  },
];

export const featuredProjects = [
  {
    id: 1,
    title: "Portfolio & Interactive Showcase",
    tagline: "Modern responsive developer portfolio built with React 19 & Tailwind CSS",
    description:
      "A fast, responsive personal showcase engineered with React 19, Tailwind CSS v4, Motion, and live GitHub integration. Features dark mode, responsive drawer navigation, and contact flows.",
    tags: ["React 19", "Tailwind CSS v4", "Motion", "Vite", "GitHub API"],
    metrics: "100% Responsive • Sub-second load",
    liveUrl: "https://github.com/PraisEfe/portfolio",
    githubUrl: "https://github.com/PraisEfe/portfolio",
    featured: true,
    category: "Web Application",
  },
  {
    id: 2,
    title: "SaaS Analytics & Billing Dashboard",
    tagline: "High-performance enterprise dashboard with real-time data viz",
    description:
      "A comprehensive analytics platform built with React, Tailwind CSS, and Motion. Features modular KPI widgets, interactive charts, customizable theme controls, and responsive data tables with pagination and search.",
    tags: ["React 19", "Tailwind CSS", "Recharts", "Framer Motion", "Vite"],
    metrics: "99 Lighthouse Score • <0.8s FCP",
    liveUrl: "https://github.com/PraisEfe",
    githubUrl: "https://github.com/PraisEfe",
    featured: true,
    category: "Web Application",
  },
  {
    id: 3,
    title: "NextGen E-Commerce Experience",
    tagline: "Headless shopping interface with seamless instant checkout flow",
    description:
      "Modern e-commerce storefront with optimized product filters, multi-variant selections, persistent shopping cart, and smooth animated micro-interactions on user actions.",
    tags: ["React", "Tailwind CSS", "Zustand", "Lucide Icons", "REST API"],
    metrics: "40% Faster Checkout UX • 100% Mobile Score",
    liveUrl: "https://github.com/PraisEfe",
    githubUrl: "https://github.com/PraisEfe",
    featured: true,
    category: "E-Commerce",
  },
  {
    id: 4,
    title: "FinTech Mobile-First Web App",
    tagline: "Secure digital wallet & international remittance interface",
    description:
      "Designed and coded a responsive mobile-first payment interface with currency exchange calculators, transaction history feeds, card management, and accessible form validations.",
    tags: ["React", "TypeScript", "Tailwind CSS", "Motion", "Zod"],
    metrics: "Zero layout shift (0 CLS) • WCAG AA Compliant",
    liveUrl: "https://github.com/PraisEfe",
    githubUrl: "https://github.com/PraisEfe",
    featured: true,
    category: "Fintech",
  },
];

export const services = [
  {
    number: "01",
    title: "Frontend Web Development",
    description:
      "Building scalable single-page applications and modern web platforms with React and modern JavaScript. Clean component hierarchies, modular code, and high maintainability.",
    icon: "Code2",
    highlights: ["React & Component Architecture", "State Management & Routing", "API Integration & Async Handling"],
  },
  {
    number: "02",
    title: "Figma to Pixel-Perfect Code",
    description:
      "Transforming complex Figma and UI design specs into clean, fully accessible, and pixel-precise responsive layouts using Tailwind CSS.",
    icon: "LayoutTemplate",
    highlights: ["Design System Implementation", "Flawless Mobile-First Layouts", "Accessible HTML Semantics"],
  },
  {
    number: "03",
    title: "Performance & SEO Optimization",
    description:
      "Auditing and enhancing website speed, Core Web Vitals, image optimization, bundle tree-shaking, and search engine discoverability.",
    icon: "Gauge",
    highlights: ["Lighthouse 95+ Scores", "Sub-second First Contentful Paint", "SEO Structured Meta Data"],
  },
  {
    number: "04",
    title: "Micro-Interactions & Motion",
    description:
      "Delightful, purposeful animations and transitions that elevate the user experience without sacrificing performance or battery life.",
    icon: "Sparkles",
    highlights: ["Framer Motion Choreography", "Interactive Hover & Focus States", "Gestures & Smooth Scroll"],
  },
];

export const workExperience = [
  {
    period: "2024 — Present",
    role: "Lead Frontend Developer",
    company: "Freelance & Independent Client Work",
    location: "Remote",
    description:
      "Delivering high-converting landing pages, interactive SaaS dashboards, and e-commerce frontends for global startups and clients. Translating complex Figma specs into production-grade React components.",
    skills: ["React 19", "Tailwind CSS", "Motion", "Vite", "Git"],
  },
  {
    period: "2023 — 2024",
    role: "Frontend Web Developer",
    company: "Digital Product Studio",
    location: "Lagos, Nigeria",
    description:
      "Collaborated with UI/UX designers and backend engineers to build responsive web interfaces, optimize page load speeds, and implement accessible component libraries.",
    skills: ["JavaScript", "React", "REST APIs", "Tailwind CSS", "UI/UX"],
  },
  {
    period: "2022 — 2023",
    role: "Junior Web Developer",
    company: "Tech Innovation Hub",
    location: "Lagos, Nigeria",
    description:
      "Developed interactive prototypes, maintained client websites, and resolved cross-browser responsiveness issues across mobile and desktop devices.",
    skills: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "Git"],
  },
];
