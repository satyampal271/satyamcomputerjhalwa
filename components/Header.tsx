import React, { useState } from 'react';

const Logo: React.FC = () => (
  <div className="flex items-center space-x-2">
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 4H8V8H4V4Z" fill="#0077ff"/>
      <path d="M4 10H8V14H4V10Z" fill="#0077ff"/>
      <path d="M4 16H8V20H4V16Z" fill="#0077ff"/>
      <path d="M10 4H14V8H10V4Z" fill="#0077ff"/>
      <path d="M10 10H14V14H10V10Z" fill="white"/>
      <path d="M10 16H14V20H10V16Z" fill="#0077ff"/>
      <path d="M16 4H20V8H16V4Z" fill="#0077ff"/>
      <path d="M16 10H20V14H16V10Z" fill="#0077ff"/>
      <path d="M16 16H20V20H16V16Z" fill="#0077ff"/>
    </svg>
    <span className="text-2xl font-bold text-white tracking-wider">SATYAM</span>
  </div>
);

const NavLink: React.FC<{ href: string; children: React.ReactNode; onClick: (e: React.MouseEvent<HTMLAnchorElement>) => void; isCurrent?: boolean }> = ({ href, children, onClick, isCurrent }) => (
  <a
    href={href}
    onClick={onClick}
    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 cursor-pointer ${
      isCurrent
        ? 'text-white bg-[#0077ff]'
        : 'text-gray-300 hover:bg-gray-700/50 hover:text-white'
    }`}
  >
    {children}
  </a>
);

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navLinks = [
    { title: "Home", id: "home" },
    { title: "Services", id: "services" },
    { title: "Book Now", id: "booking" },
    { title: "Contact", id: "contact" }
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header className="bg-[#0b2239]/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Logo />
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navLinks.map((link, index) => (
                <NavLink key={link.id} href={`#${link.id}`} onClick={(e) => handleNavClick(e, link.id)} isCurrent={index === 0}>
                  {link.title}
                </NavLink>
              ))}
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              type="button"
              className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link, index) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => handleNavClick(e, link.id)}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  index === 0 ? 'text-white bg-[#0077ff]' : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                }`}
              >
                {link.title}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;