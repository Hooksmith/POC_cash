import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { Grid2 } from "@mui/material";

function DashboardHeader() {
  return (
    <Grid2 container sx={{ pb: 4, alignItems: "center" }} spacing={2}>
      <Grid2 size={{ xs: 12, md: 6 }}>
        <Typography variant="h5" fontWeight="700">
          My Dashboard
        </Typography>
      </Grid2>
      <Grid2 size={{ xs: 12, md: 4 }}>
        <TextField
          placeholder="Search for transaction, item, etc"
          size="small"
          sx={{ backgroundColor: "white", borderRadius: 2 }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          fullWidth
        />
      </Grid2>
      <Grid2 size={{ xs: 12, md: 2 }}>
        <Box
          sx={{
            backgroundColor: "white",
            borderRadius: "5px",
            display: "flex",
            py: 1,
            px: 2,
            alignItems: "center",
          }}
        >
          <CalendarMonthIcon />
          <Typography variant="body2" sx={{ ml: 1 }}>
            This Month
          </Typography>
        </Box>
      </Grid2>
    </Grid2>
  );
}

export default DashboardHeader;
