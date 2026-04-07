import React, { useState } from 'react';
import { ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import { projects, categories, type Category, type Project } from '@/data/projects';
import { HeroCarousel } from '@/components/ui/hero-carousel';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import Navigation from '@/sections/Navigation';
import Footer from '@/sections/Footer';
import { useFadeInOnScroll } from '@/hooks/useFadeInOnScroll';
import TechMarquee from '@/components/TechMarquee';
import { cn } from '@/lib/utils';
import useCalendly from '@/hooks/useCalendly';
import { Calendar } from 'lucide-react';

const ProjectsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [carouselIndex, setCarouselIndex] = useState(0);

  const { handleCalendlyClick } = useCalendly();

  // Refs for animations
  const statsRef = useFadeInOnScroll<HTMLDivElement>(0.15);
  const filterRef = useFadeInOnScroll<HTMLDivElement>(0.15);
  const gridRef = useFadeInOnScroll<HTMLDivElement>(0.15);

  const handleProjectSelect = (project: Project | null) => {
    setSelectedProject(project);
    setCarouselIndex(0); // Reset carousel index when a new project is selected or dialog is closed
  };

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter((p) => p.category === selectedCategory);

  const nextImage = () => {
    if (selectedProject) {
      setCarouselIndex((prev) => (prev + 1) % selectedProject.images.length);
    }
  };

  const prevImage = () => {
    if (selectedProject) {
      setCarouselIndex((prev) => (prev - 1 + selectedProject.images.length) % selectedProject.images.length);
    }
  };

  const stats = [
    { value: '15+', label: 'Projects Completed' },
    { value: '5', label: 'Service Categories' },
    { value: '3', label: 'Years Experience' },
    { value: '98%', label: 'Client Satisfaction' },
  ];

  return (
    <div className="relative">
      <Navigation />
      
      <main>
        {/* Section A — Hero */}
        <section className="relative bg-navy">
          {/* Floating background text */}
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 z-0 whitespace-nowrap pointer-events-none overflow-hidden w-full text-center">
            <span className="text-white/[0.03] font-heading font-black text-[12vw] md:text-[15vw] leading-none select-none tracking-tighter block uppercase">
              NAFISAT A.
            </span>
          </div>

          <HeroCarousel
            title={<>Projects That Prove <span className="text-sky">the Point</span></>}
            subtitle="Every store, site, and brand here was built with one goal results."
            images={projects.slice(0, 7).map(p => ({ src: p.images[0], alt: p.title }))}
            className="z-10 bg-transparent"
          />
          
          <div className="relative z-20 -mt-20 pb-10">
            <TechMarquee />
          </div>
        </section>

        {/* Section B — Stats Bar */}
        <section className="bg-soft-blue py-12 border-y border-light-accent">
          <div ref={statsRef} className="max-w-7xl mx-auto px-4 fade-up">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div 
                  key={index} 
                  className={`text-center ${index !== stats.length - 1 ? 'md:border-r border-light-accent/50' : ''}`}
                >
                  <div className="font-heading font-bold text-3xl md:text-4xl text-navy mb-1">
                    {stat.value}
                  </div>
                  <div className="text-slate text-sm font-medium uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section C — Projects Grid */}
        <section className="bg-white py-24 px-4">
          <div className="max-w-7xl mx-auto">
            {/* Filter Pills */}
            <div ref={filterRef} className="flex flex-wrap justify-center gap-3 mb-16 fade-up">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={cn('pill', {
                    'active': selectedCategory === cat
                  })}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Grid */}
            <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 fade-up">
              {filteredProjects.length > 0 ? (
                filteredProjects.map((project, index) => (
                  <div
                    key={project.id}
                    onClick={() => handleProjectSelect(project)}
                    className={`glass-card p-3 cursor-pointer glass-hover group transition-all duration-500 delay-${(index % 3) * 100}`}
                  >
                    <div className="aspect-[4/3] rounded-xl overflow-hidden mb-4 relative">
                      <img
                        src={project.images[0]}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-navy text-xs font-semibold px-3 py-1 rounded-full shadow-sm">
                        {project.category}
                      </span>
                    </div>
                    <h3 className="font-heading font-semibold text-navy text-xl mb-2">{project.title}</h3>
                    <p className="text-slate text-sm line-clamp-2 leading-relaxed mb-4">{project.overview}</p>
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.techStack.slice(0, 3).map(tech => (
                        <span key={tech} className="text-[10px] uppercase tracking-wider font-bold bg-soft-blue text-sky px-2 py-1 rounded-md">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))
              ) : (
                <div className="col-span-full text-center py-20">
                  <p className="text-slate text-lg italic">No projects found in this category.</p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Section D — Project Modal */}
        <Dialog open={!!selectedProject} onOpenChange={() => handleProjectSelect(null)}>
          <DialogContent className="!max-w-3xl max-h-[90vh] overflow-y-auto glass-card-solid p-0 gap-0 border-none">
            {selectedProject && (
              <div className="flex flex-col">
                {/* Modal Carousel */}
                <div className="relative aspect-video w-full bg-navy/5">
                  <img
                    src={selectedProject.images[carouselIndex]}
                    alt={`${selectedProject.title} screenshot ${carouselIndex + 1}`}
                    className="w-full h-full object-cover transition-opacity duration-300"
                  />
                  
                  {selectedProject.images.length > 1 && (
                    <>
                      <button
                        onClick={(e) => { e.stopPropagation(); prevImage(); }}
                        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 hover:bg-white/40 backdrop-blur-md flex items-center justify-center text-white transition-all z-10"
                        aria-label="Previous image"
                        title="Previous image"
                      >
                        <ChevronLeft size={24} />
                      </button>
                      <button
                        onClick={(e) => { e.stopPropagation(); nextImage(); }}
                        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 hover:bg-white/40 backdrop-blur-md flex items-center justify-center text-white transition-all z-10"
                        aria-label="Next image"
                        title="Next image"
                      >
                        <ChevronRight size={24} />
                      </button>
                      
                      {/* Dot Indicators */}
                      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                        {selectedProject.images.map((_, idx) => (
                          <button
                            key={idx}
                            onClick={(e) => { e.stopPropagation(); setCarouselIndex(idx); }}
                            className={`w-2 h-2 rounded-full transition-all duration-300 ${
                              idx === carouselIndex ? 'bg-white w-6' : 'bg-white/40'
                            }`}
                            aria-label={`Go to image ${idx + 1}`}
                            title={`Go to image ${idx + 1}`}
                          />
                        ))}
                      </div>
                    </>
                  )}
                </div>

                <div className="p-8 md:p-10">
                  <DialogHeader className="mb-8">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs font-bold uppercase tracking-widest text-sky">
                        {selectedProject.category}
                      </span>
                    </div>
                    <DialogTitle className="font-heading text-3xl md:text-4xl text-navy">
                      {selectedProject.title}
                    </DialogTitle>
                    <DialogDescription className="sr-only">
                      {selectedProject.overview}
                    </DialogDescription>
                  </DialogHeader>

                  <div className="grid md:grid-cols-3 gap-10">
                    <div className="md:col-span-2 space-y-8">
                      <div>
                        <h4 className="font-heading font-semibold text-navy text-lg mb-3">Overview</h4>
                        <p className="text-slate leading-relaxed">{selectedProject.overview}</p>
                      </div>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                        <div>
                          <h4 className="font-heading font-semibold text-navy text-lg mb-3">The Problem</h4>
                          <p className="text-slate text-sm leading-relaxed">{selectedProject.problem}</p>
                        </div>
                        <div>
                          <h4 className="font-heading font-semibold text-navy text-lg mb-3">The Solution</h4>
                          <p className="text-slate text-sm leading-relaxed">{selectedProject.solution}</p>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-8">
                      <div>
                        <h4 className="font-heading font-semibold text-navy text-lg mb-4">Tech Stack</h4>
                        <div className="flex flex-wrap gap-2">
                          {selectedProject.techStack.map((tech) => (
                            <span key={tech} className="text-xs bg-soft-blue text-navy px-3 py-1.5 rounded-full font-medium">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <a
                        href={selectedProject.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary inline-flex items-center gap-2 w-full justify-center py-4"
                      >
                        Visit Website
                        <ExternalLink size={18} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </main>

      {/* CTA Section (similar to ServiceCTA) */}
      <section className="py-16 px-6 bg-sky text-white text-center">
        <h2 className="font-heading font-bold text-4xl mb-4">Ready to start your project?</h2>
        <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
          Let's discuss your vision and turn your ideas into impactful digital experiences.
        </p>
        <button
          onClick={handleCalendlyClick}
          className="btn-primary bg-white text-sky hover:bg-soft-blue inline-flex items-center gap-2"
        >
          Book a Free Call <Calendar size={18} />
        </button>
      </section>

      <Footer />
    </div>
  );
};

export default ProjectsPage;
