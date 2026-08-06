'use client';

import { UserPlus, ClipboardList, Dumbbell, Trophy, Star, Award } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';

const steps = [
  { num: '01', Icon: UserPlus, title: 'Join', description: 'Register for the program that fits your athlete\'s age and ambition. We make it simple.' },
  { num: '02', Icon: ClipboardList, title: 'Tryouts', description: 'Comprehensive assessments evaluating skills, gameplay, and teamwork to match athletes with the perfect team environment.' },
  { num: '03', Icon: Dumbbell, title: 'Train', description: 'Professional, structured training that challenges, develops, and inspires.' },
  { num: '04', Icon: Trophy, title: 'Compete', description: 'From local leagues to provincial tournaments — you compete with confidence.' },
  { num: '05', Icon: Star, title: 'Lead', description: 'Our athletes become role models — on the court, in school, and in the community.' },
  { num: '06', Icon: Award, title: 'Champion', description: 'More than titles. You leave Lake Huron with the mindset of a champion for life.' },
];

export default function PlayerJourney() {
  return (
    <section
      id="journey"
      style={{ background: 'var(--color-navy)', padding: 'clamp(80px, 10vw, 120px) 0', position: 'relative', overflow: 'hidden' }}
      aria-labelledby="journey-heading"
    >
      {/* Eagle feather watermark */}
      <div style={{ position: 'absolute', right: '-100px', top: '50%', transform: 'translateY(-50%)', opacity: 0.04, pointerEvents: 'none' }} aria-hidden="true">
        <svg width="500" height="500" viewBox="0 0 120 120" fill="none">
          <path d="M60 10 L100 25 L100 65 Q100 95 60 110 Q20 95 20 65 L20 25 Z" stroke="white" strokeWidth="1" fill="none" />
          <path d="M30 50 C40 35 55 40 60 50 C65 40 80 35 90 50" stroke="white" strokeWidth="0.8" fill="none" />
        </svg>
      </div>

      <div className="section-container">
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <ScrollReveal variant="fadeUp">
            <span className="text-overline" style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', justifyContent: 'center' }}>
              <span style={{ width: '32px', height: '1px', background: 'var(--color-gold)', display: 'inline-block' }} />
              The Lake Huron Pathway
              <span style={{ width: '32px', height: '1px', background: 'var(--color-gold)', display: 'inline-block' }} />
            </span>
          </ScrollReveal>
          <ScrollReveal variant="fadeUp" delay={100}>
            <h2
              id="journey-heading"
              className="text-section"
              style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', color: 'white', marginTop: '16px', maxWidth: '700px', margin: '16px auto 0' }}
            >
              From First Touch to Final Whistle — We&apos;re With You Every Step
            </h2>
          </ScrollReveal>
        </div>

        {/* Steps grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: '0', position: 'relative' }} className="journey-steps">
          {/* Connector line */}
          <div style={{ position: 'absolute', top: '48px', left: '12%', right: '12%', height: '1px', background: 'linear-gradient(90deg, transparent, rgba(185,120,22,0.4) 10%, rgba(185,120,22,0.4) 90%, transparent)', pointerEvents: 'none', zIndex: 0 }} className="journey-connector" aria-hidden="true" />

          {steps.map((step, i) => (
            <ScrollReveal key={step.num} variant="fadeUp" delay={i * 100}>
              <div style={{ textAlign: 'center', padding: '0 12px', position: 'relative', zIndex: 1 }}>
                {/* Number circle */}
                <div style={{
                  width: '96px', height: '96px', borderRadius: '50%',
                  background: 'var(--color-navy-dark)',
                  border: '2px solid rgba(185,120,22,0.5)',
                  display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                  margin: '0 auto 24px',
                  transition: 'all 400ms cubic-bezier(0.16,1,0.3,1)',
                  position: 'relative',
                }}
                  className="journey-node"
                >
                  <span style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 800, fontSize: '0.65rem', color: 'var(--color-gold)', letterSpacing: '0.1em' }}>{step.num}</span>
                  <step.Icon size={24} style={{ color: 'rgba(255,255,255,0.8)', marginTop: '4px' }} />
                </div>

                <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 600, fontSize: '1.4rem', color: 'white', marginBottom: '12px', lineHeight: 1.2 }}>
                  {step.title}
                </h3>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.7 }}>
                  {step.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>

      <style>{`
        .journey-node:hover {
          background: rgba(185,120,22,0.1) !important;
          border-color: var(--color-gold) !important;
          box-shadow: 0 0 24px rgba(185,120,22,0.2) !important;
        }
        @media (max-width: 1024px) { 
          .journey-steps { grid-template-columns: repeat(3, 1fr) !important; gap: 32px !important; }
          .journey-connector { display: none !important; }
        }
        @media (max-width: 768px) { 
          .journey-steps { grid-template-columns: repeat(2, 1fr) !important; gap: 24px !important; } 
          .journey-connector { display: none !important; }
        }
        @media (max-width: 480px) { 
          .journey-steps { grid-template-columns: repeat(2, 1fr) !important; gap: 16px !important; } 
        }
        @media (max-width: 375px) { 
          .journey-steps { grid-template-columns: 1fr !important; } 
        }
      `}</style>
    </section>
  );
}
