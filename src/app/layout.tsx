import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'Lake Huron Volleyball Club | Elite Training & Youth Programs | Lambton County, Ontario',
    template: '%s | Lake Huron Volleyball Club',
  },
  description:
    "Lake Huron Volleyball Club — Ontario's premier volleyball club for youth, competitive, and adult players. Nationally certified coaches, proven results, and a community built on values. Register today.",
  keywords: [
    'volleyball club Ontario',
    'youth volleyball Lake Huron',
    'competitive volleyball Canada',
    'volleyball training programs',
    'elite volleyball youth',
    'Lake Huron Volleyball Club',
    'Lambton County volleyball',
  ],
  authors: [{ name: 'Lake Huron Volleyball Club' }],
  creator: 'Lake Huron Volleyball Club',
  publisher: 'Lake Huron Volleyball Club',
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: { canonical: 'https://www.lakehuronvolleyball.ca' },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/site.webmanifest',
  openGraph: {
    type: 'website',
    locale: 'en_CA',
    url: 'https://www.lakehuronvolleyball.ca',
    siteName: 'Lake Huron Volleyball Club',
    title: 'Lake Huron Volleyball Club | Committed to Excellence in Volleyball',
    description:
      "Join Ontario's most dedicated youth volleyball club. Elite coaching, championship culture, community values.",
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Lake Huron Volleyball Club — Committed to Excellence in Volleyball',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lake Huron Volleyball Club | Committed to Excellence',
    description:
      'Elite volleyball training, youth programs, and championship culture — Lake Huron Volleyball Club, Lambton County, Ontario.',
    images: ['/og-image.jpg'],
    creator: '@LakeHuronVBClub',
  },
};

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'SportsOrganization',
      '@id': 'https://www.lakehuronvolleyball.ca/#organization',
      name: 'Lake Huron Volleyball Club',
      sport: 'Volleyball',
      foundingDate: '2009',
      url: 'https://www.lakehuronvolleyball.ca',
      logo: 'https://www.lakehuronvolleyball.ca/logo.png',
      address: {
        '@type': 'PostalAddress',
        addressRegion: 'ON',
        addressCountry: 'CA',
        addressLocality: 'Lambton County',
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
      publisher: { '@id': 'https://www.lakehuronvolleyball.ca/#organization' },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-CA" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,600&family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400&family=Inter:wght@300;400;500;600&family=Manrope:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body suppressHydrationWarning>
        <a href="#main-content" className="skip-to-main">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
