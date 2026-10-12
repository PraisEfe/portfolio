import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle2, Copy, Check, Mail, MapPin, Clock } from "lucide-react";
import { personalInfo } from "../data/portfolioData";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "Web Development",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: "", email: "", projectType: "Web Development", message: "" });
    }, 1200);
  };

  return (
    <section id="contact" className="py-12 sm:py-16">
      <div className="bg-gradient-to-br from-[#EDEEFE] via-[#F5F6FF] to-white dark:from-slate-900 dark:via-slate-900/90 dark:to-slate-950 rounded-3xl p-6 sm:p-10 lg:p-14 border border-indigo-100/80 dark:border-slate-800 shadow-md">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center space-y-3 mb-10">
            <span className="text-xs font-bold tracking-wider uppercase text-indigo-700 dark:text-teal-300 bg-indigo-100/70 dark:bg-teal-950/60 px-3 py-1 rounded-full">
              Get in Touch
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Let's Bring Your Vision To Life
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base max-w-lg mx-auto">
              Have a project in mind, need a full-time frontend developer, or just want to chat tech? Send a message below.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Direct Info */}
            <div className="lg:col-span-5 space-y-5 bg-white/70 dark:bg-slate-800/60 backdrop-blur-md p-6 rounded-2xl border border-white/80 dark:border-slate-700/80 shadow-xs">
              <h3 className="font-bold text-slate-900 dark:text-white text-base">Direct Channels</h3>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-xl bg-teal-50 dark:bg-teal-950/60 text-[#2E9FB1] dark:text-teal-300 shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">Email Address</p>
                    <button
                      onClick={handleCopyEmail}
                      className="group flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-slate-900 dark:text-white hover:text-[#2E9FB1] dark:hover:text-teal-300 transition-colors mt-0.5 text-left cursor-pointer"
                      title="Click to copy email"
                    >
                      <span>{personalInfo.email}</span>
                      {copiedEmail ? (
                        <Check className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" />
                      ) : (
                        <Copy className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#2E9FB1]" />
                      )}
                    </button>
                    {copiedEmail && (
                      <p className="text-[10px] text-teal-600 dark:text-teal-400 font-medium mt-0.5">Copied to clipboard!</p>
                    )}
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-xl bg-teal-50 dark:bg-teal-950/60 text-[#2E9FB1] dark:text-teal-300 shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">Location</p>
                    <p className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200 mt-0.5">
                      {personalInfo.location}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-xl bg-teal-50 dark:bg-teal-950/60 text-[#2E9FB1] dark:text-teal-300 shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">Response Time</p>
                    <p className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200 mt-0.5">
                      Within 24 Hours
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Form */}
            <div className="lg:col-span-7 bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-xs">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-10 text-center space-y-4"
                >
                  <div className="w-14 h-14 bg-teal-50 dark:bg-teal-950/60 text-[#2E9FB1] dark:text-teal-300 rounded-full mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Message Received!</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 max-w-sm mx-auto">
                    Thanks for reaching out! I've received your note and will get back to you promptly.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="inline-flex items-center text-xs font-semibold text-[#2E9FB1] dark:text-teal-300 hover:underline pt-2 cursor-pointer"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:border-[#2E9FB1] focus:bg-white dark:focus:bg-slate-900 focus:ring-2 focus:ring-[#2E9FB1]/20 rounded-xl px-4 py-2.5 text-sm text-slate-900 dark:text-white outline-none transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com"
                        className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:border-[#2E9FB1] focus:bg-white dark:focus:bg-slate-900 focus:ring-2 focus:ring-[#2E9FB1]/20 rounded-xl px-4 py-2.5 text-sm text-slate-900 dark:text-white outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                      Subject / Project Scope
                    </label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:border-[#2E9FB1] focus:bg-white dark:focus:bg-slate-900 focus:ring-2 focus:ring-[#2E9FB1]/20 rounded-xl px-4 py-2.5 text-sm text-slate-900 dark:text-white outline-none transition-all"
                    >
                      <option value="Web Development">Full Web Application Development</option>
                      <option value="Figma to Code">Figma Design to React / Tailwind</option>
                      <option value="Full-time Role">Full-Time / Contract Engineering Role</option>
                      <option value="Performance Audit">Performance &amp; UI Consultation</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                      Message / Work Description *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell me about your project, goals, and timeline..."
                      className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:border-[#2E9FB1] focus:bg-white dark:focus:bg-slate-900 focus:ring-2 focus:ring-[#2E9FB1]/20 rounded-xl px-4 py-3 text-sm text-slate-900 dark:text-white outline-none transition-all resize-y"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 bg-slate-900 dark:bg-[#2E9FB1] hover:bg-slate-800 dark:hover:bg-[#258999] disabled:bg-slate-400 text-white font-semibold text-sm py-3 px-6 rounded-xl shadow-md transition-all active:scale-[0.99] cursor-pointer"
                  >
                    {isSubmitting ? (
                      <span>Sending Message...</span>
                    ) : (
                      <>
                        <span>Submit Proposal</span>
                        <Send className="w-4 h-4 text-teal-300 dark:text-white" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
