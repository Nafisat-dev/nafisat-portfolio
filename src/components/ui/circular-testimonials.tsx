import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { cn } from '../../lib/utils';

interface Testimonial {
  quote: string;
  name: string;
  designation: string;
  src: string;
}

interface CircularTestimonialsProps {
  testimonials: Testimonial[];
  colors?: {
    name: string;
    designation: string;
    testimony: string;
    arrowBackground: string;
    arrowForeground: string;
    arrowHoverBackground: string;
  };
  className?: string;
}

const CircularTestimonials: React.FC<CircularTestimonialsProps> = ({
  testimonials,
  colors = {
    name: '#3D4164', // Default navy
    designation: '#6B6F8B', // Default gray
    testimony: '#3D4164', // Default navy
    arrowBackground: '#3D4164', // Default navy
    arrowForeground: '#ECF3FD', // Default soft-blue
    arrowHoverBackground: '#5AA8D6', // Default sky
  },
  className,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className={cn('relative py-16 md:py-24', className)}>
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 text-center md:text-left bg-white p-8 rounded-xl shadow-lg"
        >
          {/* Testimonial Image */}
          <div className="flex-shrink-0">
            <img
              src={currentTestimonial.src}
              alt={currentTestimonial.name}
              className="w-24 h-24 rounded-full object-cover shadow-md mx-auto md:mx-0"
            />
          </div>

          {/* Testimonial Content */}
          <div className="flex-grow">
            <div className="flex justify-center md:justify-start mb-2 text-yellow-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} fill="currentColor" strokeWidth={0} />
              ))}
            </div>
            <p className="text-lg md:text-xl italic mb-4" style={{ color: colors.testimony }}>
              &ldquo;{currentTestimonial.quote}&rdquo;
            </p>
            <p className="font-semibold text-base" style={{ color: colors.name }}>
              {currentTestimonial.name}
            </p>
            <p className="text-sm" style={{ color: colors.designation }}>
              {currentTestimonial.designation}
            </p>
          </div>
        </motion.div>

        {/* Navigation Arrows */}
        <div className="flex justify-center md:justify-end gap-4 mt-8">
          <button
            onClick={goToPrevious}
            className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300"
            style={{
              backgroundColor: colors.arrowBackground,
              color: colors.arrowForeground,
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = colors.arrowHoverBackground)}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = colors.arrowBackground)}
            aria-label="Previous testimonial"
          >
            &larr;
          </button>
          <button
            onClick={goToNext}
            className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300"
            style={{
              backgroundColor: colors.arrowBackground,
              color: colors.arrowForeground,
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = colors.arrowHoverBackground)}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = colors.arrowBackground)}
            aria-label="Next testimonial"
          >
            &rarr;
          </button>
        </div>
      </div>
    </section>
  );
};

export default CircularTestimonials;
