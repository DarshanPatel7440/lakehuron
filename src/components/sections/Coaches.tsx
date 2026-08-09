'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ChevronRight, RotateCcw, Award } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';

const coaches = [
  {
    id: 'coach-tirth',
    name: 'Tirth Barot',
    title: 'President, Lake Huron Volleyball Club',
    image: '/tirth-barot.jpg',
    certification: 'OVA Registered Club President',
    achievement: 'Founder & Community Builder',
    bio: 'As President of the Lake Huron Volleyball Club (LHVC), I started this club to meet a clear need in Petrolia, Wyoming, and the wider Lambton County community: our athletes have the talent and drive to excel, but too often they\'ve had to travel long distances—or miss out entirely—to access consistent, high-quality training and a true competitive pathway. After years in the sport as a player, volunteer, and coach, and after seeing the strong demand firsthand through local after school programs and the success of our 2023 girls\' camps, it became clear that our region was ready for a reliable, community-driven club. LHVC was built to provide progressive, structured development, prepare athletes to compete with confidence, and create local opportunities to participate in Ontario Volleyball Association (OVA) competition—supported by strong governance, transparent policies, and a positive culture families can trust. Beyond wins and results, we\'re committed to building leaders by growing coaching and refereeing opportunities right here at home, strengthening volleyball in Lambton County for the long term.',
    achievements: ['LHVC Founder & President', 'OVA Competition Pathway', 'Growing Coaching & Refereeing Locally'],
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
    bio: 'Sarah\'s gift is making every child feel like a champion from day one. Her patient, encouraging style has launched hundreds of careers in the sport. With over a decade of dedicated youth coaching, she creates an environment where growth, confidence, and fun go hand in hand.',
    achievements: ['Youth Specialist Certified', '12 Years Club Experience', 'Child Safety Trained'],
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
    bio: 'Marcus brings international beach court experience to Lake Huron. His technical precision and tactical expertise have produced multiple provincial beach champions. A national competitor himself, he understands what it takes to perform at the highest level.',
    achievements: ['National Beach Competitor', 'Beach Specialist Certified', '3× Provincial Podium'],
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
    bio: 'Priya integrates cutting-edge sports science with volleyball-specific training. Her programs have reduced injury rates by 60% and dramatically improved athlete performance metrics. Her holistic approach ensures every athlete is physically and mentally ready to compete.',
    achievements: ['Certified Strength Specialist', 'Sports Science Degree', 'Nutrition Certified'],
    featured: false,
  },
];

function CoachCard({ coach, index }: { coach: typeof coaches[0]; index: number }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <ScrollReveal variant="fadeUp" delay={index * 100}>
      <div
        id={coach.id}
        role="listitem"
        style={{
          perspective: '1000px',
          height: '540px',
          position: 'relative',
        }}
      >
        <div
          className="coach-card-inner"
          style={{
            position: 'relative',
            width: '100%',
            height: '100%',
            transformStyle: 'preserve-3d',
            transition: 'transform 650ms cubic-bezier(0.16,1,0.3,1)',
            transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
          }}
        >
          {/* ── FRONT FACE ── */}
          <article
            style={{
              position: 'absolute',
              inset: 0,
              borderRadius: '20px',
              overflow: 'hidden',
              background: 'white',
              boxShadow: '0 4px 24px rgba(8,47,87,0.08)',
              backfaceVisibility: 'hidden',
              WebkitBackfaceVisibility: 'hidden',
            }}
            className="coach-card-front"
          >
            {/* Photo */}
            <div style={{ position: 'relative', height: '68%', overflow: 'hidden' }}>
              <Image
                src={coach.image}
                alt={`${coach.name} — ${coach.title} at Lake Huron Volleyball Club`}
                fill
                sizes="(max-width: 900px) 50vw, 25vw"
                style={{ objectFit: 'cover', transition: 'transform 500ms cubic-bezier(0.16,1,0.3,1)' }}
                className="coach-photo"
              />
              {/* Gradient overlay bottom */}
              <div
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: '40%',
                  background: 'linear-gradient(to top, rgba(5,30,56,0.5), transparent)',
                  pointerEvents: 'none',
                }}
                aria-hidden="true"
              />
              {/* Achievement badge */}
              <div
                style={{
                  position: 'absolute',
                  top: '12px',
                  right: '12px',
                  background: 'var(--color-gold)',
                  color: 'var(--color-navy-dark)',
                  fontSize: '0.65rem',
                  fontFamily: 'Manrope, sans-serif',
                  fontWeight: 700,
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  padding: '4px 10px',
                  borderRadius: '20px',
                }}
              >
                {coach.achievement}
              </div>
            </div>

            {/* Card Info */}
            <div style={{ padding: '20px 20px 24px' }}>
              <div style={{ width: '32px', height: '2px', background: 'var(--color-gold)', marginBottom: '12px', borderRadius: '1px' }} aria-hidden="true" />
              <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 600, fontSize: '1.25rem', color: 'var(--color-navy-dark)', marginBottom: '4px' }}>{coach.name}</h3>
              <p style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 600, fontSize: '0.7rem', color: 'var(--color-gold)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '8px' }}>{coach.title}</p>
              <button
                onClick={() => setFlipped(true)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                  marginTop: '14px',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  color: 'var(--color-navy)',
                  fontFamily: 'Manrope, sans-serif',
                  fontWeight: 600,
                  fontSize: '0.8rem',
                  padding: 0,
                  transition: 'color 200ms',
                }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-gold)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--color-navy)')}
                aria-label={`View ${coach.name}'s full profile`}
              >
                View Full Profile <ChevronRight size={14} />
              </button>
            </div>
          </article>

          {/* ── BACK FACE ── */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              borderRadius: '20px',
              overflow: 'hidden',
              background: 'linear-gradient(160deg, var(--color-navy-dark) 0%, #082f57 100%)',
              boxShadow: '0 8px 40px rgba(8,47,87,0.22)',
              backfaceVisibility: 'hidden',
              WebkitBackfaceVisibility: 'hidden',
              transform: 'rotateY(180deg)',
              display: 'flex',
              flexDirection: 'column',
              padding: '28px',
              position: 'absolute',
              inset: 0,
            }}
            aria-hidden={!flipped}
          >
            {/* Gold accent line */}
            <div style={{ width: '40px', height: '3px', background: 'var(--color-gold)', borderRadius: '2px', marginBottom: '18px', flexShrink: 0 }} />

            {/* Name & Title */}
            <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 700, fontSize: '1.35rem', color: 'white', marginBottom: '4px' }}>
              {coach.name}
            </h3>
            <p style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.7rem', fontWeight: 600, color: 'var(--color-gold)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '18px' }}>
              {coach.title}
            </p>

            {/* Bio */}
            <p style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '0.78rem',
              lineHeight: 1.75,
              color: 'rgba(255,255,255,0.82)',
              flex: 1,
              overflowY: 'auto',
              marginBottom: '18px',
              scrollbarWidth: 'thin',
              scrollbarColor: 'rgba(255,255,255,0.1) transparent',
            }}>
              {coach.bio}
            </p>

            {/* Key achievements */}
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '6px', marginBottom: '18px', flexShrink: 0 }}>
              {coach.achievements.map(a => (
                <li key={a} style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-gold)', fontSize: '0.72rem', fontFamily: 'Manrope, sans-serif', fontWeight: 600 }}>
                  <Award size={12} style={{ flexShrink: 0 }} />
                  {a}
                </li>
              ))}
            </ul>

            {/* Flip back button */}
            <button
              onClick={() => setFlipped(false)}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '6px',
                background: 'rgba(255,255,255,0.08)',
                border: '1px solid rgba(255,255,255,0.15)',
                borderRadius: '10px',
                color: 'rgba(255,255,255,0.7)',
                fontFamily: 'Manrope, sans-serif',
                fontSize: '0.75rem',
                fontWeight: 600,
                padding: '10px 16px',
                cursor: 'pointer',
                transition: 'all 200ms',
                flexShrink: 0,
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.14)';
                e.currentTarget.style.color = 'white';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.08)';
                e.currentTarget.style.color = 'rgba(255,255,255,0.7)';
              }}
              aria-label="Back to front"
            >
              <RotateCcw size={13} /> Back
            </button>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}

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
            <CoachCard key={coach.id} coach={coach} index={i} />
          ))}
        </div>
      </div>

      <style>{`
        .coach-card-front:hover .coach-photo { transform: scale(1.04) !important; }
        .coach-card-front:hover { box-shadow: 0 20px 60px rgba(8,47,87,0.14) !important; }
        @media (max-width: 1024px) { .coaches-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 480px) { .coaches-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
