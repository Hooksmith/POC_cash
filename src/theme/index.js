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
            borderRadius: 12,
            boxShadow: "none",
          },
        },
      },
      MuiTextField: {
        defaultProps: {
          variant: "outlined",
        },
        styleOverrides: {
          root: {
            "& .MuiOutlinedInput-root": {
              borderRadius: 12,
            },
          },
        },
      },
      MuiInputLabel: {
        styleOverrides: {
          root: {
            fontSize: "16px",
            fontWeight: 400,
            color: "#324C5B",
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: "capitalize",
          },
        },
      },
    },
  });

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

export default ThemeConfig;
