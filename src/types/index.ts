export interface Project {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  summary: string;
  category: "Full-Stack" | "Frontend" | "Backend & AI";
  featured: boolean;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  problem: string;
  solution: string;
  architectureDecisions: string[];
  challenges: string[];
  outcome: string;
  snippet?: {
    language: string;
    code: string;
    explanation: string;
  };
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  type: string;
  description: string[];
  technologies: string[];
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface EngineeringNote {
  id: string;
  slug: string;
  title: string;
  date: string;
  readTime: string;
  summary: string;
  tags: string[];
  sections: {
    heading: string;
    body: string[];
  }[];
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  location: string;
  coursework: string[];
}
