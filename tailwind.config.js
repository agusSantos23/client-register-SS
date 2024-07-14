/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        Myorange: '#E16428', 
        Mydark: '#2d3748',
        Mywhite: '#f8f8ff',
        
      },
    },
  },
  plugins: [],
}

