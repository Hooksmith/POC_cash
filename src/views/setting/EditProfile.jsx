import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import { Card, CardContent, Grid2 } from "@mui/material";
function EditProfile() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        alignSelf: "center",
      }}
    >
      <Card sx={{ width: { xs: "95%", md: "80%" }, mt: 4 }}>
        <CardContent>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ width: 56, height: 56, mr: 2 }} src="/avatar.png" />
            <Typography variant="h6" component="h2">
              Phann Sothyro
              <Typography variant="body2" color="textSecondary">
                Phnom Penh
              </Typography>
            </Typography>
            <Button
              variant="contained"
              color="primary"
              size="small"
              sx={{ ml: 2 }}
            >
              Edit
            </Button>
          </Box>
        </CardContent>
      </Card>
      <Card sx={{ width: { xs: "95%", md: "80%" }, mt: 4 }}>
        <CardContent>
          <Typography variant="h5" component="h2">
            Personal Information
          </Typography>
          <Grid2 container spacing={2}>
            <Grid2 size={{ xs: 12, md: 6 }}>
              <Typography variant="body1">Email:</Typography>
              <Typography variant="body1">name@gmail.com</Typography>
            </Grid2>
            <Grid2 size={{ xs: 12, md: 6 }}>
              <Typography variant="body1">Phone number:</Typography>
              <Typography variant="body1">+855 12 345 567</Typography>
            </Grid2>
          </Grid2>
        </CardContent>
      </Card>
      <Card sx={{ width: { xs: "95%", md: "80%" }, mt: 4 }}>
        <CardContent>
          <Typography variant="h5" component="h2">
            Privacy
          </Typography>
          <Grid2 container spacing={2}>
            <Grid2 size={{ xs: 12, md: 4 }}>
              <Typography variant="body1">Gender:</Typography>
              <Typography variant="body1">Male</Typography>
            </Grid2>
            <Grid2 size={{ xs: 12, md: 4 }}>
              <Typography variant="body1">Date of Birth:</Typography>
              <Typography variant="body1">12/07/1995</Typography>
            </Grid2>
            <Grid2 size={{ xs: 12, md: 4 }}>
              <Typography variant="body1">Sex:</Typography>
              <Typography variant="body1">Male</Typography>
            </Grid2>
          </Grid2>
          <Grid2 container spacing={2}>
            <Grid2 size={{ xs: 12, md: 4 }}>
              <Typography variant="body1">Gender:</Typography>
              <Typography variant="body1">Male</Typography>
            </Grid2>
            <Grid2 size={{ xs: 12, md: 4 }}>
              <Typography variant="body1">Date of Birth:</Typography>
              <Typography variant="body1">12/07/1995</Typography>
            </Grid2>
            <Grid2 size={{ xs: 12, md: 4 }}>
              <Typography variant="body1">Sex:</Typography>
              <Typography variant="body1">Male</Typography>
            </Grid2>
          </Grid2>
        </CardContent>
      </Card>
      <Box sx={{ width: { xs: "95%", md: "80%" }, mt: 4 }}>
        <Button variant="contained" color="primary" fullWidth>
          Save Changes
        </Button>
      </Box>
    </Box>
  );
}

export default EditProfile;
