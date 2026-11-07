/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#0a0908',
          soft: '#14110f',
          warm: '#1a1714',
          charcoal: '#2a2724',
        },
        paper: {
          DEFAULT: '#ffffff',
          bone: '#ffffff',
          cream: '#fcfbf9',
        },
        gold: {
          DEFAULT: '#c9a961',
          deep: '#a88a45',
          pale: '#e8d5a3',
          bright: '#d4b76a',
        },
        ash: {
          DEFAULT: '#8a8580',
          soft: '#b8b3ac',
        },
        rust: '#b8654a',
      },
      fontFamily: {
        display: ['Fraunces', 'Playfair Display', 'Georgia', 'serif'],
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      transitionTimingFunction: {
        editorial: 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      boxShadow: {
        editorial: '0 40px 100px -30px rgba(10, 9, 8, 0.2), 0 15px 40px -10px rgba(10, 9, 8, 0.1)',
        card: '0 20px 60px -20px rgba(10, 9, 8, 0.15)',
        'card-hover': '0 30px 80px -20px rgba(10, 9, 8, 0.2)',
      },
    },
  },
  plugins: [],
}
