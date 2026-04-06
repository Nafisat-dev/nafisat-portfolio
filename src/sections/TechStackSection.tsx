import { ArrowRight } from 'lucide-react';
import { SiShopify, SiReact, SiNextdotjs, SiWordpress, SiFigma, SiTailwindcss, SiTypescript } from 'react-icons/si';
import { useFadeInOnScroll } from '@/hooks/useFadeInOnScroll';

interface TechStackSectionProps {
  className?: string;
}

// Map tools to their icon components
const getToolIcon = (slug: string) => {
  const icons: Record<string, React.ReactNode> = {
    shopify: <SiShopify size={20} />,
    react: <SiReact size={20} />,
    nextjs: <SiNextdotjs size={20} />,
    wordpress: <SiWordpress size={20} />,
    figma: <SiFigma size={20} />,
    tailwind: <SiTailwindcss size={20} />,
    typescript: <SiTypescript size={20} />,
    ghl: <span className="font-bold text-sm">GHL</span>,
  };
  return icons[slug] || null;
};

const tools = [
  { name: 'Shopify', slug: 'shopify', icon: 'S' },
  { name: 'React', slug: 'react', icon: 'R' },
  { name: 'Next.js', slug: 'nextjs', icon: 'N' },
  { name: 'WordPress', slug: 'wordpress', icon: 'W' },
  { name: 'Figma', slug: 'figma', icon: 'F' },
  { name: 'GHL', slug: 'ghl', icon: 'G' },
  { name: 'Tailwind', slug: 'tailwind', icon: 'T' },
  { name: 'TypeScript', slug: 'typescript', icon: 'TS' },
];

const TechStackSection = ({ className = '' }: TechStackSectionProps) => {
  const headlineRef = useFadeInOnScroll<HTMLDivElement>();
  const primaryCardRef = useFadeInOnScroll<HTMLDivElement>();
  const toolsRef = useFadeInOnScroll<HTMLDivElement>();
  const orbitRef = useFadeInOnScroll<HTMLDivElement>();

  return (
    <section
      id="techstack"
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
                  <div className="aspect-[4/5] rounded-2xl overflow-hidden">
                    <img
                      src="/service image/ready-to-launch-online-business.png"
                      alt="Tech Stack"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Small cards */}
                <div className="hidden lg:grid grid-cols-2 gap-4 mt-4">
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
                        src="/service image/sell-products-shopify.png"
                        alt="Tech"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: Headline Block */}
              <div ref={headlineRef} className="order-2 fade-up relative">
                <span className="label-small mb-4 block">Tech Stack</span>
                <h2 className="font-heading font-bold text-navy mb-6 portfolio-heading">
                  Tools & Platforms
                </h2>
                <p className="text-slate text-lg mb-8 max-w-lg leading-relaxed">
                  Shopify, React, WordPress, and modern tools—chosen for stability and speed. 
                  I use the best technologies to deliver exceptional results.
                </p>

                {/* Tools List */}
                <div ref={toolsRef} className="fade-up flex flex-wrap gap-3 mb-8">
                  {['Shopify', 'React', 'WordPress', 'GHL', 'Next.js', 'Figma'].map((tool, index) => (
                    <span key={tool} className={`pill transition-all duration-300 delay-${index * 100}`}>
                      {tool}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-8">
                  <button
                    onClick={() => {
                      const element = document.querySelector('#contact');
                      if (element) element.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="btn-primary flex items-center gap-2 group"
                  >
                    See Capabilities
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </button>

                  {/* Small Orbit */}
                  <div
                    ref={orbitRef}
                    className="fade-up relative flex-shrink-0"
                    aria-label="Tech stack orbit"
                  >
                    <div className="relative w-48 h-48 flex items-center justify-center">
                      {/* Center - Your Logo */}
                      <div className="absolute w-12 h-12 flex items-center justify-center shadow-glow z-10">
                        <svg width="48px" height="48px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#5AA8D6" stroke="#5AA8D6">
                          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                          <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                          <g id="SVGRepo_iconCarrier">
                            <title>nativescript</title>
                            <rect width="24" height="24" fill="none"></rect>
                            <path d="M7.5,3h9A4.48,4.48,0,0,1,21,7.5v9A4.48,4.48,0,0,1,16.5,21h-9A4.48,4.48,0,0,1,3,16.5v-9A4.48,4.48,0,0,1,7.5,3M6,13.5v3A1.5,1.5,0,0,0,7.5,18H9V10.5L15,18h1.5A1.5,1.5,0,0,0,18,16.5v-3A1.5,1.5,0,0,1,19.5,12,1.5,1.5,0,0,1,18,10.5v-3A1.5,1.5,0,0,0,16.5,6H15v7.5L9,6H7.5A1.5,1.5,0,0,0,6,7.5v3A1.5,1.5,0,0,1,4.5,12,1.5,1.5,0,0,1,6,13.5Z"></path>
                          </g>
                        </svg>
                      </div>

                      {/* Orbit Ring */}
                      <div className="absolute inset-0 border-2 border-dashed border-light-accent rounded-full" />

                      {/* Orbiting Tools */}
                      <div className="absolute w-full h-full animate-spin orbit-spin-slow">
                        {tools.map((tool, index) => {
                          const angle = (index / tools.length) * Math.PI * 2;
                          const radius = 80;
                          const x = Math.cos(angle) * radius;
                          const y = Math.sin(angle) * radius;
                          
                          return (
                            <div
                              key={tool.name}
                              className={`absolute w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-125 hover:shadow-glow text-white text-sm orbit-bg-${tool.slug} orbit-position`}
                              style={{
                                '--orbit-x': `${x}px`,
                                '--orbit-y': `${y}px`,
                              } as React.CSSProperties}
                              title={tool.name}
                            >
                              {/* Very small icons */}
                              <div className="tool-icon-container">
                                {getToolIcon(tool.slug)}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Remove the old large orbit section below */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
