import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { Avatar, Divider, Menu, MenuItem } from "@mui/material";
import { useTheme } from "@emotion/react";

const pages = [
  { title: "Home", path: "/home" },
  { title: "Income", path: "/income" },
  { title: "Expense", path: "/expense" },
  { title: "Budgets", path: "/budget" },
];
export default function Topbar() {
  const theme = useTheme();
  const [activeMenu, setActiveMenu] = React.useState(0);
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleClickMenu = (idex) => {
    setActiveMenu(idex);
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
                onClick={() => handleClickMenu(index)}
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
              onClick={() => handleClickMenu(index)}
              component={Link}
              to={page.path}
              color="inherit"
              sx={{
                fontSize: "16px",
                lineHeight: "24px",
                fontWeight: 600,
                padding: "12px 30px",
                textTransform: "capitalize",
                color:
                  activeMenu === index
                    ? theme.palette.primary.main
                    : theme.palette.text.primary,
              }}
            >
              {page.title}
            </Button>
          ))}
        </Box>
        <IconButton
          size="large"
          edge="end"
          component={Link}
          to="/edit-profile"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          color="inherit"
          sx={{ p: 3 }}
        >
          <Avatar sx={{ width: 32, height: 32, mr: 1 }} src="/avatar.png" />
        </IconButton>
        <Divider
          sx={{ alignSelf: "center", height: "40%" }}
          orientation="vertical"
          flexItem
        />
        <Button
          color="inherit"
          sx={{
            fontSize: "16px",
            lineHeight: "24px",
            fontWeight: 600,
            textTransform: "capitalize",
            p: 2,
            color: theme.palette.text.primary,
          }}
        >
          Logout
        </Button>
      </Toolbar>
    </AppBar>
  );
}
