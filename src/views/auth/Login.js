import {
  Box,
  Button,
  createTheme,
  Grid2,
  InputLabel,
  Link,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

function LoginForm() {
  const navigate = useNavigate();
  const theme = useTheme();
  const handleNextButtonClick = () => {
    navigate("/register"); // Replace '/next-page' with your desired route
  };
  return (
    <Grid2 container>
      <Grid2 size={{ xs: 12, md: 6 }}>
        <Box
          sx={{
            backgroundColor: theme.palette.background.primary,
            minHeight: "100vh", // Ensures the green background fills the entire screen height
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
          component="h1"
          gutterBottom
          color={theme.palette.text.primary}
        >
          Sign In
        </Typography>

        {/* Social Login Buttons */}
        <Button
          variant="outlined"
          fullWidth
          sx={{ mb: 2, mt: 3, borderRadius: "50px", borderColor: "#C4CFD7" }}
        >
          <Box
            component="img"
            alt="logo"
            src="/google.png"
            height={24}
            sx={{ mr: 2 }}
          />
          <Typography color="black">Continue with Google</Typography>
        </Button>
        <Button
          variant="outlined"
          fullWidth
          sx={{ borderRadius: "50px", borderColor: "#C4CFD7" }}
        >
          <Box
            component="img"
            alt="logo"
            src="/facebook.png"
            height={24}
            sx={{ mr: 2 }}
          />
          <Typography color="black">Continue with Facebook</Typography>
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

        {/* Email and Password Fields */}
        <InputLabel color="#666666">Email Address</InputLabel>
        <TextField
          variant="outlined"
          fullWidth
          sx={{ mb: 2 }}
          // error={true} // Set error state as needed
          // helperText="Error message" // Display error message
        />
        <InputLabel color="#666666">Your Password</InputLabel>
        <TextField
          type="password"
          variant="outlined"
          fullWidth
          sx={{ mb: 2 }}
          // error={true} // Set error state as needed
          // helperText="Error message" // Display error message
        />

        <Link href="/reset-password" color={theme.palette.text.primary}>
          <Typography
            variant="body1"
            gutterBottom
            sx={{ mt: 2, textAlign: "right" }}
            color={theme.palette.text.primary}
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
        <Typography variant="body1" gutterBottom color="#666666">
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
