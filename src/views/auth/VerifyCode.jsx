import React from "react";
import { useTheme } from "@emotion/react";
import { Box, TextField, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

function VerifyCode() {
  const theme = useTheme();
  const navigate = useNavigate();
  const [otp, setOtp] = React.useState(["", "", "", ""]);
  const inputRefs = React.useRef([]);

  const handleInputChange = (event, index) => {
    const newOtp = [...otp];
    newOtp[index] = event.target.value.slice(0, 1);
    setOtp(newOtp);

    if (newOtp[index] !== "" && index < 3) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleBackspace = (event, index) => {
    if (event.key === "Backspace" && otp[index] === "") {
      if (index > 0) {
        inputRefs.current[index - 1].focus();
        setOtp((prevOtp) => {
          const newOtp = [...prevOtp];
          newOtp[index - 1] = "";
          return newOtp;
        });
      }
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const strOtp = otp.join("");
    if (strOtp.length === 4) {
      navigate("/new-password");
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
            width: { xs: "80%", md: "40%" },
            padding: 4,
            backgroundColor: theme.palette.grey[0],
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
              color={theme.palette.primary.main}
            >
              Verify Your Code
            </Typography>
          </Box>
          <Box sx={{ textAlign: "center", px: 8 }}>
            <Typography gutterBottom fontWeight="400" color="textSecondary">
              Enter the passcode you just received on your email address ending
              with ******in@gmail.com
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              my: 4,
            }}
          >
            {otp.map((digit, index) => (
              <TextField
                required
                key={index}
                type="number"
                value={digit}
                onChange={(event) => handleInputChange(event, index)}
                onKeyDown={(event) => handleBackspace(event, index)}
                sx={{
                  width: 60,
                  maxLength: 1,
                  mx: 1,
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "4px",
                  },
                }}
                inputRef={(ref) => (inputRefs.current[index] = ref)}
              />
            ))}
          </Box>
          <Box sx={{ px: 8, pb: 6 }}>
            <Button fullWidth type="submit" variant="contained" size="large">
              Verify
            </Button>
          </Box>
        </Box>
      </Box>
    </form>
  );
}

export default VerifyCode;
