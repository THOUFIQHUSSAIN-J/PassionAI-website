/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "home-background": "url('/src/images/home-background.svg')",
        "roadmap-background": "url('/src/images/roadmap.svg')",
      },
    },
    colors: {
      "header-bg": "#24273F",
      white: "#ffffff",
      "home-bg": "#E1E1E1",
      "heading-title": "#FF7A00",
      "mini-heading": "#39407F",
      "sub-heading": "#263238",
      "why-passion-heading": "#263238",
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
      formBorder: "#ACAFC9",
      buttonGradient0: "#B49EF9",
      buttonGradient100: "#FF9D44",
      hoverColor:"#EBEDFF",
      hoverBorderColor:"#6973CD",
      modalGradient: "#B49EF9",
      modalText:"#979797"
    },
    fontFamily: {
      body: ['"Open Sans"'],
    },
    fontSize: {
      "heading-title-sz": "52px",
      "mini-heading-sz": "52px",
      "why-passion-heading-sz": "52px",
      "sub-heading-sz": "35px",
      "regular-sz": "30px",
      "mini-regular-sz": "17px",
      "xs": "12px",
      "mobile-heading-sz": "22px",
    },
  },
  plugins: [],
};
