"use client";

import Navbar from "@/components/Navbar";
import Landing from "@/components/Landing";
import Skills from "@/components/Skills";
import CP from "@/components/CP";
import Footer from "@/components/Footer";
import { BackgroundLines } from "@/components/ui/BackgroundLines";
import { AnimatedTestimonials } from "@/components/ui/AnimatedTestinomial"; // ✅ Correct spelling
import { testimonials } from "@/data/testimonials";

export default function Page() {
  return (
    <>
      <Navbar />
      <Landing />
      <Skills />

      {/* Projects Section (still part of homepage) */}
      <section id="projects" className="pt-16">
        <h1 className="text-4xl font-bold mt-10 text-center">PROJECTS</h1>
        <AnimatedTestimonials testimonials={testimonials} />
      </section>

      <CP />
      <BackgroundLines />
      <Footer />
    </>
  );
}