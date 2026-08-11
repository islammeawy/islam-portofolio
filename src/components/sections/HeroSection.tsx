import React, { useState } from "react";
import { siteConfig } from "../../config/site";
import { Button } from "../ui/Button";
import { Badge } from "../ui/Badge";
import { GithubIcon, LinkedinIcon } from "../ui/Icons";
import { FileText, ArrowDown, Copy, Check, Sparkles } from "lucide-react";

export const HeroSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(siteConfig.author.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleScrollToWork = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.querySelector("#work");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative py-12 md:py-24 border-b border-border/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Copy & Action Column */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Availability / Role Status Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>{siteConfig.status.currentRole}</span>
            </div>

            {/* Name & Title */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-100">
                Islam Mekawy
              </h1>
              <p className="text-xl sm:text-2xl font-mono text-emerald-400 font-medium">
                Software Engineer
              </p>
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
              Computer Science student at <span className="text-slate-100 font-medium">Cairo University</span>. I build scalable full-stack web applications, optimize backend database queries, and integrate AI-powered workflows using React, TypeScript, Node.js, and Django.
            </p>

            {/* Quick Details Chips */}
            <div className="flex flex-wrap gap-2 text-xs font-mono text-slate-400 pt-1">
              <Badge variant="outline">Cairo, Egypt</Badge>
              <Badge variant="outline">Cairo University BS CS '28</Badge>
              <Badge variant="outline">React & TypeScript</Badge>
              <Badge variant="outline">Node.js & Express</Badge>
            </div>

            {/* Call to Actions */}
            <div className="pt-4 flex flex-wrap items-center gap-3">
              <a href="#work" onClick={handleScrollToWork}>
                <Button variant="accent" size="lg" className="gap-2">
                  <span>Selected Work</span>
                  <ArrowDown className="w-4 h-4" />
                </Button>
              </a>

              <a
                href={siteConfig.links.resume}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="default" size="lg" className="font-mono gap-2">
                  <FileText className="w-4 h-4 text-emerald-400" />
                  Resume (PDF)
                </Button>
              </a>

              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 h-12 px-4 rounded-lg bg-surface border border-border text-slate-300 hover:text-slate-100 hover:bg-surface-hover text-sm font-mono transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
                aria-label="Copy email address"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-400">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-slate-400" />
                    <span>Copy Email</span>
                  </>
                )}
              </button>
            </div>

            {/* External Profile Links */}
            <div className="pt-2 flex items-center gap-4 text-xs font-mono text-slate-400">
              <a
                href={siteConfig.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-slate-100 transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
                <span>github.com/islammeawy</span>
              </a>
              <span>•</span>
              <a
                href={siteConfig.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-slate-100 transition-colors"
              >
                <LinkedinIcon className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>
            </div>

          </div>

          {/* Photo & Technical Card Frame Column */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm">
              {/* Outer decorative subtle frame border */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-b from-emerald-500/20 via-border/50 to-transparent blur-sm pointer-events-none" />
              
              <div className="relative bg-surface border border-border/90 rounded-2xl p-4 sm:p-5 space-y-4">
                
                {/* Photo frame */}
                <div className="relative aspect-[4/5] rounded-xl overflow-hidden bg-slate-900 border border-border/80 group">
                  <img
                    src={siteConfig.avatarUrl}
                    alt="Islam Mekawy"
                    className="w-full h-full object-cover object-center group-hover:scale-[1.02] transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                  
                  {/* Photo overlay badge */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs font-mono text-slate-200">
                    <span className="bg-slate-900/90 backdrop-blur-md px-2.5 py-1 rounded-md border border-slate-700/80">
                      Islam Mekawy
                    </span>
                    <span className="bg-emerald-500/20 backdrop-blur-md text-emerald-400 px-2.5 py-1 rounded-md border border-emerald-500/30 flex items-center gap-1">
                      <Sparkles className="w-3 h-3" /> SWE Intern
                    </span>
                  </div>
                </div>

                {/* Technical status detail box */}
                <div className="bg-surface-elevated/90 border border-border/80 rounded-xl p-3.5 space-y-2 text-xs font-mono">
                  <div className="flex items-center justify-between text-slate-400">
                    <span>Education:</span>
                    <span className="text-slate-200 font-semibold">Cairo University</span>
                  </div>
                  <div className="flex items-center justify-between text-slate-400">
                    <span>Focus:</span>
                    <span className="text-slate-200">Full-Stack & Applied AI</span>
                  </div>
                  <div className="flex items-center justify-between text-slate-400">
                    <span>Status:</span>
                    <span className="text-emerald-400 font-medium">Intern @ iSchool</span>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
