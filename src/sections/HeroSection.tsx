import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { ArrowRight, Calendar } from 'lucide-react';
import { gsap } from 'gsap';

interface HeroSectionProps {
  className?: string;
}

const HeroSection = ({ className = '' }: HeroSectionProps) => {
  const headlineRef = useRef<HTMLDivElement>(null);
  const primaryCardRef = useRef<HTMLDivElement>(null);
  const smallCardsRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);

  // Load animation
  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power2.out' } });

    tl.fromTo(
      headlineRef.current,
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8 },
      0.2
    );

    tl.fromTo(
      primaryCardRef.current,
      { scale: 0.96, x: '6vw', y: '4vh', opacity: 0 },
      { scale: 1, x: 0, y: 0, opacity: 1, duration: 0.9 },
      0.3
    );

    tl.fromTo(
      smallCardsRef.current?.children || [],
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, stagger: 0.12 },
      0.5
    );

    tl.fromTo(
      badgeRef.current,
      { scale: 0.9, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.4 },
      0.7
    );
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className={`relative min-h-screen bg-white ${className}`}
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-radial from-soft-blue/50 via-white to-white" />

      <div className="relative min-h-screen flex items-center">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 py-20">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Left: Headline Block */}
              <div ref={headlineRef} className="order-2 lg:order-1">
                <span className="label-small mb-4 block">
                  Shopify Store Designer & Developer
                </span>
                <h1 className="font-heading font-bold text-navy mb-6 leading-tight hero-heading">
                  Building High-Converting{' '}
                  <span className="text-sky">Shopify Stores</span>
                </h1>
                <p className="text-slate text-lg md:text-xl mb-8 max-w-lg leading-relaxed">
                  Design-led development for fashion, wellness, and lifestyle brands. 
                  Creating e-commerce experiences that convert visitors into customers.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    to="/services"
                    className="btn-primary flex items-center gap-2 group"
                  >
                    View Services
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <button
                    onClick={() => scrollToSection('#contact')}
                    className="btn-outline flex items-center gap-2"
                  >
                    <Calendar size={18} />
                    Book a Call
                  </button>
                </div>
              </div>

              {/* Right: Primary Glass Card */}
              <div ref={primaryCardRef} className="order-1 lg:order-2 relative pt-12">
                {/* Floating background text */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-0 whitespace-nowrap pointer-events-none overflow-hidden w-full text-center">
                  <span className="text-navy/5 font-heading font-black text-[3vw] md:text-[5vw] leading-none select-none tracking-tighter block uppercase">
                    NAFISAT A.
                  </span>
                </div>

                <div className="glass-card p-3 md:p-4 relative z-10">
                  <div className="aspect-[3/4] rounded-2xl overflow-hidden">
                    <img
                      src="/images/nafisat-adepoju.jpg"
                      alt="Adepoju Nafisat - Shopify Expert"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Experience Badge */}
                <div
                  ref={badgeRef}
                  className="absolute -bottom-4 -right-4 md:bottom-8 md:right-8 glass-card px-4 py-3 md:px-6 md:py-4"
                >
                  <div className="text-center">
                    <span className="font-heading font-bold text-2xl md:text-3xl text-sky">6+</span>
                    <p className="text-xs md:text-sm text-slate">Years Experience</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Small Cards */}
            <div ref={smallCardsRef} className="hidden lg:grid grid-cols-2 gap-6 mt-8 max-w-md">
              <div className="image-card glass-card p-2">
                <div className="aspect-video rounded-xl overflow-hidden">
                  <img
                    src="/service image/programming-language.png"
                    alt="Workspace"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="image-card glass-card p-2">
                <div className="aspect-video rounded-xl overflow-hidden">
                  <img
                    src="/service image/nafisat-project.png"
                    alt="Design Process"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
