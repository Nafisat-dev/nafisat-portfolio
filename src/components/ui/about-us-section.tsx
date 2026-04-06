import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { cn } from '../../lib/utils';
import { Link } from 'react-router-dom';

interface ServiceItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface StatItem {
  icon: React.ReactNode;
  value: number;
  label: string;
  suffix: string;
}

interface AboutUsSectionProps {
  heading: string;
  description: string;
  imageSrc: string;
  services: ServiceItem[];
  stats: StatItem[];
  ctaText: string;
  ctaLink: string;
  className?: string;
}

const AboutUsSection: React.FC<AboutUsSectionProps> = ({
  heading,
  description,
  imageSrc,
  services,
  stats,
  ctaText,
  ctaLink,
  className,
}) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px 0px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className={cn('py-16 md:py-24', className)} ref={ref}>
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.h2
            className="font-heading text-3xl md:text-4xl font-bold text-navy mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            {heading}
          </motion.h2>
          <motion.p
            className="text-lg text-navy/80"
            initial={{ opacity: 0, y: -20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {description}
          </motion.p>
        </div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Services List */}
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <motion.div key={index} className="flex items-start gap-4" variants={itemVariants}>
                  <div className="flex-shrink-0 text-sky">{service.icon}</div>
                  <div>
                    <h3 className="text-xl font-semibold text-navy mb-1">{service.title}</h3>
                    <p className="text-navy/80">{service.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            {/* Stats */}
            <div className="grid grid-cols-2 gap-8 mt-12">
              {stats.map((stat, index) => (
                <motion.div key={index} className="text-center" variants={itemVariants}>
                  <div className="text-sky mb-2">{stat.icon}</div>
                  <p className="text-4xl font-bold text-navy">
                    {stat.value}{stat.suffix}
                  </p>
                  <p className="text-navy/70">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Image and CTA */}
          <motion.div className="relative" variants={itemVariants}>
            <img src={imageSrc} alt={heading} className="rounded-xl shadow-xl w-full h-auto" />
            <div className="absolute inset-0 bg-navy/60 rounded-xl flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
              <Link to={ctaLink} className="btn-primary">
                {ctaText}
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUsSection;
