/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    screens: {
      xs: "480px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
      "3xl": "1900px",
    },
    fontSize: {
      sm: "0.778rem",
      base: "1rem",
      xl: "1.333rem",
      "2xl": "1.722rem",
      "3xl": "2.222rem",
      "4xl": "2.944rem",
      "5xl": "3.833rem",
      "6xl": "5.056rem",
    },
    extend: {
      colors: {
        "cOrange-10": "#FCFAF6",
        "cOrange-20": "#F9F4ED",
        "cOrange-30": "#F5EFE3",
        "cOrange-40": "#F2EADA",
        "cOrange-50": "#EFE5D1",
        "cOrange-60": "#ECDFC8",
        "cOrange-70": "#E9DABF",
        "cOrange-80": "#E5D5B5",
        "cOrange-90": "#E2CFAC",
        "cOrange-100": "#DFCAA3",
        "cOrange-110": "#C9B693",
        "cOrange-120": "#B2A282",
        "cBlue-10": "#E7EEF3",
        "cBlue-20": "#CEDDE7",
        "cBlue-30": "#B6CCDB",
        "cBlue-40": "#9DBBCF",
        "cBlue-50": "#85AAC3",
        "cBlue-60": "#6C99B7",
        "cBlue-70": "#5488AB",
        "cBlue-80": "#3B779F",
        "cBlue-90": "#226693",
        "cBlue-100": "#0A5587",
        "cBlue-110": "#094D7A",
        "cBlue-120": "#08446C",
        "cLightBlue-10": "#F2F6F8",
        "cLightBlue-20": "#E4EDF1",
        "cLightBlue-30": "#D7E4EA",
        "cLightBlue-40": "#C9DBE3",
        "cLightBlue-50": "#BCD2DD",
        "cLightBlue-60": "#AFC9D6",
        "cLightBlue-70": "#A1C0CF",
        "cLightBlue-80": "#94B7C8",
        "cLightBlue-90": "#86AEC1",
        "cLightBlue-100": "#79A5BA",
        "cLightBlue-110": "#6D95A7",
        "cLightBlue-120": "#618495",
        "cGrey-100": "#02111B",
        "cGrey-90": "#1B2932",
        "cGrey-80": "#354149",
        "cGrey-70": "#4E585F",
        "cGrey-60": "#677076",
        "cGrey-50": "#81888D",
        "cGrey-40": "#9AA0A4",
        "cGrey-30": "#B3B8BB",
        "cGrey-20": "#CCCFD1",
        "cGrey-10": "#E6E7E8",
        "cGrey-5": "#F2F2F3",
      },
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
        accent: ["Oswald", "sans-serif"],
      },
    },
  },
  plugins: [],
};
