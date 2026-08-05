'use client';

import ScrollReveal from '@/components/ui/ScrollReveal';

const cards = [
  {
    id: 'vision',
    title: 'Our Vision',
    text: 'To ensure student-athletes in the Lambton area have a chance to play club volleyball within the Ontario Volleyball Association structures, providing a safe, caring environment that allows the whole athlete to develop.',
    dark: false,
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="3" stroke="#B8860B" strokeWidth="2" />
        <circle cx="12" cy="12" r="7" stroke="#B8860B" strokeWidth="1.5" strokeDasharray="3 2" />
        <circle cx="12" cy="12" r="10.5" stroke="#B8860B" strokeWidth="1" opacity="0.4" />
      </svg>
    ),
  },
  {
    id: 'mission',
    title: 'Our Mission (Year 1: 2026-27)',
    text: 'To provide every young athlete the opportunity to grow, learn, and thrive through volleyball—fostering a supportive, inclusive environment where players build strong skills and develop character.',
    dark: true,
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 21C12 21 4 15.5 4 9.5C4 7.01 5.99 5 8.5 5C10.24 5 11.91 6 12 6C12.09 6 13.76 5 15.5 5C18.01 5 20 7.01 20 9.5C20 15.5 12 21 12 21Z" stroke="#D4A32A" strokeWidth="1.8" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: 'community',
    title: 'Our Community',
    text: 'We aim to create lifelong players, allowing individuals to go beyond Lambton if they desire, reaching the highest level they are capable of achieving while giving back to the club and community.',
    dark: false,
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="9" cy="7" r="3" stroke="#B8860B" strokeWidth="1.8" />
        <circle cx="15" cy="7" r="3" stroke="#B8860B" strokeWidth="1.8" />
        <path d="M3 19C3 16.24 5.69 14 9 14" stroke="#B8860B" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M21 19C21 16.24 18.31 14 15 14C11.69 14 9 16.24 9 19" stroke="#B8860B" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function WhoWeAre() {
  return (
    <section
      id="about"
      style={{ background: 'var(--color-ivory)', padding: 'clamp(50px, 6vw, 80px) 0 clamp(80px, 10vw, 120px) 0', position: 'relative', overflow: 'hidden' }}
      aria-labelledby="about-heading"
    >
      {/* Topographic background */}
      <div style={{ position: 'absolute', inset: 0, opacity: 0.03, pointerEvents: 'none', backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 40px, rgba(8,47,87,0.5) 40px, rgba(8,47,87,0.5) 41px)', backgroundSize: '100% 40px' }} aria-hidden="true" />

      <div className="section-container">
        {/* Section Header */}
        <ScrollReveal variant="fadeUp">
          <span className="text-overline" style={{ display: 'inline-flex', alignItems: 'center', gap: '12px' }}>
            <span style={{ width: '32px', height: '1px', background: 'var(--color-gold)', display: 'inline-block' }} />
            Our Story
          </span>
        </ScrollReveal>
        <ScrollReveal variant="fadeUp" delay={100}>
          <h2
            id="about-heading"
            className="text-section"
            style={{
              fontFamily: 'Cormorant Garamond, Georgia, serif',
              color: 'var(--color-navy-dark)',
              marginTop: '16px',
              marginBottom: '32px',
              maxWidth: '700px',
            }}
          >
            Rooted in Lake Huron.<br />Rising to Every Challenge.
          </h2>
        </ScrollReveal>

        <ScrollReveal variant="fadeUp" delay={150}>
          <div style={{ marginBottom: '64px', maxWidth: '800px' }}>
            <h3 style={{
              fontFamily: 'Cormorant Garamond, Georgia, serif',
              fontSize: '1.75rem',
              color: 'var(--color-navy-dark)',
              marginBottom: '16px',
              fontWeight: 600,
            }}>
              Building Athletes, Building Culture
            </h3>
            <p style={{
              fontFamily: 'Inter, system-ui, sans-serif',
              fontSize: '1.125rem',
              color: 'var(--color-graphite)',
              lineHeight: 1.8,
              marginBottom: '1rem',
            }}>
              Lake Huron Volleyball Club proudly serves athletes and families in Petrolia &amp; Wyoming and nearby Lambton County communities. Our goal is to nurture skill, confidence, leadership, and a lifelong passion for volleyball in every athlete.
            </p>
            <p style={{
              fontFamily: 'Inter, system-ui, sans-serif',
              fontSize: '1.125rem',
              color: 'var(--color-graphite)',
              lineHeight: 1.8,
            }}>
              We embrace the Ospreys&apos; spirit and motto, &quot;Strike from Above.&quot;
            </p>
          </div>
        </ScrollReveal>

        {/* Three Cards — Side by Side */}
        <div className="cards-row">
          {cards.map((card, i) => (
            <ScrollReveal key={card.id} variant="fadeUp" delay={i * 120}>
              <div
                className={`story-card ${card.dark ? 'story-card--dark' : ''}`}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-6px)';
                  (e.currentTarget as HTMLDivElement).style.boxShadow = card.dark
                    ? '0 20px 50px rgba(8,47,87,0.35)'
                    : '0 16px 40px rgba(8,47,87,0.13)';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLDivElement).style.transform = '';
                  (e.currentTarget as HTMLDivElement).style.boxShadow = card.dark
                    ? '0 8px 32px rgba(8,47,87,0.22)'
                    : '0 4px 24px rgba(8,47,87,0.06)';
                }}
              >
                {/* Gold top stripe */}
                <div className="card-stripe" aria-hidden="true" />
                {/* Icon */}
                <div className={`card-icon ${card.dark ? 'card-icon--dark' : ''}`}>
                  {card.icon}
                </div>
                <h3 className={`card-title ${card.dark ? 'card-title--dark' : ''}`}>{card.title}</h3>
                <p className={`card-text ${card.dark ? 'card-text--dark' : ''}`}>{card.text}</p>
                {/* Glow for dark card */}
                {card.dark && (
                  <div style={{ position: 'absolute', top: '-40px', right: '-40px', width: '180px', height: '180px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(185,120,22,0.15) 0%, transparent 70%)', pointerEvents: 'none' }} aria-hidden="true" />
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>

      <style>{`
        /* ── Cards row: 3 equal columns ── */
        .cards-row {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: clamp(16px, 2.5vw, 28px);
          align-items: stretch;
        }

        /* ── Base card ── */
        .story-card {
          position: relative;
          background: #FFFFFF;
          border: 1px solid rgba(185,120,22,0.15);
          border-radius: 20px;
          padding: 36px 32px 40px;
          box-shadow: 0 4px 24px rgba(8,47,87,0.06);
          overflow: hidden;
          transition: transform 300ms cubic-bezier(0.16,1,0.3,1),
                      box-shadow 300ms cubic-bezier(0.16,1,0.3,1);
          height: 100%;
          box-sizing: border-box;
        }

        /* ── Dark (Mission) card ── */
        .story-card--dark {
          background: linear-gradient(145deg, #082F57 0%, #0A2D5E 100%);
          border: 1px solid rgba(185,120,22,0.20);
        }

        /* ── Gold top stripe ── */
        .card-stripe {
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 3px;
          background: linear-gradient(90deg, #B8860B, rgba(185,120,22,0.25));
          border-radius: 20px 20px 0 0;
        }

        /* ── Icon wrapper ── */
        .card-icon {
          width: 52px;
          height: 52px;
          border-radius: 14px;
          background: rgba(185,120,22,0.08);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 22px;
        }
        .card-icon--dark {
          background: rgba(185,120,22,0.15);
        }

        /* ── Title ── */
        .card-title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-weight: 700;
          font-size: 1.35rem;
          color: var(--color-navy-dark);
          margin: 0 0 14px;
          letter-spacing: -0.01em;
        }
        .card-title--dark { color: #FFFFFF; }

        /* ── Body text ── */
        .card-text {
          font-family: Inter, system-ui, sans-serif;
          font-size: 0.92rem;
          color: var(--color-graphite);
          line-height: 1.82;
          margin: 0;
        }
        .card-text--dark { color: rgba(255,255,255,0.76); }

        /* ── Responsive ── */
        @media (max-width: 1024px) {
          .cards-row { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 600px) {
          .cards-row { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 900px) {
          .cards-row { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 480px) {
          .cards-row { grid-template-columns: 1fr !important; }
          .story-card { padding: 24px 18px 28px !important; }
          .card-title { font-size: 1.1rem !important; }
        }
      `}</style>
    </section>
  );
}
