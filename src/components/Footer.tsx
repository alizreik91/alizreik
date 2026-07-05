import { motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

export const Footer = () => {
  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-dark-secondary border-t border-gold-muted/10 py-12 px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Left */}
          <motion.div
            className="text-left"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs font-mono text-gold-muted tracking-widest">
              ALI ZREIK © 2026
            </p>
            <p className="text-xs font-mono text-gold-muted/60 mt-1">Beirut, Lebanon</p>
          </motion.div>

          {/* Center */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p className="text-xs font-mono text-gold-muted tracking-[0.2em]">
              LUXURY BRANDING SYSTEMS
            </p>
          </motion.div>

          {/* Right */}
          <motion.div
            className="text-right"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.button
              onClick={handleBackToTop}
              className="inline-flex items-center gap-2 text-xs font-mono text-gold-muted hover:text-gold transition-colors"
              whileHover={{ x: 4 }}
              whileTap={{ scale: 0.95 }}
            >
              BACK TO TOP
              <ArrowUp size={12} />
            </motion.button>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-gold-muted/10 pt-6">
          <p className="text-xs font-mono text-gold-muted/40 text-center">
            Crafted with precision | Designed with intention
          </p>
        </div>
      </div>
    </footer>
  );
};
