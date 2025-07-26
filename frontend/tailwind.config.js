/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      colors: {
        primary: '#0f172a',      // Deep Navy Blue
        accent: '#00ffff',        // Cyber Cyan
        highlight: '#a855f7',     // Neon Purple
        secondary: '#d4d4d4',     // Light Gray (for text)
        'light-gray': '#a3a3a3',   // Lighter gray for less important text
        'glass': 'rgba(2, 6, 23, 0.5)', // Transparent navy for glassmorphism
      },
      boxShadow: {
        'glow-cyan': '0 0 15px 0 rgba(0, 255, 255, 0.4)',
        'glow-purple': '0 0 25px 0 rgba(168, 85, 247, 0.5)',
      },
    },
  },
  plugins: [],
}
