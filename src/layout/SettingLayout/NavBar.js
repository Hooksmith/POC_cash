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
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import { useTheme } from "@emotion/react";
import LogoutDialog from "../../components/LogoutDialog";

// ----------------------------------------------------------------------

function NavBar() {
  const theme = useTheme();

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleConfirm = () => {
    // Handle logout logic here
    setOpen(false);
  };

  return (
    <Card sx={{ height: "100%" }}>
      <LogoutDialog
        open={open}
        onClose={handleClose}
        onConfirm={handleConfirm}
      />
      <List
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
        }}
      >
        <ListItem component={Link} to="/edit-profile" sx={{ padding: "20px" }}>
          <ListItemIcon>
            <SettingsOutlinedIcon />
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
            <GridViewOutlinedIcon />
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

        <ListItem button sx={{ padding: "20px" }} onClick={handleOpen}>
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
                Delete account
              </Typography>
            }
          />
        </ListItem>
      </List>
    </Card>
  );
}

export default NavBar;
