import { ArrowRight, Shirt, Smartphone, Heart, Sparkles, Coffee, Baby } from 'lucide-react';
import { useFadeInOnScroll } from '@/hooks/useFadeInOnScroll';

interface IndustriesSectionProps {
  className?: string;
}

const industries = [
  {
    icon: Shirt,
    name: 'Fashion & Apparel',
    description: 'Stylish stores that showcase your brand',
  },
  {
    icon: Smartphone,
    name: 'Electronics',
    description: 'Tech-focused shopping experiences',
  },
  {
    icon: Heart,
    name: 'Health & Wellness',
    description: 'Trustworthy wellness platforms',
  },
  {
    icon: Sparkles,
    name: 'Beauty & Cosmetics',
    description: 'Glamorous beauty destinations',
  },
  {
    icon: Coffee,
    name: 'Food & Drink',
    description: 'Appetizing culinary experiences',
  },
  {
    icon: Baby,
    name: 'Kids & Toys',
    description: 'Fun, family-friendly stores',
  },
];

const IndustriesSection = ({ className = '' }: IndustriesSectionProps) => {
  const headlineRef = useFadeInOnScroll<HTMLDivElement>();
  const primaryCardRef = useFadeInOnScroll<HTMLDivElement>();
  const chipsRef = useFadeInOnScroll<HTMLDivElement>();
  const gridRef = useFadeInOnScroll<HTMLDivElement>();

  return (
    <section
      id="industries"
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
                <span className="label-small mb-4 block">Industries</span>
                <h2 className="font-heading font-bold text-navy mb-6 portfolio-heading">
                  Sectors I Serve
                </h2>
                <p className="text-slate text-lg mb-8 max-w-lg leading-relaxed">
                  Fashion, wellness, electronics, and more tailored UX for every niche. 
                  I understand the unique challenges of each industry.
                </p>

                {/* Industry Chips */}
                <div ref={chipsRef} className="fade-up flex flex-wrap gap-3 mb-8">
                  {['Fashion', 'Wellness', 'Electronics', 'Home'].map((chip, index) => (
                    <span key={chip} className={`pill transition-all duration-300 delay-${index * 100}`}>
                      {chip}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => {
                    const element = document.querySelector('#contact');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="btn-primary flex items-center gap-2 group"
                >
                  Start a Project
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>

                {/* Small cards */}
                <div className="hidden lg:grid grid-cols-2 gap-4 mt-8">
                  <div className="image-card glass-card p-2">
                    <div className="aspect-video rounded-xl overflow-hidden">
                      <img
                        src="/service image/developing-react-native-app.png"
                        alt="react native"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="image-card glass-card p-2">
                    <div className="aspect-video rounded-xl overflow-hidden">
                      <img
                        src="/service image/winter-breakouts-control.jpg"
                        alt="woocommerce"
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
                      src="/service image/transform-your-shower.jpg"
                      alt="Industries"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Industries Grid */}
            <div ref={gridRef} className="fade-up grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-12">
              {industries.map((industry, index) => (
                <div
                  key={industry.name}
                  className={`glass-card p-4 text-center glass-hover transition-all duration-300 delay-${index * 100}`}
                >
                  <industry.icon className="w-8 h-8 text-sky mx-auto mb-3" />
                  <h3 className="font-heading font-semibold text-navy text-sm mb-1">{industry.name}</h3>
                  <p className="text-xs text-slate hidden md:block">{industry.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
