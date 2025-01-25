import {
  html,
  css,
  figma,
  git,
  github,
  javascript,
  typescript,
  nextjs,
  reactjs,
  tailwind,
  ycoffeeProject
} from "../assets";

export const navLinks = [
  {
    id: "ydev",
    title: "ydev",
  },
  {
    id: "projects",
    title: "projects",
  },
  {
    id: "contact",
    title: "contact",
  },
];

const projects = [
  {
    name: "YCOFFEE",
    description:
      "A coffee-focused app that allows users to dive into the world of specialty coffee, discover hidden gems, and connect with a passionate community.",
    image: ycoffeeProject,
    source_code_link: "https://github.com/youusrra/YCOFFEE",
    source_code_link2: "https://y-coffee.vercel.app/",
  },
]

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "GitHub",
    icon: github,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Next js",
    icon: nextjs,
  },
];


//  " Beyond coding, I’m a coffee enthusiast and music lover who finds inspiration in creativity and simplicity. My dream is to contribute to meaningful projects and eventually become part of Germany’s thriving tech community."


export { technologies, projects }
