/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '576px',
      'md': '960px',
      'lg': '1440px',
    },
    extend: {
      maxWidth: {
        'container': '1255px'
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"]
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}
