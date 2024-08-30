/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
      fontFamily: {
        sans: ['Inter'],
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        'dark': {
          "primary": "#ff4c4b",
          "primary-focus": "#570df8",
          "primary-content": "#ffffff",
          "info": "#66c6ff",
          "success": "#87d039",
          "warning": "#e2d562",
          "error": "#ff6f6f"
        }
      },
      'light',
    ]
  }
}
