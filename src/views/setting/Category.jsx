import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid2 from "@mui/material/Grid2";
import MenuItem from "@mui/material/MenuItem";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Card, IconButton, InputLabel } from "@mui/material";

function CategoryManagement() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Card sx={{ width: { xs: "95%", md: "80%" }, p: 4 }}>
        <Typography variant="h4" component="h2" gutterBottom>
          Create a new category
        </Typography>
        <Grid2 container spacing={2}>
          <Grid2 size={{ xs: 12, md: 6 }}>
            <InputLabel>Icon</InputLabel>
            <TextField select fullWidth value={"car"}>
              <MenuItem value="none">car</MenuItem>
            </TextField>
          </Grid2>
          <Grid2 size={{ xs: 12, md: 6 }}>
            <InputLabel>Backgound Color</InputLabel>

            <TextField select fullWidth value={"red"}>
              <MenuItem value="none">red</MenuItem>
            </TextField>
          </Grid2>
          <Grid2 size={{ xs: 12, md: 12 }}>
            <InputLabel>Name</InputLabel>

            <TextField label="Name" variant="outlined" fullWidth />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 12 }}>
            <Button variant="contained" color="primary">
              Add Category
            </Button>
          </Grid2>
        </Grid2>

        <Typography variant="h4" component="h2" gutterBottom sx={{ mt: 4 }}>
          Manage Category
        </Typography>
        <TableContainer>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Icon</TableCell>
                <TableCell>Name</TableCell>
                <TableCell align="right">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>
                  <Box
                    sx={{
                      width: 32,
                      height: 32,
                      backgroundColor: "green",
                      borderRadius: "50%",
                      p: 1,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center", // Added to center the image horizontally
                    }}
                  >
                    <Box
                      component="img"
                      alt="logo"
                      src="/briefcase.png"
                      width={24}
                      height={24}
                      sx={{ objectFit: "scale-down" }}
                    />
                  </Box>
                </TableCell>
                <TableCell>Transport</TableCell>
                <TableCell align="right">
                  <IconButton>
                    <Box
                      component="img"
                      alt="logo"
                      src="/edit.png"
                      width={24}
                      sx={{ objectFit: "scale-down" }}
                    />
                  </IconButton>
                  <IconButton>
                    <Box
                      component="img"
                      alt="logo"
                      src="/delete.png"
                      width={24}
                      sx={{ objectFit: "scale-down" }}
                    />
                  </IconButton>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Card>
    </Box>
  );
}

export default CategoryManagement;
