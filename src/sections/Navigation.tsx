import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isProjectsPage = window.location.pathname === '/projects';
  const isDarkHero = isProjectsPage && !isScrolled;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Body scroll lock when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Projects', href: '/projects' },
    { label: 'Contact', href: '/contact' },
  ];



  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
          isScrolled
            ? 'py-3 px-4 md:px-8'
            : 'py-4 px-4 md:px-8'
        }`}
      >
        <div
          className={`mx-auto transition-all duration-500 ${
            isScrolled
              ? 'max-w-6xl glass-card py-3 px-6'
              : 'max-w-7xl py-3 px-4'
          }`}
        >
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link
              to="/"
              onClick={(e) => {
                if (window.location.pathname === '/') {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }
              }}
              className={`flex items-center gap-2 font-heading font-bold text-xl transition-colors bg-transparent border-0 p-0 cursor-pointer ${
                isDarkHero ? 'text-white' : 'text-navy hover:text-sky'
              }`}
              aria-label="Scroll to top"
            >
              <svg width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#5AA8D6" transform="rotate(180)matrix(-1, 0, 0, 1, 0, 0)" stroke="#5AA8D6">
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                  <title>nativescript</title>
                  <rect width="24" height="24" fill="none"></rect>
                  <path d="M7.5,3h9A4.48,4.48,0,0,1,21,7.5v9A4.48,4.48,0,0,1,16.5,21h-9A4.48,4.48,0,0,1,3,16.5v-9A4.48,4.48,0,0,1,7.5,3M6,13.5v3A1.5,1.5,0,0,0,7.5,18H9V10.5L15,18h1.5A1.5,1.5,0,0,0,18,16.5v-3A1.5,1.5,0,0,1,19.5,12,1.5,1.5,0,0,1,18,10.5v-3A1.5,1.5,0,0,0,16.5,6H15v7.5L9,6H7.5A1.5,1.5,0,0,0,6,7.5v3A1.5,1.5,0,0,1,4.5,12,1.5,1.5,0,0,1,6,13.5Z"></path>
                </g>
              </svg>
              Nafisat.
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  className={`text-sm font-medium transition-colors ${
                    isDarkHero ? 'text-white/80 hover:text-white' : 'text-navy/80 hover:text-sky'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/contact"
                className="btn-primary text-sm"
              >
                Book a Call
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`md:hidden p-2 transition-colors ${
                isDarkHero ? 'text-white hover:text-white' : 'text-navy hover:text-sky'
              }`}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-[99] md:hidden transition-all duration-300 ${
          isMobileMenuOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
      >
        <button
          type="button"
          className="absolute inset-0 bg-navy/20 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
          onKeyDown={(e) => {
            if (e.key === 'Escape') {
              setIsMobileMenuOpen(false);
            }
          }}
          tabIndex={0}
          aria-label="Close menu"
        />
        <div
          className={`absolute top-20 left-4 right-4 glass-card p-6 transition-all duration-300 ${
            isMobileMenuOpen
              ? 'translate-y-0 opacity-100'
              : '-translate-y-4 opacity-0'
          }`}
        >
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg font-medium text-navy hover:text-sky transition-colors py-2"
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="btn-primary text-center mt-2"
            >
              Book a Call
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
