import React, { useState } from "react";
import { projects } from "../../data/projects";
import { ProjectCard } from "../projects/ProjectCard";
import { Button } from "../ui/Button";

export const ProjectsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", "Full-Stack", "Frontend", "Backend & AI"];

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <section id="work" className="py-16 md:py-24 border-b border-border/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-2">
            <div className="text-xs font-mono text-emerald-400 tracking-wider uppercase font-semibold">
              // 01. Portfolio Centerpiece
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-100">
              Selected Work
            </h2>
            <p className="text-sm text-slate-400 max-w-xl">
              Engineering case studies demonstrating full-stack architecture, API design, database query optimization, and AI workflow integration.
            </p>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "accent" : "outline"}
                size="sm"
                className="font-mono text-xs"
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

      </div>
    </section>
  );
};
