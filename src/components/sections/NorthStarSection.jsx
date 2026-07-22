import React from 'react';
import ProgressBar from '../ui/ProgressBar';

const EyeIcon = ({ className = "w-8 h-8" }) => (
  <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const TargetIcon = ({ className = "w-7 h-7" }) => (
  <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="6" />
    <circle cx="12" cy="12" r="2" />
  </svg>
);

const TrophyIcon = ({ className = "w-7 h-7" }) => (
  <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
    <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
    <path d="M4 22h16" />
    <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
    <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
    <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
  </svg>
);

const NorthStarSection = () => {
  return (
    <section className="w-full py-32 bg-[#0A0A0A] relative overflow-hidden" aria-labelledby="northstar-title">
      <div className="max-w-[1440px] mx-auto px-5 md:px-16 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
        
        <div className="w-full lg:w-1/2 flex justify-center items-center relative min-h-[400px] md:min-h-[500px]" aria-hidden="true">
          
          <div className="absolute w-full h-[1px] bg-transparent border-b border-[rgba(255,255,255,0.12)] bottom-[15%]"></div>
          <div className="absolute bottom-[15%] left-[15%] sm:left-[22%] w-[1px] h-12 md:h-16 bg-[rgba(255,255,255,0.12)]"></div>
          <div className="absolute bottom-[15%] right-[15%] sm:right-[22%] w-[1px] h-12 md:h-16 bg-[rgba(255,255,255,0.12)]"></div>
          <div className="absolute bottom-[15%] left-1/2 -translate-x-1/2 w-[1px] h-24 md:h-40 bg-[rgba(255,255,255,0.12)]">
             <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-white"></div>
          </div>

          <div className="w-[300px] h-[300px] sm:w-[360px] sm:h-[360px] md:w-[440px] md:h-[440px] rounded-full border border-[rgba(255,255,255,0.08)] flex justify-center items-center relative z-0">
             <div className="w-[200px] h-[200px] sm:w-[260px] sm:h-[260px] md:w-[320px] md:h-[320px] rounded-full border border-[rgba(255,255,255,0.08)] flex justify-center items-center">
                <div className="w-[120px] h-[120px] sm:w-[160px] sm:h-[160px] rounded-full bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)]"></div>
             </div>
          </div>
          
          <button 
            className="absolute top-[10%] md:top-[12%] left-1/2 -translate-x-1/2 w-[56px] h-[56px] md:w-[72px] md:h-[72px] bg-[#005CFF] rounded-full shadow-[0_0_120px_rgba(0,92,255,0.2)] flex items-center justify-center z-10 transition-transform duration-300 hover:scale-110 hover:-translate-y-2 hover:bg-[#1a6dff]"
            aria-label="View Vision details"
          >
            <EyeIcon className="text-white w-6 h-6 md:w-8 md:h-8" />
          </button>

          <button 
            className="absolute bottom-[20%] md:bottom-[25%] left-[8%] sm:left-[12%] w-[48px] h-[48px] md:w-[64px] md:h-[64px] bg-[#14A44D] rounded-full shadow-[0_0_120px_rgba(20,164,77,0.2)] flex items-center justify-center z-10 transition-transform duration-300 hover:scale-110 hover:-translate-y-2 hover:bg-[#20b75d]"
            aria-label="View Target details"
          >
            <TargetIcon className="text-white w-5 h-5 md:w-7 md:h-7" />
          </button>

          <button 
            className="absolute bottom-[20%] md:bottom-[25%] right-[8%] sm:right-[12%] w-[48px] h-[48px] md:w-[64px] md:h-[64px] bg-[#14A44D] rounded-full shadow-[0_0_120px_rgba(20,164,77,0.2)] flex items-center justify-center z-10 transition-transform duration-300 hover:scale-110 hover:-translate-y-2 hover:bg-[#20b75d]"
            aria-label="View Impact details"
          >
            <TrophyIcon className="text-white w-5 h-5 md:w-7 md:h-7" />
          </button>
          
        </div>

        <div className="w-full lg:w-1/2 flex flex-col justify-center text-center lg:text-left mt-8 lg:mt-0">
          <div className="max-w-[500px] mx-auto lg:mx-0">
            <div className="flex items-center justify-center lg:justify-start gap-3 md:gap-4 mb-4 md:mb-6" aria-hidden="true">
              <span className="w-1.5 h-1.5 bg-[#005CFF] block"></span>
              <span className="text-[10px] md:text-[11px] tracking-[0.25em] font-sans font-semibold text-[#005CFF] uppercase">
                Our North Star
              </span>
            </div>
            
            <h2 id="northstar-title" className="text-3xl sm:text-4xl md:text-[3rem] font-serif text-white leading-[1.15] md:leading-[1.1] mb-4 md:mb-6">
              Guiding Leadership <br className="hidden md:block"/> with Clear Vision.
            </h2>
            
            <p className="text-[rgba(255,255,255,0.72)] font-sans text-[15px] md:text-[17px] leading-relaxed mb-8 md:mb-12 font-light">
              Transforming organizations requires a steadfast commitment to the goals ahead. 
              By aligning purpose with measurable outcomes, we ensure sustainable success and 
              cultivate the next generation of trusted leaders.
            </p>
            
            <div className="mt-8" role="region" aria-label="Progress Roadmap">
               <div className="flex justify-between text-[11px] md:text-[13px] font-sans font-medium text-[rgba(255,255,255,0.55)] mb-3 px-1" aria-hidden="true">
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
