'use client';

import { useEffect, useRef, useState } from 'react';

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [phase, setPhase] = useState(0);
  const [progress, setProgress] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check reduced motion
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) { onComplete(); return; }
    // Check session storage
    if (sessionStorage.getItem('lakehuron_loaded')) { onComplete(); return; }

    const phases = [
      { delay: 300, phase: 1 },   // SVG draw
      { delay: 1100, phase: 2 },  // LAKE HURON text
      { delay: 1700, phase: 3 },  // Ball spin
      { delay: 2000, phase: 4 },  // Progress bar
      { delay: 2600, phase: 5 },  // Tagline
      { delay: 3200, phase: 6 },  // Fade out
    ];
    const timers: ReturnType<typeof setTimeout>[] = [];
    phases.forEach(({ delay, phase: p }) => {
      timers.push(setTimeout(() => setPhase(p), delay));
    });
    // Progress bar fill
    let prog = 0;
    const interval = setInterval(() => {
      prog += 2.5;
      setProgress(Math.min(prog, 100));
      if (prog >= 100) clearInterval(interval);
    }, 35);
    // Complete
    timers.push(setTimeout(() => {
      sessionStorage.setItem('lakehuron_loaded', '1');
      onComplete();
    }, 3700));
    return () => { timers.forEach(clearTimeout); clearInterval(interval); };
  }, [onComplete]);

  return (
    <div
      ref={containerRef}
      style={{
        position: 'fixed', inset: 0, zIndex: 9999,
        background: '#051E38',
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        gap: '32px',
        opacity: phase === 6 ? 0 : 1,
        pointerEvents: phase === 6 ? 'none' : 'auto',
        transition: 'opacity 500ms cubic-bezier(0.16,1,0.3,1)',
      }}
      aria-live="polite"
      aria-label="Loading Lake Huron Volleyball Club website"
    >
      {/* Eagle SVG outline */}
      <div
        style={{
          opacity: phase >= 1 ? 1 : 0,
          transition: 'opacity 600ms ease',
        }}
      >
        <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Shield outline */}
          <path
            d="M60 10 L100 25 L100 65 Q100 95 60 110 Q20 95 20 65 L20 25 Z"
            stroke="#B97816"
            strokeWidth="2"
            fill="none"
            strokeDasharray="300"
            style={{
              strokeDashoffset: phase >= 1 ? 0 : 300,
              transition: 'stroke-dashoffset 1s ease',
            }}
          />
          {/* Eagle wings simplified */}
          <path
            d="M30 50 C40 35 55 40 60 50 C65 40 80 35 90 50"
            stroke="#B97816"
            strokeWidth="1.5"
            fill="none"
            strokeDasharray="120"
            style={{
              strokeDashoffset: phase >= 1 ? 0 : 120,
              transition: 'stroke-dashoffset 1s ease 0.3s',
            }}
          />
          {/* Volleyball circle */}
          <circle
            cx="60"
            cy="70"
            r="12"
            stroke="#B97816"
            strokeWidth="1.5"
            fill="none"
            strokeDasharray="76"
            style={{
              strokeDashoffset: phase >= 3 ? 0 : 76,
              transition: 'stroke-dashoffset 0.8s ease',
              transform: phase >= 3 ? 'rotate(360deg)' : 'rotate(0deg)',
              transformOrigin: '60px 70px',
            }}
          />
        </svg>
      </div>

      {/* LAKE HURON wordmark */}
      <div
        style={{
          display: 'flex', gap: '4px',
          opacity: phase >= 2 ? 1 : 0,
          transform: phase >= 2 ? 'translateY(0)' : 'translateY(16px)',
          transition: 'all 600ms cubic-bezier(0.16,1,0.3,1)',
        }}
      >
        {'LAKE HURON'.split('').map((char, i) => (
          <span
            key={i}
            style={{
              fontFamily: 'Cormorant Garamond, Georgia, serif',
              fontWeight: 700,
              fontSize: '3rem',
              color: 'white',
              letterSpacing: '0.2em',
              opacity: phase >= 2 ? 1 : 0,
              transform: phase >= 2 ? 'translateY(0)' : 'translateY(20px)',
              transition: `all 500ms cubic-bezier(0.16,1,0.3,1) ${i * 80}ms`,
              display: 'inline-block',
            }}
          >
            {char}
          </span>
        ))}
      </div>

      {/* Progress bar */}
      <div
        style={{
          width: '240px',
          height: '1px',
          background: 'rgba(255,255,255,0.1)',
          borderRadius: '1px',
          overflow: 'hidden',
          opacity: phase >= 4 ? 1 : 0,
          transition: 'opacity 400ms',
        }}
        role="progressbar"
        aria-valuenow={Math.round(progress)}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label="Loading progress"
      >
        <div
          style={{
            height: '100%',
            background: 'linear-gradient(90deg, #B97816, #D4960E)',
            width: `${progress}%`,
            transition: 'width 30ms linear',
            borderRadius: '1px',
          }}
        />
      </div>

      {/* Tagline */}
      <p
        style={{
          fontFamily: 'Cormorant Garamond, Georgia, serif',
          fontStyle: 'italic',
          fontSize: '1rem',
          color: 'rgba(255,255,255,0.5)',
          letterSpacing: '0.1em',
          opacity: phase >= 5 ? 1 : 0,
          transform: phase >= 5 ? 'translateY(0)' : 'translateY(10px)',
          transition: 'all 500ms cubic-bezier(0.16,1,0.3,1)',
        }}
        aria-hidden="true"
      >
        Building Champions Since 2009
      </p>
    </div>
  );
}
