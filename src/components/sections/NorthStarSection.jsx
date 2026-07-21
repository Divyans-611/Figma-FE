import React from 'react';
import ProgressBar from '../ui/ProgressBar';

const NorthStarSection = () => {
  return (
    <section className="w-full py-32 bg-white relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-8 md:px-16 flex flex-col lg:flex-row items-center justify-between gap-20">
        
        {/* Left Side: Large Circular Element with Icons */}
        <div className="w-full lg:w-1/2 flex justify-center items-center relative min-h-[500px]">
          
          {/* Background Dotted Track (from Image 4 reference) */}
          <div className="absolute w-full h-[1px] bg-transparent border-b-2 border-dotted border-slate-200 bottom-[15%]"></div>
          <div className="absolute bottom-[15%] left-[22%] w-[1px] h-16 bg-slate-200"></div>
          <div className="absolute bottom-[15%] right-[22%] w-[1px] h-16 bg-slate-200"></div>
          <div className="absolute bottom-[15%] left-1/2 -translate-x-1/2 w-[1px] h-40 bg-slate-200">
             <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-slate-300"></div>
          </div>

          {/* Large Circular Element */}
          <div className="w-[360px] h-[360px] md:w-[440px] md:h-[440px] rounded-full border border-slate-100 flex justify-center items-center relative z-0">
             <div className="w-[260px] h-[260px] md:w-[320px] md:h-[320px] rounded-full border border-slate-50 flex justify-center items-center">
                <div className="w-[160px] h-[160px] rounded-full bg-slate-50/50"></div>
             </div>
          </div>
          
          {/* Absolute Positioned Icons */}
          
          {/* Eye Icon (Active / North Star) */}
          <div className="absolute top-[12%] left-1/2 -translate-x-1/2 w-[72px] h-[72px] bg-brand-blue rounded-full shadow-[0_12px_36px_rgba(0,102,204,0.35)] flex items-center justify-center z-10 transition-transform duration-300 hover:scale-110 hover:-translate-y-2 cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
              <circle cx="12" cy="12" r="3" />
            </svg>
          </div>

          {/* Target Icon */}
          <div className="absolute bottom-[25%] left-[12%] w-[64px] h-[64px] bg-brand-green rounded-full shadow-xl flex items-center justify-center z-10 transition-transform duration-300 hover:scale-110 hover:-translate-y-2 cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <circle cx="12" cy="12" r="6" />
              <circle cx="12" cy="12" r="2" />
            </svg>
          </div>

          {/* Trophy Icon */}
          <div className="absolute bottom-[25%] right-[12%] w-[64px] h-[64px] bg-brand-green rounded-full shadow-xl flex items-center justify-center z-10 transition-transform duration-300 hover:scale-110 hover:-translate-y-2 cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
              <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
              <path d="M4 22h16" />
              <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
              <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
              <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
            </svg>
          </div>
          
        </div>

        {/* Right Side: Content Box */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center">
          <div className="max-w-[500px]">
            {/* Section Label */}
            <div className="flex items-center gap-4 mb-6">
              <span className="w-1.5 h-1.5 bg-brand-blue block"></span>
              <span className="text-[11px] tracking-[0.25em] font-sans font-semibold text-brand-blue uppercase">
                Our North Star
              </span>
            </div>
            
            {/* Headline */}
            <h2 className="text-4xl md:text-[3rem] font-serif text-brand-navy leading-[1.1] mb-6">
              Guiding Leadership <br className="hidden md:block"/> with Clear Vision.
            </h2>
            
            {/* Description */}
            <p className="text-slate-600 font-sans text-[17px] leading-relaxed mb-12 font-light">
              Transforming organizations requires a steadfast commitment to the goals ahead. 
              By aligning purpose with measurable outcomes, we ensure sustainable success and 
              cultivate the next generation of trusted leaders.
            </p>
            
            {/* Progress Bar Container */}
            <div className="mt-8">
               <div className="flex justify-between text-[13px] font-sans font-medium text-slate-500 mb-3 px-1">
                 <span>Initiate</span>
                 <span>Develop</span>
                 <span>Execute</span>
                 <span>Impact</span>
               </div>
               <ProgressBar steps={4} activeStep={2} />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default NorthStarSection;
