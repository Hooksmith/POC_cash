import { useTheme } from "@emotion/react";
import { Box, TextField, Typography, Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

function VerifyCode() {
  const theme = useTheme();
  const navigate = useNavigate();
  const handleNextButtonClick = () => {
    navigate("/new-password"); // Replace '/next-page' with your desired route
  };

  const [code, setCode] = React.useState("");

  const handleChange = (event, index) => {
    const newCode = [...code];
    newCode[index] = event.target.value;
    setCode(newCode.join(""));
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
          width: { xs: "80%", md: "40%" },
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
        <Box sx={{ textAlign: "center" }}>
          <Typography
            variant="h4"
            component="h1"
            sx={{
              fontSize: "40px",
            }}
            fontWeight="500"
            gutterBottom
            color={theme.palette.background.primary}
          >
            Verify Your Code
          </Typography>
        </Box>
        <Box sx={{ textAlign: "center", px: 8 }}>
          <Typography variant="h6" gutterBottom fontWeight="400">
            Enter the passcode you just received on your email address ending
            with ******in@gmail.com
          </Typography>
        </Box>
        <Box
          sx={{ display: "flex", justifyContent: "space-evenly", my: 4, px: 8 }}
        >
          {Array.from({ length: 4 }).map((_, index) => (
            <TextField
              key={index}
              type="text"
              value={code[index] || ""}
              onChange={(event) => handleChange(event, index)}
              sx={{
                width: "12%",
                border: "1px solid green",
                borderRadius: "5px",
                textAlign: "center",
              }}
            />
          ))}
        </Box>
        <Box sx={{ px: 8, pb: 6 }}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: theme.palette.background.primary,
              color: theme.palette.text.white,
            }}
            fullWidth
            onClick={handleNextButtonClick}
          >
            Verify
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default VerifyCode;
