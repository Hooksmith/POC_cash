import { Box, Button, InputLabel, TextField, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@emotion/react";

function NewPassword() {
  const navigate = useNavigate();
  const theme = useTheme();
  const [showPassword, setShowPassword] = React.useState(false);
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const passwordRegex =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

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
          backgroundColor: theme.palette.secondary.lighter,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            width: { xs: "80%", md: "50%" },
            pl: 6,
            py: 6,
            backgroundColor: theme.palette.grey[0],
            borderRadius: 2,
            boxShadow: 2,
          }}
        >
          <Box
            sx={{
              width: { xs: "100%", md: "90%" },
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
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </Box>
            <TextField
              type={showPassword ? "text" : "password"}
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
              size="large"
              sx={{
                mb: 2,
                px: 10,
              }}
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
