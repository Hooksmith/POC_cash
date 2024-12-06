import React from "react";
import palette from "./palette";
import breakpoints from "./breakpoints";
import { createTheme, ThemeProvider } from "@mui/material/styles";

// ----------------------------------------------------------------------

function ThemeConfig({ children }) {
  const theme = createTheme({
    palette: palette,
    breakpoints: breakpoints,
    components: {
      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: "12px",
            boxShadow: "none",
          },
        },
      },
    },
  });

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

export default ThemeConfig;
