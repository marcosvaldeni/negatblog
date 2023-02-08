/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
    './index.html'
  ],
  theme: {
    extend: {
      blur: {
        '3xl': '106px'
      },
      colors: {
        'blue': '#3294F8',
        'base-title': '#E7EDF4',
        'base-subtitle': '#C4D4E3',
        'base-text': '#AFC2D4',
        'base-span': '#7B96B2',
        'base-label': '#3A536B',
        'base-border': '#1C2F41',
        'base-post': '#112131',
        'base-profile': '#0B1B2B',
        'base-background': '#071422',
        'base-input': '#040F1A',
        'background-banner': '#14589C'
      }
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '888px',
    }
  },
  plugins: [],
}
