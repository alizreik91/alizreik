import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useIntersection } from '../../hooks';
import { PROJECTS } from '../../utils/constants';
import { X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut } from 'lucide-react';

const CATEGORIES = ['All', 'Social Media Poster', 'Logo Design'] as const;

interface ProjectModalProps {
  project: (typeof PROJECTS)[0];
  onClose: () => void;
  onPrevious: () => void;
  onNext: () => void;
}

const ProjectModal = ({ project, onClose, onPrevious, onNext }: ProjectModalProps) => {
  const [zoom, setZoom] = useState(1);
  const [showLightbox, setShowLightbox] = useState(false);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 bg-dark/95 backdrop-blur-sm flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="bg-dark-secondary border border-gold-muted/20 rounded-lg max-w-5xl w-full max-h-[85vh] overflow-y-auto"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 p-8">
            {/* Left: Image Section */}
            <div className="lg:col-span-3">
              <div
                className="relative bg-dark rounded-lg overflow-hidden cursor-zoom-in h-96 flex items-center justify-center border border-gold-muted/10"
                onClick={() => setShowLightbox(true)}
              >
                <div className="text-center text-gold-muted text-sm">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <div className="flex flex-col items-center gap-2">
                      <ZoomIn size={32} />
                      <p className="text-xs">Project Artwork</p>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Right: Details Section */}
            <div className="lg:col-span-2 space-y-6">
              {/* Header with Close Button */}
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-serif text-2xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-xs font-mono text-gold uppercase">{project.category}</p>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-gold-muted/10 rounded transition-colors"
                >
                  <X size={20} className="text-gold-muted" />
                </button>
              </div>

              {/* Project Info */}
              <div className="space-y-3 border-t border-gold-muted/10 pt-4">
                <div>
                  <p className="text-xs font-mono text-gold-muted/60 mb-1">YEAR</p>
                  <p className="text-sm text-white">{project.year}</p>
                </div>
                <div>
                  <p className="text-xs font-mono text-gold-muted/60 mb-1">TOOLS</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tools.map((tool) => (
                      <span key={tool} className="text-xs bg-gold/10 text-gold px-2 py-1 rounded">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="border-t border-gold-muted/10 pt-4">
                <p className="text-xs font-mono text-gold-muted/60 mb-2">DESCRIPTION</p>
                <p className="text-sm text-white/80 leading-relaxed">{project.description}</p>
              </div>

              {/* Objectives */}
              <div className="border-t border-gold-muted/10 pt-4">
                <p className="text-xs font-mono text-gold-muted/60 mb-3">OBJECTIVES</p>
                <ul className="space-y-2">
                  {project.objectives.map((obj, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-white/80">
                      <input type="checkbox" checked className="w-3 h-3 accent-gold" readOnly />
                      <span>{obj}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Navigation */}
              <div className="flex gap-2 pt-4 border-t border-gold-muted/10">
                <button
                  onClick={onPrevious}
                  className="flex-1 px-3 py-2 bg-dark border border-gold-muted/20 hover:border-gold-muted/40 rounded text-gold-muted hover:text-gold transition-colors flex items-center justify-center gap-2"
                >
                  <ChevronLeft size={16} />
                  Prev
                </button>
                <button
                  onClick={onNext}
                  className="flex-1 px-3 py-2 bg-dark border border-gold-muted/20 hover:border-gold-muted/40 rounded text-gold-muted hover:text-gold transition-colors flex items-center justify-center gap-2"
                >
                  Next
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Lightbox Overlay */}
        <AnimatePresence>
          {showLightbox && (
            <motion.div
              className="fixed inset-0 z-60 bg-dark/98 backdrop-blur-md flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowLightbox(false)}
            >
              <div className="flex flex-col items-center gap-4">
                <button
                  onClick={() => setShowLightbox(false)}
                  className="absolute top-8 right-8 p-2 bg-gold text-dark rounded hover:bg-gold/80 transition-colors"
                >
                  <X size={24} />
                </button>

                <div className="flex gap-2">
                  <button
                    onClick={() => setZoom((z) => Math.max(0.5, z - 0.2))}
                    className="px-4 py-2 bg-dark-secondary border border-gold-muted/20 rounded text-gold hover:bg-dark-tertiary transition-colors flex items-center gap-2"
                  >
                    <ZoomOut size={16} />
                    Zoom Out
                  </button>
                  <button
                    onClick={() => setZoom((z) => Math.min(3, z + 0.2))}
                    className="px-4 py-2 bg-dark-secondary border border-gold-muted/20 rounded text-gold hover:bg-dark-tertiary transition-colors flex items-center gap-2"
                  >
                    <ZoomIn size={16} />
                    Zoom In
                  </button>
                </div>

                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    style={{ transform: `scale(${zoom})` }}
                    className="max-w-2xl max-h-[60vh] object-contain transition-transform duration-200"
                  />
                ) : (
                  <div className="text-gold-muted text-center">Artwork Preview</div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </AnimatePresence>
  );
};

export const Projects = () => {
  const { ref, isVisible } = useIntersection();
  const [selectedCategory, setSelectedCategory] = useState<(typeof CATEGORIES)[number]>('All');
  const [selectedProject, setSelectedProject] = useState<(typeof PROJECTS)[0] | null>(null);

  const filteredProjects =
    selectedCategory === 'All'
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === selectedCategory);

  const currentIndex = PROJECTS.indexOf(selectedProject!);

  const handlePrevious = () => {
    const prevIndex = (currentIndex - 1 + PROJECTS.length) % PROJECTS.length;
    setSelectedProject(PROJECTS[prevIndex]);
  };

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % PROJECTS.length;
    setSelectedProject(PROJECTS[nextIndex]);
  };

  return (
    <section
      id="projects"
      ref={ref}
      className="min-h-screen w-full bg-dark flex items-center justify-center py-20 px-8"
    >
      <div className="max-w-6xl mx-auto w-full">
        <motion.h2
          className="font-serif text-4xl md:text-5xl font-bold text-gold mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          THE SELECTED BRAND ARCHIVE
        </motion.h2>

        {/* Category Filter */}
        <motion.div
          className="flex items-center justify-center gap-3 mb-12 flex-wrap"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-mono transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-gold text-dark font-bold'
                  : 'bg-dark-secondary border border-gold-muted/20 text-gold-muted hover:border-gold-muted/40'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <AnimatePresence>
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                className="group cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative bg-dark-secondary border border-gold-muted/10 hover:border-gold-muted/30 rounded-lg overflow-hidden h-64 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-gold/20">
                  {/* Image */}
                  <div className="absolute inset-0 bg-gradient-to-b from-gold/5 to-dark-secondary flex items-center justify-center">
                    {project.image ? (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    ) : (
                      <div className="text-center">
                        <div className="text-4xl font-serif text-gold/20 mb-2">✨</div>
                        <p className="text-gold-muted text-xs">{project.category}</p>
                      </div>
                    )}
                  </div>

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-secondary via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-end justify-end p-4">
                    <ZoomIn className="text-gold" size={24} />
                  </div>

                  {/* Info */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-dark-secondary to-transparent">
                    <h3 className="font-serif font-bold text-white text-sm mb-1">{project.title}</h3>
                    <p className="text-xs font-mono text-gold/80">{project.year}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
            onPrevious={handlePrevious}
            onNext={handleNext}
          />
        )}
      </AnimatePresence>
    </section>
  );
};
