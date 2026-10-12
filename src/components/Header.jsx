import React, { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight, Download, Send, Sun, Moon } from "lucide-react";
import { navLinks, personalInfo } from "../data/portfolioData";

export default function Header({ theme, toggleTheme }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="sticky top-3 z-50 w-full max-w-6xl mx-auto px-4 transition-all duration-300">
      <div
        className={`flex items-center justify-between px-5 py-3.5 rounded-2xl border transition-all duration-300 ${
          isScrolled
            ? "bg-white/85 dark:bg-slate-900/85 backdrop-blur-md border-slate-200/90 dark:border-slate-800/90 shadow-lg shadow-slate-200/40 dark:shadow-black/40"
            : "bg-white/95 dark:bg-slate-900/95 border-slate-200/60 dark:border-slate-800/60 shadow-sm"
        }`}
      >
        {/* Brand / Logo */}
        <a
          href="#about"
          className="group flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#33A1B2] rounded-lg"
        >
          <span className="w-8 h-8 rounded-xl bg-gradient-to-tr from-[#2E9FB1] to-[#33A1B2] flex items-center justify-center text-white font-bold text-base shadow-sm group-hover:scale-105 transition-transform">
            G
          </span>
          <div className="flex flex-col">
            <span className="font-bold text-lg tracking-tight text-slate-900 dark:text-white group-hover:text-[#2E9FB1] transition-colors">
              {personalInfo.handle}
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white px-3 py-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right CTA Actions & Dark Mode Toggle */}
        <div className="hidden sm:flex items-center gap-2.5">
          {/* Light / Dark Mode Toggle */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle dark/light mode"
            className="p-2 rounded-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-amber-400 hover:bg-slate-100 dark:hover:bg-slate-700 transition-all shadow-2xs cursor-pointer"
            title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          >
            {theme === "dark" ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-700" />}
          </button>

          <a
            href={personalInfo.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:inline-flex items-center gap-1.5 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white px-3.5 py-2 rounded-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700/80 transition-all shadow-xs"
          >
            <Download className="w-3.5 h-3.5 text-slate-500 dark:text-slate-400" />
            Resume
          </a>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-slate-900 dark:bg-[#2E9FB1] hover:bg-slate-800 dark:hover:bg-[#258999] text-white text-xs sm:text-sm font-medium px-4 py-2 rounded-full shadow-sm hover:shadow-md transition-all active:scale-95"
          >
            <span>Let's Talk</span>
            <Send className="w-3.5 h-3.5 text-teal-300 dark:text-white" />
          </a>
        </div>

        {/* Mobile Actions: Dark Mode Toggle & Hamburger */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={toggleTheme}
            aria-label="Toggle dark/light mode"
            className="p-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-amber-400"
          >
            {theme === "dark" ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-700" />}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="p-2 rounded-xl text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#33A1B2]"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 p-5 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border border-slate-200 dark:border-slate-800 rounded-2xl shadow-xl space-y-4 animate-in fade-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-slate-700 dark:text-slate-200 hover:text-[#2E9FB1] dark:hover:text-[#2E9FB1] px-3 py-2.5 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex flex-col gap-2">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 bg-slate-900 dark:bg-[#2E9FB1] text-white text-sm font-medium py-2.5 rounded-xl shadow-xs"
            >
              <span>Contact Me</span>
              <ArrowUpRight className="w-4 h-4 text-teal-300 dark:text-white" />
            </a>
            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 text-slate-700 dark:text-slate-300 text-sm font-medium py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800"
            >
              <Download className="w-4 h-4 text-slate-500 dark:text-slate-400" />
              Download Resume
            </a>
          </div>
        </div>
      )}
    </header>
  );
}