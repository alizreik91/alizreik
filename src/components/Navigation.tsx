import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { NAVIGATION_ITEMS } from '../utils/constants';
import { SectionId } from '../types';
import { cn } from '../utils/cn';

interface NavigationProps {
  isVisible: boolean;
}

export const Navigation = ({ isVisible }: NavigationProps) => {
  const [activeSection, setActiveSection] = useState<SectionId>('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = NAVIGATION_ITEMS.map((item) => ({
        id: item.id,
        element: document.getElementById(item.id),
      }));

      for (const section of sections) {
        if (section.element) {
          const rect = section.element.getBoundingClientRect();
          if (rect.top < window.innerHeight * 0.4 && rect.bottom > window.innerHeight * 0.4) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId: SectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      className={cn(
        'fixed top-0 left-0 right-0 z-40 px-8 py-6 transition-all duration-300',
        isScrolled
          ? 'bg-dark-secondary/80 backdrop-blur-md border-b border-gold-muted/10'
          : 'bg-transparent'
      )}
      initial={{ opacity: 0, y: -20 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
      transition={{ delay: 0.5, duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo / Brand */}
        <motion.a
          href="#home"
          className="font-serif text-xl font-bold text-gold tracking-wider"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          AZ
        </motion.a>

        {/* Navigation Items */}
        <div className="hidden md:flex items-center gap-1">
          {NAVIGATION_ITEMS.map((item) => (
            <motion.button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={cn(
                'px-4 py-2 text-sm font-mono transition-colors duration-200 rounded-sm',
                activeSection === item.id
                  ? 'text-gold bg-gold/10'
                  : 'text-gold-muted hover:text-gold'
              )}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {item.label}
            </motion.button>
          ))}
        </div>

        {/* CTA Button */}
        <motion.button
          onClick={() => handleNavClick('contact')}
          className="ml-4 px-6 py-2 text-sm font-mono text-dark bg-gold hover:bg-gold/90 transition-colors rounded-sm"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Let's Talk
        </motion.button>
      </div>
    </motion.nav>
  );
};
