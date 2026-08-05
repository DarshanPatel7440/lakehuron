'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Instagram, Facebook, Youtube, Mail, MapPin, Clock, ChevronRight, ArrowRight } from 'lucide-react';

const quickLinks = [
  { label: 'About', href: '#about' },
  { label: 'Coaches', href: '#coaches' },
  { label: 'Contact', href: '#contact' },
];
const programs = [
  { label: 'U16 Travel Team', href: '#programs' },
  { label: 'U18 Travel Team', href: '#programs' },
  { label: 'Skill Camps', href: '#programs' },
  { label: 'House Leagues', href: '#programs' },
];
const resources = [
  { label: 'Tryout Information', href: '#contact' },
  { label: 'Player Handbook', href: '#contact' },
  { label: 'Club Policies', href: '#contact' },
  { label: 'Fair Play Code', href: '#contact' },
];
const socials = [
  { label: 'Instagram', href: '#', Icon: Instagram },
  { label: 'Facebook', href: '#', Icon: Facebook },
  { label: 'YouTube', href: '#', Icon: Youtube },
];

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) { setSubscribed(true); setEmail(''); }
  };

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer
      style={{ background: 'var(--color-navy-dark)', color: 'white', position: 'relative', overflow: 'hidden' }}
      role="contentinfo"
    >
      {/* Wave divider */}
      <div style={{ position: 'absolute', top: -2, left: 0, right: 0, lineHeight: 0 }}>
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', display: 'block' }}>
          <path d="M0,40 C360,80 720,0 1080,40 C1260,60 1380,50 1440,40 L1440,0 L0,0 Z" fill="#F5F0E8" />
        </svg>
      </div>

      {/* Background eagle */}
      <div style={{ position: 'absolute', right: '-80px', top: '50%', transform: 'translateY(-50%)', opacity: 0.03, pointerEvents: 'none' }}>
        <Image src="/logo.png" alt="" width={600} height={600} style={{ objectFit: 'contain' }} />
      </div>

      <div className="section-container" style={{ paddingTop: '120px', paddingBottom: '40px', position: 'relative' }}>
        {/* Top Row */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 'clamp(24px, 4vw, 48px)', marginBottom: '64px' }}>
          {/* Brand */}
          <div style={{ gridColumn: 'span 1' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
              <Image src="/logo.png" alt="Lake Huron Volleyball Club" width={64} height={64} style={{ objectFit: 'contain' }} />
              <div>
                <div style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 700, fontSize: '1.25rem', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Lake Huron</div>
                <div style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.65rem', color: 'var(--color-gold)', letterSpacing: '0.15em', textTransform: 'uppercase' }}>Volleyball Club</div>
              </div>
            </div>
            <p style={{ fontFamily: 'Cormorant Garamond, serif', fontStyle: 'italic', fontSize: '1rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.7, marginBottom: '24px' }}>
              Building Champions.<br />Creating Leaders.<br />Inspiring Community.
            </p>
            {/* Contact Info */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {[
                { Icon: MapPin, text: 'Lake Huron, Ontario, Canada' },
                { Icon: Mail, text: 'info@lakehuronvc.ca' },
                { Icon: Clock, text: 'Mon–Fri: 3PM–9PM · Sat: 8AM–6PM' },
              ].map(({ Icon, text }) => (
                <div key={text} style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'rgba(255,255,255,0.55)', fontSize: '0.8rem', fontFamily: 'Manrope, sans-serif' }}>
                  <Icon size={13} style={{ color: 'var(--color-gold)', flexShrink: 0 }} />
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 700, fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--color-gold)', marginBottom: '20px' }}>Quick Links</h3>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {quickLinks.map((l) => (
                <li key={l.label}>
                  <button onClick={() => scrollTo(l.href)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'rgba(255,255,255,0.6)', fontFamily: 'Manrope, sans-serif', fontSize: '0.875rem', display: 'flex', alignItems: 'center', gap: '6px', transition: 'color 200ms', padding: 0 }}
                    onMouseEnter={e => (e.currentTarget.style.color = 'white')}
                    onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.6)')}
                  >
                    <ChevronRight size={12} style={{ color: 'var(--color-gold)' }} /> {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 700, fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--color-gold)', marginBottom: '20px' }}>Programs</h3>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {programs.map((l) => (
                <li key={l.label}>
                  <button onClick={() => scrollTo(l.href)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'rgba(255,255,255,0.6)', fontFamily: 'Manrope, sans-serif', fontSize: '0.875rem', display: 'flex', alignItems: 'center', gap: '6px', transition: 'color 200ms', padding: 0 }}
                    onMouseEnter={e => (e.currentTarget.style.color = 'white')}
                    onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.6)')}
                  >
                    <ChevronRight size={12} style={{ color: 'var(--color-gold)' }} /> {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 700, fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--color-gold)', marginBottom: '8px' }}>Stay Connected</h3>
            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.8rem', fontFamily: 'Manrope, sans-serif', marginBottom: '16px', lineHeight: 1.6 }}>
              Season news, event updates, and club announcements.
            </p>
            {subscribed ? (
              <div style={{ color: 'var(--color-gold)', fontFamily: 'Manrope, sans-serif', fontSize: '0.875rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                ✓ You&apos;re subscribed. Welcome to the club.
              </div>
            ) : (
              <form onSubmit={handleSubscribe} style={{ display: 'flex', gap: '8px', flexDirection: 'column' }}>
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="Your email address"
                  required
                  aria-label="Email address for newsletter"
                  style={{
                    padding: '12px 16px',
                    background: 'rgba(255,255,255,0.06)',
                    border: '1px solid rgba(255,255,255,0.15)',
                    borderRadius: '4px',
                    color: 'white',
                    fontFamily: 'Manrope, sans-serif',
                    fontSize: '0.875rem',
                    outline: 'none',
                    width: '100%',
                  }}
                />
                <button type="submit" className="btn-primary" style={{ padding: '12px 20px', fontSize: '0.8rem', justifyContent: 'center' }}>
                  Subscribe <ArrowRight size={14} />
                </button>
              </form>
            )}
            <div style={{ display: 'flex', gap: '16px', marginTop: '24px' }}>
              {socials.map(({ label, href, Icon }) => (
                <a key={label} href={href} aria-label={`Lake Huron Volleyball Club on ${label}`}
                  style={{ width: '40px', height: '40px', borderRadius: '50%', border: '1px solid rgba(255,255,255,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgba(255,255,255,0.6)', transition: 'all 200ms' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--color-gold)'; e.currentTarget.style.color = 'var(--color-gold)'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'; e.currentTarget.style.color = 'rgba(255,255,255,0.6)'; }}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
          <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.8rem', fontFamily: 'Manrope, sans-serif' }}>
            © 2026 Lake Huron Volleyball Club · All Rights Reserved · Lambton County, Ontario
          </p>
          <div style={{ display: 'flex', gap: '24px' }}>
            {['Privacy Policy', 'Terms', 'Accessibility', 'Sitemap'].map(l => (
              <Link key={l} href="#" style={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.75rem', fontFamily: 'Manrope, sans-serif', textDecoration: 'none', transition: 'color 200ms' }}
                onMouseEnter={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.7)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.35)')}
              >{l}</Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
