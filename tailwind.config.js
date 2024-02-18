/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
      spacing: {
        '1vw': '1vw',
      },
      colors: {
        'custom-color': '#e5e5e5',
        'custom-black': '#000503',
      },
      backgroundImage:({
        'coffee': "url('./coffee.jpg')",
      }),
      opacity: {
        '50': '0.5',
      },
      zIndex: {
        '-10': '-10',
      },
      width: {
        '1350px': '1350px',
        '700px': '700px',
        '400px': '400px',
        '90%': '90%',
        '80%': '80%',
        '40%': '40%',
      },
      height: {
        '650px': '650px',
        '120px': '120px',
      },
      top: {
        '100px': '100px',
      },
      bottom: {
        '-380px': '-380px',
      },
      boxShadow: {
        'custom': '0 0 10px rgba(0, 0, 0, 0.5)',
      },
    },
  },
  plugins: [],
}