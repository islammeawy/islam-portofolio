import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { siteConfig } from "../../config/site";
import { FileText, Menu, X, ArrowLeft } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../ui/Icons";
import { Button } from "../ui/Button";

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Work", href: "#work" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Notes", href: "#notes" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    setMobileMenuOpen(false);
    if (isHomePage) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      e.preventDefault();
      navigate("/" + href);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? "bg-background/90 backdrop-blur-md border-b border-border/80 py-3.5"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Brand Logo / Name */}
        <Link
          to="/"
          className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded-md"
        >
          <div className="w-8 h-8 rounded-lg bg-surface-elevated border border-border flex items-center justify-center font-mono font-bold text-emerald-400 group-hover:border-emerald-500/50 transition-colors">
            IM
          </div>
          <div className="flex flex-col">
            <span className="font-semibold text-slate-100 text-sm tracking-tight group-hover:text-emerald-400 transition-colors">
              {siteConfig.name}
            </span>
            <span className="text-xs text-slate-400 font-mono hidden sm:inline">
              Software Engineer
            </span>
          </div>
        </Link>

        {/* Back button when on sub-page */}
        {!isHomePage && (
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-xs font-mono text-emerald-400 hover:text-emerald-300 transition-colors py-1 px-3 rounded-md bg-surface-elevated border border-border"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Back to Overview
          </Link>
        )}

        {/* Desktop Navigation Links */}
        {isHomePage && (
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-xs font-mono text-slate-400 hover:text-slate-100 transition-colors py-1 hover:border-b hover:border-emerald-500/50"
              >
                {link.name}
              </a>
            ))}
          </nav>
        )}

        {/* Quick Social & Resume Actions */}
        <div className="hidden sm:flex items-center gap-2">
          <a
            href={siteConfig.links.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
          >
            <Button variant="ghost" size="sm" className="w-9 h-9 p-0 text-slate-400 hover:text-slate-100">
              <GithubIcon className="w-4 h-4" />
            </Button>
          </a>
          <a
            href={siteConfig.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
          >
            <Button variant="ghost" size="sm" className="w-9 h-9 p-0 text-slate-400 hover:text-slate-100">
              <LinkedinIcon className="w-4 h-4" />
            </Button>
          </a>
          <a
            href={siteConfig.links.resume}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="outline" size="sm" className="font-mono text-xs gap-1.5">
              <FileText className="w-3.5 h-3.5 text-emerald-400" />
              Resume
            </Button>
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex md:hidden items-center gap-2">
          <a
            href={siteConfig.links.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="sm:hidden"
          >
            <Button variant="outline" size="sm" className="font-mono text-xs px-2.5 h-8">
              Resume
            </Button>
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-400 hover:text-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded-md"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-surface-elevated/95 backdrop-blur-lg border-b border-border px-6 py-6 mt-3 space-y-4 animate-fade-in">
          {isHomePage && (
            <div className="flex flex-col space-y-3 pb-4 border-b border-border">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-sm font-mono text-slate-300 hover:text-emerald-400 transition-colors py-1"
                >
                  {link.name}
                </a>
              ))}
            </div>
          )}
          <div className="flex items-center gap-4 pt-2">
            <a
              href={siteConfig.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-mono text-slate-300 hover:text-slate-100"
            >
              <GithubIcon className="w-4 h-4" /> GitHub
            </a>
            <a
              href={siteConfig.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-mono text-slate-300 hover:text-slate-100"
            >
              <LinkedinIcon className="w-4 h-4" /> LinkedIn
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
