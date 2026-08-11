import React from "react";
import { experiences } from "../../data/experience";
import { education } from "../../data/education";
import { Badge } from "../ui/Badge";
import { Building2, Calendar, MapPin, GraduationCap, CheckCircle2 } from "lucide-react";

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-16 md:py-24 border-b border-border/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Work Experience Column */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-2">
              <div className="text-xs font-mono text-emerald-400 tracking-wider uppercase font-semibold">
                // 02. Professional History
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-100">
                Experience
              </h2>
            </div>

            <div className="space-y-6">
              {experiences.map((exp) => (
                <div
                  key={exp.id}
                  className="bg-surface border border-border/90 rounded-xl p-6 sm:p-8 space-y-4 relative"
                >
                  {/* Role Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-border/60">
                    <div>
                      <h3 className="text-xl font-bold text-slate-100 flex items-center gap-2">
                        {exp.role}
                      </h3>
                      <div className="flex items-center gap-2 text-sm font-mono text-emerald-400 mt-1">
                        <Building2 className="w-4 h-4" />
                        <span>{exp.company}</span>
                        <span className="text-slate-600">•</span>
                        <span className="text-slate-400 text-xs">{exp.type}</span>
                      </div>
                    </div>

                    <div className="flex flex-col sm:items-end text-xs font-mono text-slate-400 space-y-1">
                      <div className="flex items-center gap-1.5 text-slate-300">
                        <Calendar className="w-3.5 h-3.5 text-emerald-400" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-1 text-slate-400">
                        <MapPin className="w-3.5 h-3.5" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Bullet points */}
                  <ul className="space-y-2.5 pt-2 text-sm text-slate-300 leading-relaxed">
                    {exp.description.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech stack tags */}
                  <div className="pt-4 flex flex-wrap gap-1.5">
                    {exp.technologies.map((tech) => (
                      <Badge key={tech} variant="tech">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education Column */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-2">
              <div className="text-xs font-mono text-emerald-400 tracking-wider uppercase font-semibold">
                // Academic Background
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-100">
                Education
              </h2>
            </div>

            <div className="bg-surface border border-border/90 rounded-xl p-6 sm:p-8 space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-surface-elevated border border-border flex items-center justify-center shrink-0">
                  <GraduationCap className="w-6 h-6 text-emerald-400" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-xl font-bold text-slate-100">
                    {education.institution}
                  </h3>
                  <p className="text-sm font-medium text-emerald-400">
                    {education.degree}
                  </p>
                  <div className="flex items-center gap-2 text-xs font-mono text-slate-400 pt-1">
                    <span>{education.period}</span>
                    <span>•</span>
                    <span>{education.location}</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-border/60 space-y-3">
                <h4 className="text-xs font-mono uppercase text-slate-400 tracking-wider">
                  Relevant Coursework
                </h4>
                <div className="flex flex-wrap gap-2">
                  {education.coursework.map((course) => (
                    <Badge key={course} variant="default" className="text-xs">
                      {course}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
