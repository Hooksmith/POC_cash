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
      MuiTableCell: {
        styleOverrides: {
          head: {
            textTransform: "uppercase",
            color: "#6B7280",
            fontSize: "12px",
            lineHeight: "18px",
            fontWeight: 600,
          },
        },
      },
    },
  });

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

export default ThemeConfig;
