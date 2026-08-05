'use client';

import { Award, Shield, Heart, Dumbbell, Users, Trophy, Brain, Star } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';

const features = [
  {
    Icon: Award,
    title: 'Elite Coaching',
    description: 'Nationally certified coaches with proven championship track records and a passion for developing every athlete.',
    id: 'feature-elite-coaching',
  },
  {
    Icon: Brain,
    title: 'Character Development',
    description: 'We build leaders, not just athletes. Values-first coaching philosophy that shapes who your child becomes.',
    id: 'feature-character',
  },
  {
    Icon: Shield,
    title: 'Safe & Inclusive',
    description: 'NCCP certified. Zero tolerance policy. All coaches are background checked and parent trusted.',
    id: 'feature-safe',
  },
  {
    Icon: Dumbbell,
    title: 'Professional Training',
    description: 'University-level training methods adapted for every age group. Science-backed performance development.',
    id: 'feature-training',
  },
  {
    Icon: Users,
    title: 'Community First',
    description: '15 years rooted in the Lake Huron community. We are an extended family, not just a club.',
    id: 'feature-community',
  },
  {
    Icon: Trophy,
    title: 'Winning Culture',
    description: 'We\'ve produced provincial podium finishers for 10 consecutive years. Excellence is our standard.',
    id: 'feature-winning',
  },
  {
    Icon: Heart,
    title: 'Athlete Wellness',
    description: 'Mental performance coaching, nutrition guidance, and recovery protocols — holistic development for the whole athlete.',
    id: 'feature-wellness',
  },
  {
    Icon: Star,
    title: 'Leadership Pipeline',
    description: 'Alumni network of 200+ high school and university athletes. We set careers in motion.',
    id: 'feature-leadership',
  },
];

export default function WhyChooseUs() {
  return (
    <section
      id="why"
      style={{ background: 'var(--color-surface-dark)', padding: 'clamp(80px, 10vw, 120px) 0', position: 'relative', overflow: 'hidden' }}
      aria-labelledby="why-heading"
    >
      {/* Topographic contour overlay */}
      <div
        style={{
          position: 'absolute', inset: 0, opacity: 0.03, pointerEvents: 'none',
          backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'400\' height=\'400\'%3E%3Cpath d=\'M200 50 Q350 200 200 350 Q50 200 200 50\' fill=\'none\' stroke=\'%23ffffff\' stroke-width=\'1\'/%3E%3Cpath d=\'M200 80 Q320 200 200 320 Q80 200 200 80\' fill=\'none\' stroke=\'%23ffffff\' stroke-width=\'1\'/%3E%3C/svg%3E")',
          backgroundSize: '400px 400px',
        }}
        aria-hidden="true"
      />

      <div className="section-container">
        {/* Header */}
        <div style={{ maxWidth: '640px', marginBottom: '72px' }}>
          <ScrollReveal variant="fadeUp">
            <span className="text-overline" style={{ display: 'inline-flex', alignItems: 'center', gap: '12px' }}>
              <span style={{ width: '32px', height: '1px', background: 'var(--color-gold)', display: 'inline-block' }} />
              Why Lake Huron
            </span>
          </ScrollReveal>
          <ScrollReveal variant="fadeUp" delay={100}>
            <h2
              id="why-heading"
              className="text-section"
              style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', color: 'white', marginTop: '16px' }}
            >
              Why Lake Huron Defines Elite
            </h2>
          </ScrollReveal>
          <ScrollReveal variant="fadeUp" delay={200}>
            <p className="text-lead" style={{ color: 'rgba(255,255,255,0.55)', marginTop: '20px', lineHeight: 1.7 }}>
              The home of future champions. Eight pillars that separate excellence from ordinary.
            </p>
          </ScrollReveal>
        </div>

        {/* Feature grid */}
        <div
          style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px' }}
          className="features-grid"
          role="list"
        >
          {features.map((feature, i) => (
            <ScrollReveal key={feature.id} variant="scaleIn" delay={i * 80}>
              <div
                id={feature.id}
                className="glass-card"
                role="listitem"
                style={{ padding: '36px 28px', height: '100%' }}
              >
                {/* Icon circle */}
                <div
                  style={{
                    width: '56px', height: '56px', borderRadius: '50%',
                    background: 'linear-gradient(135deg, rgba(185,120,22,0.2), rgba(185,120,22,0.05))',
                    border: '1px solid rgba(185,120,22,0.3)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    marginBottom: '24px',
                  }}
                  aria-hidden="true"
                >
                  <feature.Icon size={24} style={{ color: 'var(--color-gold)' }} />
                </div>

                <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 600, fontSize: '1.25rem', color: 'white', marginBottom: '12px', lineHeight: 1.3 }}>
                  {feature.title}
                </h3>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.9rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.7 }}>
                  {feature.description}
                </p>

                {/* Arrow */}
                <div style={{ marginTop: '20px', color: 'var(--color-gold)', fontSize: '0.8rem', fontFamily: 'Manrope, sans-serif', fontWeight: 600, letterSpacing: '0.05em', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  Learn more →
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 1200px) { .features-grid { grid-template-columns: repeat(3, 1fr) !important; } }
        @media (max-width: 900px) { .features-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 480px) { .features-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
