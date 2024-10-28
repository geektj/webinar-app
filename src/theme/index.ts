import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    // primary: {
    //   main: "#0E51F1",
    // },
    // secondary: {
    //   main: "#2E333B",
    // },
    error: {
      main: "#D14040", // Danger accent color
    },
    background: {
      default: "#FFFFFF", // White color
    },
    common: {
      black: '#000000',
      white: '#FFFFFF'
    },
    text:{
      primary: '#2E333B',
      secondary: '#0E1013'
    }
  },
  typography: {
    fontFamily: "Inter, sans-serif",
    h2:{
      fontSize: '1.125rem',
      fontWeight: 600
    },
    h3:{
      fontSize: '1rem',
      fontWeight: 600
    },
    h4:{
      fontSize: '0.875rem',
      fontWeight: 600
    },
    h5: {
      fontSize: '0.875rem',
      fontWeight: 400
    },
    h6: {
      fontSize: '0.813rem',
      fontWeight: 600
    },

  },
});

const otherTheme = {
  colors: {
    color1: "#741DE3",
    color2: "#E72174",
    color3: "#08A79E",
    color4: "#0E51F1",
    color5: "#FFB023",
    color6: "#088761",
  },
  boxShadows: {
    cardShadow: "0px 20px 46px -24px #0E10131F",
    btnBoxShadow: "0px 8px 20px -8px #0E51F1"
  }
};

const customTheme = {
  ...theme,
  ...otherTheme,
};

export default customTheme;
