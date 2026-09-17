"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu } from "lucide-react";

const navLinks = [
  { name: "Services", href: "#services" },
  { name: "Works", href: "#works" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [showFloating, setShowFloating] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  /* ============================================================
     SCROLL DETECTION
  ============================================================ */
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) {
        setShowFloating(true);
      } else {
        setShowFloating(false);
        setIsOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /* ============================================================
     PREVENT BACKGROUND SCROLL WHEN MENU IS OPEN
  ============================================================ */
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

  /* ============================================================
     MENU DRAWER ANIMATION
  ============================================================ */
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

  /* ============================================================
     MENU LINK ANIMATION
  ============================================================ */
  const linkVariants = {
    closed: {
      y: 50,
      opacity: 0,
    },

    open: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <>
      {/* ==========================================================
          TOP STATIC NAVBAR
      ========================================================== */}
      <header
        className="
          absolute
          top-0
          left-0
          z-40
          flex
          w-full
          items-center
          justify-between
          px-6
          py-8
          md:px-12
          md:py-10
        "
      >
        {/* ========================================================
            LOGO
        ======================================================== */}
        <a
          href="#"
          aria-label="Home"
          className="
            group
            relative
            inline-block
            font-syne
            text-2xl
            font-bold
            tracking-tight
            text-zinc-900
            transition-all
            duration-300
            ease-out
            hover:-translate-y-0.5
            md:text-3xl
          "
        >
          <span
            className="
              inline-block
              transition-transform
              duration-300
              group-hover:scale-[1.02]
            "
          >
            ZH
          </span>

          {/* Logo underline */}
          <span
            className="
              absolute
              -bottom-1
              left-0
              h-[1.5px]
              w-full
              origin-right
              scale-x-0
              bg-zinc-900
              transition-transform
              duration-300
              ease-out
              group-hover:origin-left
              group-hover:scale-x-100
            "
          />
        </a>

        {/* ========================================================
            DESKTOP NAVIGATION
        ======================================================== */}
        <nav className="hidden items-center gap-10 md:flex lg:gap-12">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="
                group
                relative
                inline-flex
                items-center
                font-inter
                text-base
                font-medium
                tracking-tight
                text-zinc-900
                transition-all
                duration-300
                ease-out
                hover:-translate-y-0.5
              "
            >
              <span>{link.name}</span>

              {/* Modern animated underline */}
              <span
                className="
                  absolute
                  -bottom-1
                  left-0
                  h-[1.5px]
                  w-full
                  origin-right
                  scale-x-0
                  bg-zinc-900
                  transition-transform
                  duration-300
                  ease-out
                  group-hover:origin-left
                  group-hover:scale-x-100
                "
              />
            </a>
          ))}
        </nav>

        {/* ========================================================
            MOBILE MENU BUTTON
        ======================================================== */}
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          aria-label="Open navigation menu"
          className="
            group
            flex
            items-center
            gap-2
            font-inter
            text-base
            font-medium
            tracking-tight
            text-zinc-900
            transition-all
            duration-300
            ease-out
            hover:-translate-y-0.5
            md:hidden
          "
        >
          <span>MENU</span>

          <Menu
            size={19}
            strokeWidth={1.5}
            className="
              transition-transform
              duration-300
              ease-out
              group-hover:rotate-12
            "
          />
        </button>
      </header>

      {/* ==========================================================
          FLOATING HAMBURGER BUTTON
      ========================================================== */}
      <AnimatePresence>
        {(showFloating || isOpen) && (
          <motion.button
            type="button"
            initial={{
              scale: 0,
              opacity: 0,
            }}
            animate={{
              scale: 1,
              opacity: 1,
            }}
            exit={{
              scale: 0,
              opacity: 0,
            }}
            transition={{
              type: "spring" as const,
              stiffness: 300,
              damping: 25,
            }}
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label={
              isOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={isOpen}
            className="
              group
              fixed
              right-6
              top-6
              z-50
              flex
              h-14
              w-14
              items-center
              justify-center
              rounded-full
              border
              border-zinc-300
              bg-zinc-100
              shadow-lg
              transition-all
              duration-300
              ease-out
              hover:scale-105
              hover:bg-white
              active:scale-95
              md:right-8
              md:top-8
              md:h-16
              md:w-16
            "
          >
            <div className="relative h-6 w-6">
              {/* Top line */}
              <span
                className={`
                  absolute
                  left-1/2
                  top-1/2
                  block
                  h-[1.5px]
                  w-5
                  -translate-x-1/2
                  bg-zinc-900
                  transition-all
                  duration-300
                  ease-out
                  ${isOpen ? "rotate-45" : "-translate-y-[4px]"}
                `}
              />

              {/* Bottom line */}
              <span
                className={`
                  absolute
                  left-1/2
                  top-1/2
                  block
                  h-[1.5px]
                  w-5
                  -translate-x-1/2
                  bg-zinc-900
                  transition-all
                  duration-300
                  ease-out
                  ${isOpen ? "-rotate-45" : "translate-y-[4px]"}
                `}
              />
            </div>
          </motion.button>
        )}
      </AnimatePresence>

      {/* ==========================================================
          FULLSCREEN NAVIGATION OVERLAY
      ========================================================== */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-40">
            {/* ====================================================
                BACKDROP
            ==================================================== */}
            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 0.55,
              }}
              exit={{
                opacity: 0,
              }}
              transition={{
                duration: 0.35,
                ease: "easeOut",
              }}
              onClick={() => setIsOpen(false)}
              className="
                fixed
                inset-0
                bg-black
              "
            />

            {/* ====================================================
                MENU DRAWER
            ==================================================== */}
            <motion.div
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="
                fixed
                right-0
                top-0
                z-40
                flex
                h-full
                w-full
                flex-col
                justify-between
                border-l
                border-zinc-800
                bg-[var(--color-charcoal)]
                p-8
                text-[var(--color-sand)]
                shadow-2xl
                sm:w-[480px]
                md:p-16
              "
            >
              {/* ==================================================
                  NAVIGATION
              ================================================== */}
              <div className="mt-20 md:mt-24">
                <p
                  className="
                    mb-8
                    font-inter
                    text-[10px]
                    font-semibold
                    uppercase
                    tracking-[0.2em]
                    text-zinc-500
                    sm:text-xs
                  "
                >
                  Navigation
                </p>

                <div className="flex flex-col gap-6 md:gap-8">
                  {navLinks.map((link) => (
                    <div key={link.name} className="overflow-hidden">
                      <motion.div variants={linkVariants}>
                        <a
                          href={link.href}
                          onClick={() => setIsOpen(false)}
                          className="
                            group
                            relative
                            inline-block
                            font-syne
                            text-4xl
                            font-bold
                            tracking-tight
                            text-white
                            transition-all
                            duration-300
                            ease-out
                            hover:translate-x-2
                            hover:text-zinc-300
                            md:text-5xl
                          "
                        >
                          <span>{link.name}</span>

                          {/* Drawer underline */}
                          <span
                            className="
                              absolute
                              bottom-0
                              left-0
                              h-[2px]
                              w-full
                              origin-left
                              scale-x-0
                              bg-white
                              transition-transform
                              duration-300
                              ease-out
                              group-hover:scale-x-100
                            "
                          />
                        </a>
                      </motion.div>
                    </div>
                  ))}
                </div>
              </div>

              {/* ==================================================
                  SOCIALS + CONTACT
              ================================================== */}
              <div className="mt-auto">
                <hr className="my-8 border-zinc-800" />

                <div className="grid grid-cols-2 gap-8">
                  {/* SOCIALS */}
                  <div>
                    <p
                      className="
                        mb-3
                        font-inter
                        text-[10px]
                        font-semibold
                        uppercase
                        tracking-[0.18em]
                        text-zinc-500
                      "
                    >
                      Socials
                    </p>

                    <div className="flex flex-col gap-2 font-inter text-sm">
                      <a
                        href="https://linkedin.com/in/ziyavul-haq"
                        target="_blank"
                        rel="noreferrer"
                        className="
                          w-fit
                          text-zinc-300
                          transition-all
                          duration-200
                          hover:translate-x-1
                          hover:text-white
                        "
                      >
                        LinkedIn
                      </a>

                      <a
                        href="https://github.com/ziyahulhaq"
                        target="_blank"
                        rel="noreferrer"
                        className="
                          w-fit
                          text-zinc-300
                          transition-all
                          duration-200
                          hover:translate-x-1
                          hover:text-white
                        "
                      >
                        GitHub
                      </a>
                    </div>
                  </div>

                  {/* CONTACT */}
                  <div>
                    <p
                      className="
                        mb-3
                        font-inter
                        text-[10px]
                        font-semibold
                        uppercase
                        tracking-[0.18em]
                        text-zinc-500
                      "
                    >
                      Get in Touch
                    </p>

                    <a
                      href="mailto:ziyavulhaq94@gmail.com"
                      className="
                        break-all
                        font-inter
                        text-sm
                        text-zinc-300
                        transition-colors
                        duration-200
                        hover:text-white
                      "
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
