import {
  Box,
  Button,
  InputAdornment,
  InputLabel,
  TextField,
  Typography,
} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@emotion/react";
function NewPassword() {
  const navigate = useNavigate();
  const theme = useTheme();
  const handleNextButtonClick = () => {
    navigate("/login"); // Replace '/next-page' with your desired route
  };

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  return (
    <Box
      sx={{
        display: "flex",
        height: "100vh",
        backgroundColor: "#f0f0f0", // Light gray background
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          width: { xs: "80%", md: "40%" },
          padding: 6,
          backgroundColor: "#fff",
          borderRadius: 2,
          boxShadow: 2,
        }}
      >
        <Box
          sx={{
            width: { xs: "100%", md: "70%" },
          }}
        >
          <Box
            component="img"
            src="/logo.png"
            alt="DocCash Logo"
            sx={{ width: "100px", height: "auto", marginBottom: 2 }}
          />
          <Typography variant="h4" component="h1" gutterBottom>
            Please enter a new password below
          </Typography>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <InputLabel>New password</InputLabel>
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              // edge="end"
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </Box>
          <TextField
            type={showPassword ? "text" : "password"}
            variant="outlined"
            fullWidth
            sx={{ mb: 2 }}
            // InputProps={{
            //   endAdornment: <InputAdornment position="end"></InputAdornment>,
            // }}
          />
          <Typography variant="body1" color="textSecondary" gutterBottom>
            Use 8 or more characters with a mix of letters, numbers & symbols
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <InputLabel>Confirmed password</InputLabel>
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              // edge="end"
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </Box>
          <TextField
            type={showPassword ? "text" : "password"}
            variant="outlined"
            fullWidth
            sx={{ mb: 2 }}
          />

          <Typography variant="body1" color="error" gutterBottom>
            Error message
          </Typography>

          <Button
            variant="contained"
            sx={{
              mb: 2,
              px: 12,
              py: 2,
              backgroundColor: theme.palette.background.primary,
              color: theme.palette.text.white,
            }}
            onClick={handleNextButtonClick}
          >
            Save
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default NewPassword;
