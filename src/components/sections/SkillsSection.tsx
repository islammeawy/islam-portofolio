import React from "react";
import { skillCategories } from "../../data/skills";
import { Badge } from "../ui/Badge";
import { Code, Layout, Server, Database, Wrench } from "lucide-react";

export const SkillsSection: React.FC = () => {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Languages":
        return <Code className="w-5 h-5 text-emerald-400" />;
      case "Frontend":
        return <Layout className="w-5 h-5 text-sky-400" />;
      case "Backend":
        return <Server className="w-5 h-5 text-emerald-400" />;
      case "Databases":
        return <Database className="w-5 h-5 text-indigo-400" />;
      default:
        return <Wrench className="w-5 h-5 text-amber-400" />;
    }
  };

  return (
    <section id="skills" className="py-16 md:py-24 border-b border-border/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="space-y-2 mb-12">
          <div className="text-xs font-mono text-emerald-400 tracking-wider uppercase font-semibold">
            // 03. Technical Capability
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-100">
            Technical Stack
          </h2>
          <p className="text-sm text-slate-400 max-w-xl">
            Technologies and tools I work with to build scalable web applications, backend APIs, and database schemas.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat) => (
            <div
              key={cat.category}
              className="bg-surface border border-border/90 rounded-xl p-6 hover:border-border-highlight transition-all duration-200 space-y-4"
            >
              <div className="flex items-center gap-3 pb-3 border-b border-border/60">
                <div className="p-2 rounded-lg bg-surface-elevated border border-border">
                  {getCategoryIcon(cat.category)}
                </div>
                <h3 className="text-lg font-bold text-slate-100 font-mono">
                  {cat.category}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2 pt-1">
                {cat.skills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="tech"
                    className="text-xs py-1 px-3 bg-surface-elevated/90 hover:border-emerald-500/40 transition-colors"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
