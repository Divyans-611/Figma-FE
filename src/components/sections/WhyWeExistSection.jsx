import React from 'react';

const WhyWeExistSection = () => {
  return (
    <section className="w-full relative bg-[#0A0A0A] pt-20 md:pt-32 pb-24 md:pb-48 overflow-hidden">
      {/* Top green glow */}
      <div className="absolute top-0 left-0 w-full h-[600px] md:h-[800px] bg-[radial-gradient(ellipse_at_top,_rgba(20,164,77,0.25)_0%,_transparent_70%)] pointer-events-none -z-10" aria-hidden="true"></div>

      <div className="max-w-[1440px] mx-auto px-5 md:px-16 flex flex-col items-center relative z-10">
        
        {/* Header */}
        <header className="flex flex-col items-center text-center max-w-3xl mb-16 md:mb-24">
          <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6" aria-hidden="true">
            <span className="w-1.5 h-1.5 bg-white block"></span>
            <span className="text-[10px] md:text-[11px] tracking-[0.25em] font-sans font-medium text-[rgba(255,255,255,0.9)] uppercase">
              The Solution
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-[3.5rem] font-serif leading-[1.1] text-white mb-6 md:mb-8">
            <em className="italic text-[rgba(255,255,255,0.65)] font-light pr-2 md:pr-3">This is</em>Why We Exist
          </h2>
          <p className="text-[rgba(255,255,255,0.72)] font-sans text-[15px] md:text-[16px] leading-relaxed max-w-2xl font-light">
            Trust transforms everything engagement, innovation, performance, & culture. 
            The Institute of Trusted Leadership scales this impact through research-backed 
            methods, turning trusted leadership into the global standard.
          </p>
        </header>

        {/* 3 Columns */}
        <div className="w-full max-w-5xl flex flex-col md:flex-row justify-between items-start gap-10 md:gap-12 relative">
          
          {/* Column 1 */}
          <div className="flex flex-col items-start md:w-1/3 relative z-10 pt-0 md:pt-12">
            <div className="flex items-start gap-4 mb-2 md:mb-4">
              <span className="text-6xl md:text-7xl font-serif text-[rgba(255,255,255,0.9)] leading-none">1</span>
              <div className="flex flex-col pt-2 md:pt-3">
                <h3 className="text-[14px] md:text-[15px] tracking-widest font-sans font-semibold text-white uppercase mb-2">ITL Approach</h3>
                <p className="text-[13px] text-[rgba(255,255,255,0.55)] font-sans leading-relaxed">
                  Evidence-based methodology combining research, training, and consulting to build trusted leaders.
                </p>
              </div>
            </div>
            {/* Vertical Line */}
            <div className="hidden md:block absolute top-[140px] left-[15%] w-[1px] h-32 bg-[rgba(255,255,255,0.3)] bg-gradient-to-b from-[rgba(255,255,255,0.3)] to-transparent"></div>
          </div>

          {/* Column 2 (Highlighted/Center) */}
          <div className="flex flex-col items-start md:w-1/3 relative z-10">
            <div className="flex items-start gap-4 mb-2 md:mb-4">
              <span className="text-7xl md:text-[5.5rem] font-serif text-white leading-none">2</span>
              <div className="flex flex-col pt-3 md:pt-5">
                <h3 className="text-[14px] md:text-[15px] tracking-widest font-sans font-semibold text-white uppercase mb-2">Our Ecosystem</h3>
                <p className="text-[13px] text-[rgba(255,255,255,0.55)] font-sans leading-relaxed">
                  Four integrated divisions delivering comprehensive leadership solutions from awareness to transformation.
                </p>
              </div>
            </div>
            {/* Vertical Line */}
            <div className="hidden md:block absolute top-[160px] left-[20%] w-[1px] h-40 bg-[rgba(255,255,255,0.3)] bg-gradient-to-b from-[rgba(255,255,255,0.3)] to-transparent"></div>
          </div>

          {/* Column 3 */}
          <div className="flex flex-col items-start md:w-1/3 relative z-10 pt-0 md:pt-16">
            <div className="flex items-start gap-4 mb-2 md:mb-4">
              <span className="text-6xl md:text-7xl font-serif text-[rgba(255,255,255,0.9)] leading-none">3</span>
              <div className="flex flex-col pt-2 md:pt-3">
                <h3 className="text-[14px] md:text-[15px] tracking-widest font-sans font-semibold text-white uppercase mb-2">Global Impact</h3>
                <p className="text-[13px] text-[rgba(255,255,255,0.55)] font-sans leading-relaxed">
                  UN SDG-aligned programs ensuring every initiative creates measurable social value.
                </p>
              </div>
            </div>
            {/* Vertical Line */}
            <div className="hidden md:block absolute top-[150px] left-[15%] w-[1px] h-32 bg-[rgba(255,255,255,0.3)] bg-gradient-to-b from-[rgba(255,255,255,0.3)] to-transparent"></div>
          </div>

          {/* Horizontal Dotted Line Connecting them */}
          <div className="hidden md:block absolute top-[300px] left-[10%] right-[10%] h-[1px] border-b border-dotted border-[rgba(255,255,255,0.2)] -z-10"></div>
          
        </div>
      </div>
    </section>
  );
};

export default WhyWeExistSection;
