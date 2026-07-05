import { motion } from 'framer-motion';
import { useIntersection } from '../../hooks';
import { CERTIFICATES } from '../../utils/constants';
import { Award } from 'lucide-react';

export const Certificates = () => {
  const { ref, isVisible } = useIntersection();

  return (
    <section
      id="certificates"
      ref={ref}
      className="min-h-screen w-full bg-dark flex items-center justify-center py-20 px-8"
    >
      <div className="max-w-5xl mx-auto w-full">
        <motion.h2
          className="font-serif text-4xl md:text-5xl font-bold text-gold mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          CERTIFICATION ARCHIVE
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CERTIFICATES.map((cert, idx) => (
            <motion.div
              key={cert.id}
              className="group relative bg-dark-secondary/40 backdrop-blur-sm border border-gold-muted/10 hover:border-gold-muted/30 p-6 rounded-lg transition-all duration-300 overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              whileHover={{ y: -8 }}
            >
              {/* Ambient Background Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent" />
              </div>

              {/* Content */}
              <div className="relative z-10">
                <div className="flex items-start gap-3 mb-4">
                  <Award size={20} className="text-gold flex-shrink-0 mt-1" />
                  <h3 className="font-serif font-bold text-white leading-tight">{cert.title}</h3>
                </div>

                <p className="text-xs font-mono text-gold-muted mb-2">{cert.issuer}</p>
                <p className="text-xs font-mono text-gold/60 mb-4">{cert.year}</p>

                {cert.description && (
                  <p className="text-xs text-white/60 leading-relaxed">{cert.description}</p>
                )}
              </div>

              {/* Hover Border Animation */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-gold/30" />
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-gold/30" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
