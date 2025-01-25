/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#050816",
        secondary: "#aaa6c3",
        tertiary: "rgba(33, 31, 35, 0.35)",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
        "navy": "#0e1434",
        "grey": "#aaa",
        "blue": "#003E72",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xxs: "390px",
        xs: "450px",
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/hero_bg.jpg')",
        "section": "url('/src/assets/section-bg.jpg')",
        "stars": "url('/src/assets/stars.jpg')",
        "transparentStars": "url('/src/assets/transparent-stars.jpg')"
      },
    },
  },
  plugins: [],
}

