'use client';

import { useState } from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';

type Category = 'All' | 'Training' | 'Competitions' | 'Community' | 'Events' | 'Beach';

const categories: Category[] = ['All', 'Training', 'Competitions', 'Community', 'Events', 'Beach'];

/* ─── Verified working Unsplash sports photos ───────────────── */
const galleryImages = [
  { id: 'g1',  src: 'https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?w=800&q=80', alt: 'Lake Huron athletes competing in championship match',  category: 'Competitions' as Category, event: 'Provincial Championship 2024' },
  { id: 'g2',  src: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=800&q=80', alt: 'High-intensity team training session',              category: 'Training'      as Category, event: 'Elite Training Camp 2024' },
  { id: 'g3',  src: 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=800&q=80', alt: 'Beach volleyball summer tournament action',         category: 'Beach'         as Category, event: 'Summer Beach Series 2024' },
  { id: 'g4',  src: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=800&q=80',    alt: 'Team celebration after season championship',        category: 'Community'     as Category, event: 'Season Wrap Party 2023' },
  { id: 'g5',  src: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&q=80', alt: 'Athletes in action at indoor tournament',           category: 'Competitions'  as Category, event: 'Regionals 2024' },
  { id: 'g6',  src: 'https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=800&q=80',    alt: 'Strength and conditioning training session',        category: 'Training'      as Category, event: 'Pre-Season Camp 2024' },
  { id: 'g7',  src: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?w=800&q=80', alt: 'Year-end awards and recognition gala',             category: 'Events'        as Category, event: 'Year-End Awards Gala 2023' },
  { id: 'g8',  src: 'https://images.unsplash.com/photo-1547941126-3d5322b218b0?w=800&q=80',    alt: 'Lake Huron community fundraiser event',                 category: 'Community'     as Category, event: 'Community Day 2024' },
  { id: 'g9',  src: 'https://images.unsplash.com/photo-1567446537708-ac4aa75c9c28?w=800&q=80', alt: 'Beach volleyball training on the shore',            category: 'Beach'         as Category, event: 'Beach Training Series' },
  { id: 'g10', src: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?w=800&q=80', alt: 'Athlete warm-up and stretching routine',            category: 'Training'      as Category, event: 'Pre-Match Warmup' },
  { id: 'g11', src: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80',    alt: 'Championship trophy and medal ceremony',            category: 'Events'        as Category, event: 'Trophy Ceremony 2024' },
  { id: 'g12', src: 'https://images.unsplash.com/photo-1521412644187-c49fa049e84d?w=800&q=80', alt: 'Team bonding and community event',                  category: 'Community'     as Category, event: 'Team Bonding Night 2024' },
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState<Category>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered = activeCategory === 'All' ? galleryImages : galleryImages.filter(img => img.category === activeCategory);

  const openLightbox = (idx: number) => setLightboxIndex(idx);
  const closeLightbox = () => setLightboxIndex(null);
  const prevImage = () => setLightboxIndex(i => i !== null ? (i - 1 + filtered.length) % filtered.length : null);
  const nextImage = () => setLightboxIndex(i => i !== null ? (i + 1) % filtered.length : null);

  return (
    <section
      id="gallery"
      style={{ background: 'var(--color-ivory)', padding: 'clamp(80px, 10vw, 120px) 0' }}
      aria-labelledby="gallery-heading"
    >
      <div className="section-container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <ScrollReveal variant="fadeUp">
            <span className="text-overline" style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', justifyContent: 'center' }}>
              <span style={{ width: '32px', height: '1px', background: 'var(--color-gold)', display: 'inline-block' }} />
              Photo Gallery
              <span style={{ width: '32px', height: '1px', background: 'var(--color-gold)', display: 'inline-block' }} />
            </span>
          </ScrollReveal>
          <ScrollReveal variant="fadeUp" delay={100}>
            <h2 id="gallery-heading" className="text-section" style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', color: 'var(--color-navy-dark)', marginTop: '16px' }}>
              Moments That Define Us
            </h2>
          </ScrollReveal>
        </div>

        {/* Category Filters */}
        <ScrollReveal variant="fadeUp" delay={200}>
          <div style={{ display: 'flex', gap: '8px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '48px' }} role="tablist" aria-label="Gallery category filter">
            {categories.map(cat => (
              <button
                key={cat}
                role="tab"
                aria-selected={activeCategory === cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  padding: '10px 24px',
                  borderRadius: '99px',
                  border: activeCategory === cat ? 'none' : '1px solid rgba(8,47,87,0.2)',
                  background: activeCategory === cat ? 'var(--color-navy)' : 'transparent',
                  color: activeCategory === cat ? 'white' : 'var(--color-graphite)',
                  fontFamily: 'Manrope, sans-serif',
                  fontWeight: 600,
                  fontSize: '0.8rem',
                  letterSpacing: '0.05em',
                  cursor: 'pointer',
                  transition: 'all 300ms cubic-bezier(0.16,1,0.3,1)',
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Uniform CSS Grid — no gaps, no orphan rows */}
        <div className="gallery-grid" role="list" aria-label="Gallery images">
          {filtered.map((img, i) => (
            <ScrollReveal key={img.id} variant="scaleIn" delay={i * 60}>
              <div
                role="listitem"
                className="gallery-item"
                onClick={() => openLightbox(i)}
                tabIndex={0}
                onKeyDown={e => { if (e.key === 'Enter') openLightbox(i); }}
                aria-label={`Open ${img.alt} in lightbox`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="gallery-img"
                />
                <div className="gallery-overlay">
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', width: '100%' }}>
                    <div>
                      <span style={{ display: 'inline-block', padding: '3px 10px', background: 'rgba(185,120,22,0.85)', borderRadius: '99px', fontSize: '0.65rem', fontFamily: 'Manrope, sans-serif', fontWeight: 700, color: 'white', letterSpacing: '0.05em', marginBottom: '6px' }}>{img.category}</span>
                      <p style={{ color: 'white', fontSize: '0.78rem', fontFamily: 'Manrope, sans-serif', lineHeight: 1.3, margin: 0 }}>{img.event}</p>
                    </div>
                    <ZoomIn size={20} style={{ color: 'white', flexShrink: 0 }} />
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          style={{ position: 'fixed', inset: 0, zIndex: 9998, background: 'rgba(5,30,56,0.97)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          role="dialog"
          aria-modal="true"
          aria-label={`Image lightbox: ${filtered[lightboxIndex]?.alt}`}
          onClick={closeLightbox}
        >
          <button onClick={e => { e.stopPropagation(); closeLightbox(); }} style={{ position: 'absolute', top: '24px', right: '24px', background: 'rgba(255,255,255,0.1)', border: 'none', borderRadius: '50%', width: '48px', height: '48px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', cursor: 'pointer' }} aria-label="Close lightbox">
            <X size={20} />
          </button>
          <button onClick={e => { e.stopPropagation(); prevImage(); }} style={{ position: 'absolute', left: '24px', background: 'rgba(255,255,255,0.1)', border: 'none', borderRadius: '50%', width: '56px', height: '56px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', cursor: 'pointer' }} aria-label="Previous image">
            <ChevronLeft size={24} />
          </button>
          <div onClick={e => e.stopPropagation()} style={{ maxWidth: '90vw', maxHeight: '85vh', position: 'relative' }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={filtered[lightboxIndex].src} alt={filtered[lightboxIndex].alt} loading="lazy" style={{ objectFit: 'contain', maxHeight: '85vh', maxWidth: '90vw', width: 'auto', borderRadius: '12px', display: 'block' }} />
            <div style={{ textAlign: 'center', marginTop: '16px', color: 'rgba(255,255,255,0.7)', fontFamily: 'Manrope, sans-serif', fontSize: '0.85rem' }}>
              {filtered[lightboxIndex].event} · {lightboxIndex + 1} / {filtered.length}
            </div>
          </div>
          <button onClick={e => { e.stopPropagation(); nextImage(); }} style={{ position: 'absolute', right: '24px', background: 'rgba(255,255,255,0.1)', border: 'none', borderRadius: '50%', width: '56px', height: '56px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', cursor: 'pointer' }} aria-label="Next image">
            <ChevronRight size={24} />
          </button>
        </div>
      )}

      <style>{`
        /* ── Perfect uniform grid ────────────────────── */
        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
        }

        /* Every cell has a locked 4:3 aspect ratio — no gaps ever */
        .gallery-item {
          position: relative;
          border-radius: 16px;
          overflow: hidden;
          cursor: pointer;
          aspect-ratio: 4 / 3;
          background: #0d2340;  /* navy placeholder while image loads */
        }

        .gallery-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 500ms cubic-bezier(0.16,1,0.3,1);
        }

        .gallery-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(5,30,56,0.85) 0%, transparent 55%);
          opacity: 0;
          transition: opacity 300ms ease;
          display: flex;
          align-items: flex-end;
          padding: 16px;
        }

        .gallery-item:hover .gallery-img   { transform: scale(1.06); }
        .gallery-item:hover .gallery-overlay { opacity: 1; }
        .gallery-item:focus-visible { outline: 2px solid var(--color-gold); outline-offset: 2px; }

        /* Responsive breakpoints */
        @media (max-width: 1100px) { .gallery-grid { grid-template-columns: repeat(3, 1fr); } }
        @media (max-width: 768px)  { .gallery-grid { grid-template-columns: repeat(2, 1fr); gap: 12px; } }
        @media (max-width: 480px)  { .gallery-grid { grid-template-columns: 1fr; gap: 12px; } }
      `}</style>
    </section>
  );
}
