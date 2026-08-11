import React from "react";
import { Link } from "react-router-dom";
import type { EngineeringNote } from "../../types";
import { Badge } from "../ui/Badge";
import { ArrowRight, BookOpen, Clock } from "lucide-react";

export interface NoteCardProps {
  note: EngineeringNote;
}

export const NoteCard: React.FC<NoteCardProps> = ({ note }) => {
  return (
    <article className="group bg-surface border border-border/80 rounded-xl p-6 hover:border-border-highlight hover:bg-surface-elevated/70 transition-all duration-200 flex flex-col justify-between">
      <div className="space-y-3">
        {/* Meta Bar */}
        <div className="flex items-center justify-between text-xs font-mono text-slate-400">
          <div className="flex items-center gap-2">
            <BookOpen className="w-3.5 h-3.5 text-emerald-400" />
            <span>{note.date}</span>
          </div>
          <div className="flex items-center gap-1.5 text-slate-400">
            <Clock className="w-3.5 h-3.5" />
            <span>{note.readTime}</span>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold text-slate-100 group-hover:text-emerald-400 transition-colors tracking-tight leading-snug">
          <Link to={`/notes/${note.slug}`} className="focus:outline-none focus-visible:underline">
            {note.title}
          </Link>
        </h3>

        {/* Excerpt */}
        <p className="text-sm text-slate-300 leading-relaxed line-clamp-3">
          {note.summary}
        </p>
      </div>

      {/* Tags & Action Link */}
      <div className="pt-5 mt-5 border-t border-border/60 flex items-center justify-between gap-4">
        <div className="flex flex-wrap gap-1.5">
          {note.tags.slice(0, 3).map((tag) => (
            <Badge key={tag} variant="outline" className="text-[10px]">
              {tag}
            </Badge>
          ))}
        </div>

        <Link
          to={`/notes/${note.slug}`}
          className="inline-flex items-center gap-1 text-xs font-mono text-emerald-400 hover:text-emerald-300 group/link transition-colors shrink-0"
        >
          <span>Read</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
        </Link>
      </div>
    </article>
  );
};
