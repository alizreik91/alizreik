import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

interface HeroProps {
  onExplore: () => void;
  onContact: () => void;
}

export const Hero = ({ onExplore, onContact }: HeroProps) => {
  return (
    <section
      id="home"
      className="relative min-h-screen w-full bg-dark flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Ambient Golden Aura */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full blur-3xl"
          style={{
            background: 'radial-gradient(circle, rgba(212, 175, 55, 0.08) 0%, transparent 70%)',
          }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-8 text-center">
        {/* Main Headline */}
        <motion.h1
          className="font-serif text-5xl md:text-7xl font-bold text-white mb-6 leading-tight tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="block mb-2">Sculpting Brand</span>
          <span className="bg-gradient-to-r from-gold to-gold-muted bg-clip-text text-transparent">
            Identities
          </span>
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl text-white/80 mb-8 max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Elevating Visual Narratives
        </motion.p>

        {/* Subtitle Credentials */}
        <motion.div
          className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 mb-16 text-xs font-mono text-gold-muted"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 bg-gold rounded-full"></span>
            <span>33.8938° N, 35.5018° E</span>
          </div>
          <div className="hidden md:block w-px h-4 bg-gold-muted/30"></div>
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 bg-gold rounded-full animate-pulse"></span>
            <span>AVAILABLE FOR PROJECTS</span>
          </div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <motion.button
            onClick={onExplore}
            className="px-8 py-3 bg-gold text-dark font-mono font-semibold rounded-sm hover:bg-gold/90 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore Archive
          </motion.button>
          <motion.button
            onClick={onContact}
            className="px-8 py-3 border-2 border-gold text-gold font-mono font-semibold rounded-sm hover:bg-gold/5 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Me
          </motion.button>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <p className="text-xs font-mono text-gold-muted">SCROLL</p>
        <ArrowDown size={20} className="text-gold" />
      </motion.div>
    </section>
  );
};
