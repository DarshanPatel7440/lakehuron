'use client';

import Image from 'next/image';
import { Linkedin, Mail, ChevronRight } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';

const coaches = [
  {
    id: 'coach-david',
    name: 'David Reeves',
    title: 'Head Coach & Program Director',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=85',
    years: 22,
    certification: 'NCCP Performance Coach',
    achievement: '6× Provincial Championship Winner',
    bio: 'David has dedicated over two decades to elevating volleyball in Ontario. A former national team contender, his coaching philosophy centers on building elite athletes who lead with integrity.',
    achievements: ['6× Provincial Champion', 'NCCP Performance Level', 'Former National Team Athlete'],
    linkedIn: '#',
    email: 'david@lakehuronvolleyball.ca',
    featured: true,
  },
  {
    id: 'coach-sarah',
    name: 'Sarah Mitchell',
    title: 'Youth Development Coach',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&q=85',
    years: 12,
    certification: 'NCCP Competition Coach',
    achievement: 'Specialist in Ages 8–14',
    bio: 'Sarah\'s gift is making every child feel like a champion from day one. Her patient, encouraging style has launched hundreds of careers in the sport.',
    achievements: ['Youth Specialist Certified', '12 Years Club Experience', 'Child Safety Trained'],
    linkedIn: '#',
    email: 'sarah@lakehuronvolleyball.ca',
    featured: false,
  },
  {
    id: 'coach-marcus',
    name: 'Marcus Torres',
    title: 'Beach Volleyball Coach',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&q=85',
    years: 10,
    certification: 'NCCP + Beach Specialist',
    achievement: 'National Beach Volleyball Competitor',
    bio: 'Marcus brings international beach court experience to Lake Huron. His technical precision and tactical expertise have produced multiple provincial beach champions.',
    achievements: ['National Beach Competitor', 'Beach Specialist Certified', '3× Provincial Podium'],
    linkedIn: '#',
    email: 'marcus@lakehuronvolleyball.ca',
    featured: false,
  },
  {
    id: 'coach-priya',
    name: 'Priya Kapur',
    title: 'Strength & Conditioning',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&q=85',
    years: 8,
    certification: 'CSCS + Sport Science Degree',
    achievement: 'Sports Science Specialist',
    bio: 'Priya integrates cutting-edge sports science with volleyball-specific training. Her programs have reduced injury rates by 60% and dramatically improved athlete performance metrics.',
    achievements: ['Certified Strength Specialist', 'Sports Science Degree', 'Nutrition Certified'],
    linkedIn: '#',
    email: 'priya@lakehuronvolleyball.ca',
    featured: false,
  },
];

export default function Coaches() {
  return (
    <section
      id="coaches"
      style={{ background: 'white', padding: 'clamp(80px, 10vw, 120px) 0', position: 'relative', overflow: 'hidden' }}
      aria-labelledby="coaches-heading"
    >
      {/* Subtle grain */}
      <div style={{ position: 'absolute', inset: 0, opacity: 0.015, backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\'/%3E%3C/svg%3E")', pointerEvents: 'none' }} aria-hidden="true" />

      <div className="section-container">
        <div style={{ textAlign: 'center', marginBottom: '72px' }}>
          <ScrollReveal variant="fadeUp">
            <span className="text-overline" style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', justifyContent: 'center' }}>
              <span style={{ width: '32px', height: '1px', background: 'var(--color-gold)', display: 'inline-block' }} />
              Leadership
              <span style={{ width: '32px', height: '1px', background: 'var(--color-gold)', display: 'inline-block' }} />
            </span>
          </ScrollReveal>
          <ScrollReveal variant="fadeUp" delay={100}>
            <h2
              id="coaches-heading"
              className="text-section"
              style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', color: 'var(--color-navy-dark)', marginTop: '16px' }}
            >
              Coached by Champions.<br />Guided by Champions.
            </h2>
          </ScrollReveal>
        </div>

        <div
          style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '28px' }}
          className="coaches-grid"
          role="list"
        >
          {coaches.map((coach, i) => (
            <ScrollReveal key={coach.id} variant="fadeUp" delay={i * 100}>
              <article
                id={coach.id}
                role="listitem"
                style={{ borderRadius: '20px', overflow: 'hidden', background: 'white', boxShadow: '0 4px 24px rgba(8,47,87,0.08)', position: 'relative', transition: 'all 400ms cubic-bezier(0.16,1,0.3,1)' }}
                className="coach-card"
              >
                {/* Photo */}
                <div style={{ position: 'relative', aspectRatio: '3/4', overflow: 'hidden' }}>
                  <Image
                    src={coach.image}
                    alt={`${coach.name} — ${coach.title} at Lake Huron Volleyball Club`}
                    fill
                    sizes="(max-width: 900px) 50vw, 25vw"
                    style={{ objectFit: 'cover', transition: 'transform 500ms cubic-bezier(0.16,1,0.3,1)' }}
                    className="coach-photo"
                  />
                  {/* Hover overlay */}
                  <div
                    className="coach-overlay"
                    style={{
                      position: 'absolute', inset: 0,
                      background: 'linear-gradient(to top, rgba(5,30,56,0.97) 0%, rgba(5,30,56,0.6) 50%, transparent 100%)',
                      display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
                      padding: '24px',
                      opacity: 0,
                      transition: 'opacity 400ms ease',
                    }}
                  >
                    <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.85rem', fontFamily: 'Inter, sans-serif', lineHeight: 1.6, marginBottom: '16px' }}>
                      {coach.bio}
                    </p>
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '6px', marginBottom: '16px' }}>
                      {coach.achievements.map(a => (
                        <li key={a} style={{ color: 'var(--color-gold)', fontSize: '0.75rem', fontFamily: 'Manrope, sans-serif', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '6px' }}>
                          <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'var(--color-gold)', flexShrink: 0 }} />
                          {a}
                        </li>
                      ))}
                    </ul>
                    <div style={{ display: 'flex', gap: '12px' }}>
                      <a href={coach.linkedIn} aria-label={`${coach.name} on LinkedIn`} style={{ width: '36px', height: '36px', borderRadius: '50%', border: '1px solid rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', transition: 'all 200ms' }}>
                        <Linkedin size={14} />
                      </a>
                      <a href={`mailto:${coach.email}`} aria-label={`Email ${coach.name}`} style={{ width: '36px', height: '36px', borderRadius: '50%', border: '1px solid rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', transition: 'all 200ms' }}>
                        <Mail size={14} />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Card Info */}
                <div style={{ padding: '20px 20px 24px' }}>
                  <div style={{ width: '32px', height: '2px', background: 'var(--color-gold)', marginBottom: '12px', borderRadius: '1px' }} aria-hidden="true" />
                  <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 600, fontSize: '1.25rem', color: 'var(--color-navy-dark)', marginBottom: '4px' }}>{coach.name}</h3>
                  <p style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 600, fontSize: '0.7rem', color: 'var(--color-gold)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '8px' }}>{coach.title}</p>
                  <p style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.75rem', color: 'var(--color-mist)', marginBottom: '4px' }}>{coach.years} years experience</p>
                  <p style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.75rem', color: 'var(--color-graphite)', fontWeight: 500 }}>{coach.achievement}</p>
                  <button
                    style={{ display: 'flex', alignItems: 'center', gap: '4px', marginTop: '16px', background: 'none', border: 'none', cursor: 'pointer', color: 'var(--color-navy)', fontFamily: 'Manrope, sans-serif', fontWeight: 600, fontSize: '0.8rem', padding: 0, transition: 'color 200ms' }}
                    onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-gold)')}
                    onMouseLeave={e => (e.currentTarget.style.color = 'var(--color-navy)')}
                    aria-label={`View ${coach.name}'s full profile`}
                  >
                    View Full Profile <ChevronRight size={14} />
                  </button>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>

      <style>{`
        .coach-card:hover .coach-overlay { opacity: 1 !important; }
        .coach-card:hover .coach-photo { transform: scale(1.04) !important; }
        .coach-card:hover { box-shadow: 0 20px 60px rgba(8,47,87,0.14) !important; transform: translateY(-6px); }
        @media (max-width: 1024px) { .coaches-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 480px) { .coaches-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
