import React from "react";
import { engineeringNotes } from "../../data/notes";
import { NoteCard } from "../notes/NoteCard";

export const NotesSection: React.FC = () => {
  return (
    <section id="notes" className="py-16 md:py-24 border-b border-border/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="space-y-2 mb-12">
          <div className="text-xs font-mono text-emerald-400 tracking-wider uppercase font-semibold">
            // 04. Technical Reflections
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-100">
            Things I've Learned Building Software
          </h2>
          <p className="text-sm text-slate-400 max-w-xl">
            Practical reflections on database query optimizations, state management, and full-stack challenges I ran into while building my projects.
          </p>
        </div>

        {/* Notes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {engineeringNotes.map((note) => (
            <NoteCard key={note.id} note={note} />
          ))}
        </div>

      </div>
    </section>
  );
};
