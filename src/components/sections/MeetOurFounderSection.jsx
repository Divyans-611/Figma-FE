import React from 'react';

const MeetOurFounderSection = () => {
  return (
    <section className="w-full relative bg-[#0A0A0A] overflow-hidden">
      {/* Blend two radial gradients: Blue Glow bottom left, Green Glow top right */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(circle_at_top_right,_rgba(20,164,77,0.15)_0%,_transparent_60%)] pointer-events-none -z-10" aria-hidden="true"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[radial-gradient(circle_at_bottom_left,_rgba(0,92,255,0.15)_0%,_transparent_60%)] pointer-events-none -z-10" aria-hidden="true"></div>

      <div className="max-w-[1440px] mx-auto">
        {/* Top half: Title left, Image right */}
        <div className="flex flex-col md:flex-row w-full">
          <div className="w-full md:w-1/2 px-5 md:px-16 pt-20 md:pt-32 pb-10 md:pb-16 flex flex-col justify-center">
            <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6" aria-hidden="true">
              <span className="w-1.5 h-1.5 bg-white block"></span>
              <span className="text-[10px] md:text-[11px] tracking-[0.25em] font-sans font-medium text-[rgba(255,255,255,0.9)] uppercase">
                Meet Our Founder
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl lg:text-[4rem] font-serif leading-[1.1] text-white">
              Leslie Martinich
            </h2>
          </div>
          <div className="w-full md:w-1/2 h-[300px] md:h-auto min-h-[300px] md:min-h-[400px] relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-[center_10%]"></div>
          </div>
        </div>

        {/* Bottom half: Text left, Link right */}
        <div className="flex flex-col md:flex-row w-full">
          <div className="w-full md:w-1/2 px-5 md:px-16 py-10 md:py-16 flex flex-col gap-6 md:gap-8 bg-[#005B38]">
            <p className="text-white font-sans text-[14px] md:text-[15px] leading-relaxed max-w-md font-light">
              Leslie Martinich is a leadership expert with 20+ years of experience who founded the Institute of Trusted Leadership to address the global crisis of trust in organizations.
            </p>
            <p className="text-white font-sans text-[14px] md:text-[15px] leading-relaxed max-w-md font-light">
              Through evidence-based, practical approaches, her work develops leaders, transforms cultures, and scales trusted leadership worldwide.
            </p>
          </div>
          <div className="w-full md:w-1/2 px-5 md:px-16 py-10 md:py-16 flex items-center bg-[#00264D]">
            <a href="#meet-leslie" className="flex items-center gap-3 group text-white hover:text-[#14A44D] transition-colors">
              <span className="font-serif text-[28px] md:text-[32px]">Meet Leslie</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
                <line x1="5" y1="19" x2="19" y2="5"></line>
                <polyline points="10 5 19 5 19 14"></polyline>
              </svg>
            </a>
          </div>
        </div>

        {/* Pagination at very bottom */}
        <div className="w-full flex flex-row">
          <div className="w-1/2 bg-[#005B38] border-t border-[rgba(255,255,255,0.08)] py-4 md:py-6 flex justify-end items-center pr-2">
            <span className="text-white font-sans text-xs md:text-sm font-semibold">01</span>
            <div className="w-10 md:w-16 h-[1px] border-b border-dotted border-[rgba(255,255,255,0.3)] ml-4"></div>
          </div>
          <div className="w-1/2 bg-[#00264D] border-t border-[rgba(255,255,255,0.08)] py-4 md:py-6 flex justify-start items-center pl-2 gap-2 md:gap-4 overflow-hidden">
            <div className="w-10 md:w-16 h-[1px] border-b border-dotted border-[rgba(255,255,255,0.3)]"></div>
            <span className="text-[rgba(255,255,255,0.55)] font-sans text-xs md:text-sm shrink-0">02</span>
            <div className="w-20 md:w-32 h-[1px] border-b border-dotted border-[rgba(255,255,255,0.3)]"></div>
            <span className="text-[rgba(255,255,255,0.55)] font-sans text-xs md:text-sm shrink-0">03</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeetOurFounderSection;
