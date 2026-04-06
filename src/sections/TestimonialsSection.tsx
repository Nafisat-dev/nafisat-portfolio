import { useState } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { useFadeInOnScroll } from '@/hooks/useFadeInOnScroll';

interface TestimonialsSectionProps {
  className?: string;
}

const testimonials = [
  {
    id: 1,
    quote: "Nafisat turned our brief into a clean, high-converting store in weeks. The attention to detail and understanding of our brand was exceptional.",
    author: 'Sarah Mitchell',
    role: 'Creative Director',
    company: 'Wellness Brand',
    image: '/images/testimonial-portrait.jpg',
  },
  {
    id: 2,
    quote: "Working with Nafisat was a game-changer for our e-commerce business. Our conversion rate increased by 40% after the redesign.",
    author: 'Michael Chen',
    role: 'CEO',
    company: 'Fashion Forward',
    image: '/images/hero-portrait.jpg',
  },
  {
    id: 3,
    quote: "Professional, responsive, and incredibly talented. Nafisat delivered beyond our expectations and on time.",
    author: 'Emma Rodriguez',
    role: 'Marketing Manager',
    company: 'Beauty Co.',
    image: '/images/services-workspace.jpg',
  },
];

const TestimonialsSection = ({ className = '' }: TestimonialsSectionProps) => {
  const headlineRef = useFadeInOnScroll<HTMLDivElement>();
  const primaryCardRef = useFadeInOnScroll<HTMLDivElement>();
  const quoteRef = useFadeInOnScroll<HTMLDivElement>();

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section
      id="testimonials"
      className={`relative bg-soft-blue py-24 ${className}`}
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-radial from-white/50 via-soft-blue/50 to-soft-blue" />

      <div className="relative">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Left: Headline Block */}
              <div ref={headlineRef} className="order-2 lg:order-1 fade-up">
                <span className="label-small mb-4 block">Testimonials</span>
                <h2 className="font-heading font-bold text-navy mb-6 portfolio-heading">
                  Client Feedback
                </h2>
                <p className="text-slate text-lg mb-8 max-w-lg leading-relaxed">
                  Collaborative, detail-oriented, and focused on outcome, here's what partners say 
                  about working together.
                </p>

                <button
                  onClick={() => {
                    const element = document.querySelector('#contact');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="btn-primary flex items-center gap-2 group"
                >
                  Read More
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>

                {/* Small cards */}
                <div className="hidden lg:grid grid-cols-2 gap-4 mt-8">
                  <div className="image-card glass-card p-2">
                    <div className="aspect-video rounded-xl overflow-hidden">
                      <img
                        src="/service image/shopify-store-ranking.png"
                        alt="Testimonial"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="image-card glass-card p-2">
                    <div className="aspect-video rounded-xl overflow-hidden">
                      <img
                        src="/service image/wordpress-website-banner.png"
                        alt="Testimonial"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: Primary Glass Card */}
              <div ref={primaryCardRef} className="relative order-1 lg:order-2 fade-up">
                <div className="glass-card p-3 md:p-4">
                  <div className="aspect-[4/5] rounded-2xl overflow-hidden">
                    <img
                      src="/service image/whisk-image-generator.png"
                      alt="Testimonial"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Quote Card */}
            <div ref={quoteRef} className="fade-up mt-12">
              <div className="glass-card p-6 md:p-8 max-w-3xl mx-auto">
                <Quote className="w-10 h-10 text-sky/30 mb-4" />
                
                <div className="min-h-[120px]">
                  <p className="text-navy text-lg md:text-xl leading-relaxed mb-6 transition-opacity duration-300">
                    "{currentTestimonial.quote}"
                  </p>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden">
                      <img
                        src={currentTestimonial.image}
                        alt={currentTestimonial.author}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-heading font-semibold text-navy">{currentTestimonial.author}</p>
                      <p className="text-sm text-slate">
                        {currentTestimonial.role}, {currentTestimonial.company}
                      </p>
                    </div>
                  </div>

                  {/* Navigation */}
                  <div className="flex gap-2">
                    <button
                      onClick={prevTestimonial}
                      className="p-2 rounded-full border border-light-accent hover:bg-sky hover:border-sky hover:text-white transition-all"
                      aria-label="Previous testimonial"
                    >
                      <ChevronLeft size={20} />
                    </button>
                    <button
                      onClick={nextTestimonial}
                      className="p-2 rounded-full border border-light-accent hover:bg-sky hover:border-sky hover:text-white transition-all"
                      aria-label="Next testimonial"
                    >
                      <ChevronRight size={20} />
                    </button>
                  </div>
                </div>

                {/* Dots */}
                <div className="flex justify-center gap-2 mt-6">
                  {testimonials.map((testimonial) => (
                    <button
                      key={`testimonial-${testimonial.id}`}
                      onClick={() => setCurrentIndex(testimonials.indexOf(testimonial))}
                      className={`w-2 h-2 rounded-full transition-all ${
                        testimonials.indexOf(testimonial) === currentIndex ? 'bg-sky w-6' : 'bg-light-accent'
                      }`}
                      aria-label={`Go to testimonial ${testimonial.id}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
