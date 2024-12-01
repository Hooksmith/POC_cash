import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import DatePicker from "@mui/lab/DatePicker";

function SaveBudget() {
  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h4" component="h2" gutterBottom>
        Transaction Budget
      </Typography>
      <Typography variant="body1" gutterBottom>
        Take control of your expenses and save money with budgets!
      </Typography>

      <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
        <FormControl fullWidth>
          <InputLabel>Budget name</InputLabel>
          <Select label="Budget name" defaultValue="">
            <MenuItem value="">
              <em>Select a budget name</em>
            </MenuItem>
            {/* Add more options here */}
          </Select>
        </FormControl>

        <FormControl fullWidth>
          <InputLabel>Duration</InputLabel>
          <DatePicker
            label="Duration"
            value={null}
            onChange={(newValue) => {
              // Handle date change
            }}
            renderInput={(params) => <TextField {...params} />}
          />
        </FormControl>
      </Box>

      <TextField
        label="Amount"
        type="number"
        fullWidth
        defaultValue=""
        sx={{ mb: 2 }}
      />

      <TextField label="Note (Optional)" multiline fullWidth rows={4} />

      <Button variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
        Save Budget
      </Button>
    </Box>
  );
}

export default SaveBudget;
