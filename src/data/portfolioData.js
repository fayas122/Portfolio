import {
  siReact,
  siRedux,
  siTanstack,
  siJavascript,
  siHtml5,
  siCss,
  siTailwindcss,
  siGit,
} from "simple-icons";

export const skills = [
  { name: "React", icon: siReact, color: "text-cyan-400" },
  { name: "Redux Toolkit", icon: siRedux, color: "text-purple-400" },
  { name: "TanStack Query", icon: siTanstack, color: "text-rose-400" },
  { name: "JavaScript", icon: siJavascript, color: "text-yellow-300" },
  { name: "HTML", icon: siHtml5, color: "text-orange-500" },
  { name: "CSS", icon: siCss, color: "text-blue-400" },
  { name: "Tailwind CSS", icon: siTailwindcss, color: "text-cyan-300" },
  { name: "Git", icon: siGit, color: "text-orange-500" },
];

export const personalInfo = {
  name: "Muhammed Fayas",
  firstName: "Muhammed",
  lastName: "Fayas",
  role: "Frontend Developer",
  email: "mfayas122@gmail.com",
  phone: "+91 6282519805",
  location: "India",
  education: "B.Tech (ECE) · SBTE Diploma",
  description:
    "I build modern, responsive and user-friendly web applications with a passion for clean code and beautiful design.",
  about:
    "I'm Muhammed Fayas, a passionate frontend developer who loves building web applications. I enjoy learning new technologies, exploring creative solutions and turning ideas into real products.",
  github: "https://github.com/",
  linkedin: "https://linkedin.com/",
  instagram: "https://instagram.com/",
  resume: "/Muhammed Fayas RP.pdf",
  profileImage:
    "/public/Hero (2).png",
};

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const highlights = [
  {
    icon: "graduation",
    title: "Self Learner",
    description: "Always curious, always learning",
  },
  {
    icon: "code",
    title: "Clean Code",
    description: "Simple, readable, maintainable",
  },
  {
    icon: "rocket",
    title: "Better Tomorrow",
    description: "Building skills for a bigger goal",
  },
];

export const aboutDetails = [
  { icon: "location", text: personalInfo.location },
  { icon: "mail", text: personalInfo.email },
  { icon: "phone", text: personalInfo.phone },
  { icon: "education", text: personalInfo.education },
];



export const projects = [
  {
    title: "WESTEROS",
    category: "E-commerce",
    description:
      "A bamboo products e-commerce platform with product browsing, cart, wishlist and user accounts.",
    image:
      "/public/Screenshot 2026-10-20 115853.png",
    tags: ["React", "Redux Toolkit", "TanStack Query", "Tailwind"],
    github: "https://github.com/fayas122/ecommerce",
    demo: "",
  },
  {
    title: "MyStore",
    category: "Online Store",
    description:
      "A modern shopping experience with product filters, cart management and responsive layouts.",
    image:
      "/public/Screenshot 2026-10-20 120646.png",
    tags: ["React", "JavaScript", "CSS"],
    github: "https://github.com/fayas122/machine-task",
    demo: "",
  },
  {
    title: "Personal Portfolio",
    category: "Web Design",
    description:
      "A personal website showcasing my skills, projects, learning journey and contact information.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=85",
    tags: ["React", "Tailwind CSS", "Responsive"],
    github: "",
    demo: "",
  },
];
