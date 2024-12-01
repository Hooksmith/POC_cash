import { Box, Button, Grid2, TextField, Typography } from "@mui/material";

function LoginForm() {
  return (

    <Grid2 container spacing={2}>

  <Grid2 size={{ xs: 12, md: 6 }}>
    <Box
     component="img"
          src="/logo.png"
          alt="DocCast Logo"
          sx={{ width: '100px', height: 'auto', marginBottom: 2 }}
        />
  </Grid2>
  <Grid2 size={{ xs: 12, md: 6 }}>

        <Typography variant="h4" component="h1" gutterBottom>
          Sign In
        </Typography>

        {/* Social Login Buttons */}
        <Button variant="contained" color="primary" fullWidth sx={{ mb: 2 }}>
          {/* <GoogleIcon sx={{ mr: 1 }} /> */}
          Continue with Google
        </Button>
        <Button variant="contained" color="primary" fullWidth sx={{ mb: 2 }}>
          {/* <FacebookIcon sx={{ mr: 1 }} /> */}
          Continue with Facebook
        </Button>

        <Typography variant="body1" gutterBottom>
          OR
        </Typography>

        {/* Email and Password Fields */}
        <TextField
          label="Email Address"
          variant="outlined"
          fullWidth
          sx={{ mb: 2 }}
          error={true} // Set error state as needed
          helperText="Error message" // Display error message
        />
        <TextField
          label="Your Password"
          type="password"
          variant="outlined"
          fullWidth
          sx={{ mb: 2 }}
          error={true} // Set error state as needed
          helperText="Error message" // Display error message
        />

        <Button variant="contained" color="primary" fullWidth>
          Sign In
        </Button>

        <Typography variant="body1" gutterBottom sx={{ mt: 2 }}>
          Forgot your password?
        </Typography>
        <Typography variant="body1" gutterBottom>
          Don't have an account? <a href="#">Sign Up</a>
        </Typography>
  </Grid2>
</Grid2>
  );
}

export default LoginForm;
