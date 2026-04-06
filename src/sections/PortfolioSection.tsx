import { useState } from 'react';
import { ArrowRight, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { useFadeInOnScroll } from '@/hooks/useFadeInOnScroll';
import { projects, categories, type Project } from '@/data/projects';
import { cn } from '@/lib/utils'; // Import cn

interface PortfolioSectionProps {
  className?: string;
}

const PortfolioSection = ({ className = '' }: PortfolioSectionProps) => {
  const headlineRef = useFadeInOnScroll<HTMLDivElement>();
  const tagsRef = useFadeInOnScroll<HTMLDivElement>();
  const gridRef = useFadeInOnScroll<HTMLDivElement>();

  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const filteredProjects = (selectedCategory === 'All'
    ? projects
    : projects.filter(p => p.category === selectedCategory)
  ).slice(0, 6);

  const handleProjectSelect = (project: Project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => (prev + 1) % selectedProject.images.length);
    }
  };

  const prevImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => (prev - 1 + selectedProject.images.length) % selectedProject.images.length);
    }
  };

  return (
    <section
      id="portfolio"
      className={`relative bg-white py-24 ${className}`}
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-radial from-soft-blue/30 via-white to-white" />

      <div className="relative">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-8">
              <div ref={headlineRef} className="fade-up">
                <span className="label-small mb-4 block">Portfolio</span>
                <h2 className="font-heading font-bold text-navy portfolio-heading">
                  Selected Work
                </h2>
                <p className="text-slate text-lg mt-4 max-w-lg">
                  A mix of Shopify builds, React front-ends, and conversion-focused redesigns.
                </p>
              </div>

              {/* Category Filter */}
              <div ref={tagsRef} className="fade-up flex flex-nowrap gap-2 py-2 px-4 overflow-x-auto w-full">
                {categories.map((cat, index) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={cn(
                      `pill transition-all duration-300 delay-${index * 100}`,
                      { 'active': selectedCategory === cat },
                      'shrink-0' // Prevent shrinking
                    )}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Projects Grid */}
            <div ref={gridRef} className="fade-up grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project, index) => (
                <button
                  key={project.id}
                  onClick={() => handleProjectSelect(project)}
                  className={`glass-card p-3 cursor-pointer glass-hover group transition-all duration-300 delay-${(index % 3) * 100}`}
                  type="button"
                  aria-label={`View ${project.title} project details`}
                >
                  <div className="aspect-[4/3] rounded-xl overflow-hidden mb-4">
                    <img
                      src={project.images[0]}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <span className="text-xs text-sky font-medium">{project.category}</span>
                  <h3 className="font-heading font-semibold text-navy mt-1">{project.title}</h3>
                </button>
              ))}
            </div>

            {/* CTA */}
            <div className="text-center mt-8">
              <Link to="/projects" className="btn-primary inline-flex items-center gap-2 group">
                View All Projects
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Project Modal */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="!max-w-3xl max-h-[90vh] overflow-y-auto glass-card-solid">
          {selectedProject && (
            <>
              <DialogHeader>
                <DialogTitle className="font-heading text-2xl text-navy">
                  {selectedProject.title}
                </DialogTitle>
                <DialogDescription className="sr-only">
                  {selectedProject.overview}
                </DialogDescription>
              </DialogHeader>
              
              {/* Image Carousel */}
              <div className="relative w-full h-[32rem] rounded-xl overflow-hidden mb-6 flex items-center justify-center bg-gray-50">
                <img
                  src={selectedProject.images[currentImageIndex]}
                  alt={`${selectedProject.title} - ${currentImageIndex + 1}`}
                  className="w-full h-full object-contain transition-opacity duration-300"
                />
                
                {/* Navigation Arrows - only show if more than 1 image */}
                {selectedProject.images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 hover:bg-black/70 flex items-center justify-center text-white transition-colors"
                      aria-label="Previous image"
                    >
                      <ChevronLeft size={24} />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 hover:bg-black/70 flex items-center justify-center text-white transition-colors"
                      aria-label="Next image"
                    >
                      <ChevronRight size={24} />
                    </button>
                  </>
                )}
              </div>

              {/* Dot Indicators */}
              {selectedProject.images.length > 1 && (
                <div className="flex justify-center gap-2 mb-6">
                  {selectedProject.images.map((_image, index) => (
                    <button
                      key={`${selectedProject.id}-image-${index}`}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        index === currentImageIndex ? 'bg-sky w-6' : 'bg-sky/30'
                      }`}
                      aria-label={`Go to image ${index + 1}`}
                    />
                  ))}
                </div>
              )}

              <div className="space-y-6">
                <div>
                  <h4 className="font-heading font-semibold text-navy mb-2">Overview</h4>
                  <p className="text-slate">{selectedProject.overview}</p>
                </div>

                <div>
                  <h4 className="font-heading font-semibold text-navy mb-2">Problem</h4>
                  <p className="text-slate">{selectedProject.problem}</p>
                </div>

                <div>
                  <h4 className="font-heading font-semibold text-navy mb-2">Solution</h4>
                  <p className="text-slate">{selectedProject.solution}</p>
                </div>

                <div>
                  <h4 className="font-heading font-semibold text-navy mb-2">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.techStack.map((tech) => (
                      <span key={tech} className="pill text-sm">{tech}</span>
                    ))}
                  </div>
                </div>

                <a
                  href={selectedProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center gap-2 w-full justify-center"
                >
                  Visit Website
                  <ExternalLink size={18} />
                </a>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default PortfolioSection;
