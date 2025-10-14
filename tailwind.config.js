/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2E94B9', // pink-500
        'primary-light': '#fdf2f8', // pink-50
        'primary-dark': '#2E94B9', // pink-600
        'primary-darker': '#99235C', // pink-700
        secondary: '#99235C', // coral
        accent: '#2E94B9',  // '#52bed6', light blue/cyan
        'accent-dark': '#45a5bb', // darker shade of accent
        'accent-darker': '#2f6c7a', // even darker shade of accent
        'accent-light': '#B05A7A', // cyan-100
        dark: '#1f2937',    // gray-800
        'dark-blue': '#183840', // very dark blue
        'text-secondary': '#4b5563', // gray-600
        'text-tertiary': '#9ca3af',  // gray-400
        'text-quaternary': '#6b7280', // gray-500
        'background-light': '#f9f1ea', // light background color
        'brand-blue': '#99235C',
        'blue-light': '#eff6ff', // blue-50
        'cyan-light': '#FFDFDF', // cyan-50
        'blue-medium': '#bfdbfe', // blue-200
        'cyan-medium': '#a5f3fc', // cyan-200
        'text-dark': '#111827', // gray-900
        'blue-lighter': '#dbeafe', // blue-100
      },
    },
  },
  plugins: [],
}
