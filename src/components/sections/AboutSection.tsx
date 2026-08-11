import React from "react";
import { Terminal, ShieldCheck, Zap, BookOpen } from "lucide-react";

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-24 border-b border-border/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-2">
              <div className="text-xs font-mono text-emerald-400 tracking-wider uppercase font-semibold">
                // 05. Background & Mindset
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-100">
                About Me
              </h2>
            </div>

            <div className="space-y-4 text-sm sm:text-base text-slate-300 leading-relaxed">
              <p>
                I am a Computer Science student at <strong className="text-slate-100">Cairo University</strong> (Graduation: June 2028), currently working as a <strong className="text-emerald-400">Software Engineering Intern at iSchool</strong>.
              </p>
              <p>
                My focus lies in building scalable full-stack web applications and intelligent tools. I enjoy taking complex user requirements and transforming them into clean, performant software with well-structured REST APIs and optimized database schemas.
              </p>
              <p>
                Rather than treating software engineering strictly as framework assembly, I focus on foundational principles: algorithms, database indexing, type safety, and clean architecture.
              </p>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="bg-surface border border-border/90 rounded-2xl p-6 sm:p-8 space-y-6">
              <div className="flex items-center gap-3 pb-4 border-b border-border/60">
                <div className="p-2 rounded-lg bg-surface-elevated border border-border">
                  <Terminal className="w-5 h-5 text-emerald-400" />
                </div>
                <h3 className="text-lg font-bold text-slate-100 font-mono">
                  Engineering Values
                </h3>
              </div>

              <div className="space-y-4 text-xs font-mono">
                <div className="flex items-start gap-3 p-3 rounded-lg bg-surface-elevated/70 border border-border/60">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-slate-100 font-bold block mb-0.5">Code Quality & Type Safety</span>
                    <span className="text-slate-400">Writing strict TypeScript and clean Django ORM code with explicit contracts.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-lg bg-surface-elevated/70 border border-border/60">
                  <Zap className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-slate-100 font-bold block mb-0.5">Performance & Query Efficiency</span>
                    <span className="text-slate-400">Eliminating N+1 database queries and optimizing frontend re-renders.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-lg bg-surface-elevated/70 border border-border/60">
                  <BookOpen className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-slate-100 font-bold block mb-0.5">Active Growth</span>
                    <span className="text-slate-400">Expanding into scalable backend systems and LLM-assisted software tools.</span>
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
