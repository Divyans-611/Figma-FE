import React, { useState, useEffect } from 'react';

const navLinks = [
  { name: 'The Institute', href: '#the-institute' },
  { name: 'Our Approach', href: '#our-approach' },
  { name: 'Ecosystem', href: '#ecosystem' },
  { name: 'Insights', href: '#insights' },
  { name: 'Contact Us', href: '#contact-us' },
];

const Header = () => {
  const [activeSection, setActiveSection] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: '-20% 0px -60% 0px', threshold: 0 }
    );

    navLinks.forEach((link) => {
      const id = link.href.substring(1);
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header className="w-full flex items-center justify-between px-5 md:px-16 py-8 md:py-10 max-w-[1440px] mx-auto absolute top-0 left-1/2 -translate-x-1/2 z-50">
      {/* Logo Area */}
      <a href="/" className="flex items-center gap-2 md:gap-3 text-white" aria-label="I.T.L Home">
        <span className="font-serif italic font-semibold text-3xl md:text-4xl tracking-wider" aria-hidden="true">
          I.T.L
        </span>
        <div className="flex flex-col text-[11px] md:text-[13px] font-sans font-medium text-[rgba(255,255,255,0.72)] leading-tight" aria-hidden="true">
          <span>Institute for</span>
          <span>Trusted Leadership</span>
        </div>
      </a>

      {/* Navigation (Desktop) */}
      <nav aria-label="Main Navigation" className="hidden lg:block">
        <ul className="flex items-center gap-12">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className={`relative text-[15px] font-sans transition-colors duration-[250ms] ${
                  activeSection === link.href
                    ? 'text-white font-semibold after:w-full'
                    : 'text-[rgba(255,255,255,0.7)] hover:text-white after:w-0 hover:after:w-full'
                } after:content-[""] after:absolute after:-bottom-2 after:left-0 after:h-[2px] after:bg-[#005CFF] after:transition-all after:duration-[250ms]`}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Hamburger Menu (Mobile) */}
      <button 
        className="block lg:hidden text-white p-2" 
        aria-label="Toggle menu"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          {isMobileMenuOpen ? (
            <>
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </>
          ) : (
            <>
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </>
          )}
        </svg>
      </button>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-[#0A0A0A] border-b border-[rgba(255,255,255,0.05)] lg:hidden flex flex-col px-5 py-4 z-40">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`text-[17px] font-sans py-4 border-b border-[rgba(255,255,255,0.05)] transition-colors ${
                activeSection === link.href ? 'text-white font-semibold' : 'text-[rgba(255,255,255,0.7)]'
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
