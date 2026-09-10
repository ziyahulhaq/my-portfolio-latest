"use client";

import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import SmoothScroll from "../components/SmoothScroll";

export default function Home() {
  useEffect(() => {
    const sections = document.querySelectorAll("section, footer");
    const darkSections = ["services", "works", "skills"];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            if (darkSections.includes(id)) {
              document.documentElement.classList.add("theme-dark");
            } else {
              document.documentElement.classList.remove("theme-dark");
            }
          }
        });
      },
      {
        // Trigger when the section occupies 30% of the viewport height
        rootMargin: "-30% 0px -30% 0px",
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <SmoothScroll>
      <Navbar />
      <main className="w-full min-h-screen flex flex-col">
        <Hero />
        <Services />
        <Projects />
        <Skills />
        <About />
        <Contact />
      </main>
      <Footer />
    </SmoothScroll>
  );
}
