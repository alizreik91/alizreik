import { motion } from 'framer-motion';
import { useIntersection } from '../../hooks';
import { CONTACT_INFO } from '../../utils/constants';
import { Mail, Phone, MapPin, Copy, Check } from 'lucide-react';
import { useState } from 'react';

const ContactField = ({ label, value, type = 'text' }: any) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-2">
      <p className="text-xs font-mono text-gold-muted/60 uppercase tracking-widest">{label}</p>
      <div className="flex items-center gap-3">
        <a
          href={
            type === 'email'
              ? `mailto:${value}`
              : type === 'phone'
                ? `tel:${value}`
                : '#'
          }
          className="text-white hover:text-gold transition-colors flex-1"
        >
          {value}
        </a>
        {(type === 'email' || type === 'phone') && (
          <button
            onClick={handleCopy}
            className="p-2 hover:bg-gold-muted/10 rounded transition-colors"
          >
            {copied ? (
              <Check size={16} className="text-gold" />
            ) : (
              <Copy size={16} className="text-gold-muted hover:text-gold" />
            )}
          </button>
        )}
      </div>
    </div>
  );
};

export const Contact = () => {
  const { ref, isVisible } = useIntersection();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate submission delay
    setTimeout(() => {
      setSubmitted(true);
      setIsSubmitting(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitted(false), 4000);
    }, 1500);
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="min-h-screen w-full bg-dark flex items-center justify-center py-20 px-8 relative overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full blur-3xl"
          style={{
            background: 'radial-gradient(circle, rgba(212, 175, 55, 0.1) 0%, transparent 70%)',
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto w-full">
        <motion.h2
          className="font-serif text-4xl md:text-5xl font-bold text-gold mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          LET'S CRAFT SOMETHING DIVINE
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Left Column - Contact Info */}
          <motion.div
            className="lg:col-span-2 space-y-8"
            initial={{ opacity: 0, x: -30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <ContactField label="Email" value={CONTACT_INFO.email} type="email" />
            <ContactField label="Phone" value={CONTACT_INFO.phone} type="phone" />
            <ContactField label="Location" value={CONTACT_INFO.location} />

            {/* Status Indicator */}
            <div className="pt-4 border-t border-gold-muted/10">
              <div className="flex items-center gap-2 mb-3">
                <motion.div
                  className="w-2 h-2 rounded-full bg-gold"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <p className="text-xs font-mono text-gold uppercase">{CONTACT_INFO.status}</p>
              </div>
              <p className="text-xs font-mono text-gold-muted/60">{CONTACT_INFO.bookingStatus}</p>
            </div>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            className="lg:col-span-3 space-y-5"
            initial={{ opacity: 0, x: 30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div>
              <label className="text-xs font-mono text-gold-muted/60 uppercase block mb-2">Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-dark-secondary border border-gold-muted/20 focus:border-gold-muted/40 rounded px-4 py-3 text-white placeholder-gold-muted/40 focus:outline-none transition-colors"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="text-xs font-mono text-gold-muted/60 uppercase block mb-2">Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-dark-secondary border border-gold-muted/20 focus:border-gold-muted/40 rounded px-4 py-3 text-white placeholder-gold-muted/40 focus:outline-none transition-colors"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label className="text-xs font-mono text-gold-muted/60 uppercase block mb-2">Inquiry Subject</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full bg-dark-secondary border border-gold-muted/20 focus:border-gold-muted/40 rounded px-4 py-3 text-white placeholder-gold-muted/40 focus:outline-none transition-colors"
                placeholder="Project subject"
              />
            </div>

            <div>
              <label className="text-xs font-mono text-gold-muted/60 uppercase block mb-2">Your Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full bg-dark-secondary border border-gold-muted/20 focus:border-gold-muted/40 rounded px-4 py-3 text-white placeholder-gold-muted/40 focus:outline-none transition-colors resize-none"
                placeholder="Tell me about your project..."
              />
            </div>

            <motion.button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-6 py-3 bg-gold text-dark font-mono font-bold rounded hover:bg-gold/90 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {isSubmitting ? 'Transmitting...' : 'Send Inquiry'}
            </motion.button>

            {/* Success Alert */}
            <AnimatePresence>
              {submitted && (
                <motion.div
                  className="bg-gold/20 border border-gold/40 rounded p-4 text-center"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                >
                  <p className="text-gold font-mono text-sm">✨ Thank you! Message received.</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.form>
        </div>
      </div>
    </section>
  );
};
