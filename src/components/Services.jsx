import React from "react";
import { motion } from "framer-motion";
import { Code2, LayoutTemplate, Gauge, Sparkles, CheckCircle2 } from "lucide-react";
import { services } from "../data/portfolioData";

const iconMap = {
  Code2,
  LayoutTemplate,
  Gauge,
  Sparkles,
};

export default function Services() {
  return (
    <section id="services" className="py-12 sm:py-16">
      <div className="space-y-3 mb-10 text-center sm:text-left">
        <div className="inline-flex items-center gap-2 bg-[#DEECEE] dark:bg-teal-950/60 text-[#2E9FB1] dark:text-teal-300 text-xs font-bold tracking-wider uppercase px-3 py-1 rounded-full">
          <span>What I Do</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          How Can I Assist Your Team?
        </h2>
        <p className="text-slate-600 dark:text-slate-400 text-base max-w-2xl">
          From translating complex product specs to shipping fast, responsive, and maintainable user interfaces.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((service, idx) => {
          const Icon = iconMap[service.icon] || Code2;
          return (
            <motion.div
              key={service.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="group bg-white dark:bg-slate-900 p-6 sm:p-7 rounded-3xl border border-slate-200/80 dark:border-slate-800 shadow-xs hover:shadow-lg hover:border-slate-300 dark:hover:border-slate-700 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-teal-50 dark:bg-teal-950/60 border border-teal-100 dark:border-teal-800/80 flex items-center justify-center text-[#2E9FB1] dark:text-teal-300 group-hover:scale-105 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-2xl font-bold font-mono text-slate-200 dark:text-slate-800 group-hover:text-[#2E9FB1]/40 transition-colors">
                    {service.number}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                  {service.description}
                </p>
              </div>

              {/* Highlight list */}
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 space-y-2">
                {service.highlights.map((item) => (
                  <div key={item} className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#2E9FB1] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
