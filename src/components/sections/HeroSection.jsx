import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen w-full flex flex-col pt-40 md:pt-[240px] pb-10 z-0 bg-[#0A0A0A]" aria-labelledby="hero-title">
      {/* Immersive Glowing Gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_75%,_rgba(0,102,255,0.45)_0%,_transparent_45%)] -z-10 pointer-events-none" aria-hidden="true"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_35%,_rgba(0,200,120,0.42)_0%,_transparent_42%)] -z-10 pointer-events-none" aria-hidden="true"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,_rgba(0,255,120,0.22)_0%,_transparent_65%)] -z-10 pointer-events-none" aria-hidden="true"></div>

      {/* Main Content Container */}
      <div className="w-full max-w-[1440px] mx-auto px-5 md:px-16 flex-1 flex flex-col justify-between h-full">
        
        {/* Top Split Content */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end gap-10 md:gap-16 w-full mt-10 md:mt-0">
          
          {/* Left: Heading Area */}
          <div className="w-full md:w-[65%] flex flex-col items-center md:items-start text-center md:text-left">
            {/* Section Label */}
            <div className="flex items-center gap-3 md:gap-4 mb-6 md:mb-8" aria-hidden="true">
              <span className="w-1.5 h-1.5 bg-white block"></span>
              <span className="text-[10px] md:text-[11px] tracking-[0.25em] font-sans font-semibold text-[rgba(255,255,255,0.9)] uppercase">
                Built on Solid Ground
              </span>
            </div>
            
            {/* Main Title */}
            <h1 id="hero-title" className="font-serif text-4xl sm:text-5xl md:text-[5.5rem] leading-[1.1] md:leading-[1.05] text-white tracking-[-0.02em]">
              Building Leaders –<br />
              <em className="italic text-[rgba(255,255,255,0.65)] font-light pr-2 md:pr-3">the</em>World Can Trust.
            </h1>
          </div>

          {/* Right: Paragraph Area */}
          <div className="w-full md:w-[35%] flex justify-center md:justify-end pb-2">
            <p className="font-sans text-[14px] sm:text-[15px] md:text-[17px] text-[rgba(255,255,255,0.72)] text-center md:text-right max-w-[420px] leading-relaxed font-normal">
              Where purpose meets people. Where organizations transform through trusted leadership, continuous learning, & human responsibility.
            </p>
          </div>
        </div>

        {/* Bottom Scroll Indicator */}
        <div className="w-full mt-32">
          {/* Faint horizontal separator */}
          <div className="w-full h-[1px] bg-[rgba(255,255,255,0.12)] mb-8" aria-hidden="true"></div>
          
          {/* Scroll text and arrow */}
          <a href="#discover" className="flex justify-between items-center text-[rgba(255,255,255,0.55)] hover:text-white transition-colors duration-300 text-[13px] font-sans group" aria-label="Scroll down to discover more">
            <span className="font-medium tracking-wide">Scroll to Discover</span>
            <svg 
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg" 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="1.5" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className="text-[rgba(255,255,255,0.55)] group-hover:text-white transition-colors animate-bounce"
            >
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <polyline points="19 12 12 19 5 12"></polyline>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
