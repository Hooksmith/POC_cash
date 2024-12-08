import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Box,
  Button,
  Grid2,
  IconButton,
  InputLabel,
  Link,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";

function LoginForm() {
  const theme = useTheme();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = React.useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const onChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const onChangePassword = (event) => {
    setPassword(event.target.value);
  };
  const handleClickShowPassword = () => {
    setShowPassword((show) => !show);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (email !== "" && password !== "" && emailRegex.test(email)) {
      navigate("/home");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid2 container>
        <Grid2
          size={{ xs: "none", md: 6 }}
          sx={{ display: { xs: "none", md: "grid" } }}
        >
          <Box
            sx={{
              backgroundColor: theme.palette.primary.main,
              minHeight: "100vh",
              maxHeight: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                backgroundColor: theme.palette.grey[0],
                px: 4,
                py: 2,
                borderRadius: "20px",
              }}
            >
              <Box
                component="img"
                src="/logo.png"
                alt="DocCast Logo"
                sx={{ width: "145px", height: "auto" }}
              />
            </Box>
          </Box>
        </Grid2>

        <Grid2 size={{ xs: 12, md: 6 }} sx={{ p: 8 }}>
          <Typography
            gutterBottom
            sx={{
              mb: 4,
              fontWeight: 500,
              fontSize: "40px",
              color: theme.palette.primary.main,
            }}
          >
            Sign in
          </Typography>

          <Button
            fullWidth
            variant="outlined"
            sx={{
              mt: 2,
              borderRadius: "50px",
              borderColor: theme.palette.grey[200],
              py: 2,
            }}
          >
            <Box
              component="img"
              alt="logo"
              src="/google.png"
              height={24}
              sx={{ mr: 2 }}
            />
            <Typography
              variant="p"
              fontWeight="400"
              color={theme.palette.grey[900]}
            >
              Continue with Google
            </Typography>
          </Button>

          <Button
            fullWidth
            variant="outlined"
            sx={{
              borderRadius: "50px",
              borderColor: theme.palette.grey[200],
              py: 2,
              mt: 2,
            }}
          >
            <Box
              component="img"
              alt="logo"
              src="/facebook.png"
              height={24}
              sx={{ mr: 2 }}
            />
            <Typography
              variant="p"
              fontWeight="400"
              color={theme.palette.grey[900]}
            >
              Continue with Facebook
            </Typography>
          </Button>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              mb: 4,
              mt: 4,
            }}
          >
            <hr
              style={{
                width: "40%",
                borderTop: `1px solid ${theme.palette.grey[200]}`,
              }}
            />

            <Typography
              variant="body1"
              sx={{
                margin: "0 10px",
                fontWeight: 700,
                color: theme.palette.grey[700],
              }}
            >
              OR
            </Typography>

            <hr
              style={{
                width: "40%",
                borderTop: `1px solid ${theme.palette.grey[200]}`,
              }}
            />
          </Box>

          <InputLabel sx={{ mb: 1 }}>Email Address</InputLabel>

          <TextField
            required
            fullWidth
            sx={{ mb: 2 }}
            value={email}
            error={email !== "" && !emailRegex.test(email)}
            helperText={
              email !== "" && !emailRegex.test(email) ? "Invalid Emial" : ""
            }
            onChange={onChangeEmail}
          />
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <InputLabel>Password</InputLabel>
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </Box>
          <TextField
            required
            fullWidth
            sx={{ mb: 2 }}
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={onChangePassword}
          />

          <Link href="/reset-password">
            <Typography
              variant="body1"
              gutterBottom
              sx={{
                my: 2,
                textAlign: "right",
                color: theme.palette.primary.main,
                textDecoration: "underline",
                fontWeight: "400",
              }}
            >
              Forgot your password?
            </Typography>
          </Link>

          <Button
            variant="contained"
            type="submit"
            size="large"
            sx={{
              mb: 2,
              px: 8,
            }}
          >
            Sign In
          </Button>

          <Typography
            variant="body1"
            gutterBottom
            fontWeight="400"
            color={theme.palette.grey[900]}
          >
            Don't have an account?{" "}
            <Link href="/register" color={theme.palette.primary.main}>
              Sign Up
            </Link>
          </Typography>
        </Grid2>
      </Grid2>
    </form>
  );
}

export default LoginForm;
