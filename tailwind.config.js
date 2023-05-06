/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        xs: ".75rem",
        sm: ".875rem",
        tiny: ".875rem",
        base: "1rem",
        lg: "1.125rem",
        xl: "1.25rem",
        "2xl": "1.5rem",
        "3xl": "1.875rem",
        "4xl": "2.25rem",
        "5xl": "3rem",
        "6xl": "4rem",
        "7xl": "5rem",
        16: "16px",
      },
      colors: {
        safezoneGradientLeft: ""
      },
      fontFamily: {
        Inter: [["Inter"]],
      },
      backgroundImage: ({
        theme
      }) => ({
        gradientDeg: 'linear-gradient(221.99deg, var(--tw-gradient-stops))',
        safezone_homepage_hero: "url('../images/logos/homepage-hero.jpg')",
        safezone_pattern_light: "url('../images/pattern/safezone-pattern.jpg')",
        blog_pattern: "url('../images/patterns/blog-pattern.jpg')"
      }),
    },
  },
};
