'use client';

/**
 * SeasonCalendar — Full interactive season schedule for Lake Huron Volleyball Club.
 *
 * STATUS: Future feature — NOT currently imported or rendered.
 * LOCATION: Copy to src/components/sections/SeasonCalendar.tsx when ready.
 * SEE: future-features/season-calendar/IMPLEMENTATION.md for integration steps.
 */

import { useState, useEffect, useMemo, useCallback } from 'react';
import { Calendar, MapPin, Clock, Tag, ChevronRight, Users, Star, Bell, Filter, CalendarX } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import sampleEvents from './sample-events.json';

/* ── Types ── */
interface SeasonEvent {
  id: string;
  title: string;
  description: string;
  date: string;
  month: string;
  day: string;
  startTime: string;
  endTime: string;
  location: string;
  venue: string;
  coach: string;
  ageGroup: string;
  category: string;
  skillLevel: string;
  registrationStatus: string;
  capacity: number | null;
  tags: string[];
  featured: boolean;
}

/* ── Constants ── */
const CATEGORIES = ['All', 'Tryouts', 'Travel', 'Skill Camps', 'House Leagues', 'Tournaments', 'Community', 'Workshops', 'Championship'];
const MONTHS = ['SEP', 'OCT', 'NOV', 'DEC', 'JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN'];
const MONTH_NAMES: Record<string, string> = {
  SEP: 'September', OCT: 'October', NOV: 'November', DEC: 'December',
  JAN: 'January', FEB: 'February', MAR: 'March', APR: 'April', MAY: 'May', JUN: 'June',
};

const categoryColors: Record<string, string> = {
  Tryouts: '#B97816', Travel: '#082F57', 'Skill Camps': '#0D3D6E',
  'House Leagues': '#3A3A3A', Tournaments: '#051E38', Community: '#8A9BAD',
  Workshops: '#8B5E10', Championship: '#051E38',
};

const statusStyles: Record<string, { bg: string; color: string; label: string }> = {
  open:          { bg: 'rgba(16,185,22,0.10)', color: '#0B8A12', label: 'Open' },
  closing_soon:  { bg: 'rgba(255,165,0,0.10)', color: '#CC8400', label: 'Closing Soon' },
  full:          { bg: 'rgba(220,38,38,0.10)', color: '#DC2626', label: 'Full' },
  coming_soon:   { bg: 'rgba(138,155,173,0.10)', color: '#8A9BAD', label: 'Coming Soon' },
  invite_only:   { bg: 'rgba(185,120,22,0.10)', color: '#B97816', label: 'Invite Only' },
  registered:    { bg: 'rgba(16,185,22,0.10)', color: '#0B8A12', label: 'Registered' },
  qualified:     { bg: 'rgba(185,120,22,0.10)', color: '#B97816', label: 'Qualified' },
  rsvp_required: { bg: 'rgba(185,120,22,0.10)', color: '#B97816', label: 'RSVP Required' },
  team_event:    { bg: 'rgba(8,47,87,0.10)', color: '#082F57', label: 'Team Event' },
  active_members:{ bg: 'rgba(16,185,22,0.10)', color: '#0B8A12', label: 'Members Only' },
};

/* ── Countdown sub-component ── */
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
    <div style={{ display: 'flex', gap: '8px', alignItems: 'center', flexWrap: 'wrap' }} aria-live="polite" aria-label={`Starts in ${timeLeft.days} days`}>
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

/* ── Skeleton loading card ── */
function SkeletonCard() {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '80px 1fr', gap: '24px', background: 'white', border: '1px solid rgba(8,47,87,0.06)', borderRadius: '12px', padding: '24px 28px' }}>
      <div>
        <div style={{ width: '40px', height: '12px', borderRadius: '4px', background: 'rgba(8,47,87,0.06)', marginBottom: '8px' }} className="skeleton-shimmer" />
        <div style={{ width: '50px', height: '36px', borderRadius: '4px', background: 'rgba(8,47,87,0.06)' }} className="skeleton-shimmer" />
      </div>
      <div>
        <div style={{ width: '80px', height: '18px', borderRadius: '9999px', background: 'rgba(8,47,87,0.06)', marginBottom: '12px' }} className="skeleton-shimmer" />
        <div style={{ width: '70%', height: '20px', borderRadius: '4px', background: 'rgba(8,47,87,0.06)', marginBottom: '12px' }} className="skeleton-shimmer" />
        <div style={{ width: '50%', height: '14px', borderRadius: '4px', background: 'rgba(8,47,87,0.06)' }} className="skeleton-shimmer" />
      </div>
    </div>
  );
}

/* ── Main Component ── */
export default function SeasonCalendar() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [activeMonth, setActiveMonth] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const events: SeasonEvent[] = sampleEvents as SeasonEvent[];

  // Simulate loading state (replace with real data fetching)
  useEffect(() => {
    const t = setTimeout(() => setIsLoading(false), 800);
    return () => clearTimeout(t);
  }, []);

  // Auto-detect current month on load
  useEffect(() => {
    const now = new Date();
    const monthAbbr = now.toLocaleString('en', { month: 'short' }).toUpperCase();
    if (MONTHS.includes(monthAbbr)) setActiveMonth(monthAbbr);
    else setActiveMonth('SEP');
  }, []);

  // Filter events
  const filteredEvents = useMemo(() => {
    return events.filter(e => activeCategory === 'All' || e.category === activeCategory);
  }, [events, activeCategory]);

  // Group by month
  const groupedEvents = useMemo(() => {
    const groups: Record<string, SeasonEvent[]> = {};
    MONTHS.forEach(m => { groups[m] = []; });
    filteredEvents.forEach(e => {
      if (groups[e.month]) groups[e.month].push(e);
    });
    return groups;
  }, [filteredEvents]);

  // Scroll to month section
  const scrollToMonth = useCallback((month: string) => {
    setActiveMonth(month);
    const el = document.getElementById(`cal-month-${month}`);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, []);

  // Generate iCal file for single event
  const downloadICS = (event: SeasonEvent) => {
    const dateStr = event.date.replace(/-/g, '');
    const ics = `BEGIN:VCALENDAR\nVERSION:2.0\nPRODID:-//Lake Huron VC//EN\nBEGIN:VEVENT\nSUMMARY:${event.title}\nDTSTART:${dateStr}\nLOCATION:${event.venue}\nDESCRIPTION:${event.description}\nUID:${event.id}@lakehuronvc.ca\nEND:VEVENT\nEND:VCALENDAR`;
    const blob = new Blob([ics], { type: 'text/calendar' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url; a.download = `${event.title}.ics`; a.click();
    URL.revokeObjectURL(url);
  };

  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const now = Date.now();
  const thirtyDays = 30 * 86400000;

  return (
    <section
      id="calendar"
      style={{ background: 'var(--color-ivory)', padding: 'clamp(80px, 10vw, 120px) 0', position: 'relative', overflow: 'hidden' }}
      aria-labelledby="calendar-heading"
    >
      <div className="section-container">

        {/* ── Section Header ── */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '48px', flexWrap: 'wrap', gap: '24px' }}>
          <div>
            <ScrollReveal variant="fadeUp">
              <span className="text-overline" style={{ display: 'inline-flex', alignItems: 'center', gap: '12px' }}>
                <span style={{ width: '32px', height: '1px', background: 'var(--color-gold)', display: 'inline-block' }} />
                Season Calendar
              </span>
            </ScrollReveal>
            <ScrollReveal variant="fadeUp" delay={100}>
              <h2 id="calendar-heading" className="text-section" style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', color: 'var(--color-navy-dark)', marginTop: '16px', maxWidth: '600px' }}>
                Your Complete Season<br />at a Glance
              </h2>
            </ScrollReveal>
            <ScrollReveal variant="fadeUp" delay={200}>
              <p style={{ color: 'var(--color-graphite)', marginTop: '16px', fontSize: '1rem', maxWidth: '480px', lineHeight: 1.7 }}>
                Every tryout, tournament, training session, and community event — all in one place. Filter by category or browse by month.
              </p>
            </ScrollReveal>
          </div>
          <ScrollReveal variant="fadeRight">
            <button onClick={scrollToContact} className="btn-primary" aria-label="Subscribe to season calendar">
              <Bell size={14} /> Subscribe to Calendar <ChevronRight size={12} />
            </button>
          </ScrollReveal>
        </div>

        {/* ── Filter Bar ── */}
        <ScrollReveal variant="scaleIn" delay={150}>
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '16px' }} role="tablist" aria-label="Filter events by category" className="cal-filter-bar">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                role="tab"
                aria-selected={activeCategory === cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '6px',
                  height: '36px', padding: '0 20px', borderRadius: '9999px',
                  border: activeCategory === cat ? '1px solid var(--color-gold)' : '1px solid rgba(8,47,87,0.12)',
                  background: activeCategory === cat ? 'var(--color-gold)' : 'white',
                  color: activeCategory === cat ? 'white' : 'var(--color-graphite)',
                  fontFamily: 'Manrope, sans-serif', fontWeight: 600, fontSize: '0.8rem',
                  cursor: 'pointer', transition: 'all 300ms cubic-bezier(0.16,1,0.3,1)',
                  whiteSpace: 'nowrap', minHeight: '44px',
                  boxShadow: activeCategory === cat ? '0 4px 12px rgba(185,120,22,0.25)' : 'none',
                }}
              >
                {cat === 'All' && <Filter size={12} />}
                {cat}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* ── Month Navigation ── */}
        <ScrollReveal variant="fadeUp" delay={200}>
          <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginBottom: '48px' }} role="tablist" aria-label="Navigate to month" className="cal-month-nav">
            {MONTHS.map(m => (
              <button
                key={m}
                role="tab"
                aria-selected={activeMonth === m}
                onClick={() => scrollToMonth(m)}
                style={{
                  height: '36px', padding: '0 16px', borderRadius: '9999px',
                  border: activeMonth === m ? '1px solid var(--color-navy)' : '1px solid rgba(8,47,87,0.1)',
                  background: activeMonth === m ? 'var(--color-navy)' : 'transparent',
                  color: activeMonth === m ? 'white' : 'var(--color-mist)',
                  fontFamily: 'Manrope, sans-serif', fontWeight: 700, fontSize: '0.75rem',
                  letterSpacing: '0.1em', cursor: 'pointer', minHeight: '44px',
                  transition: 'all 300ms cubic-bezier(0.16,1,0.3,1)',
                }}
              >
                {m}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* ── Loading State ── */}
        {isLoading && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {[1, 2, 3].map(i => <SkeletonCard key={i} />)}
          </div>
        )}

        {/* ── Timeline Body ── */}
        {!isLoading && (
          <div style={{ position: 'relative' }}>
            {MONTHS.map(month => {
              const monthEvents = groupedEvents[month];
              if (!monthEvents || monthEvents.length === 0) return null;

              const yearSuffix = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN'].includes(month) ? '2028' : '2027';

              return (
                <div key={month} id={`cal-month-${month}`} style={{ marginBottom: '64px', scrollMarginTop: '120px' }}>
                  <ScrollReveal variant="fadeUp">
                    <h3 style={{
                      fontFamily: 'Cormorant Garamond, serif', fontWeight: 600,
                      fontSize: 'clamp(1.5rem, 3vw, 2rem)', color: 'var(--color-navy)',
                      marginBottom: '24px', letterSpacing: '-0.02em',
                    }}>
                      {MONTH_NAMES[month]} {yearSuffix}
                    </h3>
                  </ScrollReveal>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }} role="list">
                    {monthEvents.map((event, i) => {
                      const eventDate = new Date(event.date);
                      const isUpcoming = eventDate.getTime() - now > 0 && eventDate.getTime() - now < thirtyDays;
                      const catColor = categoryColors[event.category] || 'var(--color-navy)';
                      const status = statusStyles[event.registrationStatus] || statusStyles.coming_soon;

                      return (
                        <ScrollReveal key={event.id} variant="fadeLeft" delay={i * 70}>
                          <article
                            role="listitem"
                            className="cal-event-card"
                            style={{
                              display: 'grid', gridTemplateColumns: '80px 1fr auto',
                              gap: 'clamp(12px, 3vw, 24px)', alignItems: 'center',
                              background: 'white',
                              border: '1px solid rgba(8,47,87,0.08)',
                              borderLeft: event.featured ? '4px solid var(--color-gold)' : `4px solid ${catColor}`,
                              borderRadius: '12px', padding: '24px 28px',
                              transition: 'all 300ms cubic-bezier(0.16,1,0.3,1)',
                            }}
                          >
                            {/* Date badge */}
                            <div style={{ textAlign: 'center' }}>
                              <div style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 800, fontSize: '0.65rem', letterSpacing: '0.12em', color: 'var(--color-gold)', textTransform: 'uppercase' }}>{event.month}</div>
                              <div style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 700, fontSize: '2.5rem', color: 'var(--color-navy)', lineHeight: 1 }}>{event.day}</div>
                            </div>

                            {/* Details */}
                            <div>
                              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px', flexWrap: 'wrap' }}>
                                <span style={{ padding: '3px 10px', borderRadius: '99px', background: `${catColor}15`, color: catColor, fontSize: '0.65rem', fontFamily: 'Manrope, sans-serif', fontWeight: 700, letterSpacing: '0.06em' }}>
                                  <Tag size={10} style={{ display: 'inline', marginRight: '4px' }} />{event.category}
                                </span>
                                <span style={{ padding: '2px 8px', borderRadius: '99px', background: status.bg, color: status.color, fontSize: '0.6rem', fontFamily: 'Manrope, sans-serif', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                                  {status.label}
                                </span>
                                {event.featured && (
                                  <span style={{ padding: '2px 8px', borderRadius: '99px', background: 'rgba(185,120,22,0.1)', color: 'var(--color-gold)', fontSize: '0.6rem', fontFamily: 'Manrope, sans-serif', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', display: 'inline-flex', alignItems: 'center', gap: '3px' }}>
                                    <Star size={8} /> Featured
                                  </span>
                                )}
                              </div>
                              <h4 style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 700, fontSize: '1.3rem', color: 'var(--color-navy-dark)', marginBottom: '8px', lineHeight: 1.3 }}>{event.title}</h4>
                              <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
                                <span style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.8rem', color: 'var(--color-graphite)', fontFamily: 'Manrope, sans-serif' }}>
                                  <MapPin size={12} style={{ color: 'var(--color-gold)' }} /> {event.location}
                                </span>
                                <span style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.8rem', color: 'var(--color-graphite)', fontFamily: 'Manrope, sans-serif' }}>
                                  <Clock size={12} style={{ color: 'var(--color-gold)' }} /> {event.startTime}{event.endTime ? ` – ${event.endTime}` : ''}
                                </span>
                                {event.ageGroup && event.ageGroup !== 'N/A' && (
                                  <span style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.8rem', color: 'var(--color-graphite)', fontFamily: 'Manrope, sans-serif' }}>
                                    <Users size={12} style={{ color: 'var(--color-gold)' }} /> {event.ageGroup}
                                  </span>
                                )}
                              </div>
                              {isUpcoming && (
                                <div style={{ marginTop: '10px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                                  <span style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.7rem', color: 'var(--color-gold)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em' }}>Starts in:</span>
                                  <Countdown targetDate={eventDate} />
                                </div>
                              )}
                            </div>

                            {/* CTAs */}
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'flex-end' }} className="cal-card-cta">
                              <button onClick={scrollToContact} className="btn-primary" style={{ padding: '10px 20px', fontSize: '0.8rem', whiteSpace: 'nowrap' }} aria-label={`Register for ${event.title}`}>
                                Register Now <ChevronRight size={12} />
                              </button>
                              <button
                                onClick={() => downloadICS(event)}
                                style={{ background: 'none', border: '1px solid rgba(8,47,87,0.15)', borderRadius: '4px', padding: '8px 16px', fontSize: '0.75rem', fontFamily: 'Manrope, sans-serif', color: 'var(--color-navy)', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px', transition: 'all 200ms' }}
                                aria-label={`Add ${event.title} to calendar`}
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
              );
            })}

            {/* Empty state */}
            {filteredEvents.length === 0 && (
              <div style={{ textAlign: 'center', padding: '80px 32px' }}>
                <CalendarX size={48} style={{ color: 'var(--color-mist)', margin: '0 auto 24px' }} />
                <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.5rem', color: 'var(--color-navy)', marginBottom: '12px' }}>
                  No events found
                </h3>
                <p style={{ fontFamily: 'Inter, sans-serif', color: 'var(--color-graphite)', fontSize: '0.95rem' }}>
                  No events match the selected category. Try a different filter or check back soon.
                </p>
                <button onClick={() => setActiveCategory('All')} className="btn-outline" style={{ marginTop: '24px' }}>
                  Show All Events
                </button>
              </div>
            )}
          </div>
        )}
      </div>

      {/* ── Responsive + Hover Styles ── */}
      <style>{`
        .cal-event-card:hover { box-shadow: 0 8px 32px rgba(8,47,87,0.1) !important; transform: translateX(4px) !important; }
        @keyframes skeleton-shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        .skeleton-shimmer {
          background: linear-gradient(90deg, rgba(8,47,87,0.04) 25%, rgba(8,47,87,0.08) 50%, rgba(8,47,87,0.04) 75%);
          background-size: 200% 100%;
          animation: skeleton-shimmer 1.5s ease-in-out infinite;
        }
        @media (max-width: 1024px) {
          .cal-event-card { grid-template-columns: 80px 1fr !important; }
          .cal-card-cta { grid-column: 1/-1; flex-direction: row !important; flex-wrap: wrap !important; }
        }
        @media (max-width: 768px) {
          .cal-filter-bar { flex-wrap: nowrap !important; overflow-x: auto; -webkit-overflow-scrolling: touch; scrollbar-width: none; }
          .cal-filter-bar::-webkit-scrollbar { display: none; }
          .cal-month-nav { flex-wrap: nowrap !important; overflow-x: auto; -webkit-overflow-scrolling: touch; scrollbar-width: none; }
          .cal-month-nav::-webkit-scrollbar { display: none; }
          .cal-event-card { grid-template-columns: 60px 1fr !important; padding: 16px 20px !important; }
          .cal-card-cta { grid-column: 1/-1; flex-direction: row !important; flex-wrap: wrap !important; justify-content: flex-start !important; }
        }
        @media (max-width: 480px) {
          .cal-card-cta { flex-direction: column !important; }
          .cal-card-cta button { width: 100%; justify-content: center; }
        }
      `}</style>
    </section>
  );
}
