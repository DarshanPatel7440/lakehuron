import type { NextConfig } from 'next';
import fs from 'fs';
import path from 'path';

// Automatically ensure favicon assets are copied from /favicon to /public for static serving
try {
  const faviconDir = path.join(process.cwd(), 'favicon');
  const publicDir = path.join(process.cwd(), 'public');
  if (fs.existsSync(faviconDir)) {
    if (!fs.existsSync(publicDir)) {
      fs.mkdirSync(publicDir, { recursive: true });
    }
    const files = fs.readdirSync(faviconDir);
    for (const file of files) {
      const srcPath = path.join(faviconDir, file);
      const destPath = path.join(publicDir, file);
      if (!fs.existsSync(destPath) || file === 'site.webmanifest') {
        fs.copyFileSync(srcPath, destPath);
      }
    }
  }
} catch {
  // Silent catch to prevent dev console warnings
}

// Auto-copy Leadership Team photos to /public for Next.js <Image> serving
try {
  const leadershipDir = path.join(process.cwd(), 'Leadership Team');
  const publicDir = path.join(process.cwd(), 'public');
  if (fs.existsSync(leadershipDir)) {
    if (!fs.existsSync(publicDir)) {
      fs.mkdirSync(publicDir, { recursive: true });
    }
    const files = fs.readdirSync(leadershipDir);
    for (const file of files) {
      const srcPath = path.join(leadershipDir, file);
      const destPath = path.join(publicDir, file.toLowerCase().replace(/_/g, '-'));
      fs.copyFileSync(srcPath, destPath);
    }
  }
} catch {
  // Silent catch to prevent dev console warnings
}

// HTTP Security Headers — applied to all routes
const securityHeaders = [
  // Prevents the site from being embedded in iframes on other origins (clickjacking protection)
  { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
  // Prevents browsers from MIME-type sniffing (XSS vector)
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  // Controls how much referrer info is included in requests
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  // Disables access to browser features not needed by this site
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=(), payment=(), usb=(), interest-cohort=()',
  },
  // Forces HTTPS for 1 year (enable once live on HTTPS)
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=31536000; includeSubDomains; preload',
  },
  // Cross-origin resource policy
  { key: 'Cross-Origin-Opener-Policy', value: 'same-origin' },
  { key: 'Cross-Origin-Resource-Policy', value: 'same-origin' },
  // DNS prefetch control
  { key: 'X-DNS-Prefetch-Control', value: 'on' },
  // Content Security Policy — allows Google Fonts, Formspree, and Unsplash images
  {
    key: 'Content-Security-Policy',
    value: [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval'", // unsafe-eval needed for Next.js dev; tighten in prod
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      "font-src 'self' https://fonts.gstatic.com",
      "img-src 'self' data: blob: https://images.unsplash.com https://plus.unsplash.com https://res.cloudinary.com",
      "connect-src 'self' https://formspree.io",
      "frame-ancestors 'none'",
      "base-uri 'self'",
      "form-action 'self' https://formspree.io",
    ].join('; '),
  },
];

const nextConfig: NextConfig = {
  devIndicators: false,

  // Apply security headers to all routes
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: securityHeaders,
      },
    ];
  },

  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'res.cloudinary.com' },
      { protocol: 'https', hostname: 'plus.unsplash.com' },
    ],
    formats: ['image/avif', 'image/webp'],
    // Enable image optimization cache
    minimumCacheTTL: 60 * 60 * 24 * 7, // 7 days
  },

  // Enable gzip/brotli compression in production
  compress: true,

  // Remove X-Powered-By header (prevents framework fingerprinting)
  poweredByHeader: false,
};

export default nextConfig;
