import React, { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { projects } from "../data/projects";
import { Badge } from "../components/ui/Badge";
import { Button } from "../components/ui/Button";
import { GithubIcon } from "../components/ui/Icons";
import { ArrowUpRight, ArrowLeft, Code2, AlertTriangle, CheckCircle, ShieldCheck } from "lucide-react";
import { siteConfig } from "../config/site";

export const ProjectDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const project = projects.find((p) => p.slug === slug);

  useEffect(() => {
    if (project) {
      document.title = `${project.title} — Case Study | ${siteConfig.name}`;
      window.scrollTo(0, 0);
    } else {
      document.title = `Project Not Found | ${siteConfig.name}`;
    }
  }, [project]);

  if (!project) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center space-y-6">
        <h1 className="text-3xl font-bold text-slate-100">Project Case Study Not Found</h1>
        <p className="text-slate-400">The requested project route does not exist.</p>
        <Button onClick={() => navigate("/")} variant="accent">
          Return to Overview
        </Button>
      </div>
    );
  }

  return (
    <article className="py-12 md:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-12">
        
        {/* Top Nav Back Link */}
        <div>
          <Link
            to="/#work"
            className="inline-flex items-center gap-2 text-xs font-mono text-emerald-400 hover:text-emerald-300 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Selected Work</span>
          </Link>
        </div>

        {/* Case Study Header */}
        <div className="space-y-4 pb-8 border-b border-border/80">
          <div className="flex items-center gap-3">
            <Badge variant="accent">{project.category}</Badge>
            <span className="text-xs font-mono text-slate-500">•</span>
            <span className="text-xs font-mono text-slate-400">Case Study</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-100">
            {project.title}
          </h1>

          <p className="text-lg text-slate-300 font-mono">
            {project.tagline}
          </p>

          <p className="text-base text-slate-400 leading-relaxed max-w-3xl">
            {project.summary}
          </p>

          {/* External Action Links */}
          <div className="pt-4 flex flex-wrap items-center gap-3">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="default" className="font-mono text-xs gap-2">
                <GithubIcon className="w-4 h-4" />
                <span>View Source Code on GitHub</span>
              </Button>
            </a>

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="accent" className="font-mono text-xs gap-2">
                  <ArrowUpRight className="w-4 h-4" />
                  <span>Live Application Demo</span>
                </Button>
              </a>
            )}
          </div>
        </div>

        {/* Tech Stack Bar */}
        <div className="bg-surface border border-border/80 rounded-xl p-6 space-y-3">
          <h3 className="text-xs font-mono uppercase text-slate-400 tracking-wider">
            Technologies & Tools Employed
          </h3>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <Badge key={tech} variant="tech" className="text-xs py-1 px-3">
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        {/* Core Sections Grid */}
        <div className="space-y-10 text-slate-200 leading-relaxed">
          
          {/* Problem & Solution */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-surface border border-border/80 rounded-xl p-6 sm:p-8 space-y-3">
              <div className="flex items-center gap-2 text-amber-400 font-bold font-mono text-sm">
                <AlertTriangle className="w-4 h-4" />
                <span>The Problem & Context</span>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">
                {project.problem}
              </p>
            </div>

            <div className="bg-surface border border-border/80 rounded-xl p-6 sm:p-8 space-y-3">
              <div className="flex items-center gap-2 text-emerald-400 font-bold font-mono text-sm">
                <CheckCircle className="w-4 h-4" />
                <span>The Engineering Solution</span>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Architectural Decisions */}
          <div className="bg-surface border border-border/90 rounded-2xl p-6 sm:p-8 space-y-4">
            <h2 className="text-xl font-bold text-slate-100 flex items-center gap-2 font-mono">
              <Code2 className="w-5 h-5 text-emerald-400" />
              <span>Key Architecture & Engineering Decisions</span>
            </h2>
            <ul className="space-y-3 pt-2">
              {project.architectureDecisions.map((decision, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-slate-300 bg-surface-elevated/70 border border-border/60 rounded-lg p-4">
                  <span className="font-mono text-xs text-emerald-400 shrink-0 font-bold pt-0.5">0{idx + 1}.</span>
                  <span>{decision}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technical Challenges */}
          {project.challenges.length > 0 && (
            <div className="bg-surface border border-border/90 rounded-2xl p-6 sm:p-8 space-y-4">
              <h2 className="text-xl font-bold text-slate-100 flex items-center gap-2 font-mono">
                <ShieldCheck className="w-5 h-5 text-sky-400" />
                <span>Technical Challenges & Solutions</span>
              </h2>
              <ul className="space-y-3 pt-2">
                {project.challenges.map((challenge, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-slate-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-400 shrink-0 mt-2" />
                    <span>{challenge}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Outcome & Business Impact */}
          <div className="bg-surface-elevated/90 border border-emerald-500/30 rounded-2xl p-6 sm:p-8 space-y-3">
            <h2 className="text-lg font-bold text-emerald-400 font-mono">
              Project Outcome
            </h2>
            <p className="text-sm text-slate-200 leading-relaxed">
              {project.outcome}
            </p>
          </div>

        </div>

        {/* Footer Nav */}
        <div className="pt-8 border-t border-border/80 flex justify-between items-center">
          <Link to="/">
            <Button variant="outline" size="sm" className="font-mono text-xs">
              <ArrowLeft className="w-4 h-4 mr-1" />
              Back to Overview
            </Button>
          </Link>
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
            <Button variant="default" size="sm" className="font-mono text-xs">
              <GithubIcon className="w-4 h-4 mr-1" />
              GitHub Repository
            </Button>
          </a>
        </div>

      </div>
    </article>
  );
};
