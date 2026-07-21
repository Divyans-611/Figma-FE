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
    <header className="w-full flex items-center justify-between px-16 py-10 max-w-[1440px] mx-auto absolute top-0 left-1/2 -translate-x-1/2 z-50">
      {/* Logo Area */}
      <a href="/" className="flex items-center gap-3 text-white">
        <span className="font-serif italic font-semibold text-4xl tracking-wider">
          I.T.L
        </span>
        <div className="flex flex-col text-[13px] font-sans font-medium text-slate-200 leading-tight">
          <span>Institute for</span>
          <span>Trusted Leadership</span>
        </div>
      </a>

      {/* Navigation */}
      <nav>
        <ul className="flex items-center gap-12">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="text-[15px] font-sans text-slate-400 hover:text-white transition-colors duration-300"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
