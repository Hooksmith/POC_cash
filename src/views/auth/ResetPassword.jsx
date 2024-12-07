import React from "react";
import { useTheme } from "@emotion/react";
import { Box, TextField, Typography, Button, InputLabel } from "@mui/material";
import { useNavigate } from "react-router-dom";

function ResetPassword() {
  const theme = useTheme();
  const navigate = useNavigate();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const [email, setEmail] = React.useState("");

  const onChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (email !== "" && emailRegex.test(email)) {
      navigate("/verify-code");
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
            padding: 6,
            backgroundColor: theme.palette.grey[0],
            borderRadius: 2,
            boxShadow: 2,
          }}
        >
          <Box
            component="img"
            src="/logo.png"
            alt="DocCash Logo"
            sx={{ width: "120px", height: "auto", marginBottom: 2 }}
          />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              px: 8,
              mt: 4,
            }}
          >
            <Typography
              variant="h4"
              fontWeight="500"
              fontSize="40px"
              gutterBottom
              color={theme.palette.primary.main}
              textAlign="center"
            >
              Forgot Your Password?
            </Typography>
            <Box
              sx={{
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Typography gutterBottom fontWeight="400" color="textSecondary">
                Please, enter your e-mail address below to receive your user and
                a new password
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              px: 8,
              pt: 4,
              pb: 4,
            }}
          >
            <InputLabel sx={{ mb: 1 }}>Email address</InputLabel>
            <TextField
              required
              fullWidth
              name="email"
              value={email}
              sx={{ mb: 2 }}
              error={email !== "" && !emailRegex.test(email)}
              helperText={
                email !== "" && !emailRegex.test(email) ? "Invalid Email" : ""
              }
              onChange={onChangeEmail}
            />

            <Button fullWidth type="submit" variant="contained">
              Reset Password
            </Button>
          </Box>
        </Box>
      </Box>
    </form>
  );
}

export default ResetPassword;
