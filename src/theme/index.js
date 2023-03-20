import { createTheme } from "@mui/material/styles";

// light sand: 162, 135, 101
// dark sand: 40, 27, 13 /  #281B0D
// darkish water: 106, 119, 125
// DARK water (almost black): rgb(23,24,29)
// distant mountains (light blue): 71, 117, 152
// almost black: 7, 4, 0
// peach: FDDDC9

const theme = createTheme({
  typography: {
    h2: {
      fontFamily: "'Italianno', 'Roboto','Helvetica','Arial',sans-serif",
      fontSize: "5rem"
    },
    body1: {},
  },
  palette: {
    primary: {
      main: "rgb(162, 135, 101)",
      light: "rgb(71, 117, 152)",
      dark: "rgb(23,24,29)",
    }
  }
});

export default theme;
