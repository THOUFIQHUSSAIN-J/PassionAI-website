/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "home-background": "url('/src/images/home-background.svg')",
      },
    },
    colors: {
      "header-bg": "#24273F",
      white: "#ffffff",
      "home-bg": "#E1E1E1",
      "heading-title": "#FF7A00",
      "mini-heading": "#39407F",
      "sub-heading": "#263238",
      regular: "#40457E",
      "mini-regular": "#E9EBFC",
      primary: "#FF7A00",
      "heading-secondary": "#282B45",
      "border-1": "#CCD1FF",
      "footer-bg": "#2B2E4A",
      copyright: "#858DCE",
      formGradient0: "#FF7A00",
      formGradient100: "#FF9D44",
      formBackground: "#F7F7FE",
      formBorder: "#ACAFC9"
    },
    fontFamily: {
      body: ['"Open Sans"'],
    },
    fontSize: {
      "heading-title-sz": "52px",
      "mini-heading-sz": "52px",
      "sub-heading-sz": "35px",
      "regular-sz": "30px",
      "mini-regular-sz": "17px",
      "xs": "12px",
      "mobile-heading-sz": "22px",
    },
  },
  plugins: [],
};
