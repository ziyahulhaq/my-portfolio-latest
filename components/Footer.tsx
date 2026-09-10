"use client";

import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Asia/Kolkata",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        hour12: true,
      };
      // Format as "3:48:08 PM, IST"
      const formatter = new Intl.DateTimeFormat("en-US", options);
      setTime(`${formatter.format(new Date())} IST`);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleBackToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    const lenis = (window as any).lenis;
    if (lenis) {
      lenis.scrollTo(0, { duration: 0.8 });
    } else {
      const heroSection = document.getElementById("hero");
      if (heroSection) {
        heroSection.scrollIntoView({ behavior: "smooth" });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }
  };

  return (
    <footer
      id="footer"
      className="relative w-full py-16 px-6 md:py-24 md:px-12 bg-[var(--color-sand)] text-[var(--color-charcoal)] border-t border-[var(--border-color)] transition-colors duration-800"
    >
      <div className="max-w-7xl mx-auto flex flex-col space-y-16">
        {/* Footer Top Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Menu */}
          <div className="flex flex-col space-y-4">
            <h4 className="font-syne font-bold text-xs tracking-widest text-zinc-500 uppercase">
              Menu
            </h4>
            <div className="flex flex-col space-y-2 font-inter text-sm">
              <a
                href="#hero"
                className="text-zinc-700 hover:text-[var(--color-charcoal)] transition-colors duration-200 w-fit"
              >
                Home
              </a>
              <a
                href="#services"
                className="text-zinc-700 hover:text-[var(--color-charcoal)] transition-colors duration-200 w-fit"
              >
                Services
              </a>
              <a
                href="#works"
                className="text-zinc-700 hover:text-[var(--color-charcoal)] transition-colors duration-200 w-fit"
              >
                Works
              </a>
              <a
                href="#about"
                className="text-zinc-700 hover:text-[var(--color-charcoal)] transition-colors duration-200 w-fit"
              >
                About
              </a>
              <a
                href="#contact"
                className="text-zinc-700 hover:text-[var(--color-charcoal)] transition-colors duration-200 w-fit"
              >
                Contact
              </a>
            </div>
          </div>

          {/* Socials */}
          <div className="flex flex-col space-y-4">
            <h4 className="font-syne font-bold text-xs tracking-widest text-zinc-500 uppercase">
              Socials
            </h4>
            <div className="flex flex-col space-y-2 font-inter text-sm">
              <a
                href="https://linkedin.com/in/ziyavul-haq"
                target="_blank"
                rel="noreferrer"
                className="text-zinc-700 hover:text-[var(--color-charcoal)] transition-colors duration-200 w-fit"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/ziyahulhaq"
                target="_blank"
                rel="noreferrer"
                className="text-zinc-700 hover:text-[var(--color-charcoal)] transition-colors duration-200 w-fit"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="w-full h-[1px] bg-[var(--border-color)]" />

        <div className="flex flex-col md:flex-row md:justify-between md:items-center space-y-6 md:space-y-0">
          {/* Clock info */}
          <div className="flex flex-col space-y-1">
            <span className="font-inter text-[10px] tracking-widest text-zinc-500 font-semibold uppercase">
              Local Time
            </span>
            <span className="font-mono text-sm font-semibold text-[var(--color-charcoal)]">
              {time || "00:00:00 PM IST"}
            </span>
          </div>

          {/* Copyright notice */}
          <span className="font-inter text-xs text-zinc-500">
            © 2026 Ziyavul Haq. All rights reserved.
          </span>

          {/* Back to Top */}
          <button
            onClick={handleBackToTop}
            className="w-12 h-12 rounded-full border border-[var(--border-color)] hover:bg-[var(--color-charcoal)] hover:text-[var(--color-sand)] transition-all duration-300 flex items-center justify-center cursor-pointer shadow-sm group"
            aria-label="Scroll back to top"
          >
            <ArrowUp size={16} className="group-hover:-translate-y-0.5 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </footer>
  );
}
