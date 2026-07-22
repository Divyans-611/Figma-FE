import React from 'react';

const LeadershipBlock = ({ title, items, heightClass }) => (
  <article className={`w-full md:w-1/3 ${heightClass} bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] rounded-[18px] relative`}>
    <div className="absolute top-10 left-8 right-8">
      <h3 className="text-[26px] md:text-[28px] font-serif text-white mb-5 leading-tight">
        {title}
      </h3>
      <ul className="flex flex-col gap-2.5">
        {items.map((item, idx) => (
          <li key={idx} className="flex items-start gap-3 text-[rgba(255,255,255,0.72)] font-sans text-[14px]">
            <span className="w-1 h-1 bg-white rounded-full mt-[8px] flex-shrink-0" aria-hidden="true"></span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  </article>
);

const TransformLeadershipSection = () => {
  const blocks = [
    {
      title: "Research & Insights",
      heightClass: "h-[300px] md:h-full",
      items: [
        "Evidence-based leadership models",
        "Continuous innovation",
        "Data-driven understanding"
      ]
    },
    {
      title: "Training & Development",
      heightClass: "h-[300px] md:h-[450px]",
      items: [
        "Practical skill-building",
        "Certification programs",
        "Organizational transformation"
      ]
    },
    {
      title: "Consulting & Implementation",
      heightClass: "h-[300px] md:h-[300px]",
      items: [
        "Strategic partnership",
        "Custom solutions",
        "Measurable impact"
      ]
    }
  ];

  return (
    <section className="w-full pt-20 md:pt-32 pb-16 md:pb-24 relative overflow-hidden bg-[linear-gradient(180deg,rgba(10,10,10,0)_0%,#00264D_100%)]" aria-labelledby="methodology-title">

      <div className="max-w-[1440px] mx-auto px-5 md:px-16 relative z-10">
        
        <header className="flex flex-col md:flex-row justify-between items-start gap-6 md:gap-12 mb-16 md:mb-24 text-center md:text-left">
          <div className="w-full md:w-1/2 flex flex-col items-center md:items-start">
            <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6" aria-hidden="true">
              <span className="w-1.5 h-1.5 bg-white block"></span>
              <span className="text-[10px] md:text-[11px] tracking-[0.25em] font-sans font-medium text-[rgba(255,255,255,0.55)] uppercase">
                Our Methodology
              </span>
            </div>
            <h2 id="methodology-title" className="text-3xl md:text-[3.5rem] font-serif leading-[1.1] text-white tracking-[-0.01em]">
              How We Transform<br className="hidden md:block" /> Leadership
            </h2>
          </div>
          <div className="w-full md:w-[45%] flex items-end pb-0 md:pb-3 justify-center md:justify-start">
            <p className="text-[rgba(255,255,255,0.72)] font-sans text-[15px] md:text-[17px] leading-relaxed font-light max-w-md md:max-w-none">
              Trusted leadership isn't built on theory alone. Our integrated approach combines rigorous research, practical training to create lasting organizational change.
            </p>
          </div>
        </header>

        <div className="w-full flex flex-col md:flex-row items-stretch md:items-end gap-6 md:gap-8 lg:gap-12 h-auto md:h-[600px] mt-8 md:mt-12">
          {blocks.map((block, index) => (
            <LeadershipBlock key={index} {...block} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TransformLeadershipSection;
