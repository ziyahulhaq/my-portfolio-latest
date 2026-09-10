"use client";

import { motion } from "framer-motion";
import { ExternalLink, ArrowUpRight } from "lucide-react";

interface Project {
  num: string;
  name: string;
  type: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  visualComponent: React.ReactNode;
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

const projectVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.05,
    },
  },
};

const projectCardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: easeOutExpo,
    },
  },
};

const infoContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
    },
  },
};

const projectChildVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: easeOutExpo,
    },
  },
};

export default function Projects() {
  const projectsData: Project[] = [
    {
      num: "01",
      name: "Noviq",
      type: "AI-Powered Document Intelligence / RAG Platform",
      description:
        "A document-based AI intelligence platform where users can upload PDF and Word documents and ask questions about their content. Features a multi-provider RAG pipeline with semantic chunking, embeddings, Pinecone vector indexing, per-tenant data isolation, streaming chat, and automatic retry fallbacks.",
      technologies: [
        "Next.js",
        "TypeScript",
        "Prisma",
        "Pinecone",
        "OpenAI",
        "Gemini",
        "GROQ SDK",
        "JWT / bcrypt",
        "ImageKit",
        "Tailwind CSS v4",
        "Shadcn UI",
      ],
      githubUrl: "https://github.com/ziyahulhaq/Contextify",
      visualComponent: (
        <svg viewBox="0 0 400 300" className="w-full h-full text-[var(--color-sand)]" fill="none">
          {/* Background grid */}
          <g stroke="currentColor" strokeWidth="0.5" strokeOpacity="0.1">
            <line x1="0" y1="50" x2="400" y2="50" />
            <line x1="0" y1="100" x2="400" y2="100" />
            <line x1="0" y1="150" x2="400" y2="150" />
            <line x1="0" y1="200" x2="400" y2="200" />
            <line x1="0" y1="250" x2="400" y2="250" />
            <line x1="100" y1="0" x2="100" y2="300" />
            <line x1="200" y1="0" x2="200" y2="300" />
            <line x1="300" y1="0" x2="300" y2="300" />
          </g>

          {/* Ingestion UI card */}
          <rect x="30" y="40" width="130" height="180" rx="8" fill="#1e1e1e" stroke="currentColor" strokeWidth="1" strokeOpacity="0.3" />
          <path d="M 50 65 L 140 65 M 50 85 L 120 85 M 50 105 L 130 105" stroke="currentColor" strokeWidth="2" strokeOpacity="0.4" strokeLinecap="round" />
          <rect x="50" y="130" width="90" height="40" rx="4" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="3,3" strokeOpacity="0.5" />
          <text x="65" y="153" fill="currentColor" className="font-mono text-[9px] font-bold opacity-60">DOC_CHUNK.bin</text>

          {/* Connection pathway */}
          <path d="M 160 130 C 200 130, 200 150, 240 150" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.5" strokeDasharray="5,5" className="animate-[dash_2s_linear_infinite]" />

          {/* Vector Db / Pinecone indexing UI */}
          <rect x="240" y="80" width="130" height="140" rx="8" fill="#1e1e1e" stroke="currentColor" strokeWidth="1" strokeOpacity="0.3" />
          <circle cx="280" cy="120" r="15" fill="none" stroke="currentColor" strokeWidth="1" strokeOpacity="0.4" />
          <circle cx="330" cy="135" r="15" fill="none" stroke="currentColor" strokeWidth="1" strokeOpacity="0.4" />
          <circle cx="295" cy="170" r="15" fill="none" stroke="currentColor" strokeWidth="1" strokeOpacity="0.4" />
          {/* Nodes linking */}
          <line x1="280" y1="120" x2="330" y2="135" stroke="currentColor" strokeWidth="1" strokeOpacity="0.3" />
          <line x1="330" y1="135" x2="295" y2="170" stroke="currentColor" strokeWidth="1" strokeOpacity="0.3" />
          <line x1="295" y1="170" x2="280" y2="120" stroke="currentColor" strokeWidth="1" strokeOpacity="0.3" />
          {/* Active node */}
          <circle cx="330" cy="135" r="5" fill="currentColor" className="text-emerald-500 animate-pulse" />
          <text x="255" y="105" fill="currentColor" className="font-syne text-[8px] tracking-widest font-bold opacity-40">VECTOR_SEARCH</text>
        </svg>
      ),
    },
    {
      num: "02",
      name: "Nivo",
      type: "Salon Platform",
      description:
        "A multi-interface salon booking and client engagement ecosystem consisting of three custom interfaces: a Customer Mobile Application, a Salon Owner Mobile Application, and a Web Application for walking clients. Designed to centralize salon schedules, bookings, queue coordination, and availability workflows.",
      technologies: ["React Native", "Expo", "React", "Next.js", "Node.js", "Express.js", "PostgreSQL", "Prisma ORM", "REST APIs", "WebSockets"],
      visualComponent: (
        <svg viewBox="0 0 400 300" className="w-full h-full text-[var(--color-sand)]" fill="none">
          {/* Background grid */}
          <g stroke="currentColor" strokeWidth="0.5" strokeOpacity="0.1">
            <line x1="0" y1="50" x2="400" y2="50" />
            <line x1="0" y1="150" x2="400" y2="150" />
            <line x1="0" y1="250" x2="400" y2="250" />
            <line x1="100" y1="0" x2="100" y2="300" />
            <line x1="300" y1="0" x2="300" y2="300" />
          </g>

          {/* Interface 1: Web App (Background) */}
          <rect x="50" y="50" width="220" height="150" rx="8" fill="#1e1e1e" stroke="currentColor" strokeWidth="1" strokeOpacity="0.3" />
          <line x1="50" y1="65" x2="270" y2="65" stroke="currentColor" strokeWidth="0.8" strokeOpacity="0.3" />
          <circle cx="62" cy="57" r="2.5" fill="currentColor" opacity="0.3" />
          <circle cx="72" cy="57" r="2.5" fill="currentColor" opacity="0.3" />
          <rect x="65" y="85" width="120" height="10" rx="2" fill="currentColor" opacity="0.1" />
          <rect x="65" y="105" width="190" height="8" rx="2" fill="currentColor" opacity="0.05" />
          <rect x="65" y="120" width="190" height="8" rx="2" fill="currentColor" opacity="0.05" />
          <rect x="65" y="135" width="190" height="8" rx="2" fill="currentColor" opacity="0.05" />
          <rect x="65" y="155" width="60" height="25" rx="4" fill="currentColor" opacity="0.15" />

          {/* Interface 2: Customer Mobile App (Foreground Right) */}
          <rect x="250" y="90" width="85" height="170" rx="14" fill="#151515" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.8" />
          {/* Notch & speaker */}
          <rect x="277" y="95" width="30" height="6" rx="3" fill="#000" />
          {/* App screens */}
          <rect x="258" y="112" width="69" height="135" rx="6" fill="#1a1a1a" />
          <circle cx="292" cy="135" r="14" fill="currentColor" opacity="0.1" />
          <line x1="268" y1="165" x2="318" y2="165" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.2" />
          <line x1="268" y1="178" x2="308" y2="178" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.2" />
          <line x1="268" y1="191" x2="313" y2="191" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.2" />
          {/* Booking Button */}
          <rect x="268" y="215" width="49" height="16" rx="4" fill="currentColor" className="text-zinc-600" />

          {/* Interface 3: Owner Mobile App (Foreground Left) */}
          <rect x="180" y="120" width="85" height="170" rx="14" fill="#181818" stroke="currentColor" strokeWidth="1" strokeOpacity="0.6" />
          <rect x="207" y="125" width="30" height="6" rx="3" fill="#000" />
          <rect x="188" y="142" width="69" height="135" rx="6" fill="#202020" />
          {/* Owner Dashboard metric */}
          <rect x="196" y="155" width="53" height="30" rx="4" fill="none" stroke="currentColor" strokeWidth="1" strokeOpacity="0.3" />
          <path d="M 201 178 L 211 168 L 221 173 L 236 160" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.7" />
          <line x1="196" y1="200" x2="249" y2="200" stroke="currentColor" strokeWidth="1" strokeOpacity="0.2" />
          <line x1="196" y1="215" x2="249" y2="215" stroke="currentColor" strokeWidth="1" strokeOpacity="0.2" />
          <line x1="196" y1="230" x2="249" y2="230" stroke="currentColor" strokeWidth="1" strokeOpacity="0.2" />
        </svg>
      ),
    },
    {
      num: "03",
      name: "Water Monitoring",
      type: "Water Alert Notification Platform",
      description:
        "A web and application-based scheduling and notification system that monitors and notifies users when local utility water arrives. Features full web-ownership, backend service configuration serving multiple applications, and real-time push alert dispatcher workflows.",
      technologies: ["React", "CSS3", "Node.js", "Express.js", "WebSockets", "Firebase Cloud Messaging", "REST APIs", "PostgreSQL"],
      visualComponent: (
        <svg viewBox="0 0 400 300" className="w-full h-full text-[var(--color-sand)]" fill="none">
          {/* Background grid */}
          <g stroke="currentColor" strokeWidth="0.5" strokeOpacity="0.1">
            <line x1="0" y1="50" x2="400" y2="50" />
            <line x1="0" y1="150" x2="400" y2="150" />
            <line x1="0" y1="250" x2="400" y2="250" />
            <line x1="150" y1="0" x2="150" y2="300" />
            <line x1="250" y1="0" x2="250" y2="300" />
          </g>

          {/* Web dashboard mockup */}
          <rect x="40" y="50" width="320" height="200" rx="8" fill="#1e1e1e" stroke="currentColor" strokeWidth="1" strokeOpacity="0.3" />
          <line x1="40" y1="75" x2="360" y2="75" stroke="currentColor" strokeWidth="1" strokeOpacity="0.3" />

          {/* Wave chart */}
          <path
            d="M 50 180 Q 80 140, 110 170 T 170 160 T 230 180 T 290 140 T 350 160"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeOpacity="0.8"
            className="text-sky-500"
          />
          {/* Wave area fill */}
          <path
            d="M 50 180 Q 80 140, 110 170 T 170 160 T 230 180 T 290 140 T 350 160 L 350 230 L 50 230 Z"
            fill="currentColor"
            opacity="0.03"
          />

          {/* Alert Notification Overlay Card */}
          <g transform="translate(190, 85)" className="animate-[bounce_3s_ease-in-out_infinite]">
            <rect x="0" y="0" width="150" height="60" rx="6" fill="#151515" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.8" className="shadow-lg" />
            <circle cx="25" cy="30" r="12" fill="currentColor" opacity="0.1" />
            {/* Bell icon outline */}
            <path d="M 25 22 C 22 22, 21 25, 21 28 L 29 28 C 29 25, 28 22, 25 22 Z M 20 29 L 30 29 L 29 32 L 21 32 Z" stroke="currentColor" strokeWidth="1" />
            <text x="47" y="27" fill="currentColor" className="font-syne text-[8px] font-bold tracking-wider">WATER_ALERT</text>
            <text x="47" y="42" fill="currentColor" className="font-inter text-[8px] text-zinc-400">Flow detected! Alert dispatched.</text>
          </g>

          <text x="60" y="110" fill="currentColor" className="font-syne text-[10px] tracking-widest font-bold opacity-30">MONITOR_DASHBOARD</text>
        </svg>
      ),
    },
    {
      num: "04",
      name: "DevEvent",
      type: "Developer Community Event Platform",
      description:
        "A community gathering discovery and ticketing platform. Features database schemas, automated slug generation, duplicate prevention, optimized index pathways, tag-based recommendation logic, server-cached API routes, Cloudinary media workflows, and live WebSockets integration.",
      technologies: ["Next.js", "TypeScript", "MongoDB", "Mongoose", "Tailwind CSS v4", "WebSockets", "Cloudinary", "Server Actions", "PostHog"],
      githubUrl: "https://github.com/ziyahulhaq/DevMeetT",
      visualComponent: (
        <svg viewBox="0 0 400 300" className="w-full h-full text-[var(--color-sand)]" fill="none">
          {/* Background grid */}
          <g stroke="currentColor" strokeWidth="0.5" strokeOpacity="0.1">
            <line x1="0" y1="50" x2="400" y2="50" />
            <line x1="0" y1="100" x2="400" y2="100" />
            <line x1="0" y1="150" x2="400" y2="150" />
            <line x1="0" y1="200" x2="400" y2="200" />
            <line x1="0" y1="250" x2="400" y2="250" />
            <line x1="100" y1="0" x2="100" y2="300" />
            <line x1="200" y1="0" x2="200" y2="300" />
            <line x1="300" y1="0" x2="300" y2="300" />
          </g>

          {/* Event Listing layout */}
          <rect x="40" y="50" width="140" height="200" rx="8" fill="#1e1e1e" stroke="currentColor" strokeWidth="1" strokeOpacity="0.3" />
          <rect x="55" y="65" width="110" height="70" rx="4" fill="currentColor" opacity="0.08" />
          <path d="M 65 100 L 155 100 M 65 115 L 125 115" stroke="currentColor" strokeWidth="2" strokeOpacity="0.3" strokeLinecap="round" />
          <text x="55" y="160" fill="currentColor" className="font-syne text-[10px] font-bold opacity-80">Tech Meetup 2026</text>
          <text x="55" y="178" fill="currentColor" className="font-inter text-[8px] text-zinc-500">Aug 31 // 6:00 PM</text>
          <rect x="55" y="200" width="60" height="20" rx="4" fill="currentColor" opacity="0.15" />

          {/* Recommendations network card */}
          <rect x="210" y="80" width="150" height="150" rx="8" fill="#1e1e1e" stroke="currentColor" strokeWidth="1" strokeOpacity="0.3" />
          <circle cx="285" cy="155" r="30" fill="none" stroke="currentColor" strokeWidth="1" strokeOpacity="0.2" />
          <circle cx="285" cy="155" r="5" fill="currentColor" className="text-blue-500 animate-ping" />
          <circle cx="285" cy="155" r="4" fill="currentColor" className="text-blue-500" />

          {/* Recommendation tag nodes */}
          <g stroke="currentColor" strokeWidth="1">
            <line x1="285" y1="155" x2="255" y2="125" strokeOpacity="0.4" />
            <line x1="285" y1="155" x2="315" y2="125" strokeOpacity="0.4" />
            <line x1="285" y1="155" x2="285" y2="195" strokeOpacity="0.4" />
            <circle cx="255" cy="125" r="8" fill="#2d2d2d" />
            <circle cx="315" cy="125" r="8" fill="#2d2d2d" />
            <circle cx="285" cy="195" r="8" fill="#2d2d2d" />
          </g>
          <text x="225" y="105" fill="currentColor" className="font-syne text-[8px] tracking-widest font-bold opacity-40">RECOMMENDED_TAGS</text>
        </svg>
      ),
    },
  ];

  return (
    <section
      id="works"
      className="relative w-full py-24 px-6 md:py-32 md:px-12 bg-[var(--color-charcoal)] text-[var(--color-sand)] transition-colors duration-800"
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
            <h2 className="font-syne font-bold text-5xl md:text-7xl uppercase tracking-tighter text-white">
              Selected Works /
            </h2>
          </motion.div>
          <motion.div variants={headerItemVariants} className="lg:col-span-6 lg:pl-12 flex flex-col md:flex-row md:space-x-12 space-y-6 md:space-y-0">
            <div className="font-inter text-xs tracking-widest text-zinc-500 uppercase shrink-0 pt-1">
              (Projects)
            </div>
            <p className="font-inter text-zinc-400 text-base md:text-lg leading-relaxed">
              A curated selection of core engineering projects showcasing scalable systems design, full-stack applications, and AI integrations. Built with performance, clean schemas, and robust architectures in mind.
            </p>
          </motion.div>
        </motion.div>

        {/* Divider Line */}
        <motion.div
          variants={dividerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10% 0px" }}
          className="w-full h-[1px] bg-zinc-800 origin-left"
        />

        {/* Projects List Container */}
        <div className="flex flex-col space-y-24 md:space-y-36">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.name}
              variants={projectVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-10% 0px" }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center"
            >
              {/* Project Visual Representation (Interactive Card) */}
              <motion.div
                variants={projectCardVariants}
                className={`lg:col-span-6 order-2 ${
                  index % 2 === 0 ? "lg:order-1" : "lg:order-2"
                }`}
              >
                <div className="relative w-full aspect-[4/3] rounded-2xl border border-zinc-800 bg-[#0F0F0F] overflow-hidden group shadow-inner">
                  {/* Outer border highlight on hover */}
                  <div className="absolute inset-0 border border-zinc-700/0 group-hover:border-zinc-700/50 transition-colors duration-500 rounded-2xl z-10 pointer-events-none" />

                  {/* SVG Content */}
                  <div className="w-full h-full p-6 flex items-center justify-center group-hover:scale-105 transition-transform duration-700 ease-out">
                    {project.visualComponent}
                  </div>
                </div>
              </motion.div>

              {/* Project Info Column */}
              <motion.div
                variants={infoContainerVariants}
                className={`lg:col-span-6 order-1 ${
                  index % 2 === 0 ? "lg:order-2" : "lg:order-1"
                } flex flex-col justify-center space-y-6`}
              >
                <motion.div variants={projectChildVariants} className="flex items-center space-x-3 text-zinc-500 font-inter text-xs font-semibold uppercase tracking-widest">
                  <span>{project.num}</span>
                  <span className="w-8 h-[1px] bg-zinc-800" />
                  <span>{project.type}</span>
                </motion.div>

                <motion.h3 variants={projectChildVariants} className="font-syne font-bold text-4xl md:text-5xl tracking-tight text-white">
                  {project.name}
                </motion.h3>

                <motion.p variants={projectChildVariants} className="font-inter text-zinc-400 text-sm md:text-base leading-relaxed">
                  {project.description}
                </motion.p>

                {/* Tech tags */}
                <motion.div variants={projectChildVariants} className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-zinc-900 border border-zinc-850 text-zinc-400 font-inter"
                    >
                      {tech}
                    </span>
                  ))}
                </motion.div>

                {/* Actions buttons */}
                <motion.div variants={projectChildVariants} className="flex items-center space-x-4 pt-2">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center space-x-2 px-4 py-2.5 rounded-full border border-zinc-700 hover:border-white text-zinc-300 hover:text-white transition-all duration-300 font-inter text-xs font-semibold tracking-wide uppercase"
                    >
                      <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                      </svg>
                      <span>Codebase</span>
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center space-x-2 px-4 py-2.5 rounded-full bg-white hover:bg-zinc-200 text-black transition-all duration-300 font-inter text-xs font-semibold tracking-wide uppercase"
                    >
                      <ExternalLink size={14} />
                      <span>Live Demo</span>
                    </a>
                  )}
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
