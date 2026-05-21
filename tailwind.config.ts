import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '1.5rem',
        lg: '2rem',
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        background: '#080810',
        surface: {
          DEFAULT: '#0F0F1A',
          2: '#13131F',
          3: '#1A1A2E',
        },
        accent: {
          violet: '#7C3AED',
          indigo: '#4F46E5',
          cyan: '#06B6D4',
        },
        border: 'rgba(255,255,255,0.08)',
        muted: '#94A3B8',
      },
      fontFamily: {
        display: ['var(--font-clash)', 'sans-serif'],
        body: ['var(--font-dm-sans)', 'sans-serif'],
        mono: ['var(--font-jetbrains)', 'monospace'],
      },
      fontSize: {
        'display-2xl': ['clamp(4rem, 10vw, 10rem)', { lineHeight: '0.9', letterSpacing: '-0.04em' }],
        'display-xl': ['clamp(3rem, 7vw, 7.5rem)', { lineHeight: '0.92', letterSpacing: '-0.03em' }],
        'display-lg': ['clamp(2.5rem, 5vw, 5.5rem)', { lineHeight: '1', letterSpacing: '-0.025em' }],
        'display-md': ['clamp(2rem, 4vw, 4rem)', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        'display-sm': ['clamp(1.5rem, 3vw, 2.5rem)', { lineHeight: '1.1', letterSpacing: '-0.015em' }],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'mesh-1':
          'radial-gradient(ellipse at 20% 50%, rgba(124,58,237,0.15) 0%, transparent 50%), radial-gradient(ellipse at 80% 20%, rgba(6,182,212,0.1) 0%, transparent 50%)',
        'mesh-2':
          'radial-gradient(ellipse at 80% 50%, rgba(6,182,212,0.08) 0%, transparent 50%), radial-gradient(ellipse at 20% 80%, rgba(124,58,237,0.12) 0%, transparent 50%)',
      },
      animation: {
        float: 'float 8s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'gradient-shift': 'gradientShift 6s linear infinite',
        'orb-float': 'orbFloat 24s ease-in-out infinite',
        shimmer: 'shimmer 5s ease-in-out infinite',
        breathing: 'breathing 6s ease-in-out infinite',
        'marquee-left': 'marqueeLeft 40s linear infinite',
        'marquee-right': 'marqueeRight 40s linear infinite',
      },
      keyframes: {
        marqueeLeft: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
        marqueeRight: {
          from: { transform: 'translateX(-50%)' },
          to: { transform: 'translateX(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(124,58,237,0.4)' },
          '50%': { boxShadow: '0 0 40px rgba(124,58,237,0.8)' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        orbFloat: {
          '0%, 100%': { transform: 'translate(-50%, -50%) scale(1)' },
          '33%': { transform: 'translate(-50%, -55%) scale(1.05)' },
          '66%': { transform: 'translate(-45%, -50%) scale(0.98)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        breathing: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.95', transform: 'scale(1.01)' },
        },
      },
      boxShadow: {
        'glow-violet': '0 0 30px rgba(124,58,237,0.35)',
        'glow-violet-sm': '0 0 15px rgba(124,58,237,0.3)',
        'glow-violet-lg': '0 0 50px rgba(124,58,237,0.5), 0 0 100px rgba(124,58,237,0.15)',
        'glow-cyan': '0 0 30px rgba(6,182,212,0.35)',
        'glow-cyan-sm': '0 0 15px rgba(6,182,212,0.3)',
        card: '0 1px 3px rgba(0,0,0,0.4), 0 1px 2px rgba(0,0,0,0.6)',
        'card-hover': '0 20px 60px rgba(0,0,0,0.5), 0 0 0 1px rgba(124,58,237,0.2)',
      },
    },
  },
  plugins: [],
}

export default config
