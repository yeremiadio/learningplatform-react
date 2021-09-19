import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { blue, red } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: blue,
    secondary: red,
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          fontFamily: "Roboto, cursive",
        },
      },
    },
    MuiButton: {
      variants: [
        {
          props: {
            variant: "contained",
          },
        },
      ],
      styleOverrides: {
        root: {
          boxShadow: "none",
          textTransform: "capitalize",
          padding: "10px 15px",
          borderRadius: ".375rem",
          "&:hover": {
            boxShadow: "none",
          },
        },
      },
    },
  },
  typography: {
    h1: {
      fontFamily: "Plus Jakarta Sans-ExtraBold, cursive",
    },
    h2: {
      fontFamily: "Plus Jakarta Sans-ExtraBold, cursive",
      fontWeight: 800,
    },
    h3: {
      fontFamily: "Plus Jakarta Sans-Bold, cursive",
      fontWeight: 700,
    },
    h4: {
      fontWeight: 600,
    },
    h5: {
      fontWeight: 600,
    },
    h6: {
      fontWeight: 500,
    },
    caption: {
      fontWeight: 300,
    },
    fontFamily: "IBM Plex Sans, sans-serif",
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
