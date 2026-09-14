/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#0A0C0A',
          soft: '#111411',
          card: '#151915',
          line: '#262B26',
        },
        paper: '#F2F3EC',
        lime: {
          DEFAULT: '#C8F04B',
          dim: '#A3CC2E',
          ink: '#1A2200',
        },
        primary: '#0A0C0A',
        accent: {
          DEFAULT: '#65A30D',
          light: '#C8F04B',
          dark: '#3F6212',
        },
        surface: '#151915',
        muted: '#9AA39A',
        text: '#EDF2E7',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'Menlo', 'monospace'],
      },
      boxShadow: {
        glow: '0 0 40px -10px rgba(200,240,75,0.5)',
        card: '0 20px 60px -20px rgba(0,0,0,0.5)',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        blink: {
          '0%,100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
      },
      animation: {
        marquee: 'marquee 22s linear infinite',
        blink: 'blink 1.1s step-end infinite',
      },
    },
  },
  plugins: [],
};
