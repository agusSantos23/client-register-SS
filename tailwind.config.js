/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        Mylightorange: '#FF9269',
        Myorange: '#E16428', 
        Mydark: '#2C2C2C',
        Mywhite: '#f8f8ff',
        
      },
      dropShadow: {
        'diffuse': '0px 4px 10px rgba(255, 255, 255, 0.1)',
      },

      keyframes: {
        fadeOut: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
      },
      animation: {
        fadeOut: 'fadeOut 2s ease-in-out infinite',
        fadeOutDelay1: 'fadeOut 2s ease-in-out infinite .5s',
        fadeOutDelay2: 'fadeOut 2s ease-in-out infinite 1s',
      },
    },
  },
  plugins: [],
}

