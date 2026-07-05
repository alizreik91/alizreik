import { motion } from 'framer-motion';
import { useIntersection } from '../../hooks';
import { Briefcase, BookOpen, Palette, Brain } from 'lucide-react';

const PASSIONS = [
  {
    icon: Palette,
    title: 'Branding Systems',
    description: 'Comprehensive visual language frameworks',
  },
  {
    icon: Brain,
    title: 'Creative Thinking',
    description: 'Innovation through conceptual depth',
  },
  {
    icon: BookOpen,
    title: 'Visual Storytelling',
    description: 'Narratives through design and imagery',
  },
  {
    icon: Briefcase,
    title: 'Modern Design',
    description: 'Contemporary layout and aesthetics',
  },
];

export const About = () => {
  const { ref, isVisible } = useIntersection();

  return (
    <section
      id="about"
      ref={ref}
      className="min-h-screen w-full bg-dark flex items-center justify-center py-20 px-8"
    >
      <div className="max-w-6xl mx-auto w-full">
        <motion.h2
          className="font-serif text-4xl md:text-5xl font-bold text-gold mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          PHILOSOPHY
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start mb-16">
          {/* Left Column - Portrait Card */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="relative bg-dark-secondary/50 backdrop-blur-sm border border-gold-muted/20 p-8 rounded-lg overflow-hidden group">
              {/* Grid Pattern Overlay */}
              <div className="absolute inset-0 opacity-5 pointer-events-none">
                <svg
                  className="w-full h-full"
                  viewBox="0 0 100 100"
                  preserveAspectRatio="xMidYMid slice"
                >
                  <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                    <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5" />
                  </pattern>
                  <rect width="100" height="100" fill="url(#grid)" />
                </svg>
              </div>

              {/* Geometric Circle with Monogram */}
              <div className="relative h-64 md:h-80 flex items-center justify-center">
                <motion.div
                  className="relative w-48 h-48 md:w-56 md:h-56 rounded-full border-2 border-gold/30 flex items-center justify-center"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                >
                  {/* Inner rotating element */}
                  <motion.div
                    className="absolute inset-0 rounded-full border border-gold/20"
                    animate={{ rotate: -360 }}
                    transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
                  />

                  {/* Monogram */}
                  <div className="text-6xl md:text-7xl font-serif font-bold text-gold z-10">AZ</div>
                </motion.div>
              </div>

              {/* Footer Info */}
              <motion.div
                className="mt-8 text-center border-t border-gold-muted/10 pt-6"
                initial={{ opacity: 0 }}
                animate={isVisible ? { opacity: 1 } : {}}
                transition={{ delay: 0.4 }}
              >
                <p className="text-xs font-mono text-gold-muted mb-2">ALI ZREIK</p>
                <p className="text-xs font-mono text-gold-muted/60">33.8938° N, 35.5018° E</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column - Bio & Passions */}
          <motion.div
            className="lg:col-span-3 space-y-8"
            initial={{ opacity: 0, x: 30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {/* Bio Text */}
            <div>
              <p className="text-lg text-white/80 leading-relaxed mb-4">
                Lebanese graphic designer and brand strategist based in Beirut, bringing meticulous visual storytelling with Swiss-style precision to every project.
              </p>
              <p className="text-base text-white/70 leading-relaxed">
                Specializing in comprehensive brand identity systems, editorial design, and visual narratives that elevate brands to the intersection of art and commerce. Every mark, every typeface, every color holds intentionality.
              </p>
            </div>

            {/* Passions Grid */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {PASSIONS.map((passion, idx) => {
                const Icon = passion.icon;
                return (
                  <motion.div
                    key={idx}
                    className="bg-dark-secondary/30 border border-gold-muted/10 hover:border-gold-muted/30 p-6 rounded-lg transition-all duration-300"
                    initial={{ opacity: 0, y: 10 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.2 + idx * 0.05 }}
                    whileHover={{ y: -4 }}
                  >
                    <Icon size={24} className="text-gold mb-3" />
                    <h3 className="font-serif text-sm font-bold text-white mb-1">{passion.title}</h3>
                    <p className="text-xs text-gold-muted/80">{passion.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
