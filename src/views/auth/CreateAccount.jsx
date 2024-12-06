import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import { Checkbox, FormControlLabel, Grid2, Link } from "@mui/material";
import { useTheme } from "@emotion/react";
import { useNavigate } from "react-router-dom";

function CreateAccount() {
  const theme = useTheme();
  const navigate = useNavigate();

  const handleNextButtonClick = () => {
    navigate("/login");
  };

  return (
    <Grid2 container spacing={2}>
      <Grid2
        size={{ xs: 12, md: 6 }}
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
        <Typography variant="h4" component="h1" gutterBottom fontWeight="500">
          Create an Account
        </Typography>

        <Typography
          variant="body1"
          gutterBottom
          sx={{ mb: 2 }}
          fontWeight="400"
        >
          Already have an account?{" "}
          <Link color={theme.palette.primary.main} href="/login">
            Log in
          </Link>
        </Typography>

        <InputLabel sx={{ fontSize: "16px", fontWeight: "400", mb: 1 }}>
          First Name
        </InputLabel>
        <TextField variant="outlined" fullWidth sx={{ mb: 2 }} />
        <InputLabel sx={{ fontSize: "16px", fontWeight: "400", mb: 1 }}>
          Last Name
        </InputLabel>
        <TextField variant="outlined" fullWidth sx={{ mb: 2 }} />
        <Grid2 container spacing={2} sx={{ mb: 2 }}>
          <Grid2 size={{ xs: 12, md: 6 }}>
            <InputLabel sx={{ fontSize: "16px", fontWeight: "400", mb: 1 }}>
              Gender
            </InputLabel>
            <TextField
              select
              labelId="gender-label"
              id="gender-select"
              fullWidth
            >
              <MenuItem value="custom">Custom</MenuItem>
            </TextField>
          </Grid2>
          <Grid2 size={{ xs: 12, md: 6 }}>
            <InputLabel sx={{ fontSize: "16px", fontWeight: "400", mb: 1 }}>
              Date of Birth (MM/DD/YY)
            </InputLabel>
            <TextField type="date" variant="outlined" fullWidth />
          </Grid2>
        </Grid2>
        <InputLabel sx={{ fontSize: "16px", fontWeight: "400", mb: 1 }}>
          Email Address
        </InputLabel>
        <TextField variant="outlined" fullWidth sx={{ mb: 2 }} />
        <InputLabel sx={{ fontSize: "16px", fontWeight: "400", mb: 1 }}>
          Password
        </InputLabel>
        <TextField
          type="password"
          variant="outlined"
          fullWidth
          sx={{ mb: 2 }}
        />
        <InputLabel sx={{ fontSize: "16px", fontWeight: "400", mb: 1 }}>
          Confirm Password
        </InputLabel>
        <TextField
          type="password"
          variant="outlined"
          fullWidth
          sx={{ mb: 2 }}
        />
        <Typography variant="body1" color="textSecondary">
          Use 8 or more characters with a mix of letters, numbers & symbols
        </Typography>
        <FormControlLabel
          sx={{ fontSize: "16px", fontWeight: "400" }}
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
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end", // Align items to the end
          }}
        >
          <Button
            variant="contained"
            sx={{
              backgroundColor: theme.palette.background.primary,
              color: theme.palette.text.white,
            }}
            onClick={handleNextButtonClick}
          >
            Create an Account
          </Button>
        </Box>
      </Grid2>
    </Grid2>
  );
}

export default CreateAccount;
