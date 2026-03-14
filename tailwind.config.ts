import type { Config } from 'tailwindcss'
const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './lib/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#080812', surface: '#0f0f1e', surface2: '#161628',
        bdr: '#1e1e3f', accent: '#f72585', lime: '#b5ff39',
        cyan: '#4cc9f0', violet: '#7209b7', muted: '#4a4a7a', txt: '#e8e8ff',
      },
      fontFamily: {
        heading: ['var(--font-righteous)', 'cursive'],
        body: ['var(--font-dm-sans)', 'sans-serif'],
        mono: ['var(--font-jetbrains)', 'monospace'],
      },
      keyframes: {
        float: { '0%,100%': { transform: 'translateY(0) rotate(0deg)' }, '50%': { transform: 'translateY(-16px) rotate(3deg)' } },
        'pulse-glow': { '0%,100%': { opacity: '0.4' }, '50%': { opacity: '1' } },
        shimmer: { '0%': { backgroundPosition: '-200% center' }, '100%': { backgroundPosition: '200% center' } },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        shimmer: 'shimmer 1.5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
export default config
