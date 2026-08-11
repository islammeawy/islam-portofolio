import React, { useEffect } from "react";
import { HeroSection } from "../components/sections/HeroSection";
import { ProjectsSection } from "../components/sections/ProjectsSection";
import { ExperienceSection } from "../components/sections/ExperienceSection";
import { SkillsSection } from "../components/sections/SkillsSection";
import { NotesSection } from "../components/sections/NotesSection";
import { AboutSection } from "../components/sections/AboutSection";
import { ContactSection } from "../components/sections/ContactSection";
import { siteConfig } from "../config/site";

export const HomePage: React.FC = () => {
  useEffect(() => {
    document.title = siteConfig.title;
  }, []);

  return (
    <div className="space-y-0">
      <HeroSection />
      <ProjectsSection />
      <ExperienceSection />
      <SkillsSection />
      <NotesSection />
      <AboutSection />
      <ContactSection />
    </div>
  );
};
