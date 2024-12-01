import { Box, TextField, Typography, Button } from "@mui/material";

function ResetPassword() {
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
          width: { xs: "80%", md: "400px" },
          padding: 4,
          backgroundColor: "#fff",
          borderRadius: 2,
          boxShadow: 2,
        }}
      >
        <Box
          component="img"
          src="/logo.png"
          alt="DocCash Logo"
          sx={{ width: "100px", height: "auto", marginBottom: 2 }}
        />
        <Typography variant="h4" component="h1" gutterBottom>
          Forgot Your Password?
        </Typography>
        <Typography variant="body1" gutterBottom>
          Please, enter your e-mail address below to receive your user and a new
          password
        </Typography>

        <TextField
          label="Email address"
          variant="outlined"
          fullWidth
          sx={{ mb: 2 }}
        />

        <Button variant="contained" color="primary" fullWidth>
          Reset Password
        </Button>
      </Box>
    </Box>
  );
}

export default ResetPassword;
