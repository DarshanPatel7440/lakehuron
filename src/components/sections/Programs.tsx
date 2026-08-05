'use client';

import { useState } from 'react';
import { Check, Star, Clock, MapPin, ChevronRight } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';

interface Program {
  id: string;
  name: string;
  tagline: string;
  ageRange: string;
  skillLevel: string;
  schedule: string;
  duration: string;
  coach: string;
  spotsLeft: number;
  featured: boolean;
  features: string[];
  price: string;
  ctaLabel: string;
  badgeLabel?: string;
}

const programs: Program[] = [
  {
    id: 'u16-travel',
    name: '1st Travel Teams U16 Girls',
    tagline: 'Competitive travel team',
    ageRange: 'U16 Girls',
    skillLevel: 'Advanced',
    schedule: 'Tryouts: Mid-September',
    duration: 'Location TBD',
    coach: '',
    spotsLeft: 99,
    featured: false,
    badgeLabel: 'Tryouts Open',
    features: [
      'Birthdates: 2011 (extended to Sept 2012)',
      '1st Tryout: Skills Assessment',
      '2nd Tryout: Gameplay assessment',
      '3rd Tryout: Team building (Invites-Only)'
    ],
    price: 'TBD',
    ctaLabel: 'Register Now',
  },
  {
    id: 'u18-travel',
    name: '1st Travel Teams U18 Girls',
    tagline: 'Elite travel team',
    ageRange: 'U18 Girls',
    skillLevel: 'Advanced',
    schedule: 'Tryouts: Mid-September',
    duration: 'Location TBD',
    coach: '',
    spotsLeft: 99,
    featured: false,
    badgeLabel: 'Tryouts Open',
    features: [
      'Birthdates: 2009 (extended to Sept 2010)',
      '1st Tryout: Skills Assessment',
      '2nd Tryout: Gameplay assessment',
      '3rd Tryout: Team building (Invites-Only)'
    ],
    price: 'TBD',
    ctaLabel: 'Register Now',
  },
  {
    id: 'skill-camps',
    name: 'Skill Camps',
    tagline: 'Develop your fundamentals',
    ageRange: 'U10 / U12 / U14',
    skillLevel: 'All Levels',
    schedule: 'Mid-October',
    duration: 'Location TBD',
    coach: '',
    spotsLeft: 99,
    featured: false,
    features: [
      'U10: Date TBD (Mid-October)',
      'U12: Date TBD (Mid-October)',
      'U14: Date TBD (Mid-October)'
    ],
    price: 'TBD',
    ctaLabel: 'Register Now',
  },
  {
    id: 'house-leagues',
    name: 'House Leagues',
    tagline: 'Local league play',
    ageRange: 'U12 / U14 / U16',
    skillLevel: 'Recreational',
    schedule: 'Mid-October',
    duration: 'Location TBD',
    coach: '',
    spotsLeft: 99,
    featured: false,
    features: [
      'U12: Date TBD (Mid-October)',
      'U14: Date TBD (Mid-October)',
      'U16: Date TBD (Mid-October)'
    ],
    price: 'TBD',
    ctaLabel: 'Register Now',
  }
];

export default function Programs() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="programs"
      style={{ background: 'var(--color-ivory)', padding: 'clamp(80px, 10vw, 120px) 0', position: 'relative' }}
      aria-labelledby="programs-heading"
    >
      {/* Subtle paper grain */}
      <div style={{ position: 'absolute', inset: 0, opacity: 0.02, backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.75\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\' opacity=\'1\'/%3E%3C/svg%3E")', pointerEvents: 'none' }} aria-hidden="true" />

      <div className="section-container">
        <div style={{ textAlign: 'center', marginBottom: '72px' }}>
          <ScrollReveal variant="fadeUp">
            <span className="text-overline" style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', justifyContent: 'center' }}>
              <span style={{ width: '32px', height: '1px', background: 'var(--color-gold)', display: 'inline-block' }} />
              Training Programs
              <span style={{ width: '32px', height: '1px', background: 'var(--color-gold)', display: 'inline-block' }} />
            </span>
          </ScrollReveal>
          <ScrollReveal variant="fadeUp" delay={100}>
            <h2
              id="programs-heading"
              className="text-section"
              style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', color: 'var(--color-navy-dark)', marginTop: '16px' }}
            >
              Find Your Path to the Podium
            </h2>
          </ScrollReveal>
          <ScrollReveal variant="fadeUp" delay={200}>
            <p className="text-lead" style={{ color: 'var(--color-graphite)', maxWidth: '560px', margin: '20px auto 0', lineHeight: 1.7 }}>
              From first touch to provincial podium — comprehensive programs for every stage of the journey.
            </p>
          </ScrollReveal>
        </div>

        {/* Program Cards Grid */}
        <div
          style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 'clamp(16px, 2.5vw, 24px)' }}
          className="programs-grid"
          role="list"
          aria-label="Volleyball programs"
        >
          {programs.map((program, i) => (
            <ScrollReveal key={program.id} variant="scaleIn" delay={i * 60} style={{ height: '100%' }}>
              <div
                id={program.id}
                role="listitem"
                onMouseEnter={() => setHoveredId(program.id)}
                onMouseLeave={() => setHoveredId(null)}
                style={{
                  height: '100%',
                  background: program.featured ? 'var(--color-navy)' : 'white',
                  border: program.featured ? '1px solid rgba(185,120,22,0.5)' : '1px solid rgba(8,47,87,0.08)',
                  borderTop: program.featured ? '3px solid var(--color-gold)' : '3px solid var(--color-navy)',
                  borderRadius: '20px',
                  padding: '28px 24px',
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column',
                  cursor: 'pointer',
                  transform: hoveredId === program.id ? 'translateY(-8px)' : 'translateY(0)',
                  boxShadow: hoveredId === program.id
                    ? '0 20px 48px rgba(8,47,87,0.15)'
                    : program.featured ? '0 8px 32px rgba(8,47,87,0.25)' : '0 2px 12px rgba(8,47,87,0.06)',
                  transition: 'all 400ms cubic-bezier(0.16,1,0.3,1)',
                }}
              >
                {/* Badge */}
                {program.badgeLabel && (
                  <div style={{
                    position: 'absolute', top: '-12px', right: '20px',
                    background: program.featured ? 'var(--color-gold)' : 'var(--color-navy)',
                    color: 'white',
                    padding: '4px 12px',
                    borderRadius: '99px',
                    fontSize: '0.7rem',
                    fontFamily: 'Manrope, sans-serif',
                    fontWeight: 700,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                  }}>
                    {program.badgeLabel}
                  </div>
                )}

                <div style={{ flex: 1 }}>
                  {/* Age + level */}
                  <div style={{ display: 'flex', gap: '8px', marginBottom: '12px', flexWrap: 'wrap' }}>
                    <span style={{ fontSize: '0.7rem', fontFamily: 'Manrope, sans-serif', fontWeight: 600, padding: '3px 10px', borderRadius: '99px', background: program.featured ? 'rgba(185,120,22,0.2)' : 'rgba(8,47,87,0.06)', color: program.featured ? 'var(--color-gold)' : 'var(--color-navy)', letterSpacing: '0.05em' }}>
                      {program.ageRange}
                    </span>
                    <span style={{ fontSize: '0.7rem', fontFamily: 'Manrope, sans-serif', fontWeight: 500, padding: '3px 10px', borderRadius: '99px', background: 'rgba(185,120,22,0.1)', color: 'var(--color-gold)', letterSpacing: '0.05em' }}>
                      {program.skillLevel}
                    </span>
                  </div>

                  <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 700, fontSize: '1.4rem', color: program.featured ? 'white' : 'var(--color-navy-dark)', marginBottom: '6px', lineHeight: 1.2 }}>
                    {program.name}
                  </h3>
                  <p style={{ fontFamily: 'Cormorant Garamond, serif', fontStyle: 'italic', fontSize: '0.95rem', color: program.featured ? 'rgba(255,255,255,0.6)' : 'var(--color-mist)', marginBottom: '20px' }}>
                    {program.tagline}
                  </p>

                  {/* Schedule & Coach */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginBottom: '20px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.8rem', color: program.featured ? 'rgba(255,255,255,0.6)' : 'var(--color-graphite)', fontFamily: 'Manrope, sans-serif' }}>
                      <Clock size={12} style={{ color: 'var(--color-gold)', flexShrink: 0 }} /> {program.schedule}
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.8rem', color: program.featured ? 'rgba(255,255,255,0.6)' : 'var(--color-graphite)', fontFamily: 'Manrope, sans-serif' }}>
                      <MapPin size={12} style={{ color: 'var(--color-gold)', flexShrink: 0 }} /> {program.duration}
                    </div>
                  </div>

                  {/* Features */}
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '6px', marginBottom: '20px' }}>
                    {program.features.map((f) => (
                      <li key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.82rem', color: program.featured ? 'rgba(255,255,255,0.7)' : 'var(--color-graphite)', fontFamily: 'Inter, sans-serif', lineHeight: 1.5 }}>
                        <Check size={12} style={{ color: 'var(--color-gold)', flexShrink: 0, marginTop: '3px' }} />
                        {f}
                      </li>
                    ))}
                  </ul>

                  {/* Spots left */}
                  {program.spotsLeft <= 5 && (
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.75rem', color: program.spotsLeft <= 2 ? '#ef4444' : '#f59e0b', fontFamily: 'Manrope, sans-serif', fontWeight: 600, marginBottom: '16px' }}>
                      <Star size={11} fill="currentColor" />
                      Only {program.spotsLeft} spot{program.spotsLeft !== 1 ? 's' : ''} remaining
                    </div>
                  )}
                </div>

                <div style={{ marginTop: 'auto', paddingTop: '16px', borderTop: `1px solid ${program.featured ? 'rgba(255,255,255,0.1)' : 'rgba(8,47,87,0.06)'}` }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                    <span style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 700, fontSize: '1.25rem', color: program.featured ? 'var(--color-gold)' : 'var(--color-navy)' }}>{program.price}</span>
                  </div>
                  <button
                    onClick={scrollToContact}
                    className={program.featured ? 'btn-primary' : 'btn-outline'}
                    style={{
                      width: '100%', justifyContent: 'center', fontSize: '0.8rem', padding: '12px',
                      ...(program.featured ? {} : { color: 'var(--color-navy)', borderColor: 'var(--color-navy)' }),
                    }}
                    aria-label={`${program.ctaLabel} for ${program.name}`}
                  >
                    {program.ctaLabel} <ChevronRight size={14} />
                  </button>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 1200px) { .programs-grid { grid-template-columns: repeat(3, 1fr) !important; } }
        @media (max-width: 1024px) { .programs-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 600px) { .programs-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
