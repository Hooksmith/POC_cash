import React from "react";
import TopBar from "./TopBar";
import PropTypes from "prop-types";
import { Outlet } from "react-router";
import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const APP_BAR = 84;

DashboardLayout.propTypes = {
  children: PropTypes.node,
};

function DashboardLayout() {
  const theme = useTheme();
  return (
    <Box>
      <TopBar />
      <Box
        sx={{
          minHeight: "100vh",
          flexGrow: 1,
          overflow: "auto",
          paddingTop: `${APP_BAR + 20}px`,
          paddingBottom: "10px",
          background: theme.palette.background.neutral,
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
}

export default DashboardLayout;
