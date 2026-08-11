import React from "react";
import { siteConfig } from "../../config/site";
import { Mail, ArrowUp } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../ui/Icons";
import { Separator } from "../ui/Separator";

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-background border-t border-border/80 pt-12 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="font-semibold text-slate-100">{siteConfig.name}</span>
              <span className="text-slate-600 font-mono">/</span>
              <span className="text-xs font-mono text-slate-400">Software Engineer</span>
            </div>
            <p className="text-xs text-slate-400 max-w-md">
              Computer Science student at Cairo University building scalable backend systems & modern web applications.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={siteConfig.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-slate-100 transition-colors p-2 hover:bg-surface-hover rounded-md"
              aria-label="GitHub"
            >
              <GithubIcon className="w-5 h-5" />
            </a>
            <a
              href={siteConfig.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-slate-100 transition-colors p-2 hover:bg-surface-hover rounded-md"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-5 h-5" />
            </a>
            <a
              href={siteConfig.links.email}
              className="text-slate-400 hover:text-slate-100 transition-colors p-2 hover:bg-surface-hover rounded-md"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
            <button
              onClick={scrollToTop}
              className="text-slate-400 hover:text-emerald-400 transition-colors p-2 hover:bg-surface-hover rounded-md border border-border/60 ml-2"
              aria-label="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        <Separator className="my-4" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 text-xs font-mono text-slate-400">
          <div>
            &copy; {new Date().getFullYear()} {siteConfig.name}. Designed & Built with React, TypeScript & Tailwind.
          </div>
          <div className="flex items-center gap-4">
            <span>Cairo, Egypt</span>
            <span>•</span>
            <a href={siteConfig.links.resume} target="_blank" rel="noopener noreferrer" className="hover:text-slate-300 underline">
              Resume (PDF)
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
