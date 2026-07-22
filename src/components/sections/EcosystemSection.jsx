import React from 'react';

const CollapsedCard = ({ tabLines, title, subtitle }) => (
  <button 
    className="w-full lg:flex-1 bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] rounded-[18px] flex flex-row lg:flex-col overflow-hidden group transition-all duration-300 hover:bg-[rgba(255,255,255,0.06)] relative min-h-[120px] lg:min-h-[400px] text-left"
    aria-label={`Select ${title}`}
  >
    <div className="bg-[#005CFF] w-[120px] lg:w-full px-4 lg:px-6 py-4 lg:py-6 flex flex-col items-start justify-center lg:justify-start gap-2 lg:gap-4 h-full lg:h-[110px]" aria-hidden="true">
      <span className="w-1.5 h-1.5 bg-white block"></span>
      <span className="text-[10px] tracking-widest font-sans font-semibold text-white uppercase leading-snug hidden lg:block">
        {tabLines.map((line, i) => (
          <React.Fragment key={i}>
            {line}{i < tabLines.length - 1 && <br />}
          </React.Fragment>
        ))}
      </span>
      <span className="text-[10px] tracking-widest font-sans font-semibold text-white uppercase leading-snug block lg:hidden">
        {tabLines.join(' ')}
      </span>
    </div>
    
    <div className="flex-1 flex items-center justify-start lg:justify-center p-5 lg:p-6 lg:py-16 w-full">
      <div className="flex flex-col lg:flex-row items-start lg:items-center gap-1 lg:gap-6 whitespace-normal lg:whitespace-nowrap lg:[writing-mode:vertical-rl] lg:rotate-180">
        <span className="font-serif text-[20px] lg:text-[28px] tracking-normal lg:tracking-[0.1em] text-white uppercase">{title}</span>
        <span className="font-serif text-[15px] lg:text-[20px] text-[rgba(255,255,255,0.72)]">{subtitle}</span>
      </div>
    </div>
  </button>
);

const EcosystemSection = () => {
  const collapsedCards = [
    {
      tabLines: ["For", "Organizations"],
      title: "Martinich Consulting",
      subtitle: "Strategic Leadership Partnerships"
    },
    {
      tabLines: ["For Individuals", "& Teams"],
      title: "Martinich Institute",
      subtitle: "Learning That Transforms"
    },
    {
      tabLines: ["For Research", "& Innovation"],
      title: "Martinich R&D",
      subtitle: "Innovation Meets Insight"
    }
  ];

  return (
    <section className="w-full py-20 md:py-32 bg-[linear-gradient(180deg,#00264D_25%,rgba(0,38,77,0)_100%)] relative overflow-hidden" id="ecosystem" aria-labelledby="ecosystem-title">
      
      <div className="absolute bottom-[-20%] right-[-10%] w-[800px] h-[600px] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#00A97E]/10 via-[#0066cc]/5 to-transparent blur-[120px] pointer-events-none -z-10" aria-hidden="true"></div>
      <div className="absolute top-[10%] left-[-10%] w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#0066cc]/10 via-transparent to-transparent blur-[100px] pointer-events-none -z-10" aria-hidden="true"></div>
      
      <div className="max-w-[1440px] mx-auto px-5 md:px-16 flex flex-col items-center">
        
        <header className="flex flex-col items-center text-center max-w-4xl mb-16 md:mb-24">
          <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6" aria-hidden="true">
            <span className="w-1.5 h-1.5 bg-white block"></span>
            <span className="text-[10px] md:text-[11px] tracking-[0.25em] font-sans font-medium text-[rgba(255,255,255,0.9)] uppercase">
              Built on Solid Ground
            </span>
          </div>
          <h2 id="ecosystem-title" className="text-3xl md:text-5xl lg:text-6xl font-serif leading-[1.1] text-white mb-6 md:mb-8">
            One Vision.<br />Four Pathways to Impact.
          </h2>
          <p className="text-[rgba(255,255,255,0.72)] font-sans text-[15px] md:text-[19px] leading-relaxed max-w-3xl font-light">
            The Institute of Trusted Leadership operates through an integrated ecosystem of specialized divisions, each designed to address different aspects of leadership development and organizational transformation.
          </p>
        </header>

        <div className="w-full flex flex-col lg:flex-row gap-5 lg:h-[700px]">
          
          <button 
            className="w-full lg:w-[52%] flex flex-col bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] rounded-[18px] overflow-hidden group transition-all duration-300 hover:bg-[rgba(255,255,255,0.06)] shadow-2xl relative text-left"
            aria-label="Expand LUCA The Leader"
          >
            <div className="bg-[#005CFF] absolute top-0 left-0 px-6 py-3 flex items-center gap-3 rounded-br-[18px] z-10" aria-hidden="true">
              <span className="w-1.5 h-1.5 bg-white block"></span>
              <span className="text-[11px] tracking-widest font-sans font-semibold text-white uppercase">Open to All</span>
            </div>
            
            <div className="p-8 pt-20 flex-1 flex flex-col h-full w-full">
               <div className="w-full flex-1 bg-[#fbf9f6] rounded-xl mb-10 relative overflow-hidden flex flex-col items-center justify-center min-h-[300px] border border-slate-200" aria-hidden="true">
                 <div className="absolute top-0 w-full px-6 py-4 flex justify-between items-center border-b border-slate-200/60">
                   <div className="font-bold text-xl tracking-tight text-slate-800">Luca<span className="text-sm font-normal text-slate-500">.com</span></div>
                   <div className="hidden md:flex gap-4 text-xs font-medium text-slate-600">
                     <span>Series ∨</span>
                     <span>Author's Website</span>
                     <span>Contact Us</span>
                   </div>
                 </div>

                 <div className="text-center mt-8 px-4 relative">
                   <span className="block text-3xl md:text-5xl font-bold text-slate-800 tracking-tight leading-tight mb-2">
                     Ride the <span className="text-[#f97316]">Wave of</span>
                   </span>
                   <span className="block text-3xl md:text-5xl font-bold text-slate-800 tracking-tight leading-tight">
                     Leadership <span className="inline-block border-2 border-cyan-400 rounded-full px-4 py-1 text-slate-800 bg-white shadow-sm relative">with Luca.<div className="absolute -right-6 top-1/2 w-4 h-4 rounded-full border-2 border-cyan-400 bg-transparent"></div></span>
                   </span>
                   <div className="mt-8 flex items-center justify-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-cyan-400 flex items-center justify-center text-white font-bold">▷</div>
                      <span className="text-sm font-semibold border border-slate-300 rounded-full px-4 py-2">Watch the Series</span>
                   </div>
                 </div>
               </div>

               <div className="flex flex-col justify-end">
                 <div className="flex justify-between items-start mb-2">
                   <h3 className="text-[32px] font-serif text-white leading-none">LUCA The Leader</h3>
                   <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[rgba(255,255,255,0.55)] group-hover:text-white transition-colors duration-300"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
                 </div>
                 <h4 className="text-[19px] text-[rgba(255,255,255,0.72)] font-serif mb-5 leading-relaxed">Where Leadership Awareness Begins</h4>
                 <p className="text-[15px] font-sans text-[rgba(255,255,255,0.55)] leading-relaxed max-w-2xl">
                   Our flagship CSR initiative bringing trusted leadership awareness to communities, organizations, and emerging leaders. Start your journey with free resources, assessments, and community connection.
                 </p>
               </div>
            </div>
          </button>

          {collapsedCards.map((card, idx) => (
            <CollapsedCard key={idx} {...card} />
          ))}

        </div>
      </div>
    </section>
  );
};

export default EcosystemSection;
