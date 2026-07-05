import { motion } from 'framer-motion';
import { useIntersection } from '../../hooks';
import { EXPERIENCE } from '../../utils/constants';
import { Briefcase, BookOpen } from 'lucide-react';

export const Experience = () => {
  const { ref, isVisible } = useIntersection();

  const professionalExp = EXPERIENCE.filter((e) => e.type === 'professional');
  const educationExp = EXPERIENCE.filter((e) => e.type === 'education');

  const TimelineItem = ({ item, index, isProfessional }: any) => (
    <motion.div
      className="relative pb-12 last:pb-0"
      initial={{ opacity: 0, x: isProfessional ? -30 : 30 }}
      animate={isVisible ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      {/* Connector Line */}
      {index < (isProfessional ? professionalExp.length : educationExp.length) - 1 && (
        <div className="absolute left-4 top-12 bottom-0 w-px bg-gradient-to-b from-gold/40 to-transparent" />
      )}

      {/* Timeline Dot */}
      <div className="absolute left-0 top-1 w-8 h-8 rounded-full border-2 border-gold bg-dark flex items-center justify-center">
        <div className="w-2 h-2 rounded-full bg-gold" />
      </div>

      {/* Content */}
      <div className="ml-16">
        <div className="flex items-start gap-3 mb-2">
          {isProfessional ? (
            <Briefcase size={18} className="text-gold mt-1 flex-shrink-0" />
          ) : (
            <BookOpen size={18} className="text-gold mt-1 flex-shrink-0" />
          )}
          <div>
            <h4 className="font-serif text-lg font-bold text-white">{item.title}</h4>
            {item.company && (
              <p className="text-sm text-gold-muted font-mono">{item.company}</p>
            )}
            {item.institution && (
              <p className="text-sm text-gold-muted font-mono">{item.institution}</p>
            )}
          </div>
        </div>

        <p className="text-xs font-mono text-gold/60 mb-3">{item.period}</p>
        <p className="text-sm text-white/80 leading-relaxed mb-3">{item.description}</p>

        {item.achievements && (
          <ul className="space-y-1">
            {item.achievements.map((achievement: string, idx: number) => (
              <li key={idx} className="text-xs text-white/60 flex items-start gap-2">
                <span className="text-gold mt-1.5">•</span>
                <span>{achievement}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </motion.div>
  );

  return (
    <section
      id="experience"
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
          JOURNEY
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Professional History */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-lg font-serif font-bold text-white mb-8 pb-4 border-b border-gold-muted/20">
              Professional History
            </h3>
            <div>
              {professionalExp.map((exp, idx) => (
                <TimelineItem key={exp.id} item={exp} index={idx} isProfessional={true} />
              ))}
            </div>
          </motion.div>

          {/* Academic Grounding */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-lg font-serif font-bold text-white mb-8 pb-4 border-b border-gold-muted/20">
              Academic Grounding
            </h3>
            <div>
              {educationExp.map((exp, idx) => (
                <TimelineItem key={exp.id} item={exp} index={idx} isProfessional={false} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
