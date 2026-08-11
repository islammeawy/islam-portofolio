import React from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-background text-slate-100 flex flex-col selection:bg-emerald-500/20 selection:text-emerald-300">
      <Navbar />
      <main className="flex-1 pt-20">{children}</main>
      <Footer />
    </div>
  );
};
