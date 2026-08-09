import type { Metadata } from 'next';
import './globals.css';

// ─── Site-wide Metadata ──────────────────────────────────────────────────────
export const metadata: Metadata = {
  metadataBase: new URL('https://www.lakehuronvolleyball.ca'),
  title: {
    default: 'Lake Huron Volleyball Club | Elite Training & Youth Programs | Lambton County, Ontario',
    template: '%s | Lake Huron Volleyball Club',
  },
  description:
    "Lake Huron Volleyball Club — Ontario's premier community volleyball club for youth, competitive, and adult players in Petrolia and Lambton County. Nationally certified coaches, OVA-sanctioned programs, and a culture families can trust. Register today.",
  keywords: [
    'volleyball club Ontario',
    'youth volleyball Lambton County',
    'youth volleyball Petrolia',
    'competitive volleyball Canada',
    'volleyball training programs',
    'elite volleyball youth Ontario',
    'Lake Huron Volleyball Club',
    'Lambton County volleyball',
    'OVA volleyball club',
    'Ontario Volleyball Association',
    'kids volleyball near me',
  ],
  authors: [{ name: 'Lake Huron Volleyball Club', url: 'https://www.lakehuronvolleyball.ca' }],
  creator: 'Lake Huron Volleyball Club',
  publisher: 'Lake Huron Volleyball Club',
  applicationName: 'Lake Huron Volleyball Club',
  generator: 'Next.js',
  category: 'Sports',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://www.lakehuronvolleyball.ca',
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
  },
  manifest: '/site.webmanifest',
  openGraph: {
    type: 'website',
    locale: 'en_CA',
    url: 'https://www.lakehuronvolleyball.ca',
    siteName: 'Lake Huron Volleyball Club',
    title: 'Lake Huron Volleyball Club | Elite Community Volleyball in Lambton County',
    description:
      "Join Ontario's most dedicated youth volleyball club. OVA-sanctioned programs, elite coaching, championship culture, and a community built on values — in Petrolia and Lambton County.",
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Lake Huron Volleyball Club — Building Champions, Creating Leaders, Inspiring Community',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@LakeHuronVBClub',
    creator: '@LakeHuronVBClub',
    title: 'Lake Huron Volleyball Club | Elite Youth Volleyball in Ontario',
    description:
      'OVA-sanctioned volleyball training, youth programs, and championship culture — Lake Huron Volleyball Club, Petrolia, Lambton County, Ontario.',
    images: [
      {
        url: '/og-image.jpg',
        alt: 'Lake Huron Volleyball Club',
      },
    ],
  },
};

// ─── JSON-LD Structured Data ─────────────────────────────────────────────────
const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['SportsOrganization', 'LocalBusiness'],
      '@id': 'https://www.lakehuronvolleyball.ca/#organization',
      name: 'Lake Huron Volleyball Club',
      alternateName: 'LHVC',
      sport: 'Volleyball',
      url: 'https://www.lakehuronvolleyball.ca',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.lakehuronvolleyball.ca/logo.png',
        width: 512,
        height: 512,
      },
      image: 'https://www.lakehuronvolleyball.ca/og-image.jpg',
      description:
        'Lake Huron Volleyball Club is a community-driven youth volleyball club in Petrolia and Lambton County, Ontario. We provide OVA-sanctioned competitive programs, youth development, and coaching opportunities for athletes of all levels.',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Petrolia',
        addressRegion: 'ON',
        addressCountry: 'CA',
        description: 'Lambton County, Ontario, Canada',
      },
      areaServed: {
        '@type': 'AdministrativeArea',
        name: 'Lambton County, Ontario',
      },
      email: 'info@lakehuronvc.ca',
      contactPoint: {
        '@type': 'ContactPoint',
        email: 'info@lakehuronvc.ca',
        contactType: 'Customer Service',
        availableLanguage: 'English',
      },
      sameAs: [
        'https://instagram.com/lakehuronvbclub',
        'https://facebook.com/lakehuronvbclub',
      ],
    },
    {
      '@type': 'WebSite',
      '@id': 'https://www.lakehuronvolleyball.ca/#website',
      url: 'https://www.lakehuronvolleyball.ca',
      name: 'Lake Huron Volleyball Club',
      description: 'Official website of the Lake Huron Volleyball Club — Lambton County, Ontario.',
      publisher: { '@id': 'https://www.lakehuronvolleyball.ca/#organization' },
      inLanguage: 'en-CA',
    },
    {
      '@type': 'WebPage',
      '@id': 'https://www.lakehuronvolleyball.ca/#webpage',
      url: 'https://www.lakehuronvolleyball.ca',
      name: 'Lake Huron Volleyball Club | Elite Training & Youth Programs | Lambton County',
      isPartOf: { '@id': 'https://www.lakehuronvolleyball.ca/#website' },
      about: { '@id': 'https://www.lakehuronvolleyball.ca/#organization' },
      description:
        "Official homepage of the Lake Huron Volleyball Club. Learn about our youth programs, coaching team, OVA competition pathways, and how to register.",
      inLanguage: 'en-CA',
      potentialAction: {
        '@type': 'ReadAction',
        target: ['https://www.lakehuronvolleyball.ca'],
      },
    },
  ],
};

// ─── Root Layout ─────────────────────────────────────────────────────────────
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-CA" suppressHydrationWarning>
      <head>
        {/* Theme color for browser chrome (mobile) */}
        <meta name="theme-color" content="#082F57" />
        <meta name="msapplication-TileColor" content="#082F57" />
        <meta name="color-scheme" content="dark light" />

        {/* Performance: preconnect to font origins BEFORE requesting fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Google Fonts — single request with display=swap for CLS prevention */}
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,600&family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400&family=Inter:wght@300;400;500;600&family=Manrope:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />

        {/* Performance: dns-prefetch for external image CDNs */}
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://formspree.io" />

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body suppressHydrationWarning>
        {/* Accessibility: skip navigation link for keyboard/screen reader users */}
        <a href="#main-content" className="skip-to-main">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
