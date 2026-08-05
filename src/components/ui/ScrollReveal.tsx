'use client';

import { useEffect, useRef, useState, ReactNode } from 'react';

type Variant = 'fadeUp' | 'fadeLeft' | 'fadeRight' | 'scaleIn';

interface ScrollRevealProps {
  children: ReactNode;
  variant?: Variant;
  delay?: number;
  threshold?: number;
  className?: string;
  style?: React.CSSProperties;
}

const getInitialStyle = (variant: Variant): React.CSSProperties => {
  switch (variant) {
    case 'fadeUp': return { opacity: 0, transform: 'translateY(50px)' };
    case 'fadeLeft': return { opacity: 0, transform: 'translateX(-50px)' };
    case 'fadeRight': return { opacity: 0, transform: 'translateX(50px)' };
    case 'scaleIn': return { opacity: 0, transform: 'scale(0.92)' };
    default: return { opacity: 0, transform: 'translateY(50px)' };
  }
};

export default function ScrollReveal({
  children, variant = 'fadeUp', delay = 0, threshold = 0.15, className = '', style = {},
}: ScrollRevealProps) {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) { setVisible(true); return; }
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);

  const initial = getInitialStyle(variant);
  const visibleStyle: React.CSSProperties = { opacity: 1, transform: 'none' };

  return (
    <div
      ref={ref}
      className={className}
      style={{
        ...style,
        ...(visible ? visibleStyle : initial),
        transition: `all 700ms cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}
