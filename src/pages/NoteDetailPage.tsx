import React, { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { engineeringNotes } from "../data/notes";
import { Badge } from "../components/ui/Badge";
import { Button } from "../components/ui/Button";
import { ArrowLeft, BookOpen, Clock, Calendar } from "lucide-react";
import { siteConfig } from "../config/site";

export const NoteDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const note = engineeringNotes.find((n) => n.slug === slug);

  useEffect(() => {
    if (note) {
      document.title = `${note.title} | Engineering Notes — ${siteConfig.name}`;
      window.scrollTo(0, 0);
    } else {
      document.title = `Note Not Found | ${siteConfig.name}`;
    }
  }, [note]);

  if (!note) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center space-y-6">
        <h1 className="text-3xl font-bold text-slate-100">Engineering Note Not Found</h1>
        <p className="text-slate-400">The requested article route does not exist.</p>
        <Button onClick={() => navigate("/")} variant="accent">
          Return to Overview
        </Button>
      </div>
    );
  }

  return (
    <article className="py-12 md:py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-10">
        
        {/* Back Link */}
        <div>
          <Link
            to="/#notes"
            className="inline-flex items-center gap-2 text-xs font-mono text-emerald-400 hover:text-emerald-300 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Engineering Notes</span>
          </Link>
        </div>

        {/* Note Header */}
        <div className="space-y-4 pb-8 border-b border-border/80">
          <div className="flex items-center justify-between gap-4 text-xs font-mono text-slate-400">
            <div className="flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-emerald-400" />
              <span>Engineering Note</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-slate-500" />
                {note.date}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-slate-500" />
                {note.readTime}
              </span>
            </div>
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-100 leading-snug">
            {note.title}
          </h1>

          <p className="text-base text-slate-300 leading-relaxed font-mono bg-surface-elevated/80 border border-border/60 p-4 rounded-xl">
            {note.summary}
          </p>

          <div className="flex flex-wrap gap-2 pt-2">
            {note.tags.map((tag) => (
              <Badge key={tag} variant="tech" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
        </div>

        {/* Article Body */}
        <div className="space-y-8 text-slate-200 leading-relaxed font-sans">
          {note.sections.map((sec, idx) => (
            <section key={idx} className="space-y-3">
              <h2 className="text-xl font-bold text-slate-100 font-mono tracking-tight text-emerald-400">
                {sec.heading}
              </h2>
              <div className="space-y-3">
                {sec.body.map((paragraph, pIdx) => (
                  <p key={pIdx} className="text-sm sm:text-base text-slate-300 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* Footer */}
        <div className="pt-8 border-t border-border/80 flex items-center justify-between">
          <div className="text-xs font-mono text-slate-400">
            Written by <span className="text-slate-200">{siteConfig.name}</span>
          </div>
          <Link to="/">
            <Button variant="outline" size="sm" className="font-mono text-xs">
              <ArrowLeft className="w-4 h-4 mr-1" />
              Back to Overview
            </Button>
          </Link>
        </div>

      </div>
    </article>
  );
};
