import React, { useState, useEffect, useRef } from 'react';

interface AnimatedCounterProps {
  target: string;
  className?: string;
}

export const AnimatedCounter: React.FC<AnimatedCounterProps> = ({ target, className }) => {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLSpanElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  const numericTarget = parseInt(target.replace(/\D/g, ''), 10) || 0;
  const prefix = target.startsWith('$') ? '$' : '';
  const suffix = target.replace(/[0-9$-]/g, '');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let startTimestamp: number | null = null;
          const duration = 1800; // 1.8 seconds for smooth animation

          const step = (timestamp: number) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            
            // Cubic ease-out
            const progressValue = 1 - Math.pow(1 - progress, 3);
            
            setCount(Math.floor(progressValue * numericTarget));
            
            if (progress < 1) {
              window.requestAnimationFrame(step);
            } else {
              setCount(numericTarget);
            }
          };

          window.requestAnimationFrame(step);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [numericTarget, hasAnimated]);

  return (
    <span ref={elementRef} className={className}>
      {prefix}
      {hasAnimated ? count.toLocaleString() : '0'}
      {suffix}
    </span>
  );
};
