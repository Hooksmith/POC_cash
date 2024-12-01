import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import InputField from "../../components/inputField";
// import IconButton from "@mui/material/IconButton";
// import EditIcon from "@mui/icons-material/Edit";
// import DeleteIcon from "@mui/icons-material/Delete";

function CategoryManagement() {
  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h4" component="h2" gutterBottom>
        Create a new category
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <TextField label="Icon" select fullWidth>
            {/* ... Icon options */}
          </TextField>
        </Grid>
        <Grid item xs={6}>
          <TextField label="Background Color" select fullWidth>
            {/* ... Color options */}
          </TextField>
        </Grid>
        <Grid item xs={12}>
          <TextField label="Name" variant="outlined" fullWidth />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" color="primary" fullWidth>
            Add Category
          </Button>
        </Grid>
      </Grid>

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
            {/* ... Table rows for existing categories */}
            <TableRow>
              <TableCell>{/* Icon */}</TableCell>
              <TableCell>Transport</TableCell>
              <TableCell align="right">
                {/* <IconButton>
                  <EditIcon />
                </IconButton>
                <IconButton>
                  <DeleteIcon />
                </IconButton> */}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default CategoryManagement;
