const config = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    screens: {
      xl: "1512px",
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
        secondTextColour: "#0A151B",
        thirdTextColour: "rgba(255, 255, 255, 0.80)",
        strokeColour: "rgba(202, 202, 202, 0.50)",
      },
      fontFamily: {
        "ibm-plex-mono": ['"IBM Plex Mono"', "serif"],
        gilroy: ["Gilroy", "serif"],
      },
      boxShadow: {
        customCardShadow: "5px 5px 30px 0px rgba(0, 0, 0, 0.25)",
        customSlideShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
      },
    },
  },
  plugins: [],
};
export default config;
