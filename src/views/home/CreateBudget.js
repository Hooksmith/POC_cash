import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

function CreateBudget() {
  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h4" component="h2" gutterBottom>
        Transaction Budget
      </Typography>
      <Typography variant="body1" gutterBottom>
        Take control of your expenses and save money with budgets!
      </Typography>

      <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
        <TextField label="Budget name" select fullWidth defaultValue="">
          <MenuItem value="">
            <em>Select a budget name</em>
          </MenuItem>
          {/* Add more options here */}
        </TextField>
        <TextField
          label="Amount"
          type="number"
          fullWidth
          defaultValue=""
          sx={{ mr: 2 }}
        />
        <TextField label="Duration" select fullWidth>
          <MenuItem value="">
            <em>Select a duration</em>
          </MenuItem>
          <MenuItem value="3 weeks">3 weeks</MenuItem>
          {/* Add more options here */}
        </TextField>
      </Box>

      <TextField label="Note (Optional)" multiline fullWidth rows={4} />

      <Button variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
        Create Budget
      </Button>
    </Box>
  );
}

export default CreateBudget;
