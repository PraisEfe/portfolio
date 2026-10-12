import React from "react";
import { motion } from "framer-motion";
import {
  Code2,
  FileCode,
  FileType2,
  Layout,
  Globe,
  Palette,
  Sparkles,
  Paintbrush,
  Smartphone,
  Eye,
  Workflow,
  RefreshCw,
  Layers,
  Send,
  Zap,
  GitBranch,
  Gauge,
  Cloud,
  CheckCircle2,
  LayoutTemplate,
} from "lucide-react";
import { skillCategories } from "../data/portfolioData";

const iconMap = {
  Code2,
  FileCode,
  FileType2,
  Layout,
  Globe,
  Palette,
  Sparkles,
  Paintbrush,
  Smartphone,
  Eye,
  Workflow,
  RefreshCw,
  Layers,
  Send,
  Zap,
  GitBranch,
  Gauge,
  Cloud,
  LayoutTemplate,
};

export default function Skills() {
  return (
    <section id="skills" className="py-12 sm:py-16">
      <div className="space-y-4 mb-10 text-center sm:text-left">
        <div className="inline-flex items-center gap-2 bg-[#DEECEE] dark:bg-teal-950/60 text-[#2E9FB1] dark:text-teal-300 text-xs font-bold tracking-wider uppercase px-3 py-1 rounded-full">
          <span>Technical Proficiency</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Tools &amp; Technologies
        </h2>
        <p className="text-slate-600 dark:text-slate-400 text-base max-w-2xl">
          A production-tested stack focused on performance, accessible semantics, responsive layouts, and frictionless developer ergonomics.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillCategories.map((cat, idx) => (
          <motion.div
            key={cat.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200/80 dark:border-slate-800 shadow-xs hover:shadow-md hover:border-slate-300 dark:hover:border-slate-700 transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">{cat.category}</h3>
                <span className="text-xs text-slate-400 font-mono">0{idx + 1}</span>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 mb-5">{cat.description}</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {cat.skills.map((skill) => {
                  const IconComponent = iconMap[skill.icon] || CheckCircle2;
                  return (
                    <div
                      key={skill.name}
                      className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50/70 dark:bg-slate-800/60 hover:bg-teal-50/50 dark:hover:bg-slate-800 border border-slate-100 dark:border-slate-700/60 hover:border-teal-200/60 dark:hover:border-teal-800/80 transition-colors group"
                    >
                      <div className="flex items-center gap-2.5">
                        <span className="p-1.5 rounded-lg bg-white dark:bg-slate-900 text-[#2E9FB1] dark:text-teal-400 group-hover:scale-110 shadow-2xs transition-transform">
                          <IconComponent className="w-4 h-4" />
                        </span>
                        <span className="text-xs font-semibold text-slate-800 dark:text-slate-200">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-[10px] font-medium text-slate-500 dark:text-slate-400 bg-white dark:bg-slate-900 px-2 py-0.5 rounded-md border border-slate-200/60 dark:border-slate-700">
                        {skill.level}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
