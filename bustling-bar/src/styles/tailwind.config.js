module.exports = {
  content: ['./src/**/*.{astro,html,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        'wave-fast': 'wave 4s ease-in-out infinite',
        'wave': 'wave 5s ease-in-out infinite',
        'ping-slow': 'ping 2s cubic-bezier(0, 0, 0.2, 1) infinite',
      },
      keyframes: {
        wave: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
      animationDelay: {
        '500': '0.5s',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
};