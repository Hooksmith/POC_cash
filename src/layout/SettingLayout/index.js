import PropTypes from "prop-types";
import React, { useState } from "react";
import styled from "@emotion/styled";

import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import Topbar from "../DashboardLayout/TopBar";

// ----------------------------------------------------------------------

const APP_BAR_MOBILE = 64;
const APP_BAR_DESKTOP = 92;

const useStyles = styled((theme) => ({
  root: {
    display: "flex",
    minHeight: "100%",
    overflow: "hidden",
  },
  main: {
    flexGrow: 1,
    overflow: "auto",
    minHeight: "100%",
    paddingTop: APP_BAR_MOBILE + 40,
    paddingBottom: theme.spacing(10),
    [theme.breakpoints.up("lg")]: {
      paddingTop: APP_BAR_DESKTOP + 40,
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
    },
  },
}));

// ----------------------------------------------------------------------

SettingLayout.propTypes = {
  children: PropTypes.node,
};

function SettingLayout({ children }) {
  const classes = useStyles();
  const [openNav, setOpenNav] = useState(false);

  return (
    <div className={classes.root}>
      <Topbar onOpenNav={() => setOpenNav(true)} />
      <NavBar onCloseNav={() => setOpenNav(false)} isOpenNav={openNav} />

      <div className={classes.main}>
        <Outlet />
      </div>
    </div>
  );
}

export default SettingLayout;
