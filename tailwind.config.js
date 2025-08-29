/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e6f9ff',
          100: '#ccf3ff',
          200: '#99e7ff',
          300: '#66dbff',
          400: '#33cfff',
          500: '#00c3ff',
          600: '#009ccc',
          700: '#007599',
          800: '#004e66',
          900: '#002733',
          950: '#001319',
        },
        secondary: {
          50: '#e6f2ff',
          100: '#cce5ff',
          200: '#99cbff',
          300: '#66b2ff',
          400: '#3398ff',
          500: '#007eff',
          600: '#0065cc',
          700: '#004c99',
          800: '#003266',
          900: '#001933',
          950: '#000c19',
        },
        accent: {
          50: '#e6fffa',
          100: '#ccfff5',
          200: '#99ffeb',
          300: '#66ffe0',
          400: '#33ffd6',
          500: '#00ffcc',
          600: '#00cca3',
          700: '#00997a',
          800: '#006652',
          900: '#003329',
          950: '#001a14',
        },
        success: {
          50: '#eefff5',
          100: '#d7ffea',
          200: '#b2ffd6',
          300: '#79ffb5',
          400: '#3efa8e',
          500: '#19e574',
          600: '#04bf59',
          700: '#04974a',
          800: '#09773e',
          900: '#0a6236',
          950: '#003820',
        },
        warning: {
          50: '#fffbea',
          100: '#fff5c5',
          200: '#ffea85',
          300: '#ffd946',
          400: '#ffc51b',
          500: '#faa702',
          600: '#dd7d00',
          700: '#b35702',
          800: '#934208',
          900: '#7a380c',
          950: '#461a00',
        },
        error: {
          50: '#fff1f2',
          100: '#ffe4e6',
          200: '#fecdd3',
          300: '#fda4af',
          400: '#fb7185',
          500: '#f43f5e',
          600: '#e11d48',
          700: '#be123c',
          800: '#9f1239',
          900: '#881337',
          950: '#4c0519',
        },
        dark: {
          100: '#1e2937',
          200: '#1a2431',
          300: '#161f2b',
          400: '#121a25',
          500: '#0e151f',
          600: '#0a1019',
          700: '#060b13',
          800: '#02060d',
          900: '#010307',
          950: '#000102',
        },
      },
      fontFamily: {
        sans: ['Arial', 'system-ui', 'sans-serif'],
        display: ['Arial', 'system-ui', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'float': 'float 6s ease-in-out infinite',
        'radar': 'radar 3s ease-in-out infinite',
        'grid-flow': 'grid-flow 20s linear infinite',
      },
      keyframes: {
        pulse: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.5 },
        },
        glow: {
          '0%': {
            boxShadow: '0 0 5px rgba(0, 195, 255, 0.5), 0 0 10px rgba(0, 195, 255, 0.3)'
          },
          '100%': {
            boxShadow: '0 0 10px rgba(0, 195, 255, 0.8), 0 0 20px rgba(0, 195, 255, 0.5), 0 0 30px rgba(0, 195, 255, 0.3)'
          }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        radar: {
          '0%': {
            transform: 'scale(1)',
            opacity: 0.6,
          },
          '50%': {
            transform: 'scale(1.5)',
            opacity: 0,
          },
          '100%': {
            transform: 'scale(1)',
            opacity: 0.6,
          }
        },
        'grid-flow': {
          '0%': { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '40px 40px' },
        }
      },
      backgroundImage: {
        'tech-grid': 'linear-gradient(to right, rgba(0, 195, 255, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 195, 255, 0.1) 1px, transparent 1px)',
        'radial-glow': 'radial-gradient(circle at center, rgba(0, 195, 255, 0.15) 0%, transparent 70%)',
        'secure-vault': 'radial-gradient(circle at center, rgba(0, 195, 255, 0.2) 0%, rgba(0, 0, 0, 0.95) 100%)',
      },
      boxShadow: {
        'neon': '0 0 5px rgba(0, 195, 255, 0.5), 0 0 10px rgba(0, 195, 255, 0.3)',
        'neon-hover': '0 0 10px rgba(0, 195, 255, 0.8), 0 0 20px rgba(0, 195, 255, 0.5), 0 0 30px rgba(0, 195, 255, 0.3)',
        'neon-pulse': '0 0 15px rgba(0, 195, 255, 0.6)',
      },
    },
  },
  plugins: [],
};