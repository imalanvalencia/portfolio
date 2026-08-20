export interface Tech {
  name: string;
  icon: string;
}

export const mostUsedTech: Tech[] = [
  { name: "JavaScript", icon: "simple-icons:javascript" },
  { name: "Python", icon: "simple-icons:python" },
  { name: "TypeScript", icon: "simple-icons:typescript" },
  { name: "Svelte", icon: "simple-icons:svelte" },
  { name: "React", icon: "simple-icons:react" },
  { name: "Node.js", icon: "simple-icons:nodedotjs" },
];

export const allTech: Tech[] = [
  ...mostUsedTech,
  { name: "Astro", icon: "simple-icons:astro" },
  { name: "Next.js", icon: "simple-icons:nextdotjs" },
  { name: "Node.js", icon: "simple-icons:nodedotjs" },
  { name: "Tailwind CSS", icon: "simple-icons:tailwindcss" },
  { name: "HTML5", icon: "simple-icons:html5" },
  { name: "Git", icon: "simple-icons:git" },
  { name: "Vite", icon: "simple-icons:vite" },
  { name: "PostgreSQL", icon: "simple-icons:postgresql" },
  { name: "Firebase", icon: "simple-icons:firebase" },
];