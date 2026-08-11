import React, { useState } from "react";
import { siteConfig } from "../../config/site";
import { Button } from "../ui/Button";
import { Mail, Phone, MapPin, Copy, Check, Send } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../ui/Icons";

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(siteConfig.author.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        <div className="bg-surface border border-border/90 rounded-3xl p-8 sm:p-12 space-y-8">
          
          <div className="max-w-2xl space-y-3">
            <div className="text-xs font-mono text-emerald-400 tracking-wider uppercase font-semibold">
              // 06. Get In Touch
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-100">
              Let's Build Something Together
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              I am actively looking for Software Engineering and Applied AI roles. Whether you have an open opportunity or want to discuss full-stack software development, feel free to reach out.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-border/60">
            {/* Email Contact Card */}
            <div className="p-5 rounded-xl bg-surface-elevated/80 border border-border/80 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-mono text-slate-400 block">Direct Email</span>
                <a
                  href={siteConfig.links.email}
                  className="text-sm font-semibold text-slate-100 hover:text-emerald-400 transition-colors font-mono"
                >
                  {siteConfig.author.email}
                </a>
              </div>
            </div>

            {/* Phone Contact Card */}
            <div className="p-5 rounded-xl bg-surface-elevated/80 border border-border/80 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-mono text-slate-400 block">Phone / WhatsApp</span>
                <a
                  href={siteConfig.links.phone}
                  className="text-sm font-semibold text-slate-100 hover:text-sky-400 transition-colors font-mono"
                >
                  {siteConfig.author.phone}
                </a>
              </div>
            </div>

            {/* Location Card */}
            <div className="p-5 rounded-xl bg-surface-elevated/80 border border-border/80 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-mono text-slate-400 block">Location</span>
                <span className="text-sm font-semibold text-slate-100 font-mono">
                  {siteConfig.author.location}
                </span>
              </div>
            </div>
          </div>

          {/* Action Row */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <a href={siteConfig.links.email}>
              <Button variant="accent" size="lg" className="gap-2">
                <Send className="w-4 h-4" />
                <span>Send Email</span>
              </Button>
            </a>

            <button
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-2 h-12 px-5 rounded-lg bg-surface-elevated border border-border text-slate-300 hover:text-slate-100 text-sm font-mono transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span className="text-emerald-400">Email Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-slate-400" />
                  <span>Copy Address</span>
                </>
              )}
            </button>

            <a
              href={siteConfig.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 h-12 px-5 rounded-lg border border-border text-slate-300 hover:text-slate-100 hover:bg-surface-elevated text-sm font-mono transition-colors"
            >
              <LinkedinIcon className="w-4 h-4 text-sky-400" />
              <span>LinkedIn Profile</span>
            </a>

            <a
              href={siteConfig.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 h-12 px-5 rounded-lg border border-border text-slate-300 hover:text-slate-100 hover:bg-surface-elevated text-sm font-mono transition-colors"
            >
              <GithubIcon className="w-4 h-4 text-slate-400" />
              <span>GitHub Repositories</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
