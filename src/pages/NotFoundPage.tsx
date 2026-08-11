import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/Button";
import { ArrowLeft } from "lucide-react";

export const NotFoundPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-32 text-center space-y-6">
      <div className="inline-flex p-4 bg-surface-elevated border border-border rounded-2xl font-mono text-4xl text-emerald-400 font-bold">
        404
      </div>
      <h1 className="text-3xl sm:text-4xl font-bold text-slate-100">Page Not Found</h1>
      <p className="text-slate-400 max-w-md mx-auto">
        The requested URL path does not exist on Islam Mekawy's portfolio.
      </p>
      <div>
        <Link to="/">
          <Button variant="accent" className="font-mono gap-2">
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Portfolio</span>
          </Button>
        </Link>
      </div>
    </div>
  );
};
