import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import TopBar from "../DashboardLayout/TopBar";
import { useTheme } from "@emotion/react";
import { Box, Grid2, Typography } from "@mui/material";

// ----------------------------------------------------------------------

const APP_BAR = 84;

function SettingLayout() {
  const theme = useTheme();

  return (
    <Box sx={{ background: theme.palette.background.neutral }}>
      <TopBar />
      <Box
        sx={{
          height: { xs: "85vh", md: "80vh" },
          flexGrow: 1,
          overflow: "auto",
          padding: {
            xs: `${APP_BAR - 16}px  2px`,
            md: `${APP_BAR + 50}px  50px`,
          },
        }}
      >
        <Typography
          sx={{
            display: { xs: "none" },
            fontSize: "32px",
            fontWeight: 600,
            lineHeight: "48px",
            color: theme.palette.text.secondary,
          }}
        >
          Setting
        </Typography>
        <Grid2
          container
          spacing={6}
          sx={{
            height: "100%",
            marginTop: "16px",
          }}
        >
          <Grid2 size={3}>
            <NavBar />
          </Grid2>
          <Grid2 size={9}>
            <Outlet />
          </Grid2>
        </Grid2>
      </Box>
    </Box>
  );
}

export default SettingLayout;
