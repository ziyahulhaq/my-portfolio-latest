"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { ArrowDownRight, FileText } from "lucide-react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";

const timeFormatter = new Intl.DateTimeFormat("en-IN", {
  timeZone: "Asia/Kolkata",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: true,
});

const dateFormatter = new Intl.DateTimeFormat("en-IN", {
  timeZone: "Asia/Kolkata",
  day: "2-digit",
  month: "short",
  year: "numeric",
});

const technicalLabels = [
  {
    text: ["WEB", "DEVELOPMENT"],
    className: "left-[2%] top-[17%] items-end text-right",
    lineClassName: "left-[23%] top-[25%] w-[21%] rotate-[10deg]",
    anchorClassName: "left-[22%] top-[24%]",
  },
  {
    text: ["FRONTEND", "BACKEND", "DATABASE", "DEPLOY", "SCALE"],
    className: "right-[1%] top-[12%] items-start text-left",
    lineClassName: "right-[25%] top-[26%] w-[20%] -rotate-[13deg]",
    anchorClassName: "right-[24%] top-[25%]",
  },
  {
    text: ["IDEAS", "TO", "PRODUCTS"],
    className: "left-[4%] bottom-[14%] items-end text-right",
    lineClassName: "left-[25%] bottom-[26%] w-[19%] -rotate-[16deg]",
    anchorClassName: "left-[24%] bottom-[25%]",
  },
  {
    text: ["CODE", "DESIGN", "DEPLOY", "REPEAT"],
    className: "right-[2%] bottom-[12%] items-start text-left",
    lineClassName: "right-[25%] bottom-[25%] w-[18%] rotate-[15deg]",
    anchorClassName: "right-[24%] bottom-[24%]",
  },
];

export default function Hero() {
  const [now, setNow] = useState<Date | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const parallaxX = useSpring(pointerX, { stiffness: 80, damping: 24 });
  const parallaxY = useSpring(pointerY, { stiffness: 80, damping: 24 });

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
    const tick = () => setNow(new Date());
    const timeout = window.setTimeout(tick, 0);
    const interval = window.setInterval(tick, 1000);

    return () => {
      window.clearTimeout(timeout);
      window.clearInterval(interval);
    };
  }, []);

  const localTime = now ? timeFormatter.format(now) : "--:--:-- --";
  const localDate = now
    ? dateFormatter.format(now).toUpperCase()
    : "-- --- ----";

  const handleSpherePointerMove = (
    event: React.PointerEvent<HTMLDivElement>
  ) => {
    if (shouldReduceMotion || event.pointerType !== "mouse") {
      return;
    }

    const bounds = event.currentTarget.getBoundingClientRect();
    pointerX.set(((event.clientX - bounds.left) / bounds.width - 0.5) * 18);
    pointerY.set(((event.clientY - bounds.top) / bounds.height - 0.5) * 18);
  };

  const resetSphereParallax = () => {
    pointerX.set(0);
    pointerY.set(0);
  };

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative min-h-screen w-full flex flex-col justify-between px-6 pt-28 pb-12 md:px-12 md:pt-36 md:pb-16 overflow-hidden select-none bg-[var(--color-sand)] text-[var(--color-charcoal)]"
    >
      {/* Background Decorative Grid Lines (Subtle) */}
      <div className="absolute inset-0 grid grid-cols-4 md:grid-cols-6 h-full w-full pointer-events-none opacity-5">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="border-r border-[var(--color-charcoal)] h-full"
          />
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
            <ArrowDownRight
              size={20}
              className="text-[var(--color-charcoal)]"
            />
            <span>Software Developer</span>
          </div>

          <p className="font-inter text-base md:text-lg text-zinc-700 leading-relaxed max-w-sm">
            &quot;I enjoy solving complex problems and turning logical ideas
            into simple, working solutions.&quot;
          </p>

          <a
            href="/ziyavul_haq_resume.pdf"
            download
            className="flex items-center space-x-3 px-6 py-4 rounded-full border border-[var(--color-charcoal)] hover:bg-[var(--color-charcoal)] hover:text-[var(--color-sand)] transition-all duration-300 font-inter text-sm font-semibold tracking-wide uppercase group shadow-sm"
          >
            <span>Resume / CV</span>
            <FileText
              size={16}
              className="group-hover:translate-x-1 transition-transform duration-300"
            />
          </a>
        </motion.div>

        {/* Center Column: Futuristic Sphere */}
        <div className="lg:col-span-4 flex justify-center items-center h-[390px] sm:h-[430px] md:h-[470px] lg:h-[500px] relative">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.1, ease: "easeOut" }}
            onPointerMove={handleSpherePointerMove}
            onPointerLeave={resetSphereParallax}
            className="relative flex h-[min(86vw,500px)] w-[min(86vw,500px)] items-center justify-center overflow-visible"
          >
            <motion.div
              aria-hidden="true"
              style={{
                x: shouldReduceMotion ? 0 : parallaxX,
                y: shouldReduceMotion ? 0 : parallaxY,
              }}
              animate={{
                rotate: shouldReduceMotion ? 0 : 360,
              }}
              transition={{
                duration: 90,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute inset-[8%] rounded-full border border-zinc-500/20"
            />
            <motion.div
              aria-hidden="true"
              style={{
                x: shouldReduceMotion ? 0 : parallaxX,
                y: shouldReduceMotion ? 0 : parallaxY,
              }}
              animate={{
                rotate: shouldReduceMotion ? 0 : -360,
              }}
              transition={{
                duration: 120,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute inset-[16%] rounded-full border border-dashed border-zinc-500/25"
            />
            <div
              aria-hidden="true"
              className="absolute inset-[3%] rounded-full border border-zinc-500/10"
            />
            <div
              aria-hidden="true"
              className="absolute inset-[25%] rounded-full border border-cyan-900/15"
            />

            {[0, 58, -48].map((rotation, index) => (
              <motion.div
                key={rotation}
                aria-hidden="true"
                style={{
                  x: shouldReduceMotion ? 0 : parallaxX,
                  y: shouldReduceMotion ? 0 : parallaxY,
                }}
                animate={{
                  rotate: shouldReduceMotion
                    ? rotation
                    : rotation + (index % 2 === 0 ? 360 : -360),
                }}
                transition={{
                  duration: 70 + index * 18,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute left-1/2 top-1/2 h-[44%] w-[98%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-zinc-600/25"
              />
            ))}

            {[14, 29, 46, 62, 78].map((position, index) => (
              <span
                key={position}
                aria-hidden="true"
                className="absolute h-1.5 w-1.5 bg-zinc-800"
                style={{
                  left: `${position}%`,
                  top: `${index % 2 === 0 ? 24 + index * 8 : 64 - index * 5}%`,
                }}
              />
            ))}

            {[18, 34, 50, 66, 82].map((position, index) => (
              <span
                key={position}
                aria-hidden="true"
                className="absolute h-4 w-px bg-zinc-500/35"
                style={{
                  left: `${position}%`,
                  top: index % 2 === 0 ? "9%" : "87%",
                }}
              />
            ))}

            <div
              aria-hidden="true"
              className="absolute left-1/2 top-[7%] h-[86%] w-px -translate-x-1/2 bg-zinc-500/10"
            />
            <div
              aria-hidden="true"
              className="absolute left-[7%] top-1/2 h-px w-[86%] -translate-y-1/2 bg-zinc-500/10"
            />

            {technicalLabels.map((label) => (
              <div key={label.text.join("-")}>
                <div
                  aria-hidden="true"
                  className={`absolute h-px origin-center bg-zinc-500/35 ${label.lineClassName}`}
                />
                <span
                  aria-hidden="true"
                  className={`absolute h-1.5 w-1.5 border border-zinc-700/55 ${label.anchorClassName}`}
                />
                <div
                  className={`absolute hidden sm:flex flex-col gap-0.5 font-inter text-[9px] font-semibold uppercase leading-[1.35] tracking-[0.28em] text-zinc-500 ${label.className}`}
                >
                  {label.text.map((line) => (
                    <span key={line}>{line}</span>
                  ))}
                </div>
              </div>
            ))}

            <motion.div
              style={{
                x: shouldReduceMotion ? 0 : parallaxX,
                y: shouldReduceMotion ? 0 : parallaxY,
              }}
              className="relative z-10 flex h-[clamp(280px,32vw,360px)] w-[clamp(280px,32vw,360px)] items-center justify-center"
            >
              <motion.div
                animate={{
                  rotateY: shouldReduceMotion ? 0 : 360,
                  y: shouldReduceMotion ? 0 : [0, -7, 0, 7, 0],
                }}
                transition={{
                  rotateY: {
                    duration: 26,
                    repeat: Infinity,
                    ease: "linear",
                  },
                  y: {
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                }}
                className="flex h-full w-full items-center justify-center [transform-style:preserve-3d] transform-gpu"
              >
                <Image
                  src="/ref.jpg"
                  alt="Futuristic black 3D technology sphere"
                  width={620}
                  height={820}
                  priority
                  sizes="(max-width: 640px) 280px, (max-width: 1024px) 320px, 360px"
                  draggable={false}
                  className="h-full w-full select-none object-contain pointer-events-none"
                />
              </motion.div>
            </motion.div>

            <div className="absolute bottom-[8%] left-1/2 hidden -translate-x-1/2 items-center gap-2 font-inter text-[9px] font-semibold uppercase tracking-[0.28em] text-zinc-400 sm:flex">
              <span className="h-px w-8 bg-zinc-500/30" />
              <span>ZH.DEV.ENGINE</span>
              <span className="h-px w-8 bg-zinc-500/30" />
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
              LOCAL TIME
            </span>
            <span className="font-syne font-bold text-3xl sm:text-4xl md:text-5xl tracking-tighter text-[var(--color-charcoal)]">
              {localTime}
            </span>
            <span className="font-inter text-xs tracking-widest text-zinc-500 font-semibold uppercase mt-4 mb-1">
              THRISSUR, INDIA
            </span>
            <span className="font-syne font-bold text-3xl sm:text-4xl md:text-5xl tracking-tighter text-[var(--color-charcoal)]">
              {localDate}
            </span>
          </div>
        </motion.div>
      </motion.div>

      {/* 3. Bottom Row: Small scroll indicator */}
      <div className="w-full flex justify-between items-center text-zinc-400 font-inter text-[10px] tracking-widest uppercase z-10">
        <span>ZIYAVUL HAQ</span>
        <a
          href="#services"
          className="hover:text-[var(--color-charcoal)] transition-colors duration-300 flex items-center space-x-1"
        >
          <span>SCROLL DOWN</span>
          <span className="animate-bounce">↓</span>
        </a>
      </div>
    </section>
  );
}
