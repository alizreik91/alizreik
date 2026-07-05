import { useEffect, useState } from 'react';
import { useCursorPosition } from '../hooks';

export const CursorTracker = () => {
  const cursor = useCursorPosition();
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    const checkDesktop = () => {
      setIsDesktop(window.matchMedia('(min-width: 1024px)').matches);
    };

    checkDesktop();
    window.addEventListener('resize', checkDesktop);

    return () => window.removeEventListener('resize', checkDesktop);
  }, []);

  if (!isDesktop) return null;

  return (
    <div
      className="pointer-events-none fixed z-30"
      style={{
        left: `${cursor.x}px`,
        top: `${cursor.y}px`,
        transform: 'translate(-50%, -50%)',
      }}
    >
      <div
        className="rounded-full blur-3xl"
        style={{
          width: '150px',
          height: '150px',
          background: 'radial-gradient(circle, rgba(212, 175, 55, 0.03) 0%, transparent 70%)',
          boxShadow: '0 0 80px rgba(212, 175, 55, 0.05)',
        }}
      />
    </div>
  );
};
