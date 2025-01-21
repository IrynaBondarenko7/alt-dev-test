const config = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      xl: "1440px",
    },
    extend: {
      container: {
        center: true,
      },
      colors: {
        bgColour: "#31297D",
        secondBdColour: "#C92C93",
        thirdBgColour: "#FF3A7A",
        btnTextColour: "#48307F",
        secondBtnTextColour: "#3C2A7D",
        linkColour: "#F4207B",
        secondTextColour: "#0A151B)",
      },
      fontFamily: {
        "ibm-plex-mono": ['"IBM Plex Mono"', "serif"],
        gilroy: ["Gilroy", "serif"],
      },
    },
  },
  plugins: [],
};
export default config;
