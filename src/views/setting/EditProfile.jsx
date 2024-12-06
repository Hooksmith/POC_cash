import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import { Card, CardContent, Grid2 } from "@mui/material";
import ModeEditOutlinedIcon from "@mui/icons-material/ModeEditOutlined";
function EditProfile() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Box sx={{ width: { xs: "95%", md: "80%" }, mb: 3 }}>
        <Typography sx={{ textAlign: "start" }} variant="h5" fontWeight="600">
          Edit Profile
        </Typography>
      </Box>
      <Card sx={{ width: { xs: "95%", md: "80%" } }}>
        <CardContent>
          <Box
            sx={{
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "space-between",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Avatar sx={{ width: 56, height: 56, mx: 4 }} src="/avatar.png" />
              <Box>
                <Typography variant="h5" fontWeight="600">
                  Phann Sothyro
                </Typography>
                <Typography
                  variant="body1"
                  color="textSecondary"
                  fontWeight="400"
                >
                  Phnom Penh
                </Typography>
              </Box>
            </Box>
            <Button
              variant="outlined"
              size="small"
              endIcon={<ModeEditOutlinedIcon />}
              sx={{ ml: 2 }}
            >
              Edit
            </Button>
          </Box>
        </CardContent>
      </Card>
      <Card sx={{ width: { xs: "95%", md: "80%" }, mt: 4 }}>
        <CardContent>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              pl: 4,
            }}
          >
            <Typography variant="body1" fontWeight="600">
              Personal Information
            </Typography>
            <Button
              variant="outlined"
              size="small"
              endIcon={<ModeEditOutlinedIcon />}
              sx={{ ml: 2 }}
            >
              Edit
            </Button>
          </Box>
          <Grid2 container spacing={2} sx={{ px: 4, mt: 4 }}>
            <Grid2 size={{ xs: 12, md: 6 }}>
              <Typography variant="body2" fontWeight="500">
                Email
              </Typography>
              <Typography variant="body2" fontWeight="400">
                name@gmail.com
              </Typography>
            </Grid2>
            <Grid2 size={{ xs: 12, md: 6 }}>
              <Typography variant="body2" fontWeight="500">
                Phone number
              </Typography>
              <Typography variant="body2" fontWeight="400">
                +855 12 345 567
              </Typography>
            </Grid2>
          </Grid2>
        </CardContent>
      </Card>
      <Card sx={{ width: { xs: "95%", md: "80%" }, mt: 4 }}>
        <CardContent>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              pl: 4,
            }}
          >
            <Typography variant="h6" fontWeight="600">
              Privacy
            </Typography>
            <Button
              variant="outlined"
              size="small"
              endIcon={<ModeEditOutlinedIcon />}
              sx={{ ml: 2 }}
            >
              Edit
            </Button>
          </Box>
          <Grid2 container spacing={2} sx={{ mx: 4, mt: 4 }}>
            <Grid2 size={{ xs: 12, md: 4 }}>
              <Typography variant="body2" fontWeight="500">
                Gender:
              </Typography>
              <Typography variant="body2" fontWeight="400">
                Male
              </Typography>
            </Grid2>
            <Grid2 size={{ xs: 12, md: 4 }}>
              <Typography variant="body2" fontWeight="500">
                Date of Birth:
              </Typography>
              <Typography variant="body2" fontWeight="400">
                12/07/1995
              </Typography>
            </Grid2>
            <Grid2 size={{ xs: 12, md: 4 }}>
              <Typography variant="body2" fontWeight="500">
                Sex:
              </Typography>
              <Typography variant="body2" fontWeight="400">
                Male
              </Typography>
            </Grid2>
          </Grid2>
          <Grid2 container spacing={2} sx={{ mx: 4, mt: 2 }}>
            <Grid2 size={{ xs: 12, md: 4 }}>
              <Typography variant="body2" fontWeight="500">
                Gender:
              </Typography>
              <Typography variant="body2" fontWeight="400">
                Male
              </Typography>
            </Grid2>
            <Grid2 size={{ xs: 12, md: 4 }}>
              <Typography variant="body2" fontWeight="500">
                Date of Birth:
              </Typography>
              <Typography variant="body2" fontWeight="400">
                12/07/1995
              </Typography>
            </Grid2>
            <Grid2 size={{ xs: 12, md: 4 }}>
              <Typography variant="body2" fontWeight="500">
                Sex:
              </Typography>
              <Typography variant="body2" fontWeight="400">
                Male
              </Typography>
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
