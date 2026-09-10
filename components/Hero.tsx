"use client";

import { useState, useEffect, useRef } from "react";
import { ArrowDownRight, FileText } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Refined scroll transformation: moves up and fades out
  const nameY = useTransform(scrollYProgress, [0, 1], [0, -140]);
  const nameOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  const contentY = useTransform(scrollYProgress, [0, 1], [0, -70]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      // Get mouse position relative to the container, mapped between -0.5 and 0.5
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      setMousePosition({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative min-h-screen w-full flex flex-col justify-between px-6 pt-28 pb-12 md:px-12 md:pt-36 md:pb-16 overflow-hidden select-none bg-[var(--color-sand)] text-[var(--color-charcoal)]"
    >
      {/* Background Decorative Grid Lines (Subtle) */}
      <div className="absolute inset-0 grid grid-cols-4 md:grid-cols-6 h-full w-full pointer-events-none opacity-5">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="border-r border-[var(--color-charcoal)] h-full" />
        ))}
      </div>

      {/* 1. Massive Name Title (Scroll Reveal) */}
      <motion.div
        style={{ y: nameY, opacity: nameOpacity }}
        className="w-full mt-4 md:mt-8 z-10 overflow-hidden"
      >
        <motion.h1
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="font-syne font-extrabold text-[clamp(2.25rem,9.6vw,9.5rem)] leading-[0.85] uppercase tracking-tighter w-full text-center whitespace-nowrap"
        >
          ZIYAVUL<span className="text-zinc-400">H</span>AQ
        </motion.h1>
      </motion.div>

      {/* 2. Middle Row: Interactive SVG + Content Columns */}
      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center my-auto z-10 w-full"
      >
        {/* Left Column: Title, Bio, & CV Button */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="lg:col-span-4 flex flex-col items-start text-left space-y-6"
        >
          <div className="flex items-center space-x-2 text-zinc-500 font-inter text-sm font-semibold tracking-wider uppercase">
            <ArrowDownRight size={20} className="text-[var(--color-charcoal)]" />
            <span>Software Developer</span>
          </div>

          <p className="font-inter text-base md:text-lg text-zinc-700 leading-relaxed max-w-sm">
            "I enjoy solving complex problems and turning logical ideas into simple, working solutions."
          </p>

          <a
            href="/ziyavul_haq_resume.pdf"
            download
            className="flex items-center space-x-3 px-6 py-4 rounded-full border border-[var(--color-charcoal)] hover:bg-[var(--color-charcoal)] hover:text-[var(--color-sand)] transition-all duration-300 font-inter text-sm font-semibold tracking-wide uppercase group shadow-sm"
          >
            <span>Resume / CV</span>
            <FileText size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </motion.div>

        {/* Center Column: Interactive SVG logic structure instead of Profile Photo */}
        <div className="lg:col-span-4 flex justify-center items-center h-[260px] md:h-[320px] relative">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.1, ease: "easeOut" }}
            className="w-[240px] h-[240px] md:w-[280px] md:h-[280px] rounded-2xl border border-[var(--border-color)] p-6 bg-white/20 backdrop-blur-sm relative overflow-hidden flex items-center justify-center shadow-inner"
          >
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 200 200"
              className="absolute inset-0 pointer-events-none"
            >
              {/* Central morphing web structure based on mouse coordinates */}
              <g stroke="currentColor" strokeWidth="0.5" strokeOpacity="0.3" fill="none">
                {/* Outer bounding boxes */}
                <rect x="20" y="20" width="160" height="160" rx="10" />
                <rect x="40" y="40" width="120" height="120" rx="6" />

                {/* Vertical & Horizontal guide lines */}
                <line x1="100" y1="20" x2="100" y2="180" />
                <line x1="20" y1="100" x2="180" y2="100" />

                {/* Diagonals */}
                <line x1="20" y1="20" x2="180" y2="180" />
                <line x1="180" y1="20" x2="20" y2="180" />
              </g>

              {/* Dynamic node connections */}
              <g stroke="currentColor" strokeWidth="1" fill="currentColor">
                {/* Core interactive node */}
                <circle
                  cx={100 + mousePosition.x * 60}
                  cy={100 + mousePosition.y * 60}
                  r="6"
                  className="text-[var(--color-charcoal)] transition-transform duration-300 ease-out"
                />

                {/* Connecting lines from active node to anchor points */}
                <g stroke="currentColor" strokeWidth="1" strokeOpacity="0.6">
                  <line x1="100" y1="40" x2={100 + mousePosition.x * 60} y2={100 + mousePosition.y * 60} />
                  <line x1="40" y1="100" x2={100 + mousePosition.x * 60} y2={100 + mousePosition.y * 60} />
                  <line x1="160" y1="100" x2={100 + mousePosition.x * 60} y2={100 + mousePosition.y * 60} />
                  <line x1="100" y1="160" x2={100 + mousePosition.x * 60} y2={100 + mousePosition.y * 60} />
                </g>

                {/* Static anchors */}
                <circle cx="100" cy="40" r="3.5" fill="none" stroke="currentColor" strokeWidth="1.5" />
                <circle cx="40" cy="100" r="3.5" fill="none" stroke="currentColor" strokeWidth="1.5" />
                <circle cx="160" cy="100" r="3.5" fill="none" stroke="currentColor" strokeWidth="1.5" />
                <circle cx="100" cy="160" r="3.5" fill="none" stroke="currentColor" strokeWidth="1.5" />
              </g>

              {/* Decorative concentric orbits */}
              <circle
                cx="100"
                cy="100"
                r="70"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
                strokeDasharray="4,4"
                strokeOpacity="0.4"
              />
            </svg>
            <div className="absolute font-syne text-[10px] tracking-widest text-zinc-400 font-bold bottom-4">
              ZH.DEV.ENGINE // ACTIVE
            </div>
          </motion.div>
        </div>

        {/* Right Column: Dynamic Current Date display in huge text */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="lg:col-span-4 flex flex-col items-center lg:items-end justify-center text-center lg:text-right"
        >
          <div className="flex flex-col">
            <span className="font-inter text-xs tracking-widest text-zinc-500 font-semibold uppercase mb-1">
              CURRENT DATE
            </span>
            <span className="font-syne font-bold text-3xl sm:text-4xl md:text-5xl tracking-tighter text-[var(--color-charcoal)]">
              AUG'26
            </span>
          </div>
        </motion.div>
      </motion.div>

      {/* 3. Bottom Row: Small scroll indicator */}
      <div className="w-full flex justify-between items-center text-zinc-400 font-inter text-[10px] tracking-widest uppercase z-10">
        <span>© 2026 ZIYAVUL HAQ</span>
        <a href="#services" className="hover:text-[var(--color-charcoal)] transition-colors duration-300 flex items-center space-x-1">
          <span>SCROLL DOWN</span>
          <span className="animate-bounce">↓</span>
        </a>
      </div>
    </section>
  );
}
