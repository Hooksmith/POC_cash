import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
function EditProfile() {
  return (
    <Box
      sx={{
        padding: 4,
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
        <Avatar
          sx={{ width: 56, height: 56, mr: 2 }}
          src="/path/to/avatar.jpg"
        />
        <Typography variant="h6" component="h2">
          Phann Sothyro
          <Typography variant="body2" color="textSecondary">
            Phnom Penh
          </Typography>
        </Typography>
        <Button variant="contained" color="primary" size="small" sx={{ ml: 2 }}>
          Edit
        </Button>
      </Box>

      <Typography variant="h6" component="h2" gutterBottom>
        Personal Information
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            defaultValue="name@gmail.com"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Phone number"
            variant="outlined"
            fullWidth
            defaultValue="+855 12 345 567"
          />
        </Grid>
      </Grid>

      <Typography variant="h6" component="h2" gutterBottom sx={{ mt: 2 }}>
        Privacy
      </Typography>
      <Grid container spacing={2}>
        {/* ... other fields for gender, date of birth, etc. */}
      </Grid>

      <Button variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
        Save Changes
      </Button>
    </Box>
  );
}

export default EditProfile;
