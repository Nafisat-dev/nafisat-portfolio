import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface HeroCarouselProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
  title: React.ReactNode;
  subtitle: string;
  images: { src: string; alt: string }[];
}

export const HeroCarousel = React.forwardRef<HTMLDivElement, HeroCarouselProps>(
  ({ title, subtitle, images, className, ...props }, ref) => {
    const [currentIndex, setCurrentIndex] = React.useState(
      Math.floor(images.length / 2)
    );

    const handleNext = React.useCallback(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, [images.length]);

    const handlePrev = () => {
      setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    React.useEffect(() => {
      const timer = setInterval(handleNext, 3500);
      return () => clearInterval(timer);
    }, [handleNext]);

    return (
      <div
        ref={ref}
        className={cn(
          'relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden bg-navy',
          className
        )}
        {...props}
      >
        {/* Background radial glow */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-[-10%] left-[-20%] w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(90,168,214,0.15),transparent)]" />
          <div className="absolute bottom-0 right-[-20%] w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(90,168,214,0.1),transparent)]" />
        </div>
        
        {/* Grain overlay */}
        <div className="grain-overlay" aria-hidden="true" />
        
        <div className="relative z-10 flex flex-col items-center text-center w-full px-4 gap-10 md:gap-14">
          {/* Text */}
          <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-1000 fill-mode-both">
            <span className="label-small text-sky/80 block">My Work</span>
            <h1 className="font-heading font-bold text-white leading-tight"
              style={{ fontSize: 'clamp(36px, 5vw, 72px)' }}>
              {title}
            </h1>
            <p className="text-white/60 max-w-2xl mx-auto text-lg">
              {subtitle}
            </p>
          </div>
          
          {/* 3D Carousel */}
          <div className="relative w-full h-[300px] md:h-[420px] flex items-center justify-center"
            style={{ perspective: '1000px' }}>
            {images.map((image, index) => {
              const offset = index - currentIndex;
              const total = images.length;
              let pos = (offset + total) % total;
              if (pos > Math.floor(total / 2)) pos = pos - total;
              
              const isCenter = pos === 0;
              const isAdjacent = Math.abs(pos) === 1;
              
              return (
                <div
                  key={index}
                  className="absolute w-40 h-64 md:w-56 md:h-80 lg:w-64 lg:h-96 transition-all duration-500 ease-in-out rounded-2xl overflow-hidden"
                  style={{
                    transform: `translateX(${pos * 46}%) scale(${isCenter ? 1 : isAdjacent ? 0.82 : 0.68}) rotateY(${pos * -10}deg)`,
                    zIndex: isCenter ? 10 : isAdjacent ? 5 : 1,
                    opacity: isCenter ? 1 : isAdjacent ? 0.45 : 0,
                    filter: isCenter ? 'blur(0px)' : 'blur(3px)',
                    visibility: Math.abs(pos) > 2 ? 'hidden' : 'visible',
                    border: isCenter ? '2px solid rgba(90,168,214,0.5)' : '2px solid rgba(255,255,255,0.08)',
                    boxShadow: isCenter ? '0 25px 60px rgba(0,0,0,0.6)' : 'none',
                  }}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                  />
                  {isCenter && (
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-transparent to-transparent" />
                  )}
                </div>
              );
            })}
            
            {/* Nav buttons */}
            <button
              onClick={handlePrev}
              className="absolute left-2 sm:left-6 md:left-12 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/10 hover:bg-sky/30 border border-white/20 flex items-center justify-center transition-all duration-200 backdrop-blur-sm"
            >
              <ChevronLeft className="w-5 h-5 text-white" />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-2 sm:right-6 md:left-12 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/10 hover:bg-sky/30 border border-white/20 flex items-center justify-center transition-all duration-200 backdrop-blur-sm"
            >
              <ChevronRight className="w-5 h-5 text-white" />
            </button>
          </div>
          
          {/* Dot indicators */}
          <div className="flex gap-2 animate-in fade-in duration-1000 delay-500 fill-mode-both">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  i === currentIndex ? 'bg-sky w-6' : 'bg-white/30'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
);

HeroCarousel.displayName = 'HeroCarousel';
