import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#082F57',
          dark: '#051E38',
          mid: '#0D3D6E',
          surface: '#071525',
        },
        gold: {
          DEFAULT: '#B97816',
          light: '#D4960E',
          pale: '#F0D080',
          bronze: '#8B5E10',
        },
        ivory: {
          DEFAULT: '#F5F0E8',
          dark: '#EDE6D6',
        },
        charcoal: '#1C1C1C',
        graphite: '#3A3A3A',
        mist: '#8A9BAD',
      },
      fontFamily: {
        display: ['Cormorant Garamond', 'Georgia', 'serif'],
        editorial: ['Playfair Display', 'Georgia', 'serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
        ui: ['Manrope', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        hero: 'clamp(4rem, 9vw, 9rem)',
        section: 'clamp(2.8rem, 5vw, 5.5rem)',
        sub: 'clamp(1.5rem, 2.5vw, 2.5rem)',
        lead: 'clamp(1.1rem, 1.5vw, 1.375rem)',
      },
      spacing: {
        '18': '72px',
        '22': '88px',
        '30': '120px',
      },
      borderRadius: {
        pill: '9999px',
      },
      boxShadow: {
        card: '0 4px 24px rgba(8, 47, 87, 0.12)',
        'card-hover': '0 16px 48px rgba(8, 47, 87, 0.22)',
        'gold-glow': '0 0 32px rgba(185, 120, 22, 0.25)',
        glass: 'inset 0 1px 0 rgba(255,255,255,0.1)',
      },
      backgroundImage: {
        'gradient-navy': 'linear-gradient(135deg, #082F57 0%, #051E38 100%)',
        'gradient-gold': 'linear-gradient(135deg, #B97816 0%, #8B5E10 100%)',
        'gradient-hero': 'linear-gradient(180deg, rgba(5,30,56,0.85) 0%, rgba(5,30,56,0.60) 60%, rgba(5,30,56,0.92) 100%)',
      },
      transitionTimingFunction: {
        smooth: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        spring: 'cubic-bezier(0.34, 1.56, 0.64, 1.0)',
        expo: 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      animation: {
        'gold-pulse': 'goldPulse 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'scroll-bounce': 'scrollBounce 2.5s ease-in-out infinite',
        'draw': 'draw 1.5s ease forwards',
        'spin-once': 'spinOnce 0.8s ease forwards',
        'fade-in': 'fadeIn 0.6s ease forwards',
        'slide-up': 'slideUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
      keyframes: {
        goldPulse: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(185, 120, 22, 0.0)' },
          '50%': { boxShadow: '0 0 32px rgba(185, 120, 22, 0.4)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(-8px)' },
          '50%': { transform: 'translateY(8px)' },
        },
        scrollBounce: {
          '0%, 100%': { transform: 'translateX(-50%) translateY(0)' },
          '50%': { transform: 'translateX(-50%) translateY(8px)' },
        },
        draw: {
          from: { strokeDashoffset: '1000' },
          to: { strokeDashoffset: '0' },
        },
        spinOnce: {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        slideUp: {
          from: { opacity: '0', transform: 'translateY(30px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
