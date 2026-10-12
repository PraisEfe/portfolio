import React from "react";
import { ArrowUp, Mail, Heart } from "lucide-react";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "./SocialIcons";
import { personalInfo, navLinks } from "../data/portfolioData";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="mt-16 pb-12 border-t border-slate-200/80 dark:border-slate-800 pt-10">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand & Monogram */}
        <div className="flex items-center gap-3">
          <span className="w-8 h-8 rounded-xl bg-gradient-to-tr from-[#2E9FB1] to-[#33A1B2] flex items-center justify-center text-white font-bold text-sm shadow-xs">
            G
          </span>
          <div>
            <p className="font-bold text-slate-900 dark:text-white text-sm">{personalInfo.name}</p>
            <p className="text-xs text-slate-500 dark:text-slate-400">{personalInfo.title}</p>
          </div>
        </div>

        {/* Quick Nav Links */}
        <nav className="flex flex-wrap items-center justify-center gap-4 text-xs font-medium text-slate-600 dark:text-slate-400">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-[#2E9FB1] dark:hover:text-teal-300 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Social Icons & Back to Top */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400">
            <a
              href={personalInfo.socials.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="p-2 rounded-lg hover:bg-slate-200/60 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="p-2 rounded-lg hover:bg-slate-200/60 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.socials.twitter}
              target="_blank"
              rel="noreferrer"
              aria-label="Twitter"
              className="p-2 rounded-lg hover:bg-slate-200/60 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              <TwitterIcon className="w-4 h-4" />
            </a>
          </div>

          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="p-2.5 rounded-full bg-slate-900 dark:bg-slate-800 text-white dark:text-teal-300 hover:bg-slate-800 dark:hover:bg-slate-700 transition-all shadow-xs hover:shadow-sm cursor-pointer"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500 dark:text-slate-400">
        <p>
          &copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
        </p>
        <p className="flex items-center gap-1">
          Engineered with React 19 &amp; Tailwind CSS
        </p>
      </div>
    </footer>
  );
}
