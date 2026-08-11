import React from "react";
import { cn } from "../../lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "outline" | "accent" | "tech";
}

export const Badge: React.FC<BadgeProps> = ({
  className,
  variant = "default",
  children,
  ...props
}) => {
  const baseStyles = "inline-flex items-center rounded-md px-2.5 py-0.5 text-xs font-mono font-medium transition-colors";

  const variants = {
    default: "bg-surface-elevated text-slate-300 border border-border/80",
    outline: "border border-border text-slate-400",
    accent: "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20",
    tech: "bg-slate-900/80 text-slate-300 border border-slate-800 hover:border-slate-700",
  };

  return (
    <span className={cn(baseStyles, variants[variant], className)} {...props}>
      {children}
    </span>
  );
};
