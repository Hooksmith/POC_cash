import React, { useEffect } from "react";
import PropTypes from "prop-types";
import Logo from "../../components/Logo";
import Scrollbars from "../../components/ScrollBar";
import { Link, Link as RouterLink, useLocation } from "react-router-dom";
import {
  alpha,
  Box,
  Drawer,
  Button,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  useMediaQuery,
} from "@mui/material";
// import InboxIcon from '@mui/icons-material/Inbox';
// import DraftsIcon from '@mui/icons-material/Drafts';
import styled from "@emotion/styled";

// ----------------------------------------------------------------------

const DRAWER_WIDTH = 280;

const useStyles = styled((theme) => {
  const isLight = theme.palette.mode === "light";

  return {
    drawer: {
      [theme.breakpoints.up("lg")]: {
        flexShrink: 0,
        width: DRAWER_WIDTH,
      },
    },
    drawerPaper: {
      width: DRAWER_WIDTH,
      background: theme.palette.background.default,
    },
    subHeader: {
      ...theme.typography.overline,
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(2),
      paddingLeft: theme.spacing(5),
      color: theme.palette.text.primary,
    },
    account: {
      display: "flex",
      alignItems: "center",
      padding: theme.spacing(2, 2.5),
      margin: theme.spacing(1, 2.5, 5),
      borderRadius: theme.shape.borderRadiusSm,
      background: theme.palette.grey[isLight ? 200 : 800],
    },
    doc: {
      padding: theme.spacing(2.5),
      borderRadius: theme.shape.borderRadiusMd,
      backgroundColor: isLight
        ? alpha(theme.palette.primary.main, 0.08)
        : theme.palette.primary.lighter,
    },
  };
});

// ----------------------------------------------------------------------

NavBar.propTypes = {
  onCloseNav: PropTypes.func,
  isOpenNav: PropTypes.bool,
};

function NavBar({ isOpenNav, onCloseNav }) {
  const classes = useStyles();
  const { pathname } = useLocation();
  const displayName = "User Name";
  const role = "Dev";

  useEffect(() => {
    if (isOpenNav && onCloseNav) {
      onCloseNav();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const renderContent = (
    <Scrollbars>
      <Box sx={{ px: 2.5, py: 3 }}>
        <RouterLink to="/">
          <Logo />
        </RouterLink>
      </Box>

      <Link underline="none" component={RouterLink} to="/login">
        <div className={classes.account}>
          {/* <MyAvatar /> */}
          <Box sx={{ ml: 2 }}>
            <Typography variant="subtitle2" color="textPrimary">
              {displayName}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              {role}
            </Typography>
          </Box>
        </div>
      </Link>

      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>{/* <InboxIcon /> */}</ListItemIcon>
            <ListItemText primary="Inbox" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>{/* <DraftsIcon /> */}</ListItemIcon>
            <ListItemText primary="Drafts" />
          </ListItemButton>
        </ListItem>
      </List>

      <Box sx={{ px: 2.5, pb: 3, mt: 10 }}>
        <div className={classes.doc}>
          <Button
            fullWidth
            to="/register"
            variant="contained"
            component={RouterLink}
          >
            Delete Account
          </Button>
        </div>
      </Box>
    </Scrollbars>
  );

  const isSmallScreen = useMediaQuery("(max-width: 600px)");

  return (
    <nav className={classes.drawer}>
      {isSmallScreen ? (
        <Drawer
          anchor="left"
          open={isOpenNav}
          variant="temporary"
          onClose={onCloseNav}
          classes={{ paper: classes.drawerPaper }}
        >
          {renderContent}
        </Drawer>
      ) : (
        <Drawer
          open
          anchor="left"
          variant="persistent"
          classes={{ paper: classes.drawerPaper }}
        >
          {renderContent}
        </Drawer>
      )}
    </nav>
  );
}

export default NavBar;
