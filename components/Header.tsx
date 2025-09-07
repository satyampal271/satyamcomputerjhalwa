import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Logo from './Logo';

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
  const [activeSection, setActiveSection] = useState('home');
  const location = useLocation();
  
  const navLinks = [
    { title: "Home", id: "home" },
    { title: "About", id: "about-us" },
    { title: "Services", id: "services" },
    { title: "Blog", id: "blog" },
    { title: "Book Now", id: "booking" },
    { title: "Contact", id: "contact" }
  ];

  useEffect(() => {
    // Only run intersection observer on the homepage
    if (location.pathname === '/') {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(entry.target.id);
            }
          });
        },
        { rootMargin: "-50% 0px -50% 0px" } // Highlights when section is centered
      );

      const elements = navLinks.map(link => document.getElementById(link.id)).filter(Boolean);
      elements.forEach(el => observer.observe(el!));

      return () => {
        elements.forEach(el => observer.unobserve(el!));
      };
    }
  }, [location.pathname]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    if(location.pathname !== '/') {
        window.location.href = `/#${targetId}`;
    } else {
        document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
    }
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  };
  
  const isServicePage = location.pathname.startsWith('/services');

  return (
    <header className="bg-[#0b2239]/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Logo />
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navLinks.map((link) => (
                <NavLink key={link.id} href={`#${link.id}`} onClick={(e) => handleNavClick(e, link.id)} isCurrent={activeSection === link.id || (link.id === 'services' && isServicePage)}>
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
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => handleNavClick(e, link.id)}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  (activeSection === link.id || (link.id === 'services' && isServicePage)) ? 'text-white bg-[#0077ff]' : 'text-gray-300 hover:bg-gray-700 hover:text-white'
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