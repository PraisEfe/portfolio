import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Sparkles, Star, GitFork, FolderGit2, RefreshCw, AlertCircle } from "lucide-react";
import { GithubIcon } from "./SocialIcons";
import { featuredProjects, personalInfo } from "../data/portfolioData";

export default function Projects() {
  const [activeTab, setActiveTab] = useState("featured"); // "featured" | "github"
  const [filter, setFilter] = useState("All");

  // GitHub live repos state
  const [repos, setRepos] = useState([]);
  const [loadingRepos, setLoadingRepos] = useState(false);
  const [repoError, setRepoError] = useState(null);

  const categories = ["All", "Web Application", "E-Commerce", "Fintech"];

  const filteredProjects =
    filter === "All"
      ? featuredProjects
      : featuredProjects.filter((p) => p.category === filter);

  const fetchGithubRepos = async () => {
    setLoadingRepos(true);
    setRepoError(null);
    try {
      const response = await fetch(
        `https://api.github.com/users/${personalInfo.githubUsername}/repos?sort=updated&per_page=6`
      );
      if (!response.ok) {
        throw new Error(`GitHub API responded with status ${response.status}`);
      }
      const data = await response.json();
      setRepos(data);
    } catch (err) {
      console.error("Failed to load GitHub repos:", err);
      setRepoError("Unable to load live GitHub repositories right now. You can visit the profile directly.");
    } finally {
      setLoadingRepos(false);
    }
  };

  useEffect(() => {
    if (activeTab === "github" && repos.length === 0) {
      fetchGithubRepos();
    }
  }, [activeTab]);

  return (
    <section id="projects" className="py-12 sm:py-16">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 bg-[#DEECEE] dark:bg-teal-950/60 text-[#2E9FB1] dark:text-teal-300 text-xs font-bold tracking-wider uppercase px-3 py-1 rounded-full">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Portfolio &amp; Open Source</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Projects &amp; GitHub Repositories
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base max-w-xl">
            Explore featured product case studies or inspect live code repositories directly connected to GitHub.
          </p>
        </div>

        {/* View Mode Switcher: Featured vs Live GitHub */}
        <div className="flex items-center p-1.5 rounded-2xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80">
          <button
            onClick={() => setActiveTab("featured")}
            className={`text-xs font-semibold px-4 py-2 rounded-xl transition-all cursor-pointer ${
              activeTab === "featured"
                ? "bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-xs font-bold"
                : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
            }`}
          >
            Featured Case Studies
          </button>
          <button
            onClick={() => setActiveTab("github")}
            className={`flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-xl transition-all cursor-pointer ${
              activeTab === "github"
                ? "bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-xs font-bold"
                : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
            }`}
          >
            <GithubIcon className="w-3.5 h-3.5" />
            <span>GitHub Repositories</span>
          </button>
        </div>
      </div>

      {/* Case Studies View */}
      {activeTab === "featured" && (
        <div className="space-y-8">
          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`text-xs font-semibold px-3.5 py-1.5 rounded-full transition-all cursor-pointer ${
                  filter === cat
                    ? "bg-[#2E9FB1] text-white shadow-xs"
                    : "bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Featured Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, idx) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.35, delay: idx * 0.05 }}
                  className="group bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/80 dark:border-slate-800 shadow-xs hover:shadow-xl hover:border-slate-300 dark:hover:border-slate-700 transition-all flex flex-col justify-between overflow-hidden"
                >
                  <div>
                    {/* Visual Header / Banner */}
                    <div className="relative h-44 bg-gradient-to-tr from-slate-900 via-slate-800 to-[#1e5863] p-6 flex flex-col justify-between overflow-hidden">
                      <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#33A1B2_1px,transparent_1px)] [background-size:16px_16px]"></div>
                      
                      <div className="relative z-10 flex items-center justify-between">
                        <span className="text-xs font-semibold text-teal-300 bg-white/10 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                          {project.category}
                        </span>
                        <span className="text-xs font-mono text-slate-300 bg-black/40 px-2 py-0.5 rounded-md">
                          0{project.id}
                        </span>
                      </div>

                      <div className="relative z-10">
                        <h3 className="text-xl font-bold text-white group-hover:text-teal-200 transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-xs text-slate-300 line-clamp-1 mt-1">
                          {project.tagline}
                        </p>
                      </div>
                    </div>

                    {/* Content Body */}
                    <div className="p-6 space-y-4">
                      <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                        {project.description}
                      </p>

                      <div className="p-2.5 rounded-xl bg-teal-50/70 dark:bg-teal-950/40 border border-teal-100 dark:border-teal-800/60 flex items-center gap-2 text-xs font-medium text-[#207B89] dark:text-teal-300">
                        <Sparkles className="w-3.5 h-3.5 shrink-0 text-[#2E9FB1]" />
                        <span>{project.metrics}</span>
                      </div>

                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-[11px] font-medium text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 px-2.5 py-1 rounded-lg border border-slate-200/50 dark:border-slate-700/50"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons Footer */}
                  <div className="px-6 pb-6 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between gap-3">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 bg-[#2E9FB1] hover:bg-[#258999] text-white text-xs font-semibold py-2.5 px-4 rounded-xl shadow-xs transition-colors"
                    >
                      <span>Live Preview</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-xs font-semibold py-2.5 px-4 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-slate-300 transition-colors"
                    >
                      <GithubIcon className="w-4 h-4" />
                      <span>Code</span>
                    </a>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      )}

      {/* Live GitHub Repositories View */}
      {activeTab === "github" && (
        <div className="space-y-6">
          {/* GitHub Header Banner */}
          <div className="p-6 rounded-3xl bg-slate-900 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4 border border-slate-800 shadow-md">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-white/10 rounded-2xl text-teal-300">
                <GithubIcon className="w-7 h-7" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-white">
                  GitHub Profile: @{personalInfo.githubUsername}
                </h3>
                <p className="text-xs text-slate-300">
                  Real-time repositories synchronized directly via GitHub REST API
                </p>
              </div>
            </div>

            <a
              href={`https://github.com/${personalInfo.githubUsername}?tab=repositories`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-[#2E9FB1] hover:bg-[#258999] text-white text-xs font-semibold px-4 py-2.5 rounded-xl shadow-xs self-start sm:self-auto transition-colors"
            >
              <span>View All Repositories</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Loading State */}
          {loadingRepos && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-8">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div
                  key={i}
                  className="animate-pulse bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-4"
                >
                  <div className="h-5 bg-slate-200 dark:bg-slate-800 rounded-md w-3/4"></div>
                  <div className="h-4 bg-slate-100 dark:bg-slate-800/60 rounded-md w-full"></div>
                  <div className="h-4 bg-slate-100 dark:bg-slate-800/60 rounded-md w-1/2"></div>
                </div>
              ))}
            </div>
          )}

          {/* Error / Fallback State */}
          {repoError && (
            <div className="p-6 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800/60 text-amber-800 dark:text-amber-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <AlertCircle className="w-5 h-5 text-amber-600 dark:text-amber-400 shrink-0" />
                <p className="text-sm font-medium">{repoError}</p>
              </div>
              <button
                onClick={fetchGithubRepos}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-900 dark:text-amber-200 hover:underline cursor-pointer"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Retry</span>
              </button>
            </div>
          )}

          {/* Repositories Cards Grid */}
          {!loadingRepos && repos.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {repos.map((repo) => (
                <motion.div
                  key={repo.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="group bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-xs hover:shadow-md hover:border-slate-300 dark:hover:border-slate-700 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <div className="flex items-center gap-2 text-slate-800 dark:text-white font-bold text-sm">
                        <FolderGit2 className="w-4 h-4 text-[#2E9FB1] shrink-0" />
                        <span className="truncate group-hover:text-[#2E9FB1] transition-colors">
                          {repo.name}
                        </span>
                      </div>
                      <span className="text-[10px] font-medium uppercase px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500">
                        {repo.visibility || "Public"}
                      </span>
                    </div>

                    <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-3 leading-relaxed mb-4">
                      {repo.description || "No description provided for this repository."}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                    <div className="flex items-center gap-3">
                      {repo.language && (
                        <span className="flex items-center gap-1 font-medium text-slate-700 dark:text-slate-300">
                          <span className="w-2 h-2 rounded-full bg-[#2E9FB1]"></span>
                          {repo.language}
                        </span>
                      )}
                      <span className="flex items-center gap-1">
                        <Star className="w-3.5 h-3.5 text-amber-500" />
                        {repo.stargazers_count}
                      </span>
                      <span className="flex items-center gap-1">
                        <GitFork className="w-3.5 h-3.5 text-slate-400" />
                        {repo.forks_count}
                      </span>
                    </div>

                    <a
                      href={repo.html_url}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`View ${repo.name} repository on GitHub`}
                      className="p-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-[#2E9FB1] transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      )}
    </section>
  );
}
