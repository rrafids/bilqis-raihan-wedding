/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'parisienne': 'Parisienne',
        'adelio': 'adelio',
        'millerstone': 'millerstone',
        'deluxe-edition': 'deluxe-edition',
        'royal-wedding': 'royal-wedding',
        'times-new-roman': 'times-new-roman',
      }
    }
  },
  plugins: [],
}

