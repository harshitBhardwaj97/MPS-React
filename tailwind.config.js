/** @type {import('tailwindcss').Config} */
import forms from '@tailwindcss/forms';

export default {
  content: ['./index.html', './src/**/*.{html,jsx}'],
  theme: {
    extend: {
      colors: {
        sage: {
          50: '#e6f4e3',
          100: '#cfe8c6',
          200: '#a8d89e',
          300: '#8fc77a',
          400: '#7ab65e',
          500: '#6a9c4b', // Sage green (primary color)
          600: '#567c3d',
          700: '#496639',
          800: '#3c5033',
          900: '#2f3a2d'
        },
        // You can add more custom colors here if needed
        purpleLight: '#e6d0f4',
        purpleDark: '#5d3f6b',
        plum: '#4a2c6e',
        primaryBlue: '#7091E6'
      }
    }
  },
  plugins: [forms]
};
