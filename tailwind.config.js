/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        keyframes: {
          fadeIn: {
            '0%': { opacity: '0', transform: 'translate(-50%, -50%) scale(0.8)' },
            '100%': { opacity: '1', transform: 'translate(-50%, -50%) scale(1)' },
          },
          'phone-flip': {
            '0%': { transform: 'rotateZ(0deg)' },
            '100%': { transform: 'rotateZ(360deg)' },
          },
        },
        animation: {
          fadeIn: 'fadeIn 0.5s ease-out forwards',
          'phone-flip': 'phone-flip 2s infinite',
        },
        // Add width control for mobile views
        screens: {
          'sm': '640px',
          'md': '768px',
          'lg': '1024px',
          'xl': '1280px',
        },
        maxWidth: {
          'screen-sm': '100%',
          'screen-md': '100%',
          'screen-lg': '100%',
        }
      },
    },
    plugins: [
      function({ addUtilities }) {
        addUtilities({
          '.transform-style-preserve-3d': {
            'transform-style': 'preserve-3d',
          },
          '.backface-hidden': {
            'backface-visibility': 'hidden',
          },
          // Add utility to prevent horizontal overflow
          '.no-horizontal-overflow': {
            'overflow-x': 'hidden',
            'width': '100%',
            'max-width': '100vw'
          }
        })
      }
    ],
  }
  