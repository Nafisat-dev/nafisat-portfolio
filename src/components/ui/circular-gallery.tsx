import React, { useRef, useState } from 'react';
import { motion, useTransform, useScroll, AnimatePresence } from 'framer-motion';
import { cn } from '../../lib/utils';

interface GalleryItem {
  common: string;
  binomial: string;
  photo: {
    url: string;
    text: string;
    by: string;
  };
}

interface CircularGalleryProps {
  galleryData: GalleryItem[];
  className?: string;
}

const CircularGallery: React.FC<CircularGalleryProps> = ({ galleryData, className }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const [activeItem, setActiveItem] = useState<GalleryItem | null>(
    galleryData && galleryData.length > 0 ? galleryData[0] : null
  );

  const rotate = useTransform(scrollYProgress, [0, 1], ['0deg', '720deg']); // Rotate twice for more dynamic feel

  const radius = 250; // Radius of the orbital path

  const totalItems = galleryData.length;
  const angleIncrement = 360 / totalItems;

  return (
    <div ref={containerRef} className={cn("relative z-0", className)}>
      <div className="relative h-[150vh] flex flex-col items-center justify-start py-20 md:py-40">
        <div className="sticky top-[10vh] md:top-[20vh] flex flex-col items-center">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">Tools & Platforms</h2>
          <p className="text-xl text-white/70 mb-12">Scroll to explore the stack</p>

          <motion.div
            style={{ rotate }}
            className="relative w-[500px] h-[500px] rounded-full border border-sky/30 flex items-center justify-center"
          >
            {/* Central image or text */}
            <AnimatePresence mode="wait">
              {activeItem && (
                <motion.div
                  key={activeItem.common}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="absolute w-40 h-40 rounded-full overflow-hidden shadow-lg border border-white/20"
                >
                  <img
                    src={activeItem.photo.url}
                    alt={activeItem.common}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-navy/60 flex flex-col items-center justify-center text-white text-center p-2 opacity-0 hover:opacity-100 transition-opacity duration-200">
                    <p className="font-bold text-sm">{activeItem.common}</p>
                    <p className="text-xs">{activeItem.binomial}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Orbital items */}
            {galleryData.map((item, index) => {
              const angle = index * angleIncrement;
              const radians = (angle * Math.PI) / 180;
              const x = radius * Math.cos(radians);
              const y = radius * Math.sin(radians);

              const isActive = activeItem?.common === item.common;

              return (
                <motion.div
                  key={item.common}
                  className="absolute cursor-pointer rounded-full overflow-hidden shadow-md border border-white/30"
                  style={{
                    left: `calc(50% + ${x}px)`,
                    top: `calc(50% + ${y}px)`,
                    translateX: '-50%',
                    translateY: '-50%',
                    width: isActive ? 80 : 60,
                    height: isActive ? 80 : 60,
                    zIndex: isActive ? 20 : 10,
                  }}
                  onMouseEnter={() => setActiveItem(item)}
                  onClick={() => setActiveItem(item)}
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                >
                  <img
                    src={item.photo.url}
                    alt={item.common}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default CircularGallery;
