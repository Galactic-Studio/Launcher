module.exports = {
  purge: ['./app/**/*.{js,jsx,ts,tsx,html}'],
  content: [
    './app/pages/**/*.html', // This will include all HTML files in the pages directory
    // include other paths as needed, for example:
    // './src/**/*.{js,jsx,ts,tsx}', // if you have React components or similar
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#6096BA",

          "secondary": "#FDFEFE",

          "accent": "#374151",

          "neutral": "#9ca3af",

          "base-100": "#1c1917",

          "info": "#FDFEFE",

          "success": "#6096BA",

          "warning": "#D8A800",

          "error": "#FF3951",
        },
      },
    ],
  },
}
