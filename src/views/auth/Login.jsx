import React from "react";
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

  const handleNextButtonClick = () => {
    navigate("/home"); // Replace '/next-page' with your desired route
  };

  const handleClickShowPassword = () => {
    setShowPassword((show) => !show);
  };

  return (
    <Grid2 container>
      <Grid2
        size={{ xs: "none", md: 6 }}
        sx={{ display: { xs: "none", md: "grid" } }}
      >
        <Box
          sx={{
            backgroundColor: theme.palette.primary.main,
            minHeight: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            component="img"
            src="/logo.png"
            alt="DocCast Logo"
            sx={{ width: "100px", height: "auto", marginBottom: 2 }}
          />
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
          <Typography color="black" variant="h6" fontWeight="400">
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
          <Typography variant="h6" fontWeight="400" color="black">
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

          <Typography variant="body1" sx={{ margin: "0 10px" }}>
            OR
          </Typography>

          <hr
            style={{
              width: "40%",
              borderTop: `1px solid ${theme.palette.grey[200]}`,
            }}
          />
        </Box>

        <InputLabel sx={{ fontSize: "16px", mb: 1 }}>Email Address</InputLabel>

        <TextField variant="outlined" fullWidth sx={{ mb: 2 }} />
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
          >
            {showPassword ? <VisibilityOff /> : <Visibility />}
          </IconButton>
        </Box>
        <TextField
          fullWidth
          sx={{ mb: 2 }}
          type={showPassword ? "text" : "password"}
        />

        <Link href="/reset-password">
          <Typography
            variant="body1"
            gutterBottom
            sx={{
              mt: 2,
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
          sx={{
            mb: 2,
            px: 12,
            py: 2,
            backgroundColor: theme.palette.background.primary,
            color: theme.palette.text.white,
          }}
          onClick={handleNextButtonClick}
        >
          Sign In
        </Button>

        <Typography variant="body1" gutterBottom fontWeight="400">
          Don't have an account?{" "}
          <Link href="/register" color={theme.palette.primary.main}>
            Sign Up
          </Link>
        </Typography>
      </Grid2>
    </Grid2>
  );
}

export default LoginForm;
