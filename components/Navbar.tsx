"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Services", href: "#services" },
  { name: "Works", href: "#works" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [showFloating, setShowFloating] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show floating menu when scrolling past 150px
      if (window.scrollY > 150) {
        setShowFloating(true);
      } else {
        setShowFloating(false);
        setIsOpen(false); // Close menu if we scroll back to top
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const menuVariants = {
    closed: {
      x: "100%",
      transition: {
        type: "spring" as const,
        stiffness: 400,
        damping: 40,
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
    open: {
      x: 0,
      transition: {
        type: "spring" as const,
        stiffness: 400,
        damping: 40,
        staggerChildren: 0.07,
        delayChildren: 0.2,
      },
    },
  };

  const linkVariants = {
    closed: { y: 50, opacity: 0 },
    open: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" as const } },
  };

  return (
    <>
      {/* Top Static Navbar (visible at top of page) */}
      <header className="absolute top-0 left-0 w-full z-40 px-6 py-8 md:px-12 md:py-10 flex justify-between items-center mix-blend-difference">
        <a href="#" className="font-syne font-bold text-xl md:text-2xl tracking-tight text-[var(--text-color)] opacity-100 hover:opacity-80 transition-opacity">
          ZH
        </a>
        <nav className="hidden md:flex space-x-12">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="font-inter font-semibold text-sm text-[var(--text-color)] opacity-95 hover:opacity-100 transition-all duration-300 relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1.5px] after:bg-[var(--text-color)] hover:after:w-full after:transition-all after:duration-300"
            >
              {link.name}
            </a>
          ))}
        </nav>
        {/* Simple menu button for mobile at the top */}
        <button
          onClick={() => setIsOpen(true)}
          className="md:hidden flex items-center space-x-2 font-inter font-semibold text-sm text-[var(--text-color)] opacity-95 hover:opacity-100"
        >
          <span>MENU</span>
          <Menu size={18} />
        </button>
      </header>

      {/* Floating Hamburger Button (appears on scroll) */}
      <AnimatePresence>
        {(showFloating || isOpen) && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ type: "spring" as const, stiffness: 300, damping: 25 }}
            onClick={() => setIsOpen(!isOpen)}
            className="fixed top-6 right-6 md:top-8 md:right-8 z-50 w-14 h-14 md:w-16 md:h-16 rounded-full flex flex-col items-center justify-center shadow-lg border border-[var(--border-color)] bg-[var(--text-color)] text-[var(--bg-color)] transition-colors duration-300 cursor-pointer group"
            aria-label="Toggle navigation menu"
          >
            <div className="relative w-6 h-6 flex flex-col items-center justify-center">
              {/* Custom animated hamburger lines */}
              <span
                className={`absolute block h-[1.5px] w-5 bg-[var(--bg-color)] transition-transform duration-300 ${
                  isOpen ? "rotate-45" : "-translate-y-1.5"
                }`}
              />
              <span
                className={`absolute block h-[1.5px] w-5 bg-[var(--bg-color)] transition-transform duration-300 ${
                  isOpen ? "-rotate-45" : "translate-y-1.5"
                }`}
              />
            </div>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Fullscreen Navigation Overlay */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-40 flex">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black"
            />

            {/* Menu Drawer */}
            <motion.div
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="fixed top-0 right-0 h-full w-full sm:w-[480px] bg-[var(--color-charcoal)] text-[var(--color-sand)] border-l border-zinc-800 p-8 md:p-16 flex flex-col justify-between shadow-2xl z-40"
            >
              {/* Menu Links */}
              <div className="mt-20 md:mt-24">
                <p className="font-inter text-xs tracking-widest text-zinc-500 mb-8 uppercase">
                  Navigation
                </p>
                <div className="flex flex-col space-y-6 md:space-y-8">
                  {navLinks.map((link) => (
                    <div key={link.name} className="overflow-hidden">
                      <motion.div variants={linkVariants}>
                        <a
                          href={link.href}
                          onClick={() => setIsOpen(false)}
                          className="font-syne font-bold text-4xl md:text-5xl tracking-tight text-white hover:text-zinc-300 transition-colors duration-300 block"
                        >
                          {link.name}
                        </a>
                      </motion.div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Socials & Info */}
              <div className="mt-auto">
                <hr className="border-zinc-800 my-8" />
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <p className="font-inter text-[10px] tracking-wider text-zinc-500 uppercase mb-3">
                      Socials
                    </p>
                    <div className="flex flex-col space-y-2 font-inter text-sm">
                      <a
                        href="https://linkedin.com/in/ziyavul-haq"
                        target="_blank"
                        rel="noreferrer"
                        className="text-zinc-300 hover:text-white transition-colors duration-200"
                      >
                        LinkedIn
                      </a>
                      <a
                        href="https://github.com/ziyahulhaq"
                        target="_blank"
                        rel="noreferrer"
                        className="text-zinc-300 hover:text-white transition-colors duration-200"
                      >
                        GitHub
                      </a>
                    </div>
                  </div>
                  <div>
                    <p className="font-inter text-[10px] tracking-wider text-zinc-500 uppercase mb-3">
                      Get in Touch
                    </p>
                    <a
                      href="mailto:ziyavulhaq94@gmail.com"
                      className="font-inter text-sm text-zinc-300 hover:text-white transition-colors duration-200 break-all"
                    >
                      ziyavulhaq94@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
