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
    },
  },
  plugins: [],
}

