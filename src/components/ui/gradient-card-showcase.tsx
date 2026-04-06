import { ArrowRight } from 'lucide-react';
import { cn } from '../../lib/utils';
import { Link } from 'react-router-dom';

interface GradientCardProps {
  title: string;
  desc: string;
  gradientFrom: string;
  gradientTo: string;
}

const GradientCard = ({ title, desc, gradientFrom, gradientTo }: GradientCardProps) => {
  return (
    <div
      className={cn(
        'relative group flex flex-col justify-between h-full p-6 rounded-2xl overflow-hidden shadow-lg',
        'transition-all duration-300 ease-in-out',
        'hover:shadow-xl hover:-translate-y-1'
      )}
      style={{
        background: `linear-gradient(135deg, ${gradientFrom} 0%, ${gradientTo} 100%)`,
      }}
    >
      <div className="relative z-10">
        <h3 className="text-2xl font-bold text-white mb-3">{title}</h3>
        <p className="text-white/90 text-base leading-relaxed mb-6">{desc}</p>
      </div>
      <div className="relative z-10 mt-auto">
        <Link
          to="/#contact"
          className="inline-flex items-center gap-2 text-white font-semibold group-hover:text-soft-blue transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-soft-blue after:scale-x-0 group-hover:after:scale-x-100 after:transition-transform after:duration-300"
        >
          Get Started <ArrowRight size={18} />
        </Link>
      </div>
    </div>
  );
};

interface GradientCardShowcaseProps {
  cards: GradientCardProps[];
  className?: string;
}

const GradientCardShowcase = ({ cards, className }: GradientCardShowcaseProps) => {
  return (
    <div className={cn('py-12 md:py-20', className)}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <GradientCard key={index} {...card} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default GradientCardShowcase;
