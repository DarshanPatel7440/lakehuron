'use client';

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import Image from 'next/image';
import ScrollReveal from '@/components/ui/ScrollReveal';

const testimonials = [
  {
    id: 'test-1',
    quote: "Lake Huron didn't just make my daughter a better volleyball player — they made her a better person. The coaches here build character first and athletic skill second. That's rare, and priceless.",
    name: 'Jennifer Walsh',
    role: 'Parent of Elite Performance Athlete',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=85',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?w=900&q=85',
  },
  {
    id: 'test-2',
    quote: "I joined Lake Huron at age 14 with zero experience. Three years later, I earned a volleyball scholarship to university. The coaching staff believed in me before I believed in myself.",
    name: 'Marcus Reid',
    role: 'Alumni · University Scholarship Recipient',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=85',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1547941126-3d5322b218b0?w=900&q=85',
  },
  {
    id: 'test-3',
    quote: "The community here is unlike anything we've experienced in youth sports. Every parent, every coach, every athlete — they genuinely care about each other. This is what sport should be.",
    name: 'Daniel & Maria Santos',
    role: 'Parents of two Lake Huron athletes',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=85',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=900&q=85',
  },
];

export default function SuccessStories() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => {
      setCurrent(c => (c + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [paused]);

  const prev = () => { setCurrent(c => (c - 1 + testimonials.length) % testimonials.length); };
  const next = () => { setCurrent(c => (c + 1) % testimonials.length); };

  const t = testimonials[current];

  return (
    <section
      id="stories"
      style={{ background: 'var(--color-navy)', padding: 'clamp(80px, 10vw, 120px) 0', position: 'relative', overflow: 'hidden' }}
      aria-labelledby="stories-heading"
    >
      {/* Background gradient */}
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(5,30,56,0.9) 0%, rgba(8,47,87,0.7) 100%)', pointerEvents: 'none' }} aria-hidden="true" />

      <div className="section-container" style={{ position: 'relative' }}>
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <ScrollReveal variant="fadeUp">
            <span className="text-overline" style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', justifyContent: 'center' }}>
              <span style={{ width: '32px', height: '1px', background: 'var(--color-gold)', display: 'inline-block' }} />
              Parent Voices
              <span style={{ width: '32px', height: '1px', background: 'var(--color-gold)', display: 'inline-block' }} />
            </span>
          </ScrollReveal>
          <ScrollReveal variant="fadeUp" delay={100}>
            <h2 id="stories-heading" className="text-section" style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', color: 'white', marginTop: '16px', maxWidth: '700px', margin: '16px auto 0' }}>
              Stories That Inspire Every Parent.<br />Fuel Every Athlete.
            </h2>
          </ScrollReveal>
        </div>

        {/* Main Testimonial Carousel */}
        <ScrollReveal variant="scaleIn">
          <div
            style={{ display: 'grid', gridTemplateColumns: '6fr 4fr', gap: '48px', alignItems: 'center' }}
            className="testimonial-layout"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            aria-live="polite"
          >
            {/* Left: Image */}
            <div style={{ position: 'relative', borderRadius: '20px', overflow: 'hidden', aspectRatio: '16/10' }}>
              <Image
                src={t.image}
                alt={`Testimonial from ${t.name}`}
                fill
                sizes="(max-width: 900px) 100vw, 60vw"
                style={{ objectFit: 'cover', transition: 'all 600ms ease' }}
              />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, transparent 60%, rgba(8,47,87,0.6))' }} aria-hidden="true" />
            </div>

            {/* Right: Quote */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <Quote size={48} style={{ color: 'var(--color-gold)', opacity: 0.6 }} aria-hidden="true" />
              <blockquote
                style={{
                  fontFamily: 'Cormorant Garamond, serif',
                  fontStyle: 'italic',
                  fontSize: 'clamp(1.1rem, 2vw, 1.4rem)',
                  color: 'rgba(255,255,255,0.9)',
                  lineHeight: 1.7,
                  margin: 0,
                }}
              >
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <div style={{ width: '48px', height: '1px', background: 'var(--color-gold)' }} aria-hidden="true" />
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <Image src={t.avatar} alt={t.name} width={44} height={44} style={{ borderRadius: '50%', objectFit: 'cover', border: '2px solid var(--color-gold)' }} />
                <div>
                  <div style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 700, fontSize: '0.9rem', color: 'white' }}>{t.name}</div>
                  <div style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.75rem', color: 'var(--color-gold)' }}>{t.role}</div>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '4px' }} role="img" aria-label={`${t.rating} out of 5 stars`}>
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} size={14} fill="var(--color-gold)" style={{ color: 'var(--color-gold)' }} />
                ))}
              </div>

              {/* Controls */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginTop: '8px' }}>
                <button onClick={prev} aria-label="Previous testimonial" style={{ width: '44px', height: '44px', borderRadius: '50%', border: '1px solid rgba(255,255,255,0.2)', background: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', cursor: 'pointer', transition: 'all 200ms' }}>
                  <ChevronLeft size={18} />
                </button>
                <div style={{ display: 'flex', gap: '8px' }} role="tablist" aria-label="Testimonial navigation">
                  {testimonials.map((_, i) => (
                    <button key={i} role="tab" aria-selected={i === current} aria-label={`Testimonial ${i + 1} of ${testimonials.length}`}
                      onClick={() => setCurrent(i)}
                      style={{ width: i === current ? '24px' : '8px', height: '8px', borderRadius: '4px', background: i === current ? 'var(--color-gold)' : 'rgba(255,255,255,0.2)', border: 'none', cursor: 'pointer', transition: 'all 300ms ease', padding: 0 }}
                    />
                  ))}
                </div>
                <button onClick={next} aria-label="Next testimonial" style={{ width: '44px', height: '44px', borderRadius: '50%', border: '1px solid rgba(255,255,255,0.2)', background: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', cursor: 'pointer', transition: 'all 200ms' }}>
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .testimonial-layout { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
