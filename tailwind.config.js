/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'bigcard': '8px 8px 0px',
        'google': '2.5px 2.5px 0px #DB4437'
      },
      colors:{
        'tan': '#f1ece2',
      }
    },
  },
  plugins: [],
}

