'use client';

import { useEffect, useRef, useState } from 'react';

interface AnimatedCounterProps {
  end: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  label: string;
}

export default function AnimatedCounter({ end, suffix = '', prefix = '', duration = 2000, label }: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const startedRef = useRef(false);

  useEffect(() => {
    let timer: ReturnType<typeof setInterval> | null = null;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !startedRef.current) {
          startedRef.current = true;
          let start = 0;
          const step = end / (duration / 16);
          timer = setInterval(() => {
            start += step;
            if (start >= end) {
              setCount(end);
              if (timer) clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, 16);
        }
      },
      { threshold: 0.4 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => {
      observer.disconnect();
      if (timer) clearInterval(timer);
    };
  }, [end, duration]);

  return (
    <div ref={ref} style={{ textAlign: 'center' }}>
      <div className="counter-value" aria-label={`${prefix}${end}${suffix}`}>
        {prefix}{count}{suffix}
      </div>
      <div className="counter-label" style={{ color: 'rgba(255,255,255,0.6)', marginTop: '8px' }}>
        {label}
      </div>
    </div>
  );
}
