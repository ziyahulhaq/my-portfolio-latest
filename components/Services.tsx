"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useTransform, useMotionValueEvent, useMotionTemplate } from "framer-motion";
import { Plus, Minus } from "lucide-react";

interface ServiceItem {
  num: string;
  title: string;
  description: string;
  points: string[];
}

const servicesData: ServiceItem[] = [
  {
    num: "(01)",
    title: "Software Development",
    description:
      "I focus on solving complex problems and turning logical ideas into simple, working solutions. I apply software engineering principles to build robust, modular, and maintainable software systems.",
    points: ["JavaScript & TypeScript (ES6+)", "Git & CI/CD Pipelines", "Docker & Containerization", "Linux Command Line & Scripting"],
  },
  {
    num: "(02)",
    title: "Full-Stack Web Development",
    description:
      "Building complete, end-to-end web applications with modern frameworks and robust data architectures. Delivering high-performance interfaces coupled with fast, secure server logic.",
    points: ["React 19 & Next.js", "Vite & Modern Tooling", "Tailwind CSS v4", "State Management & Routing"],
  },
  {
    num: "(03)",
    title: "AI / RAG Development",
    description:
      "Designing AI-powered systems, retrieval-augmented generation (RAG) pipelines, and semantic search interfaces. Creating intelligent chat systems with context isolation and automatic retry mechanisms.",
    points: ["OpenAI & Gemini API Integrations", "Pinecone Vector Databases", "Semantic Chunking & Embedding Pipelines", "GROQ SDK & LLM Orchestration"],
  },
  {
    num: "(04)",
    title: "Backend & API Development",
    description:
      "Creating scalable API architectures, security mechanisms, and database management solutions. Designing secure, high-throughput routing, caching, and role-based access control.",
    points: ["Node.js & Express.js 5", "REST APIs & WebSockets", "Prisma ORM & Mongoose", "PostgreSQL & MongoDB Schemas"],
  },
  {
    num: "(05)",
    title: "UI / Frontend Development",
    description:
      "Crafting beautiful, accessible, and responsive user interfaces with smooth motion, transitions, and polished micro-interactions. Turning design files into pixel-perfect code.",
    points: ["Tailwind CSS v4", "Framer Motion Animations", "Shadcn UI & Radix Primitives", "Styled Components & CSS Variables"],
  },
];

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

const rowVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
};

const rowItemVariants = {
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

const innerContentVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.1,
    },
  },
};

const innerItemVariants = {
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

export default function Services() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const scrolledPastEndRef = useRef(false);
  const [rowHeight, setRowHeight] = useState(76);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setRowHeight(76);
      } else {
        setRowHeight(68);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const handler = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const [currentScrollIndex, setCurrentScrollIndex] = useState(0);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    let index = 0;
    if (latest < 0.17) {
      index = 0;
    } else if (latest < 0.39) {
      index = 1;
    } else if (latest < 0.61) {
      index = 2;
    } else if (latest < 0.83) {
      index = 3;
    } else {
      index = 4;
    }

    if (latest > 0.95) {
      scrolledPastEndRef.current = true;
      if (activeIndex !== null) {
        setActiveIndex(null);
      }
    } else {
      if (scrolledPastEndRef.current) {
        scrolledPastEndRef.current = false;
        setActiveIndex(4);
      }
      if (index !== currentScrollIndex) {
        setCurrentScrollIndex(index);
        setActiveIndex(index);
      }
    }
  });

  const yTrans0 = useTransform(scrollYProgress, [0.0, 1.0], [0, 0]);
  const op0 = useTransform(scrollYProgress, [0.0, 1.0], [1, 1]);

  const yTrans1 = useTransform(scrollYProgress, [0.0, 0.12, 0.22, 1.0], [150, 150, 0, 0]);
  const op1 = useTransform(scrollYProgress, [0.0, 0.12, 0.22, 1.0], [0, 0, 1, 1]);

  const yTrans2 = useTransform(scrollYProgress, [0.0, 0.34, 0.44, 1.0], [150, 150, 0, 0]);
  const op2 = useTransform(scrollYProgress, [0.0, 0.34, 0.44, 1.0], [0, 0, 1, 1]);

  const yTrans3 = useTransform(scrollYProgress, [0.0, 0.56, 0.66, 1.0], [150, 150, 0, 0]);
  const op3 = useTransform(scrollYProgress, [0.0, 0.56, 0.66, 1.0], [0, 0, 1, 1]);

  const yTrans4 = useTransform(scrollYProgress, [0.0, 0.78, 0.88, 1.0], [150, 150, 0, 0]);
  const op4 = useTransform(scrollYProgress, [0.0, 0.78, 0.88, 1.0], [0, 0, 1, 1]);

  const y0 = useMotionTemplate`calc(${0 * rowHeight}px + ${yTrans0}px)`;
  const y1 = useMotionTemplate`calc(${1 * rowHeight}px + ${yTrans1}px)`;
  const y2 = useMotionTemplate`calc(${2 * rowHeight}px + ${yTrans2}px)`;
  const y3 = useMotionTemplate`calc(${3 * rowHeight}px + ${yTrans3}px)`;
  const y4 = useMotionTemplate`calc(${4 * rowHeight}px + ${yTrans4}px)`;

  const cardMotionValues = [
    { y: y0, opacity: op0 },
    { y: y1, opacity: op1 },
    { y: y2, opacity: op2 },
    { y: y3, opacity: op3 },
    { y: y4, opacity: op4 },
  ];

  if (prefersReducedMotion) {
    return (
      <section
        id="services"
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
                What I Do /
              </h2>
            </motion.div>
            <motion.div variants={headerItemVariants} className="lg:col-span-6 lg:pl-12 flex flex-col md:flex-row md:space-x-12 space-y-6 md:space-y-0">
              <div className="font-inter text-xs tracking-widest text-zinc-500 uppercase shrink-0 pt-1">
                (Services)
              </div>
              <p className="font-inter text-zinc-400 text-base md:text-lg leading-relaxed">
                I specialize in building full-stack web applications, AI-powered systems, scalable backend architectures, and responsive user experiences. I help turn complex challenges into clean, production-ready code.
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

          {/* Accordion List */}
          <div className="flex flex-col w-full">
            {servicesData.map((service, index) => {
              const isOpen = activeIndex === index;
              return (
                <motion.div
                  key={service.num}
                  variants={rowVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-10% 0px" }}
                  className="flex flex-col w-full group cursor-pointer relative"
                  onClick={() => setActiveIndex(isOpen ? null : index)}
                >
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-[1px] bg-zinc-800 origin-left pointer-events-none"
                    variants={dividerVariants}
                  />

                  <div className="py-6 md:py-8 grid grid-cols-12 gap-4 items-center select-none w-full">
                    <motion.div
                      variants={rowItemVariants}
                      className="col-span-2 md:col-span-1 font-syne text-sm md:text-base text-zinc-500 font-bold group-hover:text-white transition-colors duration-300"
                    >
                      {service.num}
                    </motion.div>

                    <motion.div
                      variants={rowItemVariants}
                      className="col-span-8 md:col-span-10 font-syne font-bold text-xl md:text-3xl tracking-tight text-zinc-300 group-hover:text-white transition-colors duration-300"
                    >
                      {service.title}
                    </motion.div>

                    <motion.div
                      variants={rowItemVariants}
                      className="col-span-2 md:col-span-1 flex justify-end"
                    >
                      <span className="text-zinc-500 group-hover:text-white transition-colors duration-300 p-1 rounded-full border border-zinc-800 group-hover:border-zinc-600">
                        {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                      </span>
                    </motion.div>
                  </div>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: easeOutExpo }}
                        className="overflow-hidden w-full"
                      >
                        <motion.div
                          variants={innerContentVariants}
                          initial="hidden"
                          animate="visible"
                          exit="hidden"
                          className="pb-8 pl-0 md:pl-[8.333%] grid grid-cols-1 lg:grid-cols-12 gap-8"
                        >
                          <motion.div
                            variants={innerItemVariants}
                            className="lg:col-span-6 pr-0 lg:pr-12"
                          >
                            <p className="font-inter text-zinc-400 text-sm md:text-base leading-relaxed">
                              {service.description}
                            </p>
                          </motion.div>

                          <motion.div
                            variants={innerItemVariants}
                            className="lg:col-span-6 flex flex-col space-y-4"
                          >
                            <p className="font-inter text-xs tracking-wider text-zinc-500 uppercase font-semibold">
                              Core Focus
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                              {service.points.map((point, pIndex) => (
                                <motion.div
                                  key={point}
                                  variants={innerItemVariants}
                                  className="flex items-center space-x-3 py-2 border-b border-zinc-800/60"
                                >
                                  <span className="font-inter text-[10px] text-zinc-500 font-bold">
                                    {String(pIndex + 1).padStart(2, "0")}
                                  </span>
                                  <span className="font-inter text-sm text-zinc-300 font-medium">
                                    {point}
                                  </span>
                                </motion.div>
                              ))}
                            </div>
                          </motion.div>
                        </motion.div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    );
  }

  return (
    <div ref={containerRef} className="relative h-[350vh] w-full">
      <section
        id="services"
        className="sticky top-0 h-screen w-full py-16 px-6 md:py-24 md:px-12 bg-[var(--color-charcoal)] text-[var(--color-sand)] transition-colors duration-800 overflow-hidden flex flex-col justify-center"
      >
        <div className="max-w-7xl mx-auto w-full flex flex-col space-y-8 md:space-y-12">
          {/* Section Header */}
          <motion.div
            variants={headerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10% 0px" }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
          >
            <motion.div variants={headerItemVariants} className="lg:col-span-7">
              <h2 className="font-syne font-extrabold text-5xl sm:text-7xl md:text-8xl lg:text-9xl uppercase tracking-tighter text-white leading-none">
                What I Do /
              </h2>
            </motion.div>
            <motion.div variants={headerItemVariants} className="lg:col-span-5 lg:pl-6 flex flex-col md:flex-row md:space-x-8 space-y-4 md:space-y-0">
              <div className="font-inter text-xs tracking-widest text-zinc-500 uppercase shrink-0 pt-1">
                (Services)
              </div>
              <p className="font-inter text-zinc-400 text-base md:text-lg leading-relaxed">
                I specialize in building full-stack web applications, AI-powered systems, scalable backend architectures, and responsive user experiences. I help turn complex challenges into clean, production-ready code.
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

          {/* Stacked Cards Container */}
          <div className="relative min-h-[580px] sm:min-h-[500px] md:min-h-[460px] lg:min-h-[440px] w-full">
            {servicesData.map((service, index) => {
              const isOpen = activeIndex === index;
              const { y, opacity } = cardMotionValues[index];
              const hasEntered = currentScrollIndex >= index;

              return (
                <motion.div
                  key={service.num}
                  style={{
                    y,
                    opacity,
                    pointerEvents: hasEntered ? "auto" : "none",
                  }}
                  className="absolute top-0 left-0 w-full flex flex-col group cursor-pointer"
                  onClick={() => setActiveIndex(isOpen ? null : index)}
                >
                  {/* Subtle bottom border reveal */}
                  <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-zinc-800 pointer-events-none" />

                  {/* Accordion Title Bar */}
                  <div className="py-5 md:py-6 grid grid-cols-12 gap-4 items-center select-none w-full">
                    {/* Number */}
                    <div className="col-span-2 md:col-span-1 font-syne text-sm md:text-base text-zinc-500 font-bold group-hover:text-white transition-colors duration-300">
                      {service.num}
                    </div>

                    {/* Title */}
                    <div className="col-span-8 md:col-span-10 font-syne font-bold text-xl md:text-3xl tracking-tight text-zinc-300 group-hover:text-white transition-colors duration-300">
                      {service.title}
                    </div>

                    {/* Icon */}
                    <div className="col-span-2 md:col-span-1 flex justify-end">
                      <span className="text-zinc-500 group-hover:text-white transition-colors duration-300 p-1 rounded-full border border-zinc-800 group-hover:border-zinc-600">
                        {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                      </span>
                    </div>
                  </div>

                  {/* Accordion Expandable Content */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: easeOutExpo }}
                        className="overflow-hidden w-full"
                      >
                        <motion.div
                          variants={innerContentVariants}
                          initial="hidden"
                          animate="visible"
                          exit="hidden"
                          className="pb-8 pl-0 md:pl-[8.333%] grid grid-cols-1 lg:grid-cols-12 gap-8"
                        >
                          {/* Description */}
                          <motion.div
                            variants={innerItemVariants}
                            className="lg:col-span-6 pr-0 lg:pr-12"
                          >
                            <p className="font-inter text-zinc-400 text-sm md:text-base leading-relaxed">
                              {service.description}
                            </p>
                          </motion.div>

                          {/* Tech details grid list */}
                          <motion.div
                            variants={innerItemVariants}
                            className="lg:col-span-6 flex flex-col space-y-4"
                          >
                            <p className="font-inter text-xs tracking-wider text-zinc-500 uppercase font-semibold">
                              Core Focus
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                              {service.points.map((point, pIndex) => (
                                <motion.div
                                  key={point}
                                  variants={innerItemVariants}
                                  className="flex items-center space-x-3 py-2 border-b border-zinc-800/60"
                                >
                                  <span className="font-inter text-[10px] text-zinc-500 font-bold">
                                    {String(pIndex + 1).padStart(2, "0")}
                                  </span>
                                  <span className="font-inter text-sm text-zinc-300 font-medium">
                                    {point}
                                  </span>
                                </motion.div>
                              ))}
                            </div>
                          </motion.div>
                        </motion.div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
