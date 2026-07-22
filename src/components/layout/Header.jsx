import React from 'react';

const Header = () => {
  const navLinks = [
    { name: 'The Institute', href: '#the-institute' },
    { name: 'Our Approach', href: '#our-approach' },
    { name: 'Ecosystem', href: '#ecosystem' },
    { name: 'Insights', href: '#insights' },
    { name: 'Contact Us', href: '#contact-us' },
  ];

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
                className="text-[15px] font-sans text-[rgba(255,255,255,0.7)] hover:text-white transition-colors duration-300"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Hamburger Menu (Mobile) */}
      <button className="block lg:hidden text-white p-2" aria-label="Toggle menu">
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="3" y1="12" x2="21" y2="12"></line>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>
      </button>
    </header>
  );
};

export default Header;
