'use client';

import { useState } from 'react';
import { Mail, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';

const contactInfo = [
  { Icon: MapPin, label: 'Location', value: 'Lake Huron, Ontario, Canada' },
  { Icon: Mail, label: 'Email', value: 'info@lakehuronvc.ca', href: 'mailto:info@lakehuronvc.ca?subject=Inquiry%20%E2%80%93%20Lake%20Huron%20Volleyball%20Club&body=Hi%20Lake%20Huron%20VC%20Team%2C%0A%0AI%20am%20reaching%20out%20to%20inquire%20about%20your%20programs.%0A%0AName%3A%20%5BYour%20Name%5D%0APhone%3A%20%5BYour%20Phone%5D%0AInquiry%3A%20%5BPlease%20describe%20your%20question%20or%20interest%5D%0A%0AThank%20you%2C%0A%5BYour%20Name%5D' },
];

const inquiryTypes = [
  'I can help with coaching',
  'I can help with admin support',
  'I want more tryout information',
  'I want more camps, clinics, info',
  'I want more info on the club and operation',
];

export default function Contact() {
  const [fields, setFields] = useState({ name: '', email: '', message: '' });
  const [inquiries, setInquiries] = useState<string[]>([]);
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const toggleInquiry = (type: string) => {
    setInquiries(prev =>
      prev.includes(type) ? prev.filter(i => i !== type) : [...prev, type]
    );
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFields(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch('https://formspree.io/f/mzepzekn', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: fields.name,
          email: fields.email,
          inquiries: inquiries.join(', '),
          message: fields.message,
        }),
      });
      if (res.ok) {
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '14px 18px',
    background: 'rgba(8,47,87,0.04)',
    border: '1px solid rgba(8,47,87,0.15)',
    borderRadius: '8px',
    fontFamily: 'Manrope, sans-serif',
    fontSize: '0.9rem',
    color: 'var(--color-charcoal)',
    outline: 'none',
    transition: 'border-color 250ms ease, box-shadow 250ms ease',
    boxSizing: 'border-box',
  };

  return (
    <section
      id="contact"
      style={{ background: 'var(--color-navy-dark)', padding: 'clamp(80px, 10vw, 120px) 0', position: 'relative', overflow: 'hidden' }}
      aria-labelledby="contact-heading"
    >
      {/* Subtle background texture */}
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle at 70% 30%, rgba(185,120,22,0.07) 0%, transparent 60%)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle at 20% 80%, rgba(13,61,110,0.4) 0%, transparent 50%)', pointerEvents: 'none' }} />

      <div className="section-container" style={{ position: 'relative' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '72px' }}>
          <ScrollReveal variant="fadeUp">
            <span className="text-overline" style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', color: 'var(--color-gold)' }}>
              <span style={{ width: '32px', height: '1px', background: 'var(--color-gold)', display: 'inline-block' }} />
              Get In Touch
              <span style={{ width: '32px', height: '1px', background: 'var(--color-gold)', display: 'inline-block' }} />
            </span>
          </ScrollReveal>
          <ScrollReveal variant="fadeUp" delay={100}>
            <h2
              id="contact-heading"
              className="text-section"
              style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', color: 'white', marginTop: '16px', marginBottom: '20px' }}
            >
              Your Journey Starts<br />With a Conversation
            </h2>
          </ScrollReveal>
          <ScrollReveal variant="fadeUp" delay={180}>
            <p style={{ color: 'rgba(255,255,255,0.55)', fontFamily: 'Manrope, sans-serif', fontSize: '1rem', maxWidth: '520px', margin: '0 auto', lineHeight: 1.8 }}>
              Have questions about our programs or want to join the Lake Huron Volleyball Club family? We&apos;d love to hear from you.
            </p>
          </ScrollReveal>
        </div>

        {/* Two-column layout */}
        <div className="contact-grid">
          {/* Left: Info cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {contactInfo.map(({ Icon, label, value, href }, i) => (
              <ScrollReveal key={label} variant="fadeLeft" delay={i * 80}>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '18px',
                    padding: '24px 28px',
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    borderRadius: '16px',
                    backdropFilter: 'blur(8px)',
                    transition: 'background 300ms ease, border-color 300ms ease',
                  }}
                  className="contact-info-card"
                >
                  <div style={{ width: '44px', height: '44px', borderRadius: '10px', background: 'rgba(185,120,22,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Icon size={18} style={{ color: 'var(--color-gold)' }} />
                  </div>
                  <div>
                    <p style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 700, fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-gold)', marginBottom: '4px' }}>
                      {label}
                    </p>
                    {href ? (
                      <a href={href} style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.9rem', color: 'rgba(255,255,255,0.8)', textDecoration: 'none', transition: 'color 200ms' }}
                        onMouseEnter={e => (e.currentTarget.style.color = 'white')}
                        onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.8)')}
                      >
                        {value}
                      </a>
                    ) : (
                      <p style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.9rem', color: 'rgba(255,255,255,0.8)', margin: 0 }}>{value}</p>
                    )}
                  </div>
                </div>
              </ScrollReveal>
            ))}

            {/* Quote block */}
            <ScrollReveal variant="fadeLeft" delay={400}>
              <div style={{ padding: '28px', background: 'rgba(185,120,22,0.08)', border: '1px solid rgba(185,120,22,0.2)', borderRadius: '16px', marginTop: '8px' }}>
                <p style={{ fontFamily: 'Cormorant Garamond, serif', fontStyle: 'italic', fontSize: '1.15rem', color: 'rgba(255,255,255,0.75)', lineHeight: 1.75, margin: 0 }}>
                  &ldquo;We respond to every inquiry within 24 hours. No athlete or family is left without answers.&rdquo;
                </p>
                <p style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 700, fontSize: '0.75rem', color: 'var(--color-gold)', marginTop: '16px', letterSpacing: '0.08em' }}>
                  — Lake Huron Volleyball Club Staff
                </p>
              </div>
            </ScrollReveal>
          </div>

          {/* Right: Form */}
          <ScrollReveal variant="fadeRight" delay={100}>
            <div
              style={{
                background: 'white',
                borderRadius: '28px',
                padding: 'clamp(32px, 5vw, 52px)',
                boxShadow: '0 32px 80px rgba(0,0,0,0.28)',
              }}
            >
              {status === 'success' ? (
                <div style={{ textAlign: 'center', padding: '40px 20px' }}>
                  <CheckCircle size={56} style={{ color: '#22c55e', margin: '0 auto 20px' }} />
                  <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.8rem', color: 'var(--color-navy-dark)', marginBottom: '12px' }}>
                    Message Received!
                  </h3>
                  <p style={{ fontFamily: 'Manrope, sans-serif', color: 'var(--color-graphite)', lineHeight: 1.7, marginBottom: '28px' }}>
                    Thank you for reaching out. A member of our team will respond within 24 hours. We look forward to welcoming you to the Lake Huron family.
                  </p>
                  <button
                    onClick={() => { setStatus('idle'); setFields({ name: '', email: '', message: '' }); setInquiries([]); }}
                    className="btn-primary"
                    style={{ justifyContent: 'center', width: '100%' }}
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <>
                  <div style={{ marginBottom: '32px' }}>
                    <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.75rem', fontWeight: 700, color: 'var(--color-navy-dark)', marginBottom: '8px' }}>
                      Send Us a Message
                    </h3>
                    <p style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.875rem', color: 'var(--color-graphite)' }}>
                      All fields marked with * are required.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} noValidate style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                    {/* Name — full width */}
                    <div>
                      <label htmlFor="contact-name" style={{ display: 'block', fontFamily: 'Manrope, sans-serif', fontWeight: 600, fontSize: '0.75rem', letterSpacing: '0.08em', color: 'var(--color-navy)', marginBottom: '8px' }}>
                        Full Name *
                      </label>
                      <input
                        id="contact-name"
                        name="name"
                        type="text"
                        required
                        placeholder="Jane Smith"
                        value={fields.name}
                        onChange={handleChange}
                        style={inputStyle}
                        onFocus={e => { e.currentTarget.style.borderColor = 'var(--color-navy)'; e.currentTarget.style.boxShadow = '0 0 0 3px rgba(8,47,87,0.08)'; }}
                        onBlur={e => { e.currentTarget.style.borderColor = 'rgba(8,47,87,0.15)'; e.currentTarget.style.boxShadow = 'none'; }}
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="contact-email" style={{ display: 'block', fontFamily: 'Manrope, sans-serif', fontWeight: 600, fontSize: '0.75rem', letterSpacing: '0.08em', color: 'var(--color-navy)', marginBottom: '8px' }}>
                        Email Address *
                      </label>
                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        required
                        placeholder="jane@example.com"
                        value={fields.email}
                        onChange={handleChange}
                        style={inputStyle}
                        onFocus={e => { e.currentTarget.style.borderColor = 'var(--color-navy)'; e.currentTarget.style.boxShadow = '0 0 0 3px rgba(8,47,87,0.08)'; }}
                        onBlur={e => { e.currentTarget.style.borderColor = 'rgba(8,47,87,0.15)'; e.currentTarget.style.boxShadow = 'none'; }}
                      />
                    </div>

                    {/* Inquiry type — multi-select chips */}
                    <div>
                      <p style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 600, fontSize: '0.75rem', letterSpacing: '0.08em', color: 'var(--color-navy)', marginBottom: '10px', textTransform: 'uppercase' }}>
                        Inquiry Type <span style={{ fontWeight: 400, color: 'var(--color-graphite)', textTransform: 'none', letterSpacing: 0 }}>(select any that apply)</span>
                      </p>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                        {inquiryTypes.map(type => {
                          const selected = inquiries.includes(type);
                          return (
                            <button
                              key={type}
                              type="button"
                              onClick={() => toggleInquiry(type)}
                              aria-pressed={selected}
                              style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '7px',
                                padding: '9px 16px',
                                borderRadius: '999px',
                                border: selected ? '1.5px solid var(--color-navy)' : '1.5px solid rgba(8,47,87,0.2)',
                                background: selected ? 'var(--color-navy)' : 'rgba(8,47,87,0.03)',
                                color: selected ? '#fff' : 'var(--color-navy)',
                                fontFamily: 'Manrope, sans-serif',
                                fontWeight: 600,
                                fontSize: '0.8rem',
                                cursor: 'pointer',
                                transition: 'all 220ms cubic-bezier(0.16,1,0.3,1)',
                                letterSpacing: '0.01em',
                                boxShadow: selected ? '0 4px 14px rgba(8,47,87,0.18)' : 'none',
                              }}
                              onMouseEnter={e => {
                                if (!selected) {
                                  (e.currentTarget as HTMLButtonElement).style.background = 'rgba(8,47,87,0.08)';
                                  (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(8,47,87,0.4)';
                                }
                              }}
                              onMouseLeave={e => {
                                if (!selected) {
                                  (e.currentTarget as HTMLButtonElement).style.background = 'rgba(8,47,87,0.03)';
                                  (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(8,47,87,0.2)';
                                }
                              }}
                            >
                              {selected && (
                                <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">
                                  <path d="M2 6.5L5.5 10L11 3" stroke="#D4A32A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                              )}
                              {type}
                            </button>
                          );
                        })}
                      </div>

                    </div>

                    {/* Message */}
                    <div>
                      <label htmlFor="contact-message" style={{ display: 'block', fontFamily: 'Manrope, sans-serif', fontWeight: 600, fontSize: '0.75rem', letterSpacing: '0.08em', color: 'var(--color-navy)', marginBottom: '8px' }}>
                        Message *
                      </label>
                      <textarea
                        id="contact-message"
                        name="message"
                        required
                        rows={5}
                        placeholder="Tell us about your athlete, questions, or goals…"
                        value={fields.message}
                        onChange={handleChange}
                        style={{ ...inputStyle, resize: 'vertical', minHeight: '130px' }}
                        onFocus={e => { e.currentTarget.style.borderColor = 'var(--color-navy)'; e.currentTarget.style.boxShadow = '0 0 0 3px rgba(8,47,87,0.08)'; }}
                        onBlur={e => { e.currentTarget.style.borderColor = 'rgba(8,47,87,0.15)'; e.currentTarget.style.boxShadow = 'none'; }}
                      />
                    </div>

                    {status === 'error' && (
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '12px 16px', background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.2)', borderRadius: '8px' }}>
                        <AlertCircle size={16} style={{ color: '#ef4444', flexShrink: 0 }} />
                        <p style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.85rem', color: '#dc2626', margin: 0 }}>
                          Something went wrong. Please try again or email us directly.
                        </p>
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={status === 'sending'}
                      className="btn-primary"
                      style={{ justifyContent: 'center', marginTop: '8px', opacity: status === 'sending' ? 0.7 : 1, cursor: status === 'sending' ? 'not-allowed' : 'pointer' }}
                      aria-label="Submit contact form"
                    >
                      {status === 'sending' ? 'Sending…' : (<>Send Message <Send size={14} /></>)}
                    </button>

                    <p style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.75rem', color: 'var(--color-graphite)', textAlign: 'center', lineHeight: 1.6 }}>
                      We respect your privacy and will never share your information with third parties.
                    </p>
                  </form>
                </>
              )}
            </div>
          </ScrollReveal>
        </div>
      </div>

      <style>{`
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1.4fr;
          gap: clamp(32px, 5vw, 64px);
          align-items: flex-start;
        }
        .form-row {
          display: flex;
          gap: 16px;
        }
        .contact-info-card:hover {
          background: rgba(255,255,255,0.07) !important;
          border-color: rgba(185,120,22,0.25) !important;
        }
        @media (max-width: 1024px) {
          .contact-grid { grid-template-columns: 1fr 1.2fr !important; gap: 40px !important; }
        }
        @media (max-width: 860px) {
          .contact-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
        @media (max-width: 560px) {
          .form-row { flex-direction: column !important; }
        }
      `}</style>
    </section>
  );
}
