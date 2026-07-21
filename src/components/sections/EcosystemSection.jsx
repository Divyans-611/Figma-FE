import React from 'react';

const EcosystemSection = () => {
  return (
    <section className="w-full py-32 bg-brand-navy relative overflow-hidden" id="ecosystem">
      
      {/* Background Radial Glows */}
      <div className="absolute bottom-[-20%] right-[-10%] w-[800px] h-[600px] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#00A97E]/10 via-[#0066cc]/5 to-transparent blur-[120px] pointer-events-none -z-10"></div>
      <div className="absolute top-[10%] left-[-10%] w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#0066cc]/10 via-transparent to-transparent blur-[100px] pointer-events-none -z-10"></div>
      
      <div className="max-w-[1440px] mx-auto px-8 md:px-16 flex flex-col items-center">
        
        {/* Top Headings (Centered) */}
        <div className="flex flex-col items-center text-center max-w-4xl mb-24">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-1.5 h-1.5 bg-slate-300 block"></span>
            <span className="text-[11px] tracking-[0.25em] font-sans font-medium text-slate-300 uppercase">
              Built on Solid Ground
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-[1.1] text-white mb-8">
            One Vision.<br />Four Pathways to Impact.
          </h2>
          <p className="text-slate-300 font-sans text-lg md:text-[19px] leading-relaxed max-w-3xl font-light">
            The Institute of Trusted Leadership operates through an integrated ecosystem of specialized divisions, each designed to address different aspects of leadership development and organizational transformation.
          </p>
        </div>

        {/* Accordion Cards Container */}
        <div className="w-full flex flex-col lg:flex-row gap-5 lg:h-[700px]">
          
          {/* Card 1: Active (Wide) */}
          <div className="w-full lg:w-[52%] flex flex-col bg-[#0b1622] border border-white/5 rounded-2xl overflow-hidden group cursor-pointer transition-all duration-500 hover:border-white/15 shadow-2xl relative">
            
            {/* Top Tab Label */}
            <div className="bg-[#005bb5] absolute top-0 left-0 px-6 py-3 flex items-center gap-3 rounded-br-2xl z-10">
              <span className="w-1.5 h-1.5 bg-white block"></span>
              <span className="text-[11px] tracking-widest font-sans font-semibold text-white uppercase">Open to All</span>
            </div>
            
            <div className="p-8 pt-20 flex-1 flex flex-col h-full">
               {/* Image Placeholder (Mimicking Luca Website) */}
               <div className="w-full flex-1 bg-[#fbf9f6] rounded-xl mb-10 relative overflow-hidden flex flex-col items-center justify-center min-h-[300px] border border-slate-200">
                 
                 {/* Fake UI Header */}
                 <div className="absolute top-0 w-full px-6 py-4 flex justify-between items-center border-b border-slate-200/60">
                   <div className="font-bold text-xl tracking-tight text-slate-800">Luca<span className="text-sm font-normal text-slate-500">.com</span></div>
                   <div className="hidden md:flex gap-4 text-xs font-medium text-slate-600">
                     <span>Series ∨</span>
                     <span>Author's Website</span>
                     <span>Contact Us</span>
                   </div>
                 </div>

                 {/* Fake Graphic Content */}
                 <div className="text-center mt-8 px-4 relative">
                   <h3 className="text-3xl md:text-5xl font-bold text-slate-800 tracking-tight leading-tight mb-2">
                     Ride the <span className="text-[#f97316]">Wave of</span>
                   </h3>
                   <h3 className="text-3xl md:text-5xl font-bold text-slate-800 tracking-tight leading-tight">
                     Leadership <span className="inline-block border-2 border-cyan-400 rounded-full px-4 py-1 text-slate-800 bg-white shadow-sm relative">with Luca.<div className="absolute -right-6 top-1/2 w-4 h-4 rounded-full border-2 border-cyan-400 bg-transparent"></div></span>
                   </h3>
                   <div className="mt-8 flex items-center justify-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-cyan-400 flex items-center justify-center text-white font-bold">▷</div>
                      <span className="text-sm font-semibold border border-slate-300 rounded-full px-4 py-2">Watch the Series</span>
                   </div>
                 </div>
               </div>

               {/* Card Content Details */}
               <div className="flex flex-col justify-end">
                 <div className="flex justify-between items-start mb-2">
                   <h3 className="text-[32px] font-serif text-white leading-none">LUCA The Leader</h3>
                   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-400 group-hover:text-white transition-colors duration-300"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
                 </div>
                 <h4 className="text-[19px] text-slate-300 font-serif mb-5 leading-relaxed">Where Leadership Awareness Begins</h4>
                 <p className="text-[15px] font-sans text-slate-400 leading-relaxed max-w-2xl">
                   Our flagship CSR initiative bringing trusted leadership awareness to communities, organizations, and emerging leaders. Start your journey with free resources, assessments, and community connection.
                 </p>
               </div>
            </div>
          </div>

          {/* Card 2: Collapsed */}
          <div className="w-full lg:flex-1 bg-[#070e16] border border-white/5 rounded-2xl flex flex-col overflow-hidden group cursor-pointer transition-all duration-500 hover:bg-[#0b1622] hover:border-white/10 relative min-h-[400px]">
             {/* Header Tab */}
             <div className="bg-[#0b1e36] w-full px-6 py-6 flex flex-col items-start gap-4 h-[110px]">
               <span className="w-1.5 h-1.5 bg-white block"></span>
               <span className="text-[10px] tracking-widest font-sans font-semibold text-white uppercase leading-snug">
                 For<br />Organizations
               </span>
             </div>
             
             {/* Vertical Text */}
             <div className="flex-1 flex items-center justify-center p-6 lg:py-16">
                <div 
                  className="flex items-center gap-6 whitespace-nowrap lg:[writing-mode:vertical-rl] lg:rotate-180"
                >
                  <span className="font-serif text-[28px] tracking-[0.1em] text-white uppercase">Martinich Consulting</span>
                  <span className="font-serif text-[20px] text-slate-400">Strategic Leadership Partnerships</span>
                </div>
             </div>
          </div>

          {/* Card 3: Collapsed */}
          <div className="w-full lg:flex-1 bg-[#070e16] border border-white/5 rounded-2xl flex flex-col overflow-hidden group cursor-pointer transition-all duration-500 hover:bg-[#0b1622] hover:border-white/10 relative min-h-[400px]">
             <div className="bg-[#0b1e36] w-full px-6 py-6 flex flex-col items-start gap-4 h-[110px]">
               <span className="w-1.5 h-1.5 bg-white block"></span>
               <span className="text-[10px] tracking-widest font-sans font-semibold text-white uppercase leading-snug">
                 For Individuals<br />& Teams
               </span>
             </div>
             <div className="flex-1 flex items-center justify-center p-6 lg:py-16">
                <div 
                  className="flex items-center gap-6 whitespace-nowrap lg:[writing-mode:vertical-rl] lg:rotate-180"
                >
                  <span className="font-serif text-[28px] tracking-[0.1em] text-white uppercase">Martinich Institute</span>
                  <span className="font-serif text-[20px] text-slate-400">Learning That Transforms</span>
                </div>
             </div>
          </div>

          {/* Card 4: Collapsed */}
          <div className="w-full lg:flex-1 bg-[#070e16] border border-white/5 rounded-2xl flex flex-col overflow-hidden group cursor-pointer transition-all duration-500 hover:bg-[#0b1622] hover:border-white/10 relative min-h-[400px]">
             <div className="bg-[#0b1e36] w-full px-6 py-6 flex flex-col items-start gap-4 h-[110px]">
               <span className="w-1.5 h-1.5 bg-white block"></span>
               <span className="text-[10px] tracking-widest font-sans font-semibold text-white uppercase leading-snug">
                 For Research<br />& Innovation
               </span>
             </div>
             <div className="flex-1 flex items-center justify-center p-6 lg:py-16">
                <div 
                  className="flex items-center gap-6 whitespace-nowrap lg:[writing-mode:vertical-rl] lg:rotate-180"
                >
                  <span className="font-serif text-[28px] tracking-[0.1em] text-white uppercase">Martinich R&D</span>
                  <span className="font-serif text-[20px] text-slate-400">Innovation Meets Insight</span>
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default EcosystemSection;
