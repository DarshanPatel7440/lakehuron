'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { Menu, X, ChevronRight } from 'lucide-react';

const navLinks = [
  { label: 'About',    href: '#about' },
  { label: 'Programs', href: '#programs' },
  { label: 'Leadership', href: '#coaches' },
  { label: 'Contact',  href: '#contact' },
];

export default function Header() {
  const [scrolled,    setScrolled]    = useState(false);
  const [menuOpen,    setMenuOpen]    = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  /* ── Scroll detection ──────────────────────────────────── */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* ── Lock body when mobile menu is open ─────────────────── */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const scrollTo = (href: string) => {
    setMenuOpen(false);
    setTimeout(() => {
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, menuOpen ? 320 : 0);
  };

  /* ── Shared pill button style ────────────────────────────── */
  const ctaStyle: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '6px',
    height: '40px',
    padding: '0 20px',
    background: 'linear-gradient(135deg,#B97816,#8B5E10)',
    color: 'white',
    fontFamily: 'Manrope, system-ui, sans-serif',
    fontWeight: 700,
    fontSize: '0.75rem',
    letterSpacing: '0.07em',
    textTransform: 'uppercase',
    border: 'none',
    borderRadius: '10px',
    cursor: 'pointer',
    whiteSpace: 'nowrap',
    transition: 'transform 300ms cubic-bezier(0.16,1,0.3,1), box-shadow 300ms',
    boxShadow: '0 4px 14px rgba(185,120,22,0.30)',
    flexShrink: 0,
  };

  return (
    <>
      {/* ══════════════════════════════════════════════════════
          DESKTOP / TABLET HEADER
      ══════════════════════════════════════════════════════ */}
      <header
        ref={headerRef}
        role="banner"
        style={{
          position: 'fixed',
          top: 0, left: 0, right: 0,
          zIndex: 100,
          height: scrolled ? '72px' : '88px',
          display: 'flex',
          alignItems: 'center',
          background: scrolled
            ? 'rgba(5,30,56,0.97)'
            : 'rgba(5,30,56,1)',
          backdropFilter:       scrolled ? 'blur(20px) saturate(180%)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(20px) saturate(180%)' : 'none',
          borderBottom: scrolled
            ? '1px solid rgba(185,120,22,0.20)'
            : '1px solid rgba(185,120,22,0.12)',
          boxShadow: scrolled
            ? '0 4px 32px rgba(0,0,0,0.40)'
            : '0 2px 16px rgba(0,0,0,0.30)',
          transition: 'height 400ms cubic-bezier(0.16,1,0.3,1), background 400ms, backdrop-filter 400ms, box-shadow 400ms, border-color 400ms',
        }}
      >
        {/* Inner row — max-width container */}
        <div
          style={{
            width: '100%',
            maxWidth: '1280px',
            margin: '0 auto',
            padding: '0 clamp(24px, 4vw, 64px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '24px',
          }}
        >
          {/* ── LOGO ─────────────────────────────────────────── */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label="Lake Huron Volleyball Club — Scroll to top"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              textDecoration: 'none',
              flexShrink: 0,
              transition: 'opacity 200ms',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: 0,
            }}
            onMouseEnter={e => (e.currentTarget.style.opacity = '0.85')}
            onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
          >
            {/* Crest — fixed size so it NEVER overflows */}
            <div style={{ position: 'relative', width: '44px', height: '44px', flexShrink: 0, marginBottom: '-6px' }}>
              <Image
                src="/logo.png"
                alt="Lake Huron Volleyball Club crest"
                fill
                priority
                sizes="44px"
                style={{ objectFit: 'contain' }}
              />
            </div>
            {/* Wordmark */}
            <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
              <span style={{
                fontFamily: 'Cormorant Garamond, Georgia, serif',
                fontWeight: 700,
                fontSize: '1.0625rem',
                color: '#FFFFFF',
                letterSpacing: '0.07em',
                textTransform: 'uppercase' as const,
                textShadow: '0 1px 4px rgba(0,0,0,0.4)',
              }}>Lake Huron</span>
              <span style={{
                fontFamily: 'Manrope, system-ui, sans-serif',
                fontWeight: 600,
                fontSize: '0.6rem',
                color: '#D4A32A',
                letterSpacing: '0.15em',
                textTransform: 'uppercase' as const,
                marginTop: '3px',
              }}>Volleyball Club</span>
            </div>
          </button>

          {/* ── DESKTOP NAV ──────────────────────────────────── */}
          <nav
            aria-label="Main navigation"
            className="header-nav"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '36px',
              flex: '1 1 auto',
              justifyContent: 'center',
            }}
          >
            {navLinks.map(link => (
              <button
                key={link.label}
                onClick={() => scrollTo(link.href)}
                className="nav-link"
                aria-label={`Navigate to ${link.label}`}
                style={{
                  color: '#FFFFFF',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  textShadow: '0 1px 3px rgba(0,0,0,0.3)',
                }}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* ── RIGHT ACTIONS ─────────────────────────────────── */}
          <div
            className="header-actions"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '20px',
              flexShrink: 0,
            }}
          >

            <button
              onClick={() => scrollTo('#contact')}
              aria-label="Join Lake Huron Volleyball Club"
              style={ctaStyle}
              onMouseEnter={e => {
                (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(-2px) scale(1.03)';
                (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 10px 28px rgba(185,120,22,0.50)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLButtonElement).style.transform = '';
                (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 4px 14px rgba(185,120,22,0.30)';
              }}
            >
              Join Today <ChevronRight size={12} />
            </button>
          </div>

          {/* ── HAMBURGER (mobile only) ───────────────────────── */}
          <button
            className="mobile-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            style={{
              display: 'none',
              background: 'none',
              border: '1.5px solid rgba(255,255,255,0.25)',
              borderRadius: '8px',
              cursor: 'pointer',
              color: 'white',
              padding: '7px',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
              transition: 'border-color 200ms, background 200ms',
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLButtonElement).style.background = 'rgba(255,255,255,0.08)';
              (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(255,255,255,0.5)';
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLButtonElement).style.background = 'none';
              (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(255,255,255,0.25)';
            }}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      {/* ══════════════════════════════════════════════════════
          MOBILE FULLSCREEN MENU
      ══════════════════════════════════════════════════════ */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-label="Navigation menu"
        aria-modal="true"
        style={{
          position: 'fixed', inset: 0, zIndex: 99,
          background: 'rgba(5,30,56,0.97)',
          backdropFilter: 'blur(24px)',
          WebkitBackdropFilter: 'blur(24px)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '4px',
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? 'auto' : 'none',
          transition: 'opacity 350ms cubic-bezier(0.16,1,0.3,1)',
        }}
      >
        {/* Watermark */}
        <div style={{
          position: 'absolute', inset: 0,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          opacity: 0.04, pointerEvents: 'none',
        }} aria-hidden="true">
          <Image src="/logo.png" alt="" width={360} height={360} style={{ objectFit: 'contain' }} />
        </div>

        {/* Nav items */}
        <nav style={{ position: 'relative', zIndex: 1, textAlign: 'center', width: '100%' }}>
          {navLinks.map((link, i) => (
            <button
              key={link.label}
              onClick={() => scrollTo(link.href)}
              tabIndex={menuOpen ? 0 : -1}
              aria-label={`Navigate to ${link.label}`}
              style={{
                display: 'block',
                width: '100%',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                fontFamily: 'Cormorant Garamond, Georgia, serif',
                fontSize: 'clamp(2.25rem, 8vw, 3.25rem)',
                fontWeight: 600,
                color: 'white',
                padding: '12px 48px',
                letterSpacing: '-0.02em',
                lineHeight: 1.2,
                opacity: menuOpen ? 1 : 0,
                transform: menuOpen ? 'translateY(0)' : 'translateY(20px)',
                transition: `opacity 400ms cubic-bezier(0.16,1,0.3,1) ${60 + i * 60}ms,
                             transform 400ms cubic-bezier(0.16,1,0.3,1) ${60 + i * 60}ms`,
              }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-gold-pale)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'white')}
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Bottom actions */}
        <div style={{
          position: 'relative', zIndex: 1,
          display: 'flex', gap: '12px',
          marginTop: '40px',
          flexWrap: 'wrap', justifyContent: 'center',
          padding: '0 32px',
          opacity: menuOpen ? 1 : 0,
          transform: menuOpen ? 'translateY(0)' : 'translateY(16px)',
          transition: 'opacity 400ms 420ms, transform 400ms 420ms',
        }}>
          <button onClick={() => scrollTo('#contact')} className="btn-primary" style={{ fontSize: '0.8rem', height: '44px', padding: '0 24px' }}>
            Join Today <ChevronRight size={14} />
          </button>
        </div>
      </div>

      {/* ── Responsive rules ──────────────────────────────────── */}
      <style>{`
        @media (max-width: 1024px) {
          .header-nav      { display: none !important; }
          .header-actions  { display: none !important; }
          .mobile-toggle   { display: inline-flex !important; }
        }
        @media (min-width: 1025px) {
          .mobile-toggle   { display: none !important; }
        }
      `}</style>
    </>
  );
}
