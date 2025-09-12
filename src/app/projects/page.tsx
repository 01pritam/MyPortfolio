"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { testimonials } from "@/data/testimonials"; // import your testimonials

export default function ProjectsPage() {
  const [currentProject, setCurrentProject] = useState(0);

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % testimonials.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToProject = (index: number) => {
    setCurrentProject(index);
  };

  return (
    <div className="min-h-screen  text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Our Projects</h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Explore our portfolio of innovative solutions and cutting-edge applications
          </p>
        </div>

        {/* Featured Project */}
        <div className="bg-gray-800 rounded-xl shadow-lg overflow-hidden mb-8">
          <div className="md:flex">
            <div className="md:w-1/2">
              <img
                src={testimonials[currentProject].src}
                alt={testimonials[currentProject].name}
                className="w-full h-64 md:h-full object-cover"
              />
            </div>
            <div className="md:w-1/2 p-8">
              <div className="flex items-center justify-between mb-4">
                {/* <span className="bg-blue-600 text-white text-sm px-3 py-1 rounded-full">
                  {testimonials[currentProject].designation}
                </span> */}
                <div className="flex gap-2">
                  <button
                    onClick={prevProject}
                    className="p-2 rounded-full bg-gray-700 hover:bg-gray-600 transition-colors"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={nextProject}
                    className="p-2 rounded-full bg-gray-700 hover:bg-gray-600 transition-colors"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>

              <h2 className="text-2xl font-bold mb-4">
                {testimonials[currentProject].name}
              </h2>

              <p className="text-gray-300 leading-relaxed mb-6">
                {testimonials[currentProject].quote}
              </p>

              <div className="flex gap-3">
                <a
                  href={testimonials[currentProject].github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  GitHub
                </a>
                <a
                  href={testimonials[currentProject].live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-gray-500 text-gray-300 px-6 py-2 rounded-lg hover:bg-gray-700 transition-colors"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Project Navigation Dots */}
        <div className="flex justify-center gap-2 mb-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToProject(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentProject ? "bg-blue-600" : "bg-gray-500"
              }`}
            />
          ))}
        </div>

        {/* All Projects Grid */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold mb-6">All Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((project, index) => (
              <div
                key={index}
                className={`bg-gray-800 rounded-lg shadow-md overflow-hidden cursor-pointer transition-transform hover:scale-105 ${
                  index === currentProject ? "ring-2 ring-blue-500" : ""
                }`}
                onClick={() => goToProject(index)}
              >
                <img
                  src={project.src}
                  alt={project.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  {/* <span className="text-sm text-blue-400 font-medium">
                    {project.designation}
                  </span> */}
                  <h4 className="font-bold text-white mt-1 mb-2">
                    {project.name}
                  </h4>
                  <p className="text-gray-300 text-sm line-clamp-3">{project.quote}</p>

                  {/* Quick Links */}
                  <div className="flex gap-2 mt-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-blue-400 hover:underline"
                    >
                      GitHub
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-green-400 hover:underline"
                    >
                      Live
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}