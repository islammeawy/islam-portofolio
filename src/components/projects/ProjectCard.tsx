import React from "react";
import { Link } from "react-router-dom";
import type { Project } from "../../types";
import { Badge } from "../ui/Badge";
import { GithubIcon } from "../ui/Icons";
import { ArrowUpRight, Code2 } from "lucide-react";

export interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <article className="group relative bg-surface border border-border/90 rounded-xl p-6 sm:p-8 hover:border-border-highlight hover:bg-surface-elevated/70 transition-all duration-200 flex flex-col justify-between h-full">
      <div className="space-y-4">
        {/* Top bar with Category & External Links */}
        <div className="flex items-center justify-between gap-4">
          <Badge variant="accent">{project.category}</Badge>
          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-slate-100 transition-colors p-1 rounded hover:bg-surface-hover"
                aria-label={`View ${project.title} on GitHub`}
                onClick={(e) => e.stopPropagation()}
              >
                <GithubIcon className="w-4 h-4" />
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-slate-100 transition-colors p-1 rounded hover:bg-surface-hover"
                aria-label={`View live demo of ${project.title}`}
                onClick={(e) => e.stopPropagation()}
              >
                <ArrowUpRight className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>

        {/* Title & Tagline */}
        <div>
          <h3 className="text-xl font-bold text-slate-100 group-hover:text-emerald-400 transition-colors tracking-tight flex items-center gap-2">
            <Link to={`/projects/${project.slug}`} className="focus:outline-none focus-visible:underline">
              {project.title}
            </Link>
          </h3>
          <p className="text-xs font-mono text-slate-400 mt-1">{project.tagline}</p>
        </div>

        {/* Summary */}
        <p className="text-sm text-slate-300 leading-relaxed line-clamp-3">
          {project.summary}
        </p>

        {/* Architecture Highlight snippet */}
        {project.architectureDecisions.length > 0 && (
          <div className="pt-2">
            <div className="flex items-start gap-2 bg-surface-elevated/80 border border-border/60 rounded-lg p-3 text-xs text-slate-300 font-mono">
              <Code2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span className="line-clamp-2">{project.architectureDecisions[0]}</span>
            </div>
          </div>
        )}
      </div>

      {/* Footer: Tech Stack & Case Study Link */}
      <div className="pt-6 mt-6 border-t border-border/60 space-y-4">
        <div className="flex flex-wrap gap-1.5">
          {project.technologies.map((tech) => (
            <Badge key={tech} variant="tech">
              {tech}
            </Badge>
          ))}
        </div>

        <Link
          to={`/projects/${project.slug}`}
          className="inline-flex items-center gap-1.5 text-xs font-mono text-emerald-400 hover:text-emerald-300 group/link transition-colors pt-1"
        >
          <span>Read Full Case Study</span>
          <ArrowUpRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
        </Link>
      </div>
    </article>
  );
};
