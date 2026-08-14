'use client';

import { useEffect, useState } from 'react';
import { Calendar, MapPin, Clock, Tag, ChevronRight } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';

interface EventItem {
  id: string;
  month: string;
  day: string;
  name: string;
  location: string;
  time: string;
  category: string;
  date: Date;
  registerLink: string;
}

const events: EventItem[] = [
  { id: 'ev1', month: 'AUG', day: '02', name: 'Fall Season Registration Opens', location: 'Online & Lake Huron Training Centre', time: '9:00 AM', category: 'Registration', date: new Date('2026-08-02'), registerLink: '#contact' },
  { id: 'ev2', month: 'AUG', day: '16', name: 'Youth Open Tryouts — 14U & 16U', location: 'Lake Huron Training Centre, Lambton County', time: '10:00 AM – 1:00 PM', category: 'Tryouts', date: new Date('2026-08-16'), registerLink: '#contact' },
  { id: 'ev3', month: 'AUG', day: '23', name: 'Beach Volleyball Season Finale', location: 'Sauble Beach, ON', time: '8:00 AM – 6:00 PM', category: 'Tournament', date: new Date('2026-08-23'), registerLink: '#contact' },
  { id: 'ev4', month: 'SEP', day: '06', name: 'Fall Season Kickoff — All Programs', location: 'Lake Huron Training Centre', time: '9:00 AM', category: 'Season Start', date: new Date('2026-09-06'), registerLink: '#contact' },
  { id: 'ev5', month: 'SEP', day: '20', name: 'Parent & Athlete Information Night', location: 'Lake Huron Community Hall', time: '7:00 PM – 9:00 PM', category: 'Community', date: new Date('2026-09-20'), registerLink: '#contact' },
  { id: 'ev6', month: 'OCT', day: '04', name: 'Southern Ontario Invitational — 18U', location: 'London Sports Complex, London ON', time: '8:00 AM', category: 'Tournament', date: new Date('2026-10-04'), registerLink: '#contact' },
  { id: 'ev7', month: 'OCT', day: '18', name: 'High Performance Academy Showcase', location: 'Lake Huron Training Centre', time: '2:00 PM – 5:00 PM', category: 'Showcase', date: new Date('2026-10-18'), registerLink: '#contact' },
  { id: 'ev8', month: 'NOV', day: '08', name: 'Regional Championships — Competitive', location: 'Owen Sound Sports Dome, ON', time: '7:00 AM', category: 'Championship', date: new Date('2026-11-08'), registerLink: '#contact' },
];

const categoryColors: Record<string, string> = {
  Registration: '#0D3D6E',
  Tryouts: '#B97816',
  Tournament: '#082F57',
  'Season Start': '#0D3D6E',
  Community: '#3A3A3A',
  Showcase: '#B97816',
  Championship: '#051E38',
};

function Countdown({ targetDate }: { targetDate: Date }) {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calc = () => {
      const diff = targetDate.getTime() - Date.now();
      if (diff <= 0) return;
      setTimeLeft({
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff % 86400000) / 3600000),
        minutes: Math.floor((diff % 3600000) / 60000),
        seconds: Math.floor((diff % 60000) / 1000),
      });
    };
    calc();
    const timer = setInterval(calc, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  const pad = (n: number) => String(n).padStart(2, '0');

  return (
    <div style={{ display: 'flex', gap: '8px', alignItems: 'center', flexWrap: 'wrap' }} aria-live="polite" aria-label={`Event countdown: ${timeLeft.days} days, ${timeLeft.hours} hours, ${timeLeft.minutes} minutes`}>
      {[
        { val: timeLeft.days, label: 'd' },
        { val: timeLeft.hours, label: 'h' },
        { val: timeLeft.minutes, label: 'm' },
        { val: timeLeft.seconds, label: 's' },
      ].map(({ val, label }, i) => (
        <span key={label}>
          <span style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 700, fontSize: '1.1rem', color: 'var(--color-gold)' }}>{pad(val)}</span>
          <span style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.65rem', color: 'var(--color-mist)', marginLeft: '2px' }}>{label}</span>
          {i < 3 && <span style={{ color: 'var(--color-mist)', margin: '0 4px' }}>:</span>}
        </span>
      ))}
    </div>
  );
}

export default function Events() {
  const now = Date.now();
  const thirtyDays = 30 * 24 * 60 * 60 * 1000;

  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="events"
      style={{ background: 'var(--color-ivory)', padding: 'clamp(80px, 10vw, 120px) 0' }}
      aria-labelledby="events-heading"
    >
      <div className="section-container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '64px', flexWrap: 'wrap', gap: '24px' }}>
          <div>
            <ScrollReveal variant="fadeUp">
              <span className="text-overline" style={{ display: 'inline-flex', alignItems: 'center', gap: '12px' }}>
                <span style={{ width: '32px', height: '1px', background: 'var(--color-gold)', display: 'inline-block' }} />
                Season Calendar
              </span>
            </ScrollReveal>
            <ScrollReveal variant="fadeUp" delay={100}>
              <h2 id="events-heading" className="text-section" style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', color: 'var(--color-navy-dark)', marginTop: '16px', maxWidth: '560px' }}>
                Every Tournament.<br />Every Milestone.<br />Every Memory.
              </h2>
            </ScrollReveal>
          </div>
          <ScrollReveal variant="fadeRight">
            <button onClick={scrollToContact} className="btn-primary" aria-label="View full season schedule">
              View Full Schedule <ChevronRight size={14} />
            </button>
          </ScrollReveal>
        </div>

        {/* Events List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }} role="list" aria-label="Upcoming events">
          {events.map((event, i) => {
            const isUpcoming = event.date.getTime() - now > 0 && event.date.getTime() - now < thirtyDays;
            return (
              <ScrollReveal key={event.id} variant="fadeLeft" delay={i * 70}>
                <article
                  role="listitem"
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '80px 1fr auto',
                    gap: 'clamp(12px, 3vw, 24px)',
                    alignItems: 'center',
                    background: 'white',
                    border: '1px solid rgba(8,47,87,0.08)',
                    borderLeft: `4px solid ${categoryColors[event.category] || 'var(--color-navy)'}`,
                    borderRadius: '12px',
                    padding: '24px 28px',
                    transition: 'all 300ms cubic-bezier(0.16,1,0.3,1)',
                  }}
                  className="event-card"
                >
                  {/* Date badge */}
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 800, fontSize: '0.65rem', letterSpacing: '0.12em', color: 'var(--color-gold)', textTransform: 'uppercase' }}>{event.month}</div>
                    <div style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 700, fontSize: '2.5rem', color: 'var(--color-navy)', lineHeight: 1 }}>{event.day}</div>
                  </div>

                  {/* Event details */}
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                      <span style={{ padding: '3px 10px', borderRadius: '99px', background: `${categoryColors[event.category]}15`, color: categoryColors[event.category], fontSize: '0.65rem', fontFamily: 'Manrope, sans-serif', fontWeight: 700, letterSpacing: '0.06em' }}>
                        <Tag size={10} style={{ display: 'inline', marginRight: '4px' }} />{event.category}
                      </span>
                    </div>
                    <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 700, fontSize: '1.3rem', color: 'var(--color-navy-dark)', marginBottom: '8px', lineHeight: 1.3 }}>{event.name}</h3>
                    <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.8rem', color: 'var(--color-graphite)', fontFamily: 'Manrope, sans-serif' }}>
                        <MapPin size={12} style={{ color: 'var(--color-gold)' }} /> {event.location}
                      </span>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.8rem', color: 'var(--color-graphite)', fontFamily: 'Manrope, sans-serif' }}>
                        <Clock size={12} style={{ color: 'var(--color-gold)' }} /> {event.time}
                      </span>
                    </div>
                    {isUpcoming && (
                      <div style={{ marginTop: '10px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <span style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.7rem', color: 'var(--color-gold)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em' }}>Starts in:</span>
                        <Countdown targetDate={event.date} />
                      </div>
                    )}
                  </div>

                  {/* CTA */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'flex-end' }}>
                    <button onClick={scrollToContact} className="btn-primary" style={{ padding: '10px 20px', fontSize: '0.8rem', whiteSpace: 'nowrap' }} aria-label={`Register for ${event.name}`}>
                      Register Now <ChevronRight size={12} />
                    </button>
                    <button
                      onClick={() => {
                        const icsContent = `BEGIN:VCALENDAR\nVERSION:2.0\nBEGIN:VEVENT\nSUMMARY:${event.name}\nDTSTART:${event.date.toISOString().replace(/[-:]/g, '').split('.')[0]}Z\nEND:VEVENT\nEND:VCALENDAR`;
                        const blob = new Blob([icsContent], { type: 'text/calendar' });
                        const url = URL.createObjectURL(blob);
                        const a = document.createElement('a');
                        a.href = url; a.download = `${event.name}.ics`; a.click();
                      }}
                      style={{ background: 'none', border: '1px solid rgba(8,47,87,0.15)', borderRadius: '4px', padding: '8px 16px', fontSize: '0.75rem', fontFamily: 'Manrope, sans-serif', color: 'var(--color-navy)', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px', transition: 'all 200ms' }}
                      aria-label={`Add ${event.name} to calendar`}
                    >
                      <Calendar size={11} /> Add to Calendar
                    </button>
                  </div>
                </article>
              </ScrollReveal>
            );
          })}
        </div>
      </div>

      <style>{`
        .event-card:hover { box-shadow: 0 8px 32px rgba(8,47,87,0.1) !important; transform: translateX(4px) !important; }
        @media (max-width: 768px) {
          .event-card { 
            grid-template-columns: 60px 1fr !important;
            padding: 16px 20px !important;
          }
          .event-card > *:last-child { 
            grid-column: 1/-1; 
            flex-direction: row !important;
            flex-wrap: wrap !important;
            justify-content: flex-start !important;
            align-items: center !important;
          }
          .event-card > *:last-child .btn-primary {
            flex: 1 1 auto;
          }
        }
        @media (max-width: 480px) {
          .event-card > *:last-child {
            flex-direction: column !important;
          }
          .event-card > *:last-child .btn-primary,
          .event-card > *:last-child button:last-child {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
}
