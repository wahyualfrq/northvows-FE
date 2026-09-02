/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0A2EFF',
        navy: '#001A72',
        accent: '#2F5BFF',
        surface: '#F8FAFC',
        slateText: '#0F172A',
        mutedText: '#64748B',
        lightBorder: '#E2E8F0',
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      boxShadow: {
        'glow': '0 20px 50px -10px rgba(10, 46, 255, 0.15)',
        'card': '0 10px 30px -5px rgba(0, 26, 114, 0.04)',
        'card-hover': '0 20px 40px -10px rgba(10, 46, 255, 0.12)',
      }
    },
  },
  plugins: [],
}
