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
import React from "react";
import { useNavigate } from "react-router-dom";

function LoginForm() {
  const navigate = useNavigate();
  const theme = useTheme();
  const handleNextButtonClick = () => {
    navigate("/home"); // Replace '/next-page' with your desired route
  };
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  return (
    <Grid2 container>
      <Grid2 size={{ xs: 12, md: 6 }}>
        <Box
          sx={{
            backgroundColor: theme.palette.text.primary,
            minHeight: "100%", // Ensures the green background fills the entire screen height
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
          variant="h4"
          gutterBottom
          fontWeight="500"
          color={theme.palette.text.primary}
          sx={{ mb: 4 }}
        >
          Sign in
        </Typography>
        <Button
          variant="outlined"
          fullWidth
          sx={{ mt: 2, borderRadius: "50px", borderColor: "#C4CFD7", py: 2 }}
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
          variant="outlined"
          fullWidth
          sx={{ borderRadius: "50px", borderColor: "#C4CFD7", py: 2, mt: 2 }}
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
          <hr style={{ borderTop: "1px solid #ccc", width: "40%" }} />
          <Typography variant="body1" sx={{ margin: "0 10px" }}>
            OR
          </Typography>
          <hr style={{ borderTop: "1px solid #ccc", width: "40%" }} />
        </Box>

        <InputLabel sx={{ fontSize: "16px", mb: 1 }} color="#666666">
          Email Address
        </InputLabel>
        <TextField
          variant="outlined"
          fullWidth
          sx={{ mb: 2, borderRadius: "12px" }}
          InputProps={{ sx: { borderRadius: "12px" } }}
        />
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
          type={showPassword ? "text" : "password"}
          variant="outlined"
          fullWidth
          InputProps={{ sx: { borderRadius: "12px" } }}
          sx={{ mb: 2, borderRadius: "12px" }}
        />

        <Link href="/reset-password" color={theme.palette.text.primary}>
          <Typography
            variant="body1"
            gutterBottom
            sx={{ mt: 2, textAlign: "right" }}
            color={theme.palette.text.primary}
            fontWeight="400"
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
        <Typography
          variant="body1"
          gutterBottom
          color="#666666"
          fontWeight="400"
        >
          Don't have an account?{" "}
          <Link href="/register" color={theme.palette.text.primary}>
            Sign Up
          </Link>
        </Typography>
      </Grid2>
    </Grid2>
  );
}

export default LoginForm;
