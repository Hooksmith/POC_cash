import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { Grid2 } from "@mui/material";

function CreateAccount() {
  return (
    // <Box sx={{ flexGrow: 1 }}>
      <Grid2 container spacing={2}>
        <Grid2 size={{ xs: 12, md: 6 }} sx={{ background: "red" }}>
          <Box
            component="img"
            src="/logo.png"
            alt="DocCast Logo"
            sx={{ width: "100px", height: "auto", marginBottom: 2 }}
          />
        </Grid2>
        <Grid2 size={{ xs: 12, md: 6 }}>
          <Typography variant="h4" component="h1" gutterBottom>
            Create an Account
          </Typography>

          <Typography variant="body1" gutterBottom sx={{ mb: 2 }}>
            Already have an account? <a href="#">Log in</a>
          </Typography>

          {/* First Name and Last Name Fields */}
          <TextField
            label="First Name"
            variant="outlined"
            fullWidth
            sx={{ mb: 2 }}
          />
          <TextField
            label="Last Name"
            variant="outlined"
            fullWidth
            sx={{ mb: 2 }}
          />

          {/* Gender and Date of Birth Fields */}
          <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
            <FormControl fullWidth>
              <InputLabel id="gender-label">Gender</InputLabel>
              <Select labelId="gender-label" id="gender-select" label="Gender">
                <MenuItem value="custom">Custom</MenuItem>
                {/* Add more options as needed */}
              </Select>
            </FormControl>
            <TextField
              label="Date of Birth (MM/DD/YY)"
              type="date"
              variant="outlined"
              InputLabelProps={{
                shrink: true,
              }}
              sx={{ ml: 2 }}
            />
          </Box>

          {/* Email and Password Fields */}
          <TextField
            label="Email Address"
            variant="outlined"
            fullWidth
            sx={{ mb: 2 }}
          />
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            sx={{ mb: 2 }}
          />
          <TextField
            label="Confirm Password"
            type="password"
            variant="outlined"
            fullWidth
            sx={{ mb: 2 }}
          />

          <Button variant="contained" color="primary" fullWidth>
            Create an Account
          </Button>
        </Grid2>
      </Grid2>
    // </Box>
  );
}

export default CreateAccount;
