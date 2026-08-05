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

const nextConfig: NextConfig = {
  devIndicators: false,
  experimental: {
    allowedDevOrigins: ['192.168.29.189:3000', 'localhost:3000'],
  },
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'res.cloudinary.com' },
      { protocol: 'https', hostname: 'plus.unsplash.com' },
    ],
    formats: ['image/avif', 'image/webp'],
  },
};

export default nextConfig;
