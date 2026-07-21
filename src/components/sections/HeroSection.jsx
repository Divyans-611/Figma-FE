import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen w-full flex flex-col pt-40 md:pt-[240px] pb-10 z-0">
      {/* Immersive Glowing Gradients */}
      <div className="absolute bottom-[-30%] left-[-10%] right-[-10%] h-[100vh] bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-[#00A97E]/20 via-[#0066cc]/15 to-transparent blur-[120px] -z-10 pointer-events-none"></div>
      <div className="absolute bottom-[-15%] left-[10%] right-[10%] h-[60vh] bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-[#D1F2EB]/20 via-[#00A97E]/20 to-transparent blur-[100px] -z-10 pointer-events-none"></div>

      {/* Main Content Container */}
      <div className="w-full max-w-[1440px] mx-auto px-8 md:px-16 flex-1 flex flex-col justify-between h-full">
        
        {/* Top Split Content */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-16 w-full">
          
          {/* Left: Heading Area */}
          <div className="w-full md:w-[65%]">
            {/* Section Label */}
            <div className="flex items-center gap-4 mb-8">
              <span className="w-1.5 h-1.5 bg-slate-200 block"></span>
              <span className="text-[11px] tracking-[0.25em] font-sans font-semibold text-slate-200 uppercase">
                Built on Solid Ground
              </span>
            </div>
            
            {/* Main Title */}
            <h1 className="font-serif text-5xl md:text-[5.5rem] leading-[1.05] text-white tracking-[-0.02em]">
              Building Leaders –<br />
              <span className="italic text-slate-400 font-light pr-3">the</span>World Can Trust.
            </h1>
          </div>

          {/* Right: Paragraph Area */}
          <div className="w-full md:w-[35%] flex justify-end pb-2">
            <p className="font-sans text-[15px] md:text-[17px] text-slate-200 md:text-right max-w-[420px] leading-relaxed font-normal">
              Where purpose meets people. Where organizations transform through trusted leadership, continuous learning, & human responsibility.
            </p>
          </div>
        </div>

        {/* Bottom Scroll Indicator */}
        <div className="w-full mt-32">
          {/* Faint horizontal separator */}
          <div className="w-full h-[1px] bg-white/10 mb-8"></div>
          
          {/* Scroll text and arrow */}
          <div className="flex justify-between items-center text-slate-300 text-[13px] font-sans">
            <span className="font-medium tracking-wide">Scroll to Discover</span>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="18" 
              height="18" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="1.5" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              className="animate-bounce text-slate-400"
            >
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <polyline points="19 12 12 19 5 12"></polyline>
            </svg>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
