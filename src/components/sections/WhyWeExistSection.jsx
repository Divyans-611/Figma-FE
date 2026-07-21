import React from 'react';

const WhyWeExistSection = () => {
  return (
    <section className="w-full py-32 bg-brand-navy relative" id="methodology">
      <div className="max-w-[1440px] mx-auto px-8 md:px-16">
        
        {/* Header Area */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-28">
          <div className="w-full md:w-1/2">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-1.5 h-1.5 bg-slate-300 block"></span>
              <span className="text-[11px] tracking-[0.25em] font-sans font-semibold text-slate-300 uppercase">
                Our Methodology
              </span>
            </div>
            <h2 className="text-4xl md:text-[3.5rem] font-serif leading-[1.1] text-white tracking-[-0.01em]">
              How We Transform<br />Leadership
            </h2>
          </div>
          <div className="w-full md:w-[45%] flex items-end pb-2">
            <p className="text-slate-300 font-sans text-[17px] leading-relaxed font-light">
              Trusted leadership isn't built on theory alone. Our integrated approach combines rigorous research, practical training to create lasting organizational change.
            </p>
          </div>
        </div>

        {/* 3-Column Layout with Vertical Dividers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-16 md:gap-y-0 md:divide-x divide-white/10 pt-8">
          
          {/* Column 1 */}
          <div className="pr-4 md:pr-12 lg:pr-16">
            <h3 className="text-[26px] font-serif text-white mb-6 leading-tight">
              Research & Insights
            </h3>
            <ul className="list-disc pl-5 flex flex-col gap-2.5 text-slate-400 font-sans text-[15px] marker:text-slate-500">
              <li>Evidence-based leadership models</li>
              <li>Continuous innovation</li>
              <li>Data-driven understanding</li>
            </ul>
          </div>

          {/* Column 2 */}
          <div className="px-4 md:px-12 lg:px-16">
            <h3 className="text-[26px] font-serif text-white mb-6 leading-tight">
              Training & Development
            </h3>
            <ul className="list-disc pl-5 flex flex-col gap-2.5 text-slate-400 font-sans text-[15px] marker:text-slate-500">
              <li>Practical skill-building</li>
              <li>Certification programs</li>
              <li>Organizational transformation</li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="pl-4 md:pl-12 lg:pl-16">
            <h3 className="text-[26px] font-serif text-white mb-6 leading-tight">
              Consulting & Implementation
            </h3>
            <ul className="list-disc pl-5 flex flex-col gap-2.5 text-slate-400 font-sans text-[15px] marker:text-slate-500">
              <li>Strategic partnership</li>
              <li>Custom solutions</li>
              <li>Measurable impact</li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyWeExistSection;
