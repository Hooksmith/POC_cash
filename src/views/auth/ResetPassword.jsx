import { useTheme } from "@emotion/react";
import { Box, TextField, Typography, Button, InputLabel } from "@mui/material";
import { useNavigate } from "react-router-dom";

function ResetPassword() {
  const theme = useTheme();
  const navigate = useNavigate();
  const handleNextButtonClick = () => {
    navigate("/verify-code"); // Replace '/next-page' with your desired route
  };
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
          width: { xs: "80%", md: "50%" },
          padding: 6,
          backgroundColor: "#fff",
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
            color={theme.palette.text.primary}
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
            <Typography variant="h5" gutterBottom fontWeight="400">
              Please, enter your e-mail address below to receive your user and a
              new password
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
          <InputLabel fontSize="16px" fontWeight="400" sx={{ mb: 1 }}>
            Email address
          </InputLabel>
          <TextField variant="outlined" fullWidth sx={{ mb: 2 }} />

          <Button
            variant="contained"
            sx={{
              backgroundColor: theme.palette.background.primary,
              color: theme.palette.text.white,
            }}
            fullWidth
            onClick={handleNextButtonClick}
          >
            Reset Password
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default ResetPassword;
