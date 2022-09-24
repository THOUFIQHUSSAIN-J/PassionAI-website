/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "home-background": "url('/src/images/home-background.gif')",
        "mobile-home-background": "url('/src/images/mobile-background.svg')",
        "roadmap-background": "url('/src/images/roadmap.svg')",
        "response-background": "url('/src/images/response-background-1.svg')",
        "testimonial-bg": "url('/src/images/testimonial-bg.png')",
        "contact-us-bg": "url('/src/images/contact-us-background.svg')",
      },
    },
    colors: {
      "header-bg": "#24273F",
      white: "#ffffff",
      black: "#000000",
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
      hoverColor: "#EBEDFF",
      hoverBorderColor: "#6973CD",
      modalGradient0: "#B49EF9",
      modalGradient100: "#E9E2FD",
      modalText: "#979797",
      testimonialBg: "#E9EBFC",
      violet: "#40457E",
      buttonHoverColor: "#979797",
      testimonialbg: "#F7F7FF",
    },
    fontFamily: {
      body: ['"Open Sans"'],
      Nunito: ["Nunito"],
      MerriweatherSans: ["MerriweatherSans"],
      Lato: ["Lato"],
      Poppins: ["Poppins"],
    },
    boxShadow: {
      "box-primary": "0 8px 20px rgba(255, 125, 0, 0.19)",
      "institute-box": "1px 1px 10px rgba(162,133,255,0.53)",
    },
    fontSize: {
      "heading-title-sz": "52px",
      "home-regular-sz": "14px",
      "mini-heading-sz": "52px",
      "why-passion-heading-sz": "52px",
      "sub-heading-sz": "35px",
      "regular-sz": "30px",
      "mini-regular-sz": "17px",
      xs: "12px",
      s: "20px",
      "mobile-heading-sz": "22px",
      "xs-1": "14px",
      lg: "40px",
      md: "28px",
      xl: "55px",
      "md-s": "25px",
    },
  },
  plugins: [],
};
