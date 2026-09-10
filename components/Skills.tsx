"use client";

import { motion } from "framer-motion";

const easeOutExpo = [0.16, 1, 0.3, 1] as const;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
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

export default function Skills() {
  const column1 = {
    title: "Languages & Tools",
    skills: [
      "JavaScript (ES6+)",
      "TypeScript",
      "HTML5 / CSS3",
      "Git / GitHub",
      "GitHub Actions (CI/CD)",
      "Docker & Docker Hub",
      "Vercel & Render",
      "AWS EC2 & S3",
      "Cloudinary / ImageKit",
      "PostHog Analytics",
      "Ubuntu / Linux",
    ],
  };

  const column2 = {
    title: "Frameworks & Libraries",
    skills: [
      "React 19",
      "Next.js",
      "Vite",
      "Tailwind CSS v4",
      "Shadcn UI / Radix UI",
      "Styled Components",
      "React Router DOM",
      "Node.js",
      "Express.js 5",
      "REST APIs / WebSockets",
      "Next.js API Routes",
      "Server Actions",
    ],
  };

  const column3 = {
    title: "Core CS Concepts",
    skills: [
      "MongoDB / PostgreSQL",
      "Prisma ORM / Mongoose",
      "Pinecone DB",
      "Firebase / Supabase",
      "OpenAI / Gemini API",
      "GROQ SDK",
      "RAG Pipelines",
      "Vector Search & Embeddings",
      "JSON Web Tokens (JWT)",
      "bcrypt / RBAC",
      "Responsive Architecture",
    ],
  };

  const columns = [column1, column2, column3];

  return (
    <section
      id="skills"
      className="relative w-full py-24 px-6 md:py-36 md:px-12 bg-[var(--color-charcoal)] text-[var(--color-sand)] transition-colors duration-800 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto flex flex-col space-y-16">
        {/* Main Grid: Left Oversized Editorial Title vs Right Skills Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10% 0px" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start"
        >
          {/* Left Side: Massive Stacked Typography DEVELOPER / DESIGNER / CREATOR/ */}
          <motion.div variants={itemVariants} className="lg:col-span-5 flex flex-col space-y-1">
            <span className="font-syne font-extrabold text-5xl sm:text-6xl md:text-7xl lg:text-8xl uppercase tracking-tighter text-white leading-[0.88] block">
              DEVELOPER
            </span>
            <span className="font-syne font-extrabold text-5xl sm:text-6xl md:text-7xl lg:text-8xl uppercase tracking-tighter text-zinc-500 leading-[0.88] block">
              DESIGNER
            </span>
            <span className="font-syne font-extrabold text-5xl sm:text-6xl md:text-7xl lg:text-8xl uppercase tracking-tighter text-white leading-[0.88] block">
              CREATOR/
            </span>
          </motion.div>

          {/* Right Side: Large Heading + 3 Skill Columns */}
          <div className="lg:col-span-7 flex flex-col space-y-12">
            <motion.div variants={itemVariants} className="flex flex-col space-y-3">
              <span className="font-inter text-xs tracking-widest text-zinc-500 uppercase font-semibold">
                (Capabilities)
              </span>
              <h2 className="font-syne font-bold text-4xl sm:text-5xl md:text-6xl tracking-tight text-white uppercase">
                Skills
              </h2>
            </motion.div>

            {/* Divider Line */}
            <motion.div
              variants={dividerVariants}
              className="w-full h-[1px] bg-zinc-800 origin-left"
            />

            {/* 3 Columns Layout (No Cards) */}
            <motion.div
              variants={containerVariants}
              className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-2"
            >
              {columns.map((col) => (
                <motion.div key={col.title} variants={itemVariants} className="flex flex-col space-y-6">
                  {/* Column Header */}
                  <h3 className="font-syne font-bold text-lg md:text-xl text-white tracking-tight border-b border-zinc-800 pb-3">
                    {col.title}
                  </h3>

                  {/* Skills List */}
                  <ul className="flex flex-col space-y-2.5">
                    {col.skills.map((skill) => (
                      <li
                        key={skill}
                        className="font-inter text-sm md:text-base text-zinc-400 hover:text-white transition-colors duration-200 cursor-default flex items-center space-x-2"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-zinc-700 shrink-0" />
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
