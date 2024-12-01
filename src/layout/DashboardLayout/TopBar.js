import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { Divider, Menu, MenuItem } from "@mui/material";

const pages = [
  { title: "Home", path: "/home" },
  { title: "Income", path: "/income" },
  { title: "Expense", path: "/expense" },
  { title: "Budgets", path: "/budget" },
];
export default function Topbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="fixed" sx={{ boxShadow: "none" }}>
      <Toolbar
        sx={{
          backgroundColor: "white",
          color: "black",
          height: 84,
          textTransform: "lowercase",
        }}
      >
        <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
          <IconButton
            size="large"
            aria-label="menu"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{ display: { xs: "block", md: "none" } }}
          >
            {pages.map((page, index) => (
              <MenuItem
                key={index}
                onClick={handleCloseNavMenu}
                component={Link}
                to={page.path}
                color="inherit"
              >
                {page.title}
              </MenuItem>
            ))}
          </Menu>
        </Box>

        <Box sx={{ flexGrow: 1 }}>
          <Box
            component="img"
            alt="logo"
            src="/logo.png"
            sx={{ display: "flex", mr: 10 }}
          />
        </Box>
        <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
          {pages.map((page, index) => (
            <Button
              key={index}
              onClick={handleCloseNavMenu}
              component={Link}
              to={page.path}
              color="inherit"
              sx={{ padding: "12px 30px" }}
            >
              {page.title}
            </Button>
          ))}
        </Box>
        <IconButton
          size="large"
          edge="end"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <Divider
          sx={{ alignSelf: "center", height: "40%", margin: "0 4px" }}
          orientation="vertical"
          flexItem
        />
        <Button color="inherit">Logout</Button>
      </Toolbar>
    </AppBar>
  );
}
