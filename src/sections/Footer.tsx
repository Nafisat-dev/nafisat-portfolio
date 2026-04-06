import { Link } from 'react-router-dom';
import { ArrowUp } from 'lucide-react';
import { useFadeInOnScroll } from '@/hooks/useFadeInOnScroll';

const Github = ({ size = 24, className = "" }: { size?: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);

const Linkedin = ({ size = 24, className = "" }: { size?: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const Instagram = ({ size = 24, className = "" }: { size?: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

const Footer = () => {
  const footerRef = useFadeInOnScroll<HTMLDivElement>();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };



  const socialLinks = [
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Github, href: 'https://github.com/Nafisat-dev', label: 'GitHub' },
  ];

  return (
    <footer ref={footerRef} className="fade-up bg-soft-blue py-12">
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="glass-card p-8 md:p-12">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              {/* Brand */}
              <div className="lg:col-span-2">
                <Link
                  to="/"
                  onClick={(e) => {
                    if (window.location.pathname === '/') {
                      e.preventDefault();
                      scrollToTop();
                    }
                  }}
                  aria-label="Scroll to top"
                  className="flex items-center gap-2 font-heading font-bold text-2xl text-navy hover:text-sky transition-colors bg-transparent border-0 p-0 cursor-pointer"
                >
                  <svg width="28px" height="28px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#5AA8D6" transform="rotate(180)matrix(-1, 0, 0, 1, 0, 0)" stroke="#5AA8D6">
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
                <p className="text-slate mt-4 max-w-md">
                  Shopify stores, designed to convert. Building high-performing e-commerce
                  experiences for brands that want to stand out.
                </p>
              </div>

              {/* Navigation */}
              <div>
                <h4 className="font-heading font-semibold text-navy mb-4">Navigation</h4>
                <ul className="space-y-2">
                  {[{ label: 'Home', href: '/' }, { label: 'Services', href: '/services' }, { label: 'Projects', href: '/projects' }, { label: 'Contact', href: '/contact' }].map((link) => (
                    <li key={link.label}>
                      <Link
                        to={link.href}
                        className="text-slate hover:text-sky transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Social */}
              <div>
                <h4 className="font-heading font-semibold text-navy mb-4">Connect</h4>
                <div className="flex gap-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-white/50 flex items-center justify-center text-navy hover:bg-sky hover:text-white transition-all"
                      aria-label={social.label}
                    >
                      <social.icon size={18} />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom */}
            <div className="border-t border-light-accent pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-sm text-slate">
                © {new Date().getFullYear()} Adepoju Nafisat. All rights reserved.
              </p>

              <button
                onClick={scrollToTop}
                className="flex items-center gap-2 text-slate hover:text-sky transition-colors"
              >
                Back to top
                <ArrowUp size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
