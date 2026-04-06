import React, { useRef, useState, useMemo } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { cn } from '../../lib/utils';

interface TimelineItem {
  id: number;
  title: string;
  date: string;
  content: string;
  category: string;
  icon: React.ElementType;
  relatedIds: number[];
  status: 'completed' | 'in-progress' | 'blocked';
  energy: number; // 0-100 for orbital speed/size
}

interface RadialOrbitalTimelineProps {
  timelineData: TimelineItem[];
  className?: string;
  colors?: {
    primary: string;
    secondary: string;
    tertiary: string;
    text: string;
  };
}

const RadialOrbitalTimeline: React.FC<RadialOrbitalTimelineProps> = ({
  timelineData,
  className,
  colors = {
    primary: '#5AA8D6', // sky
    secondary: '#3D4164', // navy
    tertiary: '#ECF3FD', // soft-blue
    text: '#FFFFFF', // white
  },
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start center', 'end center'],
  });

  const rotate = useTransform(scrollYProgress, [0, 1], ['0deg', '360deg']);
  const rotateSpring = useSpring(rotate, { stiffness: 100, damping: 30, mass: 1 });

  const radius = 200; // Radius of the orbital path

  const sortedData = useMemo(() => {
    return [...timelineData].sort((a, b) => a.id - b.id);
  }, [timelineData]);

  const [activeItem, setActiveItem] = useState<TimelineItem | null>(
    sortedData && sortedData.length > 0 ? sortedData[0] : null
  );

  const totalItems = sortedData.length;
  const angleIncrement = 360 / totalItems;

  return (
    <section ref={containerRef} className={cn('relative min-h-[120vh] flex items-center py-20', className)}>
      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left: Description / Active Item */}
        <div className="lg:sticky lg:top-1/2 lg:-translate-y-1/2 text-white p-6 rounded-lg backdrop-blur-md bg-white/10 border border-white/20 h-fit">
          <motion.p className="label-small text-sky mb-2">Orbital View</motion.p>
          <motion.h3 className="text-4xl font-bold mb-4" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            Skills & Expertise
          </motion.h3>
          {activeItem && (
            <motion.div
              key={activeItem.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-6"
            >
              <div className="flex items-center gap-3 mb-3">
                <activeItem.icon className="text-sky" size={24} />
                <h4 className="text-2xl font-semibold text-sky">{activeItem.title}</h4>
              </div>
              <p className="text-white/80 text-base mb-2">
                <span className="font-medium">{activeItem.date}</span> - {activeItem.category}
              </p>
              <p className="text-white/90 text-lg leading-relaxed">{activeItem.content}</p>
              <div className="mt-4 flex items-center gap-2">
                <span className="text-sm text-white/70">Status:</span>
                <span
                  className={cn(
                    'text-xs font-semibold px-2 py-1 rounded-full',
                    activeItem.status === 'completed' && 'bg-green-500/20 text-green-300',
                    activeItem.status === 'in-progress' && 'bg-blue-500/20 text-blue-300',
                    activeItem.status === 'blocked' && 'bg-red-500/20 text-red-300'
                  )}
                >
                  {activeItem.status}
                </span>
                <span className="ml-4 text-sm text-white/70">Energy: {activeItem.energy}%</span>
              </div>
            </motion.div>
          )}
        </div>

        {/* Right: Radial Timeline */}
        <div className="relative flex items-center justify-center min-h-[500px]">
          <div
            className="absolute inset-0 flex items-center justify-center"
            style={{ perspective: '1000px' }}
          >
            <motion.div
              style={{ rotate: rotateSpring }}
              className="relative w-[400px] h-[400px] rounded-full border border-sky/30 flex items-center justify-center"
            >
              {/* Central element */}
              <div
                className="absolute w-24 h-24 rounded-full bg-gradient-to-br from-sky to-navy flex items-center justify-center text-white text-xl font-bold shadow-lg"
              >
                Skills
              </div>

              {/* Orbital items */}
              {sortedData.map((item, index) => {
                const angle = index * angleIncrement;
                const radians = (angle * Math.PI) / 180;
                const x = radius * Math.cos(radians);
                const y = radius * Math.sin(radians);

                const isActive = activeItem?.id === item.id;
                const size = 30 + item.energy / 5; // Scale size based on energy
                const scale = isActive ? 1.5 : 1;

                return (
                  <motion.div
                    key={item.id}
                    className="absolute cursor-pointer rounded-full flex items-center justify-center shadow-md border border-white/30"
                    style={{
                      left: `calc(50% + ${x}px)`,
                      top: `calc(50% + ${y}px)`,
                      translateX: '-50%',
                      translateY: '-50%',
                      backgroundColor: isActive ? colors.primary : colors.secondary,
                      width: size,
                      height: size,
                      scale,
                      zIndex: isActive ? 20 : 10,
                    }}
                    onTap={() => setActiveItem(item)}
                    whileHover={{ scale: 1.2 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  >
                    <item.icon className={cn('text-white', isActive && 'text-white')} size={size * 0.4} />
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RadialOrbitalTimeline;
