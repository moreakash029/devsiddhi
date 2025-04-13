/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        keyframes: {
          slideDown: {
            '0%': { opacity: '0', transform: 'translateY(-50px)' },
            '100%': { opacity: '1', transform: 'translateY(0)' },
          },
          slideUp: {
            '0%': { opacity: '0', transform: 'translateY(50px)' },
            '100%': { opacity: '1', transform: 'translateY(0)' },
          },
        },
        animation: {
          slideDown: 'slideDown 1s ease-out',
          slideUp: 'slideUp 1s ease-out',
        },
      },
    },
    plugins: [require("tailwind-scrollbar")],
  };
  