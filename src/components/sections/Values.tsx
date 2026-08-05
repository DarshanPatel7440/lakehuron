'use client';

import { CheckSquare, Star, Users, Compass, Sprout, Shield } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';

const values = [
  { Icon: CheckSquare, name: 'Accountable', definition: 'We take ownership of our actions on and off the court, ensuring reliability and trust in everything we do.' },
  { Icon: Star, name: 'Excellence', definition: 'Good enough is never good enough. We pursue the highest standards in athlete development and club operations.' },
  { Icon: Users, name: 'Collaborative', definition: 'Success is a team effort. We work together with athletes, parents, and coaches to build a strong community.' },
  { Icon: Compass, name: 'Intentional', definition: 'Every drill, every decision, and every interaction has a purpose. We act with clear goals in mind.' },
  { Icon: Sprout, name: 'Sustainable', definition: 'We build for the future, ensuring long-term growth and stability for our club and our athletes.' },
  { Icon: Shield, name: 'Integrity & Respect', definition: 'We do the right thing and treat everyone with dignity. Respect for the game, opponents, and each other is non-negotiable.' },
];

export default function Values() {
  return (
    <section
      id="values"
      style={{ background: 'var(--color-surface-dark)', padding: 'clamp(80px, 10vw, 120px) 0', position: 'relative', overflow: 'hidden' }}
      aria-labelledby="values-heading"
    >
      {/* Grain overlay */}
      <div style={{ position: 'absolute', inset: 0, opacity: 0.05, backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\'/%3E%3C/svg%3E")', pointerEvents: 'none' }} aria-hidden="true" />

      <div className="section-container">
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <ScrollReveal variant="fadeUp">
            <span className="text-overline" style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', justifyContent: 'center' }}>
              <span style={{ width: '32px', height: '1px', background: 'var(--color-gold)', display: 'inline-block' }} />
              Our Core Values
              <span style={{ width: '32px', height: '1px', background: 'var(--color-gold)', display: 'inline-block' }} />
            </span>
          </ScrollReveal>
          <ScrollReveal variant="fadeUp" delay={100}>
            <h2
              id="values-heading"
              className="text-section"
              style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', color: 'white', marginTop: '16px' }}
            >
              What We Stand For
            </h2>
          </ScrollReveal>
          <ScrollReveal variant="fadeUp" delay={200}>
            <p style={{ color: 'rgba(255,255,255,0.5)', marginTop: '16px', fontSize: '1rem', maxWidth: '600px', margin: '16px auto 0', lineHeight: 1.7 }}>
              Lake Huron Volleyball Club follows the Ontario Volleyball Association core values as our guiding principles for everything we do.
            </p>
          </ScrollReveal>
        </div>

        <div
          style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}
          className="values-grid"
          role="list"
        >
          {values.map((value, i) => (
            <ScrollReveal key={value.name} variant="scaleIn" delay={i * 100}>
              <div
                role="listitem"
                style={{ textAlign: 'center', padding: '48px 32px', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.06)', transition: 'all 400ms cubic-bezier(0.16,1,0.3,1)', cursor: 'default' }}
                className="value-card"
              >
                {/* Icon with glow */}
                <div
                  style={{
                    width: '80px', height: '80px', borderRadius: '50%',
                    background: 'linear-gradient(135deg, rgba(185,120,22,0.15), rgba(185,120,22,0.05))',
                    border: '1px solid rgba(185,120,22,0.25)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    margin: '0 auto 28px',
                    transition: 'filter 600ms ease, box-shadow 400ms ease',
                  }}
                  aria-hidden="true"
                  className="value-icon"
                >
                  <value.Icon size={36} style={{ color: 'var(--color-gold)' }} />
                </div>

                <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 700, fontSize: '1.75rem', color: 'white', marginBottom: '16px', letterSpacing: '-0.02em' }}>
                  {value.name}
                </h3>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.9rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.8 }}>
                  {value.definition}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      <style>{`
        .value-card:hover .value-icon {
          filter: drop-shadow(0 0 16px rgba(185,120,22,0.5)) !important;
          box-shadow: 0 0 32px rgba(185,120,22,0.2) !important;
        }
        .value-card:hover {
          background: rgba(185,120,22,0.04) !important;
          border-color: rgba(185,120,22,0.15) !important;
        }
        @media (max-width: 900px) { .values-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 480px) { .values-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
