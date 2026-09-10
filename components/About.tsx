"use client";

import { motion } from "framer-motion";
import { GraduationCap, Briefcase } from "lucide-react";

interface TimelineItem {
  year: string;
  title: string;
  institution?: string;
  description: string;
}

const easeOutExpo = [0.16, 1, 0.3, 1] as const;

const headerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const headerItemVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: easeOutExpo,
    },
  },
};

const dividerVariants = {
  hidden: { scaleX: 0, opacity: 0 },
  visible: {
    scaleX: 1,
    opacity: 1,
    transition: {
      duration: 1,
      ease: easeOutExpo,
    },
  },
};

const contentVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.05,
    },
  },
};

const bioVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: easeOutExpo,
    },
  },
};

const timelineContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const timelineItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: easeOutExpo,
    },
  },
};

export default function About() {
  const educationTimeline: TimelineItem[] = [
    {
      year: "2025–2026",
      title: "Full-Stack Web Development",
      institution: "Mentrex Academy",
      description:
        "Intensive software engineering curriculum focusing on full-stack web application development, real-time communication systems, database architectures, and API integrations.",
    },
    {
      year: "2023–2025",
      title: "Higher Secondary",
      description:
        "Secondary education focusing on science, mathematics, and computer applications, building the technical foundations for systems engineering.",
    },
  ];

  return (
    <section
      id="about"
      className="relative w-full py-24 px-6 md:py-32 md:px-12 bg-[var(--color-sand)] text-[var(--color-charcoal)] border-t border-[var(--border-color)] transition-colors duration-800"
    >
      <div className="max-w-7xl mx-auto flex flex-col space-y-16">
        {/* Section Header */}
        <motion.div
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10% 0px" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
        >
          <motion.div variants={headerItemVariants} className="lg:col-span-6">
            <h2 className="font-syne font-bold text-5xl md:text-7xl uppercase tracking-tighter text-[var(--color-charcoal)]">
              Journey /
            </h2>
          </motion.div>
          <motion.div variants={headerItemVariants} className="lg:col-span-6 lg:pl-12 flex flex-col md:flex-row md:space-x-12 space-y-6 md:space-y-0">
            <div className="font-inter text-xs tracking-widest text-zinc-500 uppercase shrink-0 pt-1">
              (About Me)
            </div>
            <p className="font-inter text-zinc-700 text-base md:text-lg leading-relaxed">
              "I enjoy solving complex problems and turning logical ideas into simple, working solutions."
            </p>
          </motion.div>
        </motion.div>

        {/* Divider Line */}
        <motion.div
          variants={dividerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10% 0px" }}
          className="w-full h-[1px] bg-[var(--border-color)] origin-left"
        />

        {/* Main Content Layout */}
        <motion.div
          variants={contentVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10% 0px" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start"
        >
          {/* Bio Description (Left Column) */}
          <motion.div variants={bioVariants} className="lg:col-span-6 flex flex-col space-y-6">
            <p className="font-inter text-zinc-800 text-base md:text-lg leading-relaxed">
              I am a Software Developer who builds full-stack web applications, AI-powered systems, scalable backend architectures, and responsive user experiences. My focus lies in designing modular and clean systems that perform well at scale.
            </p>
            <p className="font-inter text-zinc-700 text-sm md:text-base leading-relaxed">
              I approach development with a logical and systems-first mindset. From crafting precise document intelligence pipelines to implementing multi-client booking workflows, I look for clean patterns and optimized performance. My journey is built on constant learning, refining code architectures, and deploying reliable solutions.
            </p>
          </motion.div>

          {/* Education Timeline (Right Column) */}
          <motion.div variants={bioVariants} className="lg:col-span-6 flex flex-col space-y-8">
            <h3 className="font-syne font-bold text-xs tracking-widest text-zinc-500 uppercase">
              Education & Milestones
            </h3>

            <motion.div
              variants={timelineContainerVariants}
              className="relative border-l border-[var(--border-color)] pl-6 md:pl-8 ml-3 space-y-12"
            >
              {educationTimeline.map((item, index) => (
                <motion.div
                  key={index}
                  variants={timelineItemVariants}
                  className="relative group"
                >
                  {/* Timeline bullet dot */}
                  <div className="absolute -left-[31px] md:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-[var(--color-sand)] border border-[var(--color-charcoal)] group-hover:bg-[var(--color-charcoal)] transition-colors duration-300 flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-transparent group-hover:bg-[var(--color-sand)] transition-colors duration-300" />
                  </div>

                  {/* Year Tag */}
                  <span className="font-syne font-bold text-xs tracking-wider text-zinc-500 block mb-2">
                    {item.year}
                  </span>

                  {/* Title & Institution */}
                  <h4 className="font-syne font-bold text-xl md:text-2xl text-[var(--color-charcoal)] mb-2">
                    {item.title}
                    {item.institution && (
                      <span className="text-zinc-500 font-inter text-sm font-medium block md:inline md:ml-2">
                        // {item.institution}
                      </span>
                    )}
                  </h4>

                  {/* Description */}
                  <p className="font-inter text-zinc-600 text-sm md:text-base leading-relaxed max-w-md">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
