import React from "react";
import { Link } from "react-router-dom";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  Card,
  Divider,
} from "@mui/material";
import PersonRemoveIcon from "@mui/icons-material/PersonRemove";
import LogoutIcon from "@mui/icons-material/Logout";
import CalendarViewMonthIcon from "@mui/icons-material/CalendarViewMonth";
import SettingsIcon from "@mui/icons-material/Settings";
import { useTheme } from "@emotion/react";

// ----------------------------------------------------------------------

function NavBar() {
  const theme = useTheme();

  return (
    <Card sx={{ height: "100%" }}>
      <List
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
        }}
      >
        <ListItem component={Link} to="/edit-profile" sx={{ padding: "20px" }}>
          <ListItemIcon>
            <SettingsIcon />
          </ListItemIcon>
          <ListItemText
            primary={
              <Typography
                sx={{
                  fontSize: "20px",
                  fontWeight: 600,
                  lineHeight: "30px",
                  color: theme.palette.text.secondary,
                }}
              >
                Account Setting
              </Typography>
            }
          />
        </ListItem>

        <ListItem sx={{ padding: "20px" }} component={Link} to="/category">
          <ListItemIcon>
            <CalendarViewMonthIcon />
          </ListItemIcon>
          <ListItemText
            primary={
              <Typography
                sx={{
                  fontSize: "20px",
                  fontWeight: 600,
                  lineHeight: "30px",
                  color: theme.palette.text.secondary,
                }}
              >
                Category
              </Typography>
            }
          />
        </ListItem>

        <Divider />

        <ListItem button sx={{ padding: "20px" }}>
          <ListItemIcon>
            <LogoutIcon />
          </ListItemIcon>
          <ListItemText
            primary={
              <Typography
                sx={{
                  fontSize: "20px",
                  fontWeight: 600,
                  lineHeight: "30px",
                  color: theme.palette.text.secondary,
                }}
              >
                Log Out
              </Typography>
            }
          />
        </ListItem>

        <ListItem
          sx={{
            marginTop: "auto",
            marginBottom: "20px",
            color: "red",
            padding: "20px",
          }}
        >
          <ListItemIcon>
            <PersonRemoveIcon sx={{ color: theme.palette.error.main }} />
          </ListItemIcon>
          <ListItemText
            primary={
              <Typography
                sx={{
                  fontSize: "15px",
                  fontWeight: 400,
                  lineHeight: "22.5px",
                  color: theme.palette.error.main,
                  textDecoration: "underline",
                }}
              >
                Log Out
              </Typography>
            }
          />
        </ListItem>
      </List>
    </Card>
  );
}

export default NavBar;
