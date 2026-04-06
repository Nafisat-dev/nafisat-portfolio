import { useRef } from "react";
import { cn } from "../../lib/utils";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from 'lucide-react';

interface FeatureProps {
  id: number;
  icon: React.ElementType;
  title: string;
  description: string;
  image: string;
}

interface FeaturesProps {
  features: FeatureProps[];
  progressGradientLight?: string; // Tailwind gradient class for light background
  label: string;
  heading: string;
  className?: string;
}

const Features = ({ features, progressGradientLight, label, heading, className }: FeaturesProps) => {
  const containerRef = useRef(null);
  const inView = useInView(containerRef, { once: true, margin: "-100px 0px" });

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className={cn("py-10 md:py-16", className)} ref={containerRef}>
      <div className="container mx-auto px-4">
        <div className="max-w-xl mx-auto text-center mb-12 md:mb-16">
          <motion.p
            className="label-small"
            initial={{ opacity: 0, y: -20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            {label}
          </motion.p>
          <motion.h2
            className="font-heading text-3xl md:text-4xl font-bold text-navy mt-3"
            initial={{ opacity: 0, y: -20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {heading}
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              className="group relative flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              variants={itemVariants}
            >
              {/* Icon with gradient circle */}
              <div
                className={cn(
                  "relative flex items-center justify-center w-16 h-16 rounded-full mb-6",
                  progressGradientLight || "bg-gradient-to-r from-blue-400 to-blue-500"
                )}
              >
                <feature.icon className="w-8 h-8 text-white relative z-10" />
                {/* Subtle gradient overlay for effect */}
                <span className="absolute inset-0 rounded-full bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </div>
              <h3 className="text-xl font-semibold text-navy mb-3">
                {feature.title}
              </h3>
              <p className="text-navy/80 text-base">{feature.description}</p>
              {/* Hover image overlay */}
              <div className="absolute inset-0 rounded-xl overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/70 to-transparent"></div>
                <p className="absolute bottom-4 left-4 text-white font-medium text-sm">Learn More</p>
                <ArrowRight className="absolute bottom-4 right-4 text-white" size={20} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
