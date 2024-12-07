import { Box, Button, InputLabel, TextField, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@emotion/react";

const passwordRegex =
  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
function NewPassword() {
  const navigate = useNavigate();
  const theme = useTheme();
  const [showPassword, setShowPassword] = React.useState(false);
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");

  const handleClickShowPassword = () => {
    setShowPassword((show) => !show);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (passwordRegex.test(password) && password === confirmPassword) {
      navigate("/login");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
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
            width: { xs: "80%", md: "50%" },
            pl: 6,
            py: 6,
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
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Typography
                variant="h4"
                gutterBottom
                fontSize="40px"
                fontWeight="400"
                color={theme.palette.primary.main}
              >
                Please enter a new password below
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <InputLabel
                sx={{
                  fontSize: "16px",
                  fontWeight: "400",
                  mb: 1,
                  color: theme.palette.grey[900],
                }}
              >
                New password
              </InputLabel>
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
              value={password}
              onChange={handlePasswordChange}
              required
              error={password !== "" && !passwordRegex.test(password)}
              helperText={
                !passwordRegex.test(password)
                  ? "Use 8 or more characters with a mix of letters, numbers & symbols"
                  : ""
              }
            />
            {/* <Typography variant="body2" color="textSecondary" gutterBottom>
              Use 8 or more characters with a mix of letters, numbers & symbols
            </Typography> */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <InputLabel
                sx={{
                  fontSize: "16px",
                  fontWeight: "400",
                  mb: 1,
                  color: theme.palette.grey[900],
                }}
              >
                Confirmed password
              </InputLabel>
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </Box>
            <TextField
              type={showPassword ? "text" : "password"}
              variant="outlined"
              fullWidth
              sx={{ mb: 2 }}
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              required
              error={confirmPassword !== "" && password !== confirmPassword}
              helperText={
                confirmPassword !== "" && password !== confirmPassword
                  ? "Password not matched"
                  : ""
              }
            />
            <Button
              type="submit"
              variant="contained"
              sx={{
                mb: 2,
                px: 10,
                py: 2,
                backgroundColor: theme.palette.background.primary,
                color: theme.palette.text.white,
              }}
              // onClick={handleNextButtonClick}
            >
              Save
            </Button>
          </Box>
        </Box>
      </Box>
    </form>
  );
}

export default NewPassword;
