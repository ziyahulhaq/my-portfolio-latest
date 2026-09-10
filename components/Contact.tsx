"use client";

import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

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

const leftColVariants = {
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

const rightColVariants = {
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

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
    if (error) setError("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) {
      setError("Please fill out all fields.");
      return;
    }

    setIsSubmitting(true);
    // Simulate API submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormState({ name: "", email: "", message: "" });
    }, 1500);
  };

  return (
    <section
      id="contact"
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
              Let's Connect /
            </h2>
          </motion.div>
          <motion.div variants={headerItemVariants} className="lg:col-span-6 lg:pl-12 flex flex-col md:flex-row md:space-x-12 space-y-6 md:space-y-0">
            <div className="font-inter text-xs tracking-widest text-zinc-500 uppercase shrink-0 pt-1">
              (Contact)
            </div>
            <p className="font-inter text-zinc-700 text-base md:text-lg leading-relaxed">
              Have a project in mind or want to talk about system architecture, AI pipelines, or development work? Drop a message below or contact me directly via email.
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

        {/* Form and Details Layout */}
        <motion.div
          variants={contentVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10% 0px" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start"
        >
          {/* Direct Details & Social Links (Left) */}
          <motion.div variants={leftColVariants} className="lg:col-span-5 flex flex-col space-y-10">
            <div className="flex flex-col space-y-3">
              <span className="font-inter text-xs tracking-widest text-zinc-500 uppercase font-semibold">
                Direct Email
              </span>
              <a
                href="mailto:ziyavulhaq94@gmail.com"
                className="font-syne font-bold text-2xl md:text-3xl hover:opacity-75 transition-opacity duration-300 break-all text-[var(--color-charcoal)] w-fit"
              >
                ziyavulhaq94@gmail.com
              </a>
            </div>

            <div className="flex flex-col space-y-3">
              <span className="font-inter text-xs tracking-widest text-zinc-500 uppercase font-semibold">
                Social Networks
              </span>
              <div className="flex flex-col space-y-2 font-inter text-base">
                <a
                  href="https://linkedin.com/in/ziyavul-haq"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:underline transition-all duration-300 text-zinc-700 hover:text-[var(--color-charcoal)] w-fit"
                >
                  linkedin.com/in/ziyavul-haq ↗
                </a>
                <a
                  href="https://github.com/ziyahulhaq"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:underline transition-all duration-300 text-zinc-700 hover:text-[var(--color-charcoal)] w-fit"
                >
                  github.com/ziyahulhaq ↗
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form (Right) */}
          <motion.div
            variants={rightColVariants}
            className="lg:col-span-7 w-full p-8 md:p-10 rounded-2xl border border-[var(--border-color)] bg-white/20 backdrop-blur-sm shadow-sm"
          >
            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center space-y-4">
                <CheckCircle2 size={48} className="text-zinc-800 animate-[scaleIn_0.3s_ease-out]" />
                <h3 className="font-syne font-bold text-2xl text-[var(--color-charcoal)]">
                  Message Sent!
                </h3>
                <p className="font-inter text-sm text-zinc-600 max-w-sm">
                  Thank you for reaching out. I have received your message and will get back to you shortly.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="mt-4 px-6 py-2 rounded-full border border-[var(--color-charcoal)] font-inter text-xs font-semibold uppercase tracking-wider hover:bg-[var(--color-charcoal)] hover:text-[var(--color-sand)] transition-all duration-300"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col space-y-8">
                {error && (
                  <div className="text-red-500 font-inter text-xs font-semibold bg-red-50 border border-red-200 p-3 rounded-lg">
                    {error}
                  </div>
                )}

                {/* Name field */}
                <div className="flex flex-col space-y-2 relative">
                  <label
                    htmlFor="name"
                    className="font-inter text-xs tracking-wide text-zinc-500 font-semibold uppercase"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    placeholder="e.g. John Doe"
                    className="font-inter text-base text-[var(--color-charcoal)] border-b border-[var(--border-color)] pb-3 pt-1 bg-transparent hover:border-zinc-400 focus:border-[var(--color-charcoal)] transition-colors duration-300"
                  />
                </div>

                {/* Email field */}
                <div className="flex flex-col space-y-2 relative">
                  <label
                    htmlFor="email"
                    className="font-inter text-xs tracking-wide text-zinc-500 font-semibold uppercase"
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    placeholder="e.g. john@example.com"
                    className="font-inter text-base text-[var(--color-charcoal)] border-b border-[var(--border-color)] pb-3 pt-1 bg-transparent hover:border-zinc-400 focus:border-[var(--color-charcoal)] transition-colors duration-300"
                  />
                </div>

                {/* Message field */}
                <div className="flex flex-col space-y-2 relative">
                  <label
                    htmlFor="message"
                    className="font-inter text-xs tracking-wide text-zinc-500 font-semibold uppercase"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formState.message}
                    onChange={handleChange}
                    placeholder="Let me know how I can help..."
                    className="font-inter text-base text-[var(--color-charcoal)] border-b border-[var(--border-color)] pb-3 pt-1 bg-transparent hover:border-zinc-400 focus:border-[var(--color-charcoal)] transition-colors duration-300 resize-none"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex items-center justify-center space-x-3 px-6 py-4 rounded-full bg-[var(--color-charcoal)] hover:bg-zinc-800 text-[var(--color-sand)] disabled:opacity-50 transition-all duration-300 font-inter text-sm font-semibold tracking-wide uppercase shadow-sm cursor-pointer"
                >
                  <span>{isSubmitting ? "Sending..." : "Submit Message"}</span>
                  {!isSubmitting && <Send size={14} />}
                </button>
              </form>
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
