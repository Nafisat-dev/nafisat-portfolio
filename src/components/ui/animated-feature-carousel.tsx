import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "../../lib/utils";

interface Step {
  id: string;
  name: string;
  title: string;
  description: string;
}

interface ImageProps {
  alt: string;
  step1img1: string;
  step1img2: string;
  step2img1: string;
  step2img2: string;
  step3img: string;
  step4img: string;
}

interface FeatureCarouselProps {
  steps: Step[];
  images: ImageProps;
  className?: string;
}

const AnimatedFeatureCarousel = ({ steps, images, className }: FeatureCarouselProps) => {
  const [currentStep, setCurrentStep] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const goToNextStep = () => {
    setCurrentStep((prev) => (prev === steps.length - 1 ? 0 : prev + 1));
  };

  const goToPrevStep = () => {
    setCurrentStep((prev) => (prev === 0 ? steps.length - 1 : prev - 1));
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") {
        goToNextStep();
      } else if (event.key === "ArrowLeft") {
        goToPrevStep();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentStep]);

  const currentImage = (stepId: string) => {
    switch (stepId) {
      case "1":
        return [images.step1img1, images.step1img2];
      case "2":
        return [images.step2img1, images.step2img2];
      case "3":
        return [images.step3img];
      case "4":
        return [images.step4img];
      default:
        return [""];
    }
  };

  return (
    <section className={cn("py-10 md:py-16 bg-white", className)} ref={carouselRef}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12 items-center justify-between">
          {/* Text Content */}
          <div className="w-full lg:w-1/2">
            <h3 className="label-small mb-4">My Process</h3>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy mb-8">
              {steps[currentStep].title}
            </h2>
            <p className="text-lg text-navy/80 mb-8">
              {steps[currentStep].description}
            </p>

            {/* Step Indicators */}
            <div className="flex flex-wrap gap-4 mb-8">
              {steps.map((step, index) => (
                <button
                  key={step.id}
                  onClick={() => setCurrentStep(index)}
                  className={cn(
                    "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
                    currentStep === index
                      ? "bg-sky text-white shadow-md"
                      : "bg-soft-blue text-navy hover:bg-sky/20"
                  )}
                >
                  {step.name}
                </button>
              ))}
            </div>

            {/* Navigation Buttons */}
            <div className="flex gap-4">
              <button
                onClick={goToPrevStep}
                className="btn-outline px-4 py-2 rounded-full flex items-center justify-center text-navy hover:bg-soft-blue"
                aria-label="Previous step"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={goToNextStep}
                className="btn-outline px-4 py-2 rounded-full flex items-center justify-center text-navy hover:bg-soft-blue"
                aria-label="Next step"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          {/* Image Carousel */}
          <div className="w-full lg:w-1/2 relative h-80 md:h-[450px] rounded-xl overflow-hidden shadow-xl">
            <AnimatePresence mode="wait">
              {currentImage(steps[currentStep].id).map((src, idx) => (
                <motion.img
                  key={steps[currentStep].id + idx}
                  src={src}
                  alt={images.alt}
                  className="absolute inset-0 w-full h-full object-cover"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                />
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnimatedFeatureCarousel;
