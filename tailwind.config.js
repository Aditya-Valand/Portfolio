/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
       roboto: ['var(--font-roboto)'],
       heading: ['var(--font-heading)'],
      },
    },
  },
  plugins: [],
};
