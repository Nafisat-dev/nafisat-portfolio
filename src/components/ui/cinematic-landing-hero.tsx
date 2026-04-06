import { useRef, useEffect } from "react";
import { Star } from "lucide-react";
import { cn } from "../../lib/utils";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

interface CinematicHeroProps {
  brandName: string;
  tagline1: string;
  tagline2: string;
  cardHeading: string;
  cardDescription: React.ReactNode;
  metricValue: number;
  metricLabel: string;
  ctaHeading: string;
  ctaDescription: string;
  className?: string;
}

const CinematicHero = ({
  brandName,
  tagline1,
  tagline2,
  cardHeading,
  cardDescription,
  metricValue,
  metricLabel,
  ctaHeading,
  ctaDescription,
  className,
}: CinematicHeroProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const starsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = scrollRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      // Pin the section
      ScrollTrigger.create({
        trigger: section,
        start: "top top",
        end: "+=80%", // Further reduced scroll distance
        pin: true,
        pinSpacing: true,
      });

      // Animate the main content to fade out and move up
      gsap.to(section.querySelector(".hero-content"), {
        opacity: 0,
        y: -50,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "center top",
          scrub: true,
        },
      });

      // Animate card to fade in and slide up
      const card = section.querySelector(".hero-card");
      if (card) {
        gsap.to(card, {
          opacity: 1,
          y: 0,
          scale: 1,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "center center", // Start revealing as title fades
            end: "bottom top",
            scrub: true,
          },
        });
      }

      // Stars parallax
      gsap.to(starsRef.current, {
        yPercent: 20,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    }, scrollRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={scrollRef}
      className={cn(
        "relative h-[100vh] w-full overflow-hidden flex items-center justify-center bg-navy text-white",
        className
      )}
    >
      {/* Background stars effect */}
      <div
        ref={starsRef}
        className="absolute inset-0 z-0 opacity-50"
        style={{
          backgroundImage: `url('data:image/svg+xml;utf8,<svg width="100%" height="100%" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><defs><filter id="f1" x="0" y="0" width="200%" height="200%"><feGaussianBlur in="SourceGraphic" stdDeviation="0.5" /></filter></defs><circle cx="10" cy="10" r="0.5" fill="white" filter="url(%23f1)" /><circle cx="30" cy="20" r="0.7" fill="white" filter="url(%23f1)" /><circle cx="50" cy="5" r="0.4" fill="white" filter="url(%23f1)" /><circle cx="70" cy="25" r="0.6" fill="white" filter="url(%23f1)" /><circle cx="90" cy="15" r="0.8" fill="white" filter="url(%23f1)" /><circle cx="25" cy="40" r="0.6" fill="white" filter="url(%23f1)" /><circle cx="45" cy="35" r="0.5" fill="white" filter="url(%23f1)" /><circle cx="65" cy="50" r="0.7" fill="white" filter="url(%23f1)" /><circle cx="85" cy="45" r="0.4" fill="white" filter="url(%23f1)" /><circle cx="15" cy="60" r="0.8" fill="white" filter="url(%23f1)" /><circle cx="35" cy="70" r="0.5" fill="white" filter="url(%23f1)" /><circle cx="55" cy="80" r="0.7" fill="white" filter="url(%23f1)" /><circle cx="75" cy="90" r="0.6" fill="white" filter="url(%23f1)" /><circle cx="5" cy="95" r="0.4" fill="white" filter="url(%23f1)" /><circle cx="95" cy="70" r="0.9" fill="white" filter="url(%23f1)" /></svg>)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      {/* Container for content layer */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 flex flex-col items-center justify-center">
        
        {/* Main Title layer */}
        <div className="hero-content text-center mb-0">
          <h1 className="font-heading text-5xl md:text-7xl font-bold mb-4 text-sky drop-shadow-lg leading-tight">
            {brandName}
          </h1>
          <p className="text-2xl md:text-4xl font-extralight text-white/90">
            <span className="block">{tagline1}</span>
            <span className="block">{tagline2}</span>
          </p>
        </div>

        {/* Reveal Card layer - Starts hidden and slides up */}
        <div className="hero-card absolute glass-card p-6 md:p-8 rounded-xl shadow-2xl backdrop-blur-md border border-sky/30 max-w-md w-full mx-auto transform translate-y-20 opacity-0 scale-95 pointer-events-none group-data-[pinned=true]:pointer-events-auto">
          <h3 className="text-2xl md:text-3xl font-bold text-sky mb-3 text-center">
            {cardHeading}
          </h3>
          <p className="text-white/90 text-base md:text-lg mb-6 leading-relaxed text-center">
            {cardDescription}
          </p>
          <div className="flex items-center justify-center gap-2 mb-6">
            <Star className="text-yellow-400 fill-yellow-400" size={20} />
            <span className="text-lg md:text-xl font-semibold text-white">
              {metricValue}+ {metricLabel}
            </span>
          </div>

          <h4 className="text-white text-lg md:text-xl font-semibold mb-2 text-center">
            {ctaHeading}
          </h4>
          <p className="text-white/80 text-sm md:text-md mb-6 text-center">{ctaDescription}</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/#portfolio" className="btn-primary py-2 px-4 text-sm md:text-base">
              View My Work
            </Link>
            <Link to="/#contact" className="btn-outline py-2 px-4 text-sm md:text-base">
              Book a Call
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CinematicHero;
