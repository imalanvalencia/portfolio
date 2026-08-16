// Interfaces

export interface NavLink {
  label: string;
  href: string;
}

export interface CTAButton {
  label: string;
  href: string;
}

export interface ProjectTag {
  label: string;
  color?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: { aspectRatio: "16:9" | "3:4"; placeholder: string };
  tags: ProjectTag[];
  links: { live?: string; github?: string };
}

export interface Stat {
  value: string;
  label: string;
}

export interface AboutContent {
  photo: { aspectRatio: "1:1"; placeholder: string };
  description: string;
}

export interface TechTool {
  name: string;
  logo: { aspectRatio: "3:1"; placeholder: string };
}

export interface FooterContent {
  contact: { name: string; email: string; phone: string };
  socials: { platform: string; url: string }[];
  cta: string;
}

export interface HeroContent {
  name: string;
  role: string;
  techStack: string[];
  ctaPrimary: CTAButton;
  ctaSecondary: CTAButton;
}

export interface SiteContent {
  hero: HeroContent;
  projects: Project[];
  stats: Stat[];
  about: AboutContent;
  techTools: TechTool[];
  footer: FooterContent;
  nav: { links: NavLink[] };
}

// Data

export const content: SiteContent = {
  hero: {
    name: "ALAN VALENCIA",
    role: "DESARROLLADOR DE SOFTWARE",
    techStack: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js", "Astro"],
    ctaPrimary: { label: "Ver Proyectos", href: "#projects" },
    ctaSecondary: { label: "Contacto", href: "#contacto" },
  },

  projects: [
    {
      id: "e-commerce",
      title: "E-Commerce Platform",
      description:
        "Plataforma de comercio electrónico con panel de administración, pasarela de pagos y gestión de inventario en tiempo real.",
      image: { aspectRatio: "16:9", placeholder: "#232340" },
      tags: [
        { label: "Next.js", color: "violet" },
        { label: "Stripe", color: "pink" },
        { label: "PostgreSQL", color: "violet" },
      ],
      links: { live: "#", github: "#" },
    },
    {
      id: "task-manager",
      title: "Task Manager App",
      description:
        "Aplicación de gestión de tareas con autenticación, tableros Kanban y colaboración en tiempo real entre equipos.",
      image: { aspectRatio: "16:9", placeholder: "#232340" },
      tags: [
        { label: "React", color: "violet" },
        { label: "TypeScript", color: "pink" },
        { label: "Socket.io", color: "violet" },
      ],
      links: { live: "#", github: "#" },
    },
    {
      id: "weather-dashboard",
      title: "Weather Dashboard",
      description:
        "Dashboard meteorológico con visualización de datos, pronósticos extendidos y alertas personalizadas por ubicación.",
      image: { aspectRatio: "16:9", placeholder: "#232340" },
      tags: [
        { label: "Vue.js", color: "violet" },
        { label: "D3.js", color: "pink" },
      ],
      links: { live: "#" },
    },
    {
      id: "portfolio-v2",
      title: "Portfolio Website",
      description:
        "Sitio web personal con diseño moderno, animaciones suaves y optimización SEO para maximizar la visibilidad profesional.",
      image: { aspectRatio: "16:9", placeholder: "#232340" },
      tags: [
        { label: "Astro", color: "violet" },
        { label: "Tailwind CSS", color: "pink" },
      ],
      links: { live: "#", github: "#" },
    },
  ],

  stats: [
    { value: "2+", label: "Años de experiencia" },
    { value: "20+", label: "Proyectos completados" },
    { value: "2+", label: "Clientes satisfechos" },
  ],

  about: {
    photo: { aspectRatio: "1:1", placeholder: "#232340" },
    description:
      "Soy un desarrollador de software apasionado por crear experiencias digitales modernas y funcionales. Me especializo en tecnologías frontend y backend, con enfoque en limpieza de código, rendimiento y accesibilidad. Cada proyecto es una oportunidad para aprender algo nuevo y superar los límites de lo posible.",
  },

  techTools: [
    { name: "React", logo: { aspectRatio: "3:1", placeholder: "#232340" } },
    { name: "Next.js", logo: { aspectRatio: "3:1", placeholder: "#232340" } },
    { name: "TypeScript", logo: { aspectRatio: "3:1", placeholder: "#232340" } },
    { name: "Node.js", logo: { aspectRatio: "3:1", placeholder: "#232340" } },
    { name: "Tailwind CSS", logo: { aspectRatio: "3:1", placeholder: "#232340" } },
    { name: "Astro", logo: { aspectRatio: "3:1", placeholder: "#232340" } },
  ],

  footer: {
    contact: {
      name: "Alan Valencia",
      email: "alan@ejemplo.com",
      phone: "+54 11 1234-5678",
    },
    socials: [
      { platform: "GitHub", url: "https://github.com/alan" },
      { platform: "LinkedIn", url: "https://linkedin.com/in/alan" },
    ],
    cta: "Tenés Alan disponible",
  },

  nav: {
    links: [
      { label: "Inicio", href: "#inicio" },
      { label: "Proyectos", href: "#projects" },
      { label: "Contacto", href: "#contacto" },
    ],
  },
};
