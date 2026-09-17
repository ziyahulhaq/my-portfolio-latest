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
  hidden: {
    scaleX: 0,
    opacity: 0,
  },
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
      className="
        relative
        w-full
        overflow-hidden
        bg-[var(--color-charcoal)]
        text-[var(--color-sand)]
        px-6
        py-24
        transition-colors
        duration-800
        md:px-12
        md:py-32
        lg:py-36
      "
    >
      <div className="mx-auto max-w-7xl">
        {/* =========================================================
            MAIN LAYOUT
            LEFT  → DEVELOPER / DESIGNER / CREATOR
            RIGHT → CAPABILITIES / SKILLS
        ========================================================= */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            margin: "-10% 0px",
          }}
          className="
            grid
            grid-cols-1
            items-start
            gap-16
            lg:grid-cols-12
            lg:gap-10
          "
        >
          {/* =======================================================
              LEFT — EDITORIAL TYPOGRAPHY
          ======================================================= */}
          <motion.div
            variants={itemVariants}
            className="
              min-w-0
              lg:col-span-6
            "
          >
            <div className="text-left">
              {/* DEVELOPER */}
              <span
                className="
                  block
                  whitespace-nowrap
                  font-syne
                  text-[clamp(2.75rem,5vw,5.2rem)]
                  font-extrabold
                  uppercase
                  leading-[0.84]
                  tracking-[-0.06em]
                  text-white
                "
              >
                DEVELOPER
              </span>

              {/* DESIGNER */}
              <span
                className="
                  block
                  whitespace-nowrap
                  font-syne
                  text-[clamp(2.75rem,5vw,5.2rem)]
                  font-extrabold
                  uppercase
                  leading-[0.84]
                  tracking-[-0.06em]
                  text-zinc-500
                "
              >
                DESIGNER
              </span>

              {/* CREATOR */}
              <span
                className="
                  block
                  whitespace-nowrap
                  font-syne
                  text-[clamp(2.75rem,5vw,5.2rem)]
                  font-extrabold
                  uppercase
                  leading-[0.84]
                  tracking-[-0.06em]
                  text-white
                "
              >
                CREATOR
              </span>
            </div>
          </motion.div>

          {/* =======================================================
              RIGHT — CAPABILITIES
          ======================================================= */}
          <div
            className="
              min-w-0
              lg:col-span-6
            "
          >
            {/* =====================================================
                SECTION HEADING
            ===================================================== */}
            <motion.div variants={itemVariants} className="flex flex-col gap-3">
              <span
                className="
                  font-inter
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.2em]
                  text-zinc-500
                  sm:text-xs
                "
              >
                (Capabilities)
              </span>

              <h2
                className="
                  font-syne
                  text-4xl
                  font-bold
                  uppercase
                  leading-none
                  tracking-tight
                  text-white
                  sm:text-5xl
                  md:text-6xl
                "
              >
                Skills
              </h2>
            </motion.div>

            {/* =====================================================
                DIVIDER
            ===================================================== */}
            <motion.div
              variants={dividerVariants}
              className="
                mt-8
                h-px
                w-full
                origin-left
                bg-zinc-800
              "
            />

            {/* =====================================================
                THREE COLUMNS
            ===================================================== */}
            <motion.div
              variants={containerVariants}
              className="
                mt-8
                grid
                grid-cols-1
                gap-10
                sm:grid-cols-3
                sm:gap-6
                lg:gap-8
              "
            >
              {columns.map((col) => (
                <motion.div
                  key={col.title}
                  variants={itemVariants}
                  className="
                    min-w-0
                    flex
                    flex-col
                    gap-5
                  "
                >
                  {/* COLUMN TITLE */}
                  <h3
                    className="
                      border-b
                      border-zinc-800
                      pb-3
                      font-syne
                      text-base
                      font-bold
                      leading-tight
                      tracking-tight
                      text-white
                      md:text-lg
                    "
                  >
                    {col.title}
                  </h3>

                  {/* SKILL LIST */}
                  <ul className="flex flex-col gap-2.5">
                    {col.skills.map((skill) => (
                      <li
                        key={skill}
                        className="
                          flex
                          items-start
                          gap-2
                          font-inter
                          text-sm
                          leading-relaxed
                          text-zinc-400
                          transition-colors
                          duration-200
                          hover:text-white
                          md:text-[15px]
                        "
                      >
                        {/* BULLET */}
                        <span
                          className="
                            mt-[0.55rem]
                            h-1.5
                            w-1.5
                            shrink-0
                            rounded-full
                            bg-zinc-700
                          "
                        />

                        {/* TEXT */}
                        <span className="min-w-0">{skill}</span>
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
