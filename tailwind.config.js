/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './styles/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    colors:
    {
      "myBlack":"#202123",
      "bg":"#444654",
      "field":"#343541",
      "text":"#ece1c6",
      "subtitle":"#808ea0",
      "fieldBorder":"#303139",
      "placeholder":"#8e8ea0",
      "myYellow":"#fae69e",
    }
  },
  plugins: [],
}
