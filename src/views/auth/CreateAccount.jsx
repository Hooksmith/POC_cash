import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { Checkbox, FormControlLabel, Grid2, Link } from "@mui/material";
import { useTheme } from "@emotion/react";
import { useNavigate } from "react-router-dom";

function CreateAccount() {
  const navigate = useNavigate();
  const handleNextButtonClick = () => {
    navigate("/login"); // Replace '/next-page' with your desired route
  };
  const theme = useTheme();
  return (
    <Grid2 container spacing={2}>
      <Grid2 size={{ xs: 12, md: 6 }}>
        <Box
          sx={{
            backgroundColor: theme.palette.background.primary,
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
        <Typography variant="h4" component="h1" gutterBottom>
          Create an Account
        </Typography>

        <Typography variant="body1" gutterBottom sx={{ mb: 2 }}>
          Already have an account?{" "}
          <Link color={theme.palette.text.primary} href="/login">
            Log in
          </Link>
        </Typography>

        {/* First Name and Last Name Fields */}
        <InputLabel>First Name</InputLabel>

        <TextField variant="outlined" fullWidth sx={{ mb: 2 }} />
        <InputLabel>Last Name</InputLabel>

        <TextField variant="outlined" fullWidth sx={{ mb: 2 }} />

        {/* Gender and Date of Birth Fields */}

        <Grid2 container spacing={2} sx={{ mb: 2 }}>
          <Grid2 size={{ xs: 12, md: 6 }}>
            <InputLabel>Gender</InputLabel>
            <Select labelId="gender-label" id="gender-select" fullWidth>
              <MenuItem value="custom">Custom</MenuItem>
              {/* Add more options as needed */}
            </Select>
          </Grid2>
          <Grid2 size={{ xs: 12, md: 6 }}>
            <InputLabel>Date of Birth (MM/DD/YY)</InputLabel>
            <TextField type="date" variant="outlined" fullWidth />
          </Grid2>
        </Grid2>

        {/* Email and Password Fields */}
        <InputLabel>Email Address</InputLabel>
        <TextField variant="outlined" fullWidth sx={{ mb: 2 }} />
        <InputLabel>Password</InputLabel>
        <TextField
          type="password"
          variant="outlined"
          fullWidth
          sx={{ mb: 2 }}
        />
        <InputLabel>Confirm Password</InputLabel>
        <TextField
          type="password"
          variant="outlined"
          fullWidth
          sx={{ mb: 2 }}
        />

        <Typography variant="body2" color="textSecondary">
          Use 8 or more characters with a mix of letters, numbers & symbols
        </Typography>
        <FormControlLabel
          control={
            <Checkbox
              defaultChecked
              sx={{
                color: theme.palette.background.primary,
                "&.Mui-checked": {
                  color: theme.palette.background.primary,
                },
              }}
            />
          }
          label="Show password"
        />

        <Button
          variant="contained"
          sx={{
            backgroundColor: theme.palette.background.primary,
            color: theme.palette.text.white,
          }}
          fullWidth
          onClick={handleNextButtonClick}
        >
          Create an Account
        </Button>
      </Grid2>
    </Grid2>
    // </Box>
  );
}

export default CreateAccount;
