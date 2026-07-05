import { motion } from 'framer-motion';
import { useIntersection } from '../../hooks';
import { SKILLS } from '../../utils/constants';

const SkillBar = ({ skill, isVisible }: { skill: (typeof SKILLS)[0]; isVisible: boolean }) => {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <span className="text-sm font-mono text-white">{skill.name}</span>
        <span className="text-xs font-mono text-gold">{skill.percentage}%</span>
      </div>
      <div className="relative h-1.5 bg-dark-secondary rounded-full overflow-hidden border border-gold-muted/10">
        <motion.div
          className="absolute inset-y-0 left-0 bg-gradient-to-r from-gold to-gold/60 rounded-full"
          initial={{ width: 0 }}
          animate={isVisible ? { width: `${skill.percentage}%` } : {}}
          transition={{ duration: 1.5, delay: 0.2, ease: 'easeOut' }}
        />
      </div>
    </div>
  );
};

export const Skills = () => {
  const { ref, isVisible } = useIntersection();

  const creativeSkills = SKILLS.filter((s) => s.category === 'creative');
  const productivitySkills = SKILLS.filter((s) => s.category === 'productivity');

  return (
    <section
      id="skills"
      ref={ref}
      className="min-h-screen w-full bg-dark flex items-center justify-center py-20 px-8"
    >
      <div className="max-w-4xl mx-auto w-full">
        <motion.h2
          className="font-serif text-4xl md:text-5xl font-bold text-gold mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          COMPETENCIES
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Creative Software */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-lg font-serif font-bold text-white mb-8 pb-4 border-b border-gold-muted/20">
              Creative Software
            </h3>
            <div className="space-y-6">
              {creativeSkills.map((skill) => (
                <SkillBar key={skill.name} skill={skill} isVisible={isVisible} />
              ))}
            </div>
          </motion.div>

          {/* Office & Productivity */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-lg font-serif font-bold text-white mb-8 pb-4 border-b border-gold-muted/20">
              Office & Productivity
            </h3>
            <div className="space-y-6">
              {productivitySkills.map((skill) => (
                <SkillBar key={skill.name} skill={skill} isVisible={isVisible} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
