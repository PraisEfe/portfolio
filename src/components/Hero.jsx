import React from "react";
import { motion } from "framer-motion";
import { ArrowDownRight, Mail, Sparkles, ExternalLink, Code2 } from "lucide-react";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "./SocialIcons";
import profileImage from "../assets/UCH_2072.jpg";
import { personalInfo } from "../data/portfolioData";

export default function Hero() {
  return (
    <section id="about" className="pt-6 sm:pt-10 pb-12 sm:pb-16">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
        {/* Left Column: Headline & Intro */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="lg:col-span-7 flex flex-col items-start gap-5"
        >
          {/* Live Availability Badge */}
          <div className="inline-flex items-center gap-2.5 bg-teal-50/80 dark:bg-teal-950/60 border border-teal-200/60 dark:border-teal-800/80 px-3.5 py-1.5 rounded-full shadow-xs backdrop-blur-xs">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#33A1B2] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#33A1B2]"></span>
            </span>
            <span className="text-[#207B89] dark:text-teal-300 text-xs font-semibold tracking-wide uppercase">
              {personalInfo.status}
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.1]">
            Hi, I'm <span className="text-[#2E9FB1]">{personalInfo.name}</span>. <br />
            Frontend Developer &amp; UI Specialist.
          </h1>

          {/* Subtitle / Value Proposition */}
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-xl leading-relaxed">
            {personalInfo.summary}
          </p>

          {/* Primary Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 bg-[#2E9FB1] hover:bg-[#258999] text-white font-medium text-sm sm:text-base px-6 py-3 rounded-full shadow-md shadow-teal-500/20 hover:shadow-lg transition-all active:scale-95 cursor-pointer"
            >
              <span>Explore Projects</span>
              <ArrowDownRight className="w-4 h-4" />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-800 dark:text-white font-medium text-sm sm:text-base px-6 py-3 rounded-full border border-slate-200 dark:border-slate-700 hover:border-slate-300 shadow-xs transition-all active:scale-95 cursor-pointer"
            >
              <span>Contact Me</span>
              <Mail className="w-4 h-4 text-slate-500 dark:text-slate-300" />
            </a>
          </div>

          {/* Social Links & Highlights */}
          <div className="pt-4 flex items-center gap-4 text-slate-500 dark:text-slate-400">
            <span className="text-xs uppercase font-semibold tracking-wider text-slate-400 dark:text-slate-500">
              Connect:
            </span>
            <div className="flex items-center gap-2">
              <a
                href={personalInfo.socials.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub Profile"
                className="p-2.5 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white shadow-xs transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn Profile"
                className="p-2.5 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white shadow-xs transition-colors"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.socials.twitter}
                target="_blank"
                rel="noreferrer"
                aria-label="Twitter Profile"
                className="p-2.5 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white shadow-xs transition-colors"
              >
                <TwitterIcon className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.socials.email}
                aria-label="Email Me"
                className="p-2.5 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white shadow-xs transition-colors"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Hero Profile Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="lg:col-span-5 flex justify-center lg:justify-end relative"
        >
          <div className="relative group max-w-xs sm:max-w-sm">
            {/* Subtle Gradient Glow Ring behind photo */}
            <div className="absolute -inset-2 bg-gradient-to-tr from-[#2E9FB1] to-teal-400 dark:to-teal-600 rounded-3xl blur-lg opacity-40 dark:opacity-30 group-hover:opacity-60 transition duration-500"></div>

            {/* Profile Image Frame */}
            <div className="relative bg-white dark:bg-slate-800 p-2.5 rounded-3xl shadow-xl border border-slate-100 dark:border-slate-700">
              <img
                src={profileImage}
                alt={personalInfo.name}
                className="w-full h-80 sm:h-96 object-cover object-top rounded-2xl"
              />

              {/* Floating Badge 1: Experience */}
              <div className="absolute -bottom-4 -left-4 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border border-slate-200/80 dark:border-slate-700/80 px-4 py-2.5 rounded-2xl shadow-lg flex items-center gap-2.5">
                <div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">Experience</p>
                  <p className="text-sm font-bold text-slate-900 dark:text-white">{personalInfo.experienceYears} Years Building UI</p>
                </div>
              </div>

            </div>
          </div>
        </motion.div>
      </div>

      {/* Impact Mission Statement Banner */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-14 sm:mt-18 bg-gradient-to-r from-[#2E9FB1] via-[#248F9F] to-[#1E7D8C] dark:from-[#1b6b77] dark:via-[#195a64] dark:to-[#134952] text-white rounded-3xl p-7 sm:p-10 shadow-xl shadow-teal-900/10 relative overflow-hidden"
      >
        <div className="absolute -right-10 -bottom-10 w-60 h-60 bg-white/10 rounded-full blur-2xl pointer-events-none"></div>
        <div className="max-w-3xl space-y-3 relative z-10">
          <span className="text-xs font-bold tracking-wider uppercase text-teal-100 bg-white/15 px-3 py-1 rounded-full">
            Engineering Philosophy
          </span>
          <p className="text-xl sm:text-2xl md:text-3xl font-medium leading-relaxed tracking-tight">
            "{personalInfo.mission}"
          </p>
        </div>
      </motion.div>
    </section>
  );
}
