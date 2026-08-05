'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';

const faqs = [
  {
    id: 'faq-1',
    question: 'When does the season start and end?',
    answer: 'Our indoor season runs from September through April/May, depending on the program. The beach volleyball program runs from June through August. Registration typically opens in July/August for the upcoming indoor season.',
  },
  {
    id: 'faq-2',
    question: 'What equipment does my child need?',
    answer: 'Athletes need proper volleyball-specific court shoes (indoor) or sand shoes (beach), knee pads, and comfortable athletic wear. We provide balls and all court equipment. The High Performance Academy includes a full equipment kit in the season fee.',
  },
  {
    id: 'faq-3',
    question: 'Are there tryouts for recreational programs?',
    answer: 'No. Our recreational programs (Junior Lake Huron, Rising Stars, Adult Recreational) are open to all athletes regardless of experience. Competitive, Elite, and High Performance programs do require tryouts to ensure appropriate skill placement.',
  },
  {
    id: 'faq-4',
    question: 'Do you offer financial assistance or bursaries?',
    answer: 'Yes. Lake Huron Volleyball Club believes financial circumstances should never prevent a talented athlete from developing. We offer need-based bursaries covering up to 50% of season fees. Contact us confidentially to discuss options — all inquiries are handled with complete discretion.',
  },
  {
    id: 'faq-5',
    question: 'What certifications do your coaches hold?',
    answer: 'All Lake Huron coaches hold NCCP (National Coaching Certification Program) certification appropriate to their program level. Our head coaches hold Performance-level certification. All coaches complete mandatory Respect in Sport and Safe Sport training, and are background-checked annually.',
  },
  {
    id: 'faq-6',
    question: 'How do I register? What is the deadline?',
    answer: 'Registration is done through our website or by contacting us directly. Spots fill quickly — we recommend registering as soon as the season opens. Competitive program registration closes one week before tryouts. Contact us and we will guide you through the entire process.',
  },
  {
    id: 'faq-7',
    question: 'What if my child has never played before?',
    answer: 'Our Junior Lake Huron (ages 8-11) and Rising Stars (ages 10-13) programs are designed specifically for beginners. We\'ve welcomed athletes who became provincial champions after starting with us as complete beginners. Every champion has a first day.',
  },
  {
    id: 'faq-8',
    question: 'Are there opportunities to play competitively?',
    answer: 'Absolutely. Our Competitive Edge, Elite Performance, and High Performance Academy programs compete in regional leagues and provincial tournaments. We\'ve had athletes compete at national championships and earn university scholarships through our programs.',
  },
  {
    id: 'faq-9',
    question: 'Do you offer refunds if my child cannot continue?',
    answer: 'We offer a prorated refund within the first 30 days of the season. After that, medical withdrawals are handled case-by-case with documentation. We are fair and reasonable — we understand that life happens, and we\'ll always work with families through difficult situations.',
  },
  {
    id: 'faq-10',
    question: 'How do I schedule a facility tour or get more information?',
    answer: 'We\'d love to show you around. Simply fill out our contact form or email us at info@lakehuronvc.ca. We offer tours Monday through Friday between 4–7 PM and Saturdays between 10 AM and 2 PM. Come see why parents call us home.',
  },
];

export default function FAQ() {
  const [openIds, setOpenIds] = useState<Set<string>>(new Set(['faq-1']));

  const toggle = (id: string) => {
    setOpenIds(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  return (
    <section
      id="faq"
      style={{ background: 'var(--color-ivory)', padding: 'clamp(80px, 10vw, 120px) 0' }}
      aria-labelledby="faq-heading"
    >
      <div className="section-container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '80px', alignItems: 'flex-start' }} className="faq-layout">
          {/* Left: Header */}
          <div className="faq-sidebar">
            <ScrollReveal variant="fadeLeft">
              <span className="text-overline" style={{ display: 'inline-flex', alignItems: 'center', gap: '12px' }}>
                <span style={{ width: '32px', height: '1px', background: 'var(--color-gold)', display: 'inline-block' }} />
                FAQ
              </span>
              <h2
                id="faq-heading"
                className="text-section"
                style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', color: 'var(--color-navy-dark)', marginTop: '16px', marginBottom: '24px' }}
              >
                Answers Before You Even Ask
              </h2>
              <p style={{ color: 'var(--color-graphite)', lineHeight: 1.8, fontSize: '1rem' }}>
                Everything a thoughtful parent or committed athlete needs to know — answered honestly.
              </p>
              <div style={{ marginTop: '40px', padding: '28px', background: 'var(--color-navy)', borderRadius: '20px' }}>
                <p style={{ fontFamily: 'Cormorant Garamond, serif', fontStyle: 'italic', fontSize: '1.1rem', color: 'rgba(255,255,255,0.8)', lineHeight: 1.7, marginBottom: '16px' }}>
                  Still have questions? We&apos;re always here.
                </p>
                <a href="mailto:info@lakehuronvc.ca" style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 700, fontSize: '1rem', color: 'var(--color-gold)', textDecoration: 'none', wordBreak: 'break-all' }}>
                  info@lakehuronvc.ca
                </a>
              </div>
            </ScrollReveal>
          </div>

          {/* Right: Accordion */}
          <div>
            <dl style={{ display: 'flex', flexDirection: 'column', gap: '0' }} role="list">
              {faqs.map((faq, i) => {
                const isOpen = openIds.has(faq.id);
                return (
                  <ScrollReveal key={faq.id} variant="fadeRight" delay={i * 40}>
                    <div
                      className="accordion-item"
                      style={{
                        borderBottom: '1px solid rgba(8,47,87,0.1)',
                        borderLeft: isOpen ? '3px solid var(--color-gold)' : '3px solid transparent',
                        paddingLeft: '16px',
                        transition: 'border-left 300ms ease',
                      }}
                      role="listitem"
                    >
                      <dt>
                        <button
                          id={`${faq.id}-btn`}
                          aria-expanded={isOpen}
                          aria-controls={`${faq.id}-panel`}
                          onClick={() => toggle(faq.id)}
                          style={{
                            width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                            padding: '24px 0',
                            background: 'none', border: 'none', cursor: 'pointer',
                            textAlign: 'left', gap: '16px',
                          }}
                        >
                          <span style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 600, fontSize: '1rem', color: isOpen ? 'var(--color-navy)' : 'var(--color-charcoal)', lineHeight: 1.4, transition: 'color 300ms' }}>
                            {faq.question}
                          </span>
                          <ChevronDown
                            size={18}
                            style={{
                              color: isOpen ? 'var(--color-gold)' : 'var(--color-mist)',
                              transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                              transition: 'all 300ms cubic-bezier(0.16,1,0.3,1)',
                              flexShrink: 0,
                            }}
                            aria-hidden="true"
                          />
                        </button>
                      </dt>
                      <dd
                        id={`${faq.id}-panel`}
                        role="region"
                        aria-labelledby={`${faq.id}-btn`}
                        style={{
                          maxHeight: isOpen ? '400px' : '0',
                          overflow: 'hidden',
                          transition: 'max-height 400ms cubic-bezier(0.16,1,0.3,1)',
                        }}
                      >
                        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.95rem', color: 'var(--color-graphite)', lineHeight: 1.8, paddingBottom: '24px' }}>
                          {faq.answer}
                        </p>
                      </dd>
                    </div>
                  </ScrollReveal>
                );
              })}
            </dl>
          </div>
        </div>
      </div>

      <style>{`
        .faq-sidebar {
          position: sticky;
          top: 120px;
          z-index: 10;
        }
        @media (max-width: 900px) { 
          .faq-layout { grid-template-columns: 1fr !important; gap: 40px !important; } 
          .faq-sidebar { position: relative !important; top: 0 !important; }
        }
      `}</style>
    </section>
  );
}
