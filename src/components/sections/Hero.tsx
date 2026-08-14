'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { ArrowRight, ChevronDown } from 'lucide-react';

export default function Hero() {
  const [loaded, setLoaded] = useState(false);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  const scrollTo = (href: string) =>
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });

  const fade = (delay: number, dur = 650) =>
    `opacity ${dur}ms ease-out ${delay}ms, transform ${dur}ms ease-out ${delay}ms`;

  return (
    <section
      ref={heroRef}
      id="hero"
      aria-label="Lake Huron Volleyball Club hero section"
      style={{
        position: 'relative',
        minHeight: '85vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        /* ── Warm off-white luxury base ── */
        background: '#FAF8F4',
      }}
    >

      {/* ══════════════════════════════════════════════
          LAYER 1 — PAPER GRAIN TEXTURE (SVG filter)
      ══════════════════════════════════════════════ */}
      <svg
        aria-hidden="true"
        style={{
          position: 'absolute', inset: 0, width: '100%', height: '100%',
          opacity: 0.035, pointerEvents: 'none', zIndex: 0,
        }}
      >
        <filter id="hero-grain">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.72"
            numOctaves="4"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#hero-grain)" />
      </svg>

      {/* ══════════════════════════════════════════════
          LAYER 2 — GEOMETRIC DOT PATTERN
      ══════════════════════════════════════════════ */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute', inset: 0,
          backgroundImage: `radial-gradient(circle, rgba(10,45,94,0.18) 1px, transparent 1px)`,
          backgroundSize: '28px 28px',
          opacity: 0.022,
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      {/* ══════════════════════════════════════════════
          LAYER 3 — AMBIENT RADIAL GLOWS
      ══════════════════════════════════════════════ */}
      {/* Left-centre warm cream glow */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          left: '-8%', top: '20%',
          width: '600px', height: '600px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(212,175,55,0.09) 0%, transparent 70%)',
          filter: 'blur(80px)',
          pointerEvents: 'none', zIndex: 0,
        }}
      />
      {/* Right-top blue glow */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          right: '-5%', top: '-10%',
          width: '700px', height: '700px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(10,45,94,0.045) 0%, transparent 65%)',
          filter: 'blur(100px)',
          pointerEvents: 'none', zIndex: 0,
        }}
      />
      {/* Bottom-centre warm glow */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          bottom: '-15%', left: '30%',
          width: '800px', height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(ellipse, rgba(212,175,55,0.055) 0%, transparent 70%)',
          filter: 'blur(120px)',
          pointerEvents: 'none', zIndex: 0,
        }}
      />

      {/* ══════════════════════════════════════════════
          LAYER 4 — DECORATIVE ABSTRACT SHAPES
      ══════════════════════════════════════════════ */}
      {/* Faint circle top-right */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '-80px', right: '15%',
          width: '380px', height: '380px',
          borderRadius: '50%',
          border: '1px solid rgba(10,45,94,0.055)',
          pointerEvents: 'none', zIndex: 0,
        }}
      />
      {/* Smaller circle inside it */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '0px', right: '22%',
          width: '200px', height: '200px',
          borderRadius: '50%',
          border: '1px solid rgba(184,134,11,0.07)',
          pointerEvents: 'none', zIndex: 0,
        }}
      />
      {/* Bottom-left arc */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          bottom: '-120px', left: '-60px',
          width: '420px', height: '420px',
          borderRadius: '50%',
          border: '1px solid rgba(10,45,94,0.04)',
          pointerEvents: 'none', zIndex: 0,
        }}
      />
      {/* Horizontal rule accent */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '50%', left: 0,
          width: '100%', height: '1px',
          background: 'linear-gradient(90deg, transparent 0%, rgba(10,45,94,0.04) 20%, rgba(184,134,11,0.06) 50%, rgba(10,45,94,0.04) 80%, transparent 100%)',
          pointerEvents: 'none', zIndex: 0,
        }}
      />

      {/* ══════════════════════════════════════════════
          MAIN CONTENT — TWO COLUMN
      ══════════════════════════════════════════════ */}
      <div
        className="hero-inner"
        style={{
          position: 'relative',
          zIndex: 2,
          width: '100%',
          maxWidth: '1400px',
          margin: '0 auto',
          padding: 'clamp(100px, 15vh, 160px) clamp(16px, 5vw, 80px) clamp(40px, 5vh, 80px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 'clamp(32px, 5vw, 72px)',
        }}
      >

        {/* ── LEFT: Editorial Content ─────────────────── */}
        <div
          className="hero-content"
          style={{ flex: '1 1 52%', maxWidth: '620px' }}
        >

          {/* Location pill */}
          <div
            style={{
              opacity: loaded ? 1 : 0,
              transform: loaded ? 'translateY(0)' : 'translateY(16px)',
              transition: fade(80, 550),
              marginBottom: '28px',
            }}
          >
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                fontFamily: 'Manrope, system-ui, sans-serif',
                fontWeight: 700,
                fontSize: '0.68rem',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: '#B8860B',
              }}
            >
              {/* Left tick mark */}
              <span
                style={{
                  display: 'inline-block',
                  width: '24px',
                  height: '1.5px',
                  background: 'linear-gradient(90deg, #B8860B, rgba(184,134,11,0.3))',
                  borderRadius: '2px',
                }}
              />
              Established 2026: Petrolia & Wyoming, Ontario
            </span>
          </div>

          {/* Main Heading */}
          <h1
            style={{
              fontFamily: '"Cormorant Garamond", Georgia, serif',
              fontWeight: 700,
              fontSize: 'clamp(3rem, 5.5vw, 5.25rem)',
              lineHeight: 1.06,
              margin: '0 0 32px 0',
              letterSpacing: '-0.025em',
            }}
          >
            <span
              style={{
                display: 'block',
                color: '#0A2D5E',
                opacity: loaded ? 1 : 0,
                transform: loaded ? 'translateY(0)' : 'translateY(28px)',
                transition: fade(200, 700),
              }}
            >
              Committed
            </span>
            <span
              style={{
                display: 'block',
                opacity: loaded ? 1 : 0,
                transform: loaded ? 'translateY(0)' : 'translateY(28px)',
                transition: fade(330, 700),
              }}
            >
              <span style={{ color: '#0A2D5E' }}>to </span>
              <span
                style={{
                  color: '#B8860B',
                  position: 'relative',
                }}
              >
                Excellence
              </span>
            </span>
            <span
              style={{
                display: 'block',
                color: '#0A2D5E',
                opacity: loaded ? 1 : 0,
                transform: loaded ? 'translateY(0)' : 'translateY(28px)',
                transition: fade(460, 700),
              }}
            >
              in Volleyball
            </span>
          </h1>

          {/* Divider rule */}
          <div
            aria-hidden="true"
            style={{
              width: loaded ? '56px' : '0px',
              height: '2px',
              background: 'linear-gradient(90deg, #B8860B 0%, rgba(184,134,11,0.25) 100%)',
              borderRadius: '2px',
              marginBottom: '28px',
              transition: 'width 700ms ease-out 680ms',
            }}
          />

          {/* Description */}
          <p
            style={{
              fontFamily: 'Inter, system-ui, sans-serif',
              fontSize: 'clamp(0.9rem, 1.15vw, 1.05rem)',
              lineHeight: 1.82,
              color: '#6B7280',
              maxWidth: '500px',
              margin: '0 0 20px 0',
              opacity: loaded ? 1 : 0,
              transform: loaded ? 'translateY(0)' : 'translateY(20px)',
              transition: fade(580, 600),
            }}
          >
            Lake Huron Volleyball Club (Osprey) is a non-profit organization registered with the Ontario Volleyball Association, looking to provide travel volleyball team opportunities.
          </p>

          {/* CTA Buttons */}
          <div
            style={{
              display: 'flex',
              gap: '16px',
              flexWrap: 'wrap',
              alignItems: 'center',
              opacity: loaded ? 1 : 0,
              transform: loaded ? 'translateY(0)' : 'translateY(16px)',
              transition: fade(720, 600),
            }}
          >
            <button
              onClick={() => scrollTo('#contact')}
              id="hero-join-btn"
              aria-label="Join Lake Huron Volleyball Club today"
              className="hero-btn-primary"
            >
              Register for Tryout <ArrowRight size={15} />
            </button>
            <button
              onClick={() => scrollTo('#about')}
              id="hero-learn-btn"
              aria-label="Learn more about Lake Huron Volleyball Club"
              className="hero-btn-secondary"
            >
              Learn More
            </button>
          </div>

        </div>

        {/* ── RIGHT: Logo Panel ───────────────────────── */}
        <div
          className="hero-logo-wrap"
          style={{
            flex: '0 0 43%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            marginTop: '-20px',
          }}
        >
          {/* Logo spotlight glow */}
          <div
            aria-hidden="true"
            style={{
              position: 'absolute',
              width: '420px',
              height: '420px',
              borderRadius: '50%',
              background:
                'radial-gradient(circle, rgba(212,175,55,0.11) 0%, rgba(212,175,55,0.04) 45%, transparent 70%)',
              filter: 'blur(40px)',
              pointerEvents: 'none',
              zIndex: 0,
              opacity: loaded ? 1 : 0,
              transition: 'opacity 1200ms ease-out 600ms',
            }}
          />

          {/* Logo container */}
          <div
            style={{
              position: 'relative',
              zIndex: 1,
              width: 'clamp(260px, 36vw, 460px)',
              aspectRatio: '1 / 1',
              opacity: loaded ? 1 : 0,
              transform: loaded ? 'scale(1) translateY(0)' : 'scale(0.94) translateY(24px)',
              transition: `opacity 800ms ease-out 420ms,
                           transform 800ms ease-out 420ms`,
              filter:
                'drop-shadow(0 20px 45px rgba(0,0,0,0.08)) drop-shadow(0 6px 18px rgba(184,134,11,0.09))',
            }}
          >
            <Image
              src="/logo.png"
              alt="Lake Huron Volleyball Club official crest"
              fill
              priority
              sizes="(max-width: 900px) 0px, (max-width: 1280px) 36vw, 460px"
              style={{ objectFit: 'contain' }}
            />
          </div>
        </div>
      </div>

      {/* ── SCROLL INDICATOR ─────────────────────────── */}
      <button
        onClick={() => scrollTo('#about')}
        aria-label="Scroll down to explore"
        style={{
          position: 'relative',
          zIndex: 2,
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '6px',
          color: 'rgba(10,45,94,0.32)',
          marginBottom: '24px',
          opacity: loaded ? 1 : 0,
          transition: 'opacity 600ms ease-out 1100ms',
        }}
        className="hero-scroll-btn"
      >
        <span
          style={{
            fontFamily: 'Manrope, sans-serif',
            fontSize: '0.58rem',
            fontWeight: 700,
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
          }}
        >
          Scroll
        </span>
        <ChevronDown size={15} />
      </button>

      {/* ══════════════════════════════════════════════
          SCOPED CSS
      ══════════════════════════════════════════════ */}
      <style>{`
        /* ── Layout ─────────────────────────────── */
        .hero-inner {
          box-sizing: border-box;
          flex-direction: row;
        }

        /* ── Primary button — gold ──────────────── */
        .hero-btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          height: 52px;
          padding: 0 30px;
          background: #B8860B;
          color: #fff;
          font-family: Manrope, system-ui, sans-serif;
          font-weight: 700;
          font-size: 0.84rem;
          letter-spacing: 0.04em;
          border: none;
          border-radius: 10px;
          cursor: pointer;
          white-space: nowrap;
          box-shadow: 0 12px 30px rgba(0,0,0,0.08), 0 4px 12px rgba(184,134,11,0.22);
          transition: background 220ms ease, transform 220ms ease, box-shadow 220ms ease;
        }
        .hero-btn-primary:hover {
          background: #9A700A;
          transform: translateY(-3px);
          box-shadow: 0 18px 38px rgba(0,0,0,0.10), 0 8px 20px rgba(184,134,11,0.30);
        }
        .hero-btn-primary:active {
          transform: translateY(-1px);
        }

        /* ── Secondary button — white outlined ──── */
        .hero-btn-secondary {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          height: 52px;
          padding: 0 30px;
          background: #fff;
          color: #0A2D5E;
          font-family: Manrope, system-ui, sans-serif;
          font-weight: 600;
          font-size: 0.84rem;
          letter-spacing: 0.04em;
          border: 1.5px solid rgba(10,45,94,0.18);
          border-radius: 10px;
          cursor: pointer;
          white-space: nowrap;
          box-shadow: 0 12px 30px rgba(0,0,0,0.05);
          transition: border-color 220ms ease, background 220ms ease,
                      transform 220ms ease, box-shadow 220ms ease;
        }
        .hero-btn-secondary:hover {
          border-color: rgba(10,45,94,0.45);
          background: rgba(10,45,94,0.03);
          transform: translateY(-3px);
          box-shadow: 0 18px 38px rgba(0,0,0,0.08);
        }
        .hero-btn-secondary:active {
          transform: translateY(-1px);
        }

        /* ── Scroll button hover ─────────────────── */
        .hero-scroll-btn:hover {
          color: rgba(10,45,94,0.6) !important;
        }

        /* ── Tablet (≤1100px) ────────────────────── */
        @media (max-width: 1100px) {
          .hero-logo-wrap {
            flex: 0 0 40% !important;
          }
        }

        /* ── Mobile (≤860px) ─────────────────────── */
        @media (max-width: 860px) {
          .hero-inner {
            flex-direction: column-reverse !important;
            align-items: center !important;
            text-align: center !important;
            padding-top: clamp(90px, 18vh, 130px) !important;
            padding-bottom: clamp(40px, 8vh, 80px) !important;
            gap: 32px !important;
          }
          .hero-content {
            max-width: 100% !important;
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .hero-content p { max-width: 100% !important; text-align: center; }
          .hero-logo-wrap {
            width: clamp(160px, 50vw, 280px) !important;
            flex: 0 0 auto !important;
            margin-top: 20px !important;
          }
          .hero-btn-primary,
          .hero-btn-secondary {
            width: 100%;
            justify-content: center;
          }
        }

        /* ── Small mobile (≤480px) ───────────────── */
        @media (max-width: 480px) {
          .hero-inner {
            padding-top: 88px !important;
            padding-left: 16px !important;
            padding-right: 16px !important;
          }
          .hero-logo-wrap {
            width: clamp(130px, 45vw, 200px) !important;
          }
        }
        
        /* ── Tiny mobile (≤375px) ────────────────── */
        @media (max-width: 375px) {
          .hero-inner {
            padding-left: 12px !important;
            padding-right: 12px !important;
            gap: 24px !important;
          }
        }
      `}</style>
    </section>
  );
}
