import React from 'react';
import { FaLinkedinIn, FaTwitter, FaInstagram, FaEnvelope, FaGithub } from 'react-icons/fa';
import { BackgroundLines } from './ui/BackgroundLines';

const PortfolioLandingPage = () => {
  return (
    <div className="relative min-h-screen bg-neutral-950 text-white overflow-hidden">
      
      {/* Geometric pattern background */}
      <div className="absolute inset-0 z-0 opacity-40">
        <div className="absolute right-0 top-0 w-1/2 h-full">
          {Array(40).fill(undefined).map((_, i) => (
            <div 
              key={i} 
              className="absolute"
              style={{
                width: `${Math.random() * 5 + 1}rem`,
                height: `${Math.random() * 5 + 1}rem`,
                borderRadius: Math.random() > 0.5 ? '0' : '50%',
                background: Math.random() > 0.8 ? 'rgba(45, 212, 191, 0.3)' : 'rgba(75, 85, 99, 0.4)',
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                transform: `rotate(${Math.random() * 360}deg)`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Navigation logo */}
      

      {/* Main content */}
      <div className="container mx-auto px-8 py-20 md:px-16 flex flex-col h-screen justify-center relative z-10">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between">
          {/* Left side text content */}
          <div className="md:w-1/2 z-10">
            <h1 className="text-5xl md:text-7xl font-bold mt-8 md:mt-0">
              Pritam Kumar
            </h1>
            <h2 className="text-xl md:text-2xl font-light mt-4 text-gray-300">
              FULLSTACK DEVELOPER & COMPETITIVE PROGRAMMER
            </h2>
            
            <button className="mt-8 px-6 py-3 bg-gradient-to-r from-blue-600 to-teal-400 text-white font-medium rounded hover:from-blue-700 hover:to-teal-500 transition flex items-center space-x-2">
              <span>About Me</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
          
          {/* Logo/visual element */}
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-64 h-64 md:w-96 md:h-96">
              <svg viewBox="0 0 200 200" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <path 
                  d="M0 100 L100 0 L200 100 L100 200 Z" 
                  fill="none"
                  stroke="url(#blue-gradient)"
                  strokeWidth="8"
                />
                <path 
                  d="M40 100 L100 40 L160 100 L100 160 Z" 
                  fill="none"
                  stroke="url(#blue-gradient)"
                  strokeWidth="8"
                />
                <line 
                  x1="0" y1="100" x2="200" y2="100"
                  stroke="url(#blue-gradient)"
                  strokeWidth="8"
                />
                <line 
                  x1="100" y1="0" x2="100" y2="200"
                  stroke="url(#blue-gradient)"
                  strokeWidth="8"
                />
                <defs>
                  <linearGradient id="blue-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#0ea5e9" />
                    <stop offset="100%" stopColor="#14b8a6" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>
        
        
      </div>

      {/* Social icons */}
      <div className="fixed right-8 top-1/2 transform -translate-y-1/2 flex flex-col gap-6 z-20">
        <a href="https://www.linkedin.com/in/pritam-k/" target="_blank" className="text-xl hover:text-teal-400 transition-colors">
          <FaLinkedinIn />
        </a>
    
        <a href="mailto:em.pritamkr@gmail.com" target="_blank" className="text-xl hover:text-teal-400 transition-colors">
          <FaEnvelope />
        </a>
        <a href="https://github.com/01pritam" target="_blank" className="text-xl hover:text-teal-400 transition-colors">
          <FaGithub />
        </a>
      </div>
    
    </div>
  );
};

export default PortfolioLandingPage;