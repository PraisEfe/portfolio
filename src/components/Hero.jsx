import { motion } from "framer-motion";
import { ArrowUpRight, ArrowDown, Code2, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./SocialIcons";
import profileImage from "../assets/UCH_2072.jpg";
import { personalInfo } from "../data/portfolioData";

export default function Hero() {
  return (
    <section id="about" className="hero-section">
      <div className="hero-grid">
        <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7 }} className="hero-copy">
          <div className="availability"><span /> Available for new opportunities</div>
          <p className="eyebrow">PRAISE OROGUN / FRONTEND DEVELOPER</p>
          <h1>Thoughtful design.<br /><span className="hero-accent">Exceptional</span><br />digital experiences<span className="accent-dot">.</span></h1>
          <p className="hero-description">I turn complex ideas into intuitive interfaces. Building for the web with a designer’s eye and an engineer’s attention to detail.</p>
          <div className="hero-actions">
            <a href="#projects" className="primary-action">Explore my work <ArrowUpRight size={18} /></a>
            <a href="#contact" className="secondary-action">Let’s talk <Mail size={17} /></a>
          </div>
          <div className="hero-socials"><span>FIND ME ON</span><a href={personalInfo.socials.github} target="_blank" rel="noreferrer" aria-label="GitHub profile"><GithubIcon className="w-5 h-5" /></a><a href={personalInfo.socials.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn profile"><LinkedinIcon className="w-5 h-5" /></a><span className="social-rule" /><span>LAGOS, NG · REMOTE WORLDWIDE</span></div>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .8, delay: .15 }} className="portrait-stage">
          <div className="portrait-orbit" aria-hidden="true" />
          <div className="portrait-caption"><span>01 / THE PERSON BEHIND THE PIXELS</span><ArrowUpRight size={16} /></div>
          <div className="portrait-frame"><img src={profileImage} alt="Praise Orogun" fetchPriority="high" /><div className="portrait-label"><span>Praise Orogun</span><span>Developer. Designer. Builder.</span></div></div>
          <div className="code-badge float-gently"><Code2 size={20} /><div><span>Crafted with care</span><small>React · Tailwind · Motion</small></div><span className="code-badge-dot" /></div>
          <div className="experience-badge"><strong>{personalInfo.experienceYears}</strong><span>YEARS OF<br />BUILDING FOR THE WEB</span></div>
        </motion.div>
      </div>
      <div className="hero-bottom"><span>DESIGN WITH INTENTION. BUILD WITH PRECISION.</span><a href="#projects">SCROLL TO EXPLORE <ArrowDown size={15} /></a></div>
      <div className="craft-strip" aria-label="Specialties"><span>Interfaces that feel right.</span><span>React & modern JavaScript</span><i /> <span>Accessible by design</span><i /><span>Details that make a difference</span><ArrowUpRight size={22} /></div>
    </section>
  );
}
