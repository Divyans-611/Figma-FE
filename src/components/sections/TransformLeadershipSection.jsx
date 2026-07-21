import React from 'react';

const TransformLeadershipSection = () => {
  return (
    <section className="w-full pt-32 pb-24 relative overflow-hidden bg-[#03070c]">
      {/* Dark blue gradient background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#0c2038]/50 via-transparent to-transparent opacity-80 pointer-events-none"></div>

      <div className="max-w-[1440px] mx-auto px-8 md:px-16 relative z-10">
        
        {/* Header Area */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-24">
          <div className="w-full md:w-1/2">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-1.5 h-1.5 bg-slate-300 block"></span>
              <span className="text-[11px] tracking-[0.25em] font-sans font-medium text-slate-300 uppercase">
                Our Methodology
              </span>
            </div>
            <h2 className="text-4xl md:text-[3.5rem] font-serif leading-[1.1] text-white tracking-[-0.01em]">
              How We Transform<br />Leadership
            </h2>
          </div>
          <div className="w-full md:w-[45%] flex items-end pb-3">
            <p className="text-slate-200 font-sans text-[17px] leading-relaxed font-light">
              Trusted leadership isn't built on theory alone. Our integrated approach combines rigorous research, practical training to create lasting organizational change.
            </p>
          </div>
        </div>

        {/* 3 Vertical Blocks */}
        <div className="w-full flex flex-col md:flex-row items-end gap-6 md:gap-8 lg:gap-12 h-auto md:h-[600px] mt-12">
          
          {/* Block 1 */}
          <div className="w-full md:w-1/3 h-[300px] md:h-full bg-gradient-to-b from-[#0e1d2f] to-transparent rounded-t-sm relative">
            <div className="absolute top-10 left-8 right-8">
              <h3 className="text-[26px] md:text-[28px] font-serif text-white mb-5 leading-tight">
                Research & Insights
              </h3>
              <ul className="flex flex-col gap-2.5">
                <li className="flex items-start gap-3 text-slate-300 font-sans text-[14px]">
                  <span className="w-1 h-1 bg-white rounded-full mt-[8px] flex-shrink-0"></span>
                  <span>Evidence-based leadership models</span>
                </li>
                <li className="flex items-start gap-3 text-slate-300 font-sans text-[14px]">
                  <span className="w-1 h-1 bg-white rounded-full mt-[8px] flex-shrink-0"></span>
                  <span>Continuous innovation</span>
                </li>
                <li className="flex items-start gap-3 text-slate-300 font-sans text-[14px]">
                  <span className="w-1 h-1 bg-white rounded-full mt-[8px] flex-shrink-0"></span>
                  <span>Data-driven understanding</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Block 2 */}
          <div className="w-full md:w-1/3 h-[300px] md:h-[450px] bg-gradient-to-b from-[#0e1d2f] to-transparent rounded-t-sm relative">
            <div className="absolute top-10 left-8 right-8">
              <h3 className="text-[26px] md:text-[28px] font-serif text-white mb-5 leading-tight">
                Training & Development
              </h3>
              <ul className="flex flex-col gap-2.5">
                <li className="flex items-start gap-3 text-slate-300 font-sans text-[14px]">
                  <span className="w-1 h-1 bg-white rounded-full mt-[8px] flex-shrink-0"></span>
                  <span>Practical skill-building</span>
                </li>
                <li className="flex items-start gap-3 text-slate-300 font-sans text-[14px]">
                  <span className="w-1 h-1 bg-white rounded-full mt-[8px] flex-shrink-0"></span>
                  <span>Certification programs</span>
                </li>
                <li className="flex items-start gap-3 text-slate-300 font-sans text-[14px]">
                  <span className="w-1 h-1 bg-white rounded-full mt-[8px] flex-shrink-0"></span>
                  <span>Organizational transformation</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Block 3 */}
          <div className="w-full md:w-1/3 h-[300px] md:h-[300px] bg-gradient-to-b from-[#0e1d2f] to-transparent rounded-t-sm relative">
            <div className="absolute top-10 left-8 right-8">
              <h3 className="text-[26px] md:text-[28px] font-serif text-white mb-5 leading-tight">
                Consulting & Implementation
              </h3>
              <ul className="flex flex-col gap-2.5">
                <li className="flex items-start gap-3 text-slate-300 font-sans text-[14px]">
                  <span className="w-1 h-1 bg-white rounded-full mt-[8px] flex-shrink-0"></span>
                  <span>Strategic partnership</span>
                </li>
                <li className="flex items-start gap-3 text-slate-300 font-sans text-[14px]">
                  <span className="w-1 h-1 bg-white rounded-full mt-[8px] flex-shrink-0"></span>
                  <span>Custom solutions</span>
                </li>
                <li className="flex items-start gap-3 text-slate-300 font-sans text-[14px]">
                  <span className="w-1 h-1 bg-white rounded-full mt-[8px] flex-shrink-0"></span>
                  <span>Measurable impact</span>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TransformLeadershipSection;
