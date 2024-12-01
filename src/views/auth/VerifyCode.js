import { Box, TextField, Typography, Button } from "@mui/material";

function VerifyCode() {
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
          Verify Your Code
        </Typography>
        <Typography variant="body1" gutterBottom>
          Enter the passcode you just received on your email address ending with
          ******in@gmail.com
        </Typography>

        <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
          <TextField
            inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
            sx={{ width: "25%" }}
          />
          <TextField
            inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
            sx={{ width: "25%" }}
          />
          <TextField
            inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
            sx={{ width: "25%" }}
          />
          <TextField
            inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
            sx={{ width: "25%" }}
          />
        </Box>

        <Button variant="contained" color="primary" fullWidth>
          Verify
        </Button>
      </Box>
    </Box>
  );
}

export default VerifyCode;
