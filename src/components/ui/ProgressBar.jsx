import React from 'react';

const ProgressBar = ({ steps = 4, activeStep = 1 }) => {
  return (
    <div className="w-full relative mt-8">
      {/* Background Track */}
      <div className="w-full h-1 bg-slate-200 rounded-full"></div>
      
      {/* Active Track */}
      <div 
        className="absolute top-0 left-0 h-1 bg-brand-blue rounded-full transition-all duration-700 ease-in-out"
        style={{ width: `${(activeStep / (steps - 1)) * 100}%` }}
      ></div>
      
      {/* Step Markers */}
      <div className="absolute top-1/2 left-0 w-full -translate-y-1/2 flex justify-between">
        {Array.from({ length: steps }).map((_, i) => (
          <div 
            key={i} 
            className={`w-3 h-3 rounded-full border-2 transition-colors duration-500 bg-white ${
              i <= activeStep ? 'border-brand-blue' : 'border-slate-300'
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default ProgressBar;
