import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

interface PreloaderProps {
  onComplete: () => void;
}

export const Preloader = ({ onComplete }: PreloaderProps) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + Math.random() * 30;
      });
    }, 200);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {progress < 100 && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-dark"
        >
          {/* Golden Aura Background */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full blur-3xl"
              style={{
                background: 'radial-gradient(circle, rgba(212, 175, 55, 0.1) 0%, transparent 70%)',
              }}
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
            />
          </div>

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center gap-8">
            {/* Monospace Progress Counter */}
            <div className="text-center">
              <motion.div
                className="text-5xl font-mono font-bold text-gold tracking-widest"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                {String(Math.floor(progress)).padStart(2, '0')}%
              </motion.div>
            </div>

            {/* Linear Progress Bar */}
            <div className="w-64 h-1 bg-gold-muted/20 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gold"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ type: 'spring', stiffness: 50, damping: 20 }}
              />
            </div>

            {/* Status Text */}
            <motion.p
              className="text-xs font-mono text-gold-muted tracking-[0.15em] uppercase"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.7 }}
              transition={{ delay: 0.3 }}
            >
              Initializing Portfolio
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
