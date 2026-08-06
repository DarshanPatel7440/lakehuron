'use client';

import { CalendarCheck, Trophy, UserCheck, Bell, Tent, ExternalLink, FileText, BookOpen } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';

const expectations = [
  {
    id: 'exp-practices',
    Icon: CalendarCheck,
    text: 'Regular team practices during the club season',
  },
  {
    id: 'exp-competition',
    Icon: Trophy,
    text: 'Competition opportunities based on team level and schedule',
  },
  {
    id: 'exp-coaches',
    Icon: UserCheck,
    text: 'Qualified coaches and structured training plans',
  },
  {
    id: 'exp-communication',
    Icon: Bell,
    text: 'Clear communication regarding schedules, tournaments, and expectations',
  },
  {
    id: 'exp-camps',
    Icon: Tent,
    text: 'Local camps, clinics, and house league opportunities',
  },
];

export default function ProgramOverview() {
  return (
    <section
      id="program-overview"
      style={{
        background: 'var(--color-navy-dark)',
        padding: 'clamp(80px, 10vw, 120px) 0',
        position: 'relative',
        overflow: 'hidden',
      }}
      aria-labelledby="program-overview-heading"
    >
      {/* Animated gradient orbs */}
      <div
        style={{
          position: 'absolute',
          top: '-15%',
          right: '-10%',
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(185,120,22,0.08) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
        aria-hidden="true"
      />
      <div
        style={{
          position: 'absolute',
          bottom: '-20%',
          left: '-10%',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(8,47,87,0.4) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
        aria-hidden="true"
      />

      {/* Subtle grid texture */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.025,
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
          pointerEvents: 'none',
        }}
        aria-hidden="true"
      />

      <div className="section-container" style={{ position: 'relative' }}>
        {/* ── Header ── */}
        <div style={{ maxWidth: '680px', marginBottom: '64px' }}>
          <ScrollReveal variant="fadeUp">
            <span
              className="text-overline"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '12px' }}
            >
              <span
                style={{
                  width: '32px',
                  height: '1px',
                  background: 'var(--color-gold)',
                  display: 'inline-block',
                }}
              />
              Program Overview
            </span>
          </ScrollReveal>

          <ScrollReveal variant="fadeUp" delay={100}>
            <h2
              id="program-overview-heading"
              className="text-section"
              style={{
                fontFamily: 'Cormorant Garamond, Georgia, serif',
                color: 'white',
                marginTop: '16px',
                lineHeight: 1.2,
              }}
            >
              Everything You Need to Know
            </h2>
          </ScrollReveal>

          <ScrollReveal variant="fadeUp" delay={200}>
            <p
              className="text-lead"
              style={{
                color: 'rgba(255,255,255,0.55)',
                marginTop: '20px',
                lineHeight: 1.8,
              }}
            >
              LHVC offers training and team opportunities to enhance technical skills, tactical
              understanding, teamwork, and self-confidence. Programs may vary by age group and
              season.
            </p>
          </ScrollReveal>
        </div>

        {/* ── Main content grid ── */}
        <div
          className="overview-main-grid"
          style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(28px, 4vw, 56px)', alignItems: 'start' }}
        >
          {/* Left: Expectations list */}
          <ScrollReveal variant="fadeUp" delay={100}>
            <div
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(185,120,22,0.18)',
                borderRadius: '24px',
                padding: 'clamp(28px, 4vw, 44px)',
                backdropFilter: 'blur(12px)',
              }}
            >
              <p
                style={{
                  fontFamily: 'Cormorant Garamond, serif',
                  fontStyle: 'italic',
                  fontSize: '1.1rem',
                  color: 'var(--color-gold)',
                  marginBottom: '28px',
                  lineHeight: 1.5,
                }}
              >
                In general, families can expect:
              </p>

              <ul
                style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0' }}
                role="list"
              >
                {expectations.map((item, i) => (
                  <li
                    key={item.id}
                    id={item.id}
                    role="listitem"
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '16px',
                      padding: '18px 0',
                      borderBottom:
                        i < expectations.length - 1
                          ? '1px solid rgba(255,255,255,0.06)'
                          : 'none',
                    }}
                  >
                    {/* Icon badge */}
                    <div
                      style={{
                        flexShrink: 0,
                        width: '40px',
                        height: '40px',
                        borderRadius: '10px',
                        background: 'linear-gradient(135deg, rgba(185,120,22,0.22), rgba(185,120,22,0.06))',
                        border: '1px solid rgba(185,120,22,0.28)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                      aria-hidden="true"
                    >
                      <item.Icon size={18} style={{ color: 'var(--color-gold)' }} />
                    </div>

                    <span
                      style={{
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '0.92rem',
                        color: 'rgba(255,255,255,0.75)',
                        lineHeight: 1.65,
                        paddingTop: '10px',
                      }}
                    >
                      {item.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          {/* Right: Disclosure note + document buttons */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
            <ScrollReveal variant="fadeUp" delay={200}>
              {/* Info note card */}
              <div
                style={{
                  background: 'rgba(185,120,22,0.07)',
                  border: '1px solid rgba(185,120,22,0.22)',
                  borderLeft: '4px solid var(--color-gold)',
                  borderRadius: '16px',
                  padding: '28px 32px',
                }}
              >
                <p
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '0.93rem',
                    color: 'rgba(255,255,255,0.7)',
                    lineHeight: 1.85,
                    margin: 0,
                  }}
                >
                  Program details — such as age groups, practice frequency, tournaments, and fees
                  — will be shared{' '}
                  <span style={{ color: 'var(--color-gold)', fontWeight: 600 }}>
                    before registration and commitment
                  </span>
                  . We believe in full transparency so every family can make a confident, informed
                  decision.
                </p>
              </div>
            </ScrollReveal>

            {/* Document buttons */}
            <ScrollReveal variant="fadeUp" delay={300}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <p
                  style={{
                    fontFamily: 'Manrope, sans-serif',
                    fontSize: '0.78rem',
                    fontWeight: 700,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: 'rgba(255,255,255,0.35)',
                    marginBottom: '4px',
                  }}
                >
                  Official Documents
                </p>

                {/* Button 1 — Parent Handbook */}
                <a
                  id="btn-parent-handbook"
                  href="https://docs.google.com/document/d/1NrKXWOrTthCCvT0AT0sWd1X_KGSJCIgcpykr15V2_F0/edit?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '16px',
                    background: 'var(--color-gold)',
                    color: 'var(--color-navy-dark)',
                    borderRadius: '14px',
                    padding: '18px 24px',
                    textDecoration: 'none',
                    fontFamily: 'Manrope, sans-serif',
                    fontWeight: 700,
                    fontSize: '0.9rem',
                    letterSpacing: '0.02em',
                    transition: 'all 320ms cubic-bezier(0.16,1,0.3,1)',
                    boxShadow: '0 4px 20px rgba(185,120,22,0.3)',
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-3px)';
                    (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 8px 32px rgba(185,120,22,0.45)';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(0)';
                    (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 4px 20px rgba(185,120,22,0.3)';
                  }}
                  aria-label="Access the full parent handbook (opens in new tab)"
                >
                  <div
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '10px',
                      background: 'rgba(0,0,0,0.15)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <BookOpen size={20} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: '0.78rem', opacity: 0.7, marginBottom: '2px', fontWeight: 600 }}>
                      Access Full Document
                    </div>
                    Parent Handbook
                  </div>
                  <ExternalLink size={16} style={{ opacity: 0.7 }} />
                </a>

                {/* Button 2 — Club By-Laws */}
                <a
                  id="btn-club-bylaws"
                  href="https://drive.google.com/file/d/1K7l718Lve_eb9hZt14f3HuoQiefWqcBU/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '16px',
                    background: 'transparent',
                    color: 'white',
                    border: '1px solid rgba(185,120,22,0.4)',
                    borderRadius: '14px',
                    padding: '18px 24px',
                    textDecoration: 'none',
                    fontFamily: 'Manrope, sans-serif',
                    fontWeight: 700,
                    fontSize: '0.9rem',
                    letterSpacing: '0.02em',
                    transition: 'all 320ms cubic-bezier(0.16,1,0.3,1)',
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-3px)';
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(185,120,22,0.8)';
                    (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(185,120,22,0.08)';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(0)';
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(185,120,22,0.4)';
                    (e.currentTarget as HTMLAnchorElement).style.background = 'transparent';
                  }}
                  aria-label="Access the club by-laws (opens in new tab)"
                >
                  <div
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '10px',
                      background: 'rgba(185,120,22,0.12)',
                      border: '1px solid rgba(185,120,22,0.3)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <FileText size={20} style={{ color: 'var(--color-gold)' }} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <div
                      style={{
                        fontSize: '0.78rem',
                        color: 'rgba(255,255,255,0.45)',
                        marginBottom: '2px',
                        fontWeight: 600,
                      }}
                    >
                      Access Full Document
                    </div>
                    Club By-Laws
                  </div>
                  <ExternalLink size={16} style={{ color: 'var(--color-gold)', opacity: 0.7 }} />
                </a>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>

      {/* Responsive styles */}
      <style>{`
        @media (max-width: 860px) {
          .overview-main-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
