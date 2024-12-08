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
        <Typography variant="h5" gutterBottom fontWeight="600">
          Create a new category
        </Typography>
        <Grid2 container spacing={2}>
          <Grid2 size={{ xs: 12, md: 6 }}>
            <InputLabel sx={{ fontSize: "20px", mb: 1 }}>Icon</InputLabel>
            <TextField select fullWidth value={"category1"}>
              <MenuItem value="category1">Category 1</MenuItem>
              <MenuItem value="category2">Category 2</MenuItem>
            </TextField>
          </Grid2>
          <Grid2 size={{ xs: 12, md: 6 }}>
            <InputLabel sx={{ fontSize: "20px", mb: 1 }}>
              Backgound Color
            </InputLabel>

            <TextField select fullWidth value={"red"}>
              <MenuItem value="red">red</MenuItem>
              <MenuItem value="blue">blue</MenuItem>
            </TextField>
          </Grid2>
          <Grid2 size={{ xs: 12, md: 12 }}>
            <InputLabel sx={{ fontSize: "20px", mb: 1 }}>Name</InputLabel>

            <TextField label="Name" variant="outlined" fullWidth />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 12 }}>
            <Button variant="contained" color="primary">
              Add Category
            </Button>
          </Grid2>
        </Grid2>

        <Typography
          variant="h5"
          gutterBottom
          fontWeight="600"
          sx={{ mt: 6, mb: 4 }}
        >
          Manage Category
        </Typography>
        <TableContainer>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead sx={{ backgroundColor: "#F5F5F5" }}>
              <TableRow>
                <TableCell>Icon</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Note</TableCell>
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
                      justifyContent: "center",
                    }}
                  >
                    <Box
                      component="img"
                      alt="logo"
                      src="/transport.png"
                      width={24}
                      height={24}
                      sx={{ objectFit: "scale-down" }}
                    />
                  </Box>
                </TableCell>
                <TableCell>Transport</TableCell>
                <TableCell>
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
