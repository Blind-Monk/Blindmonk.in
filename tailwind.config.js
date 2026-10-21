/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        background: '#f8fbfd',
        surface: '#eef5f9',
        border: '#cbd5e1',
        primary: '#0f172a',
        accent: '#1d4ed8',
        'accent-light': '#dbeafe',
        secondary: '#1e40af',
        muted: '#475569',
        amber: {
          50: '#fffdf0',
          100: '#fff9db',
          200: '#fff0a6',
          300: '#ffe36b',
          400: '#ffda33',
          500: '#ffd000',
          600: '#e6b800',
          700: '#c29b00',
          800: '#9c7d00',
          900: '#786000',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Sora', 'Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
