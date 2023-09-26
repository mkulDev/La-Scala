/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      display: 'Cormorant Upright',
      laScala: 'Tangerine',
      body: 'Open Sans'
    },

    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))'
      },
      colors: {
        primary: '#dcca87'
      },
      animation: {
        fade: 'fade 1s ease-in-out'
      },
      keyframes: {
        fade: {
          '0%': {  opacity: 0 },
          '100%': {  opacity: 1 }
        }
      }
    }
  },
  plugins: []
}
