import { ArrowRight, Search, Lightbulb, PenTool, Code, Rocket } from 'lucide-react';
import { useFadeInOnScroll } from '@/hooks/useFadeInOnScroll';

interface ProcessSectionProps {
  className?: string;
}

const steps = [
  {
    number: '01',
    icon: Search,
    title: 'Discovery',
    description: 'Understanding your business goals, target audience, and competitive landscape.',
  },
  {
    number: '02',
    icon: Lightbulb,
    title: 'Strategy',
    description: 'Developing a comprehensive plan aligned with your objectives and budget.',
  },
  {
    number: '03',
    icon: PenTool,
    title: 'Design',
    description: 'Creating visually stunning mockups that reflect your brand identity.',
  },
  {
    number: '04',
    icon: Code,
    title: 'Development',
    description: 'Building your store with clean code and best practices.',
  },
  {
    number: '05',
    icon: Rocket,
    title: 'Launch & Optimize',
    description: 'Deploying your store and continuously improving performance.',
  },
];

const ProcessSection = ({ className = '' }: ProcessSectionProps) => {
  const headlineRef = useFadeInOnScroll<HTMLDivElement>();
  const primaryCardRef = useFadeInOnScroll<HTMLDivElement>();
  const stepsRef = useFadeInOnScroll<HTMLDivElement>();

  return (
    <section
      id="process"
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
                <span className="label-small mb-4 block">Process</span>
                <h2 className="font-heading font-bold text-navy mb-6 portfolio-heading">
                  From Discovery to Launch
                </h2>
                <p className="text-slate text-lg mb-8 max-w-lg leading-relaxed">
                  A simple, transparent workflow designed to ship fast and iterate often. 
                  Every project follows a proven methodology for success.
                </p>

                <button
                  onClick={() => {
                    const element = document.querySelector('#contact');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="btn-primary flex items-center gap-2 group"
                >
                  How I Work
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>

                {/* Small cards */}
                <div className="hidden lg:grid grid-cols-2 gap-4 mt-8">
                  <div className="image-card glass-card p-2">
                    <div className="aspect-video rounded-xl overflow-hidden">
                      <img
                        src="/service image/banner.png"
                        alt="Planning"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="image-card glass-card p-2">
                    <div className="aspect-video rounded-xl overflow-hidden">
                      <img
                        src="/service image/website.jpg"
                        alt="Workspace"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: Primary Glass Card */}
              <div ref={primaryCardRef} className="relative order-1 lg:order-2 fade-up">
                <div className="glass-card p-3 md:p-4">
                  <div className="aspect-[3/4] rounded-2xl overflow-hidden">
                    <img
                      src="/service image/flowchart-workflow-process.png"
                      alt="Process"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Steps */}
            <div ref={stepsRef} className="fade-up grid grid-cols-2 md:grid-cols-5 gap-4 mt-12">
              {steps.map((step, index) => (
                <div
                  key={step.number}
                  className={`glass-card p-4 text-center glass-hover transition-all duration-300 delay-${index * 100}`}
                >
                  <span className="text-xs font-bold text-sky/60 mb-2 block">{step.number}</span>
                  <step.icon className="w-6 h-6 text-sky mx-auto mb-3" />
                  <h3 className="font-heading font-semibold text-navy text-sm mb-1">{step.title}</h3>
                  <p className="text-xs text-slate hidden md:block">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
