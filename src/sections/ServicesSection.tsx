import { ArrowRight, Store, Palette, Puzzle, TrendingUp, Zap, Code } from 'lucide-react';
import { useFadeInOnScroll } from '@/hooks/useFadeInOnScroll';

interface ServicesSectionProps {
  className?: string;
}

const services = [
  {
    icon: Store,
    title: 'Shopify Store Setup',
    description: 'Complete store setup from scratch with optimized settings and configurations.',
  },
  {
    icon: Palette,
    title: 'Custom Theme Development',
    description: 'Bespoke themes tailored to your brand identity and user experience goals.',
  },
  {
    icon: Puzzle,
    title: 'App Integration',
    description: 'Seamless integration of third-party apps and custom solutions.',
  },
  {
    icon: TrendingUp,
    title: 'SEO Optimization',
    description: 'Data-driven SEO strategies to increase organic traffic and visibility.',
  },
  {
    icon: Zap,
    title: 'Performance Tuning',
    description: 'Speed optimization for better user experience and conversion rates.',
  },
  {
    icon: Code,
    title: 'React Development',
    description: 'Modern React front-end development for custom e-commerce solutions.',
  },
];

const ServicesSection = ({ className = '' }: ServicesSectionProps) => {
  const headlineRef = useFadeInOnScroll<HTMLDivElement>();
  const primaryCardRef = useFadeInOnScroll<HTMLDivElement>();
  const pillsRef = useFadeInOnScroll<HTMLDivElement>();
  const gridRef = useFadeInOnScroll<HTMLDivElement>();

  return (
    <section
      id="services"
      className={`relative bg-white py-24 ${className}`}
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-radial from-soft-blue/30 via-white to-white" />

      <div className="relative">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Left: Primary Glass Card */}
              <div ref={primaryCardRef} className="relative order-1 fade-up">
                <div className="glass-card p-3 md:p-4">
                  <div className="aspect-[3/5] rounded-2xl overflow-hidden">
                    <img
                      src="/service image/how-to-create-landing-page.png"
                      alt="Services"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Small cards below */}
                <div className="hidden lg:grid grid-cols-2 gap-4 mt-4">
                  <div className="image-card glass-card p-2">
                    <div className="aspect-video rounded-xl overflow-hidden">
                      <img
                        src="/service image/learn-create-shopify-stores.png"
                        alt="Workspace detail"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="image-card glass-card p-2">
                    <div className="aspect-video rounded-xl overflow-hidden">
                      <img
                        src="/service image/banner-kimi.png"
                        alt="Planning"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: Headline Block */}
              <div ref={headlineRef} className="order-2 fade-up">
                <span className="label-small mb-4 block">Services</span>
                <h2 className="font-heading font-bold text-navy mb-6 portfolio-heading">
                  End-to-End E-commerce Solutions
                </h2>
                <p className="text-slate text-lg mb-8 max-w-lg leading-relaxed">
                  From store setup to custom themes, app integrations, and performance tuning. 
                  I provide comprehensive solutions for your e-commerce success.
                </p>

                {/* Service Pills */}
                <div ref={pillsRef} className="fade-up flex flex-wrap gap-3 mb-8">
                  {['Store Setup', 'Custom Themes', 'App Integrations', 'SEO', 'Performance'].map((pill, index) => (
                    <span key={pill} className={`pill transition-all duration-300 delay-${index * 100}`}>
                      {pill}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => {
                    const element = document.querySelector('#portfolio');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="btn-primary flex items-center gap-2 group"
                >
                  See All Services
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Service Cards Grid */}
            <div ref={gridRef} className="fade-up grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-12">
              {services.map((service, index) => (
                <div
                  key={service.title}
                  className={`glass-card p-5 glass-hover cursor-pointer transition-all duration-300 delay-${(index % 3) * 100}`}
                >
                  <service.icon className="w-8 h-8 text-sky mb-4" />
                  <h3 className="font-heading font-semibold text-navy mb-2">{service.title}</h3>
                  <p className="text-sm text-slate">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
