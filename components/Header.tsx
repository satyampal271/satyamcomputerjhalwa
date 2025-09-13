import React, { useState, useEffect } from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import Logo from './Logo';
import { useAuth } from './AuthContext';

const NavLink: React.FC<{ href: string; children: React.ReactNode; onClick: (e: React.MouseEvent<HTMLAnchorElement>) => void; isCurrent?: boolean }> = ({ href, children, onClick, isCurrent }) => (
  <a
    href={href}
    onClick={onClick}
    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 cursor-pointer ${
      isCurrent
        ? 'text-[var(--accent-cyan)]'
        : 'text-gray-300 hover:bg-gray-700/50 hover:text-white'
    }`}
  >
    {children}
  </a>
);

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { isAuthenticated, logout, user } = useAuth();
  
  const navLinks = [
    { title: "Home", id: "home" },
    { title: "About Us", id: "about-us" },
    { title: "Services", id: "services" },
    { title: "Portfolio", id: "portfolio" },
    { title: "Blog", id: "blog" },
    { title: "Book Now", id: "booking" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (location.pathname === '/') {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(entry.target.id);
            }
          });
        },
        { rootMargin: "-50% 0px -50% 0px" }
      );

      const elements = navLinks.map(link => document.getElementById(link.id)).filter(Boolean);
      elements.forEach(el => observer.observe(el!));

      return () => {
        elements.forEach(el => observer.unobserve(el!));
      };
    } else {
      setActiveSection('');
    }
  }, [location.pathname]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
    if(location.pathname !== '/') {
        window.location.hash = '';
        navigate(`/#${targetId}`);
    } else {
        document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  const handleMobileLinkClick = () => {
      if (isMobileMenuOpen) {
          setIsMobileMenuOpen(false);
      }
  }

  const handleLogout = () => {
    logout();
    handleMobileLinkClick();
    navigate('/');
  }
  
  const isServicePage = location.pathname.startsWith('/services');
  const isLoginPage = location.pathname === '/login';
  const isDashboardPage = location.pathname.startsWith('/dashboard');

  return (
    <header className={`bg-[var(--bg-dark-navy)]/80 backdrop-blur-sm sticky top-0 z-50 transition-all duration-300 border-b ${isScrolled ? 'shadow-lg shadow-[var(--accent-violet)]/20 border-[var(--accent-violet)]/30' : 'border-transparent'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/">
              <Logo />
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              {navLinks.map((link) => (
                <NavLink key={link.id} href={`#${link.id}`} onClick={(e) => handleNavClick(e, link.id)} isCurrent={activeSection === link.id || (link.id === 'services' && isServicePage)}>
                  {link.title}
                </NavLink>
              ))}
              {isAuthenticated ? (
                <>
                  <Link to="/dashboard" className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium transition-colors duration-300 ${isDashboardPage ? 'text-black bg-[var(--accent-cyan)]' : 'text-gray-300 hover:bg-gray-700/50 hover:text-white'}`}>
                    <img src={user?.profilePictureUrl || `https://api.dicebear.com/8.x/initials/svg?seed=${user?.name || 'U'}`} alt="avatar" className="w-7 h-7 rounded-full object-cover" loading="lazy" />
                    <span>Dashboard</span>
                  </Link>
                  <button onClick={handleLogout} className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:bg-red-700/50 hover:text-white transition-colors duration-300">Logout</button>
                </>
              ) : (
                <Link to="/login" className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${isLoginPage ? 'text-black bg-[var(--accent-cyan)]' : 'text-gray-300 hover:bg-gray-700/50 hover:text-white'}`}>
                  Login
                </Link>
              )}
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
                  (activeSection === link.id || (link.id === 'services' && isServicePage)) ? 'text-black bg-[var(--accent-cyan)]' : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                }`}
              >
                {link.title}
              </a>
            ))}
            {isAuthenticated ? (
              <>
                <Link to="/dashboard" onClick={handleMobileLinkClick} className={`flex items-center gap-3 block px-3 py-2 rounded-md text-base font-medium ${isDashboardPage ? 'text-black bg-[var(--accent-cyan)]' : 'text-gray-300 hover:bg-gray-700 hover:text-white'}`}>
                    <img src={user?.profilePictureUrl || `https://api.dicebear.com/8.x/initials/svg?seed=${user?.name || 'U'}`} alt="avatar" className="w-7 h-7 rounded-full" loading="lazy" />
                    <span>Dashboard</span>
                </Link>
                <button onClick={handleLogout} className="w-full text-left block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-red-700 hover:text-white">Logout</button>
              </>
            ) : (
              <Link to="/login" onClick={handleMobileLinkClick} className={`block px-3 py-2 rounded-md text-base font-medium ${isLoginPage ? 'text-black bg-[var(--accent-cyan)]' : 'text-gray-300 hover:bg-gray-700 hover:text-white'}`}>
                Login
              </Link>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;