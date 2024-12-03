import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { Card, Grid2, InputLabel } from "@mui/material";
import { DesktopDatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

import { useTheme } from "@emotion/react";

function CreateBudget() {
  const theme = useTheme();
  const [category, setCategory] = React.useState("");
  const [dateTime, setDateTime] = React.useState(null);
  const [amount, setAmount] = React.useState("");
  const [note, setNote] = React.useState("");
  const incomeData = [
    {
      category: "Salary",
      date: "03 June 2022",
      description: "Here is my income",
      amount: 5000000,
    },
    {
      category: "Business",
      date: "03 June 2022",
      description: "Here is my income",
      amount: 5000000,
    },
    {
      category: "Salary",
      date: "03 June 2022",
      description: "Here is my income",
      amount: 5000000,
    },
    {
      category: "Business",
      date: "03 June 2022",
      description: "Here is my income",
      amount: 5000000,
    },
  ];
  const handleSubmit = () => {
    // Handle form submission here, e.g., send data to server
    console.log("Category:", category);
    console.log("Date Time:", dateTime);
    console.log("Amount:", amount);
    console.log("Note:", note);
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Box sx={{ width: { xs: "95%", md: "80%" }, mt: 4, mb: 4 }}>
        <Typography sx={{ textAlign: "start", mb: 2 }} variant="h4">
          My Budget
        </Typography>
        <Typography sx={{ textAlign: "start" }} variant="h6">
          Transaction Budget
        </Typography>
      </Box>
      <Card sx={{ width: { xs: "95%", md: "80%" }, p: 6 }}>
        <Typography variant="h6" gutterBottom>
          Take control of your expenses and save money with budgets!
        </Typography>

        <Grid2 container spacing={4} sx={{ mb: 4, mt: 3 }}>
          <Grid2 size={{ sm: 12, md: 4 }}>
            <InputLabel>Budget name</InputLabel>
            <TextField
              select
              value={category}
              fullWidth
              sx={{ minWidth: 200, backgroundColor: "white" }}
              onChange={(e) => setCategory(e.target.value)}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value="category1">Category 1</MenuItem>
              <MenuItem value="category2">Category 2</MenuItem>
              {/* ... more categories */}
            </TextField>
          </Grid2>
          <Grid2 size={{ sm: 12, md: 4 }}>
            {" "}
            <InputLabel>Amount</InputLabel>
            <TextField
              type="number"
              fullWidth
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              sx={{ mb: 2 }}
            />
          </Grid2>
          <Grid2 size={{ sm: 12, md: 4 }}>
            <InputLabel>Duration</InputLabel>

            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DesktopDatePicker
                fullWidth
                sx={{ minWidth: 200, backgroundColor: "white" }}
                inputFormat="DD/MM/YYYY HH:mm"
                value={dateTime}
                onChange={(newValue) => setDateTime(newValue)}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
          </Grid2>
        </Grid2>

        <Box>
          <InputLabel>Note (Optional)</InputLabel>

          <TextField
            multiline
            fullWidth
            value={note}
            onChange={(e) => setNote(e.target.value)}
            sx={{ mb: 2 }}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end", // Align items to the end
          }}
        >
          <Button variant="contained" color="primary" sx={{ mt: 2 }}>
            Create Budget
          </Button>
        </Box>
      </Card>
    </Box>
  );
}

export default CreateBudget;
