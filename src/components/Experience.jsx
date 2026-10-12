import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";
import { workExperience } from "../data/portfolioData";

export default function Experience() {
  return (
    <section id="experience" className="py-12 sm:py-16">
      <div className="space-y-3 mb-10 text-center sm:text-left">
        <div className="inline-flex items-center gap-2 bg-[#DEECEE] dark:bg-teal-950/60 text-[#2E9FB1] dark:text-teal-300 text-xs font-bold tracking-wider uppercase px-3 py-1 rounded-full">
          <Briefcase className="w-3.5 h-3.5" />
          <span>Work History</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Experience &amp; Career Milestones
        </h2>
        <p className="text-slate-600 dark:text-slate-400 text-base max-w-2xl">
          Track record of shipping clean code, collaborating with cross-functional teams, and building reliable interfaces.
        </p>
      </div>

      <div className="relative border-l-2 border-slate-200 dark:border-slate-800 ml-4 sm:ml-6 space-y-8">
        {workExperience.map((exp, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            className="relative pl-6 sm:pl-8 group"
          >
            {/* Timeline node dot */}
            <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-white dark:bg-slate-900 border-4 border-[#2E9FB1] shadow-xs group-hover:scale-125 transition-transform"></div>

            <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-xs hover:shadow-md hover:border-slate-300 dark:hover:border-slate-700 transition-all">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">{exp.role}</h3>
                  <p className="text-sm font-semibold text-[#2E9FB1] dark:text-teal-300">{exp.company}</p>
                </div>
                <div className="flex items-center gap-3 text-xs text-slate-500 dark:text-slate-400">
                  <span className="flex items-center gap-1 bg-slate-100 dark:bg-slate-800 px-2.5 py-1 rounded-md">
                    <Calendar className="w-3 h-3 text-slate-400" />
                    {exp.period}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-slate-400" />
                    {exp.location}
                  </span>
                </div>
              </div>

              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                {exp.description}
              </p>

              {/* Skills used */}
              <div className="flex flex-wrap gap-1.5">
                {exp.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-[11px] font-medium text-slate-600 dark:text-slate-300 bg-slate-50 dark:bg-slate-800 px-2.5 py-0.5 rounded-md border border-slate-200/50 dark:border-slate-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
