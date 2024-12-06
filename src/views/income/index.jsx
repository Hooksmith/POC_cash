import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateTimePicker } from "@mui/x-date-pickers";
import { useTheme } from "@emotion/react";
import { Grid2, InputLabel, Pagination } from "@mui/material";
import IncomeItem from "../../components/incomeItem";
import dayjs from "dayjs";

function Income() {
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
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Box sx={{ width: { xs: "95%", md: "80%" }, mt: 4, mb: 4 }}>
        <Typography
          sx={{ textAlign: "start", mb: 4 }}
          variant="h4"
          fontWeight="600"
        >
          My Income
        </Typography>
        <Typography sx={{ textAlign: "start" }} variant="h6" fontWeight="600">
          Transaction Income
        </Typography>
      </Box>

      <Box
        sx={{
          width: { xs: "95%", md: "80%" },
          backgroundColor: theme.palette.grey[0],
          borderRadius: 2,
          boxShadow: 2,
        }}
      >
        <Box sx={{ px: { xs: 2, md: 8 }, py: { xs: 2, md: 4 } }}>
          <Typography variant="h6" fontWeight="500">
            Please Input Your Income
          </Typography>
          <Grid2 container sx={{ mb: 4, mt: 3 }} spacing={2}>
            <Grid2 size={{ sm: 12, md: 3 }}>
              <InputLabel sx={{ fontSize: "14px", mb: 1 }}>
                Choose Category
              </InputLabel>
              <TextField
                select
                value={category}
                size="small"
                fullWidth
                sx={{ minWidth: 200, backgroundColor: "white" }}
                onChange={(e) => setCategory(e.target.value)}
              >
                <MenuItem value="category1">Category 1</MenuItem>
                <MenuItem value="category2">Category 2</MenuItem>
              </TextField>
            </Grid2>
            <Grid2 size={{ sm: 12, md: 4 }}>
              <InputLabel sx={{ fontSize: "14px", mb: 1 }}>
                Date Time
              </InputLabel>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateTimePicker
                  sx={{
                    minWidth: "300px",
                    backgroundColor: "white",
                  }}
                  slotProps={{ textField: { size: "small" } }}
                  value={dateTime}
                  views={["year", "month", "day", "hours", "minutes"]}
                  inputFormat="DD/MM/YYYY HH:mm"
                  onChange={(newValue) => setDateTime(newValue)}
                  referenceDate={dayjs("2022-04-17T15:30")}
                />
              </LocalizationProvider>
            </Grid2>
          </Grid2>
          <Box>
            <InputLabel sx={{ fontSize: "14px", mb: 1 }}>Amount</InputLabel>
            <TextField
              type="number"
              fullWidth
              size="small"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              sx={{ mb: 2 }}
            />
          </Box>

          <Box>
            <InputLabel sx={{ fontSize: "14px", mb: 1 }}>
              Note (Optional)
            </InputLabel>

            <TextField
              multiline
              fullWidth
              size="small"
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
            <Button
              variant="contained"
              onClick={handleSubmit}
              sx={{
                backgroundColor: theme.palette.background.primary,
                color: theme.palette.grey[0],
              }}
            >
              Add Income
            </Button>
          </Box>
        </Box>
      </Box>
      <Box sx={{ width: { xs: "95%", md: "80%" }, mt: 6 }}>
        <Typography variant="h4" fontWeight="600">
          Filter Income
        </Typography>

        <Grid2 container spacing={2} sx={{ mb: 4, mt: 3 }}>
          <Grid2 size={{ sm: 12, md: 3 }}>
            <InputLabel sx={{ fontSize: "14px", mb: 1 }}>
              Choose Category
            </InputLabel>
            <TextField
              select
              value={category}
              fullWidth
              size="small"
              sx={{ minWidth: 200, backgroundColor: "white" }}
              onChange={(e) => setCategory(e.target.value)}
            >
              <MenuItem value="category1">Category 1</MenuItem>
              <MenuItem value="category2">Category 2</MenuItem>
            </TextField>
          </Grid2>
          <Grid2 size={{ sm: 12, md: 3 }}></Grid2>
          <Grid2 size={{ sm: 12, md: 3 }}>
            <InputLabel sx={{ fontSize: "14px", mb: 1 }}>Date Time</InputLabel>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DateTimePicker
                sx={{
                  minWidth: "300px",
                  backgroundColor: "white",
                }}
                slotProps={{ textField: { size: "small" } }}
                value={dateTime}
                views={["year", "month", "day", "hours", "minutes"]}
                inputFormat="DD/MM/YYYY HH:mm"
                onChange={(newValue) => setDateTime(newValue)}
                referenceDate={dayjs("2022-04-17T15:30")}
              />
            </LocalizationProvider>
          </Grid2>
        </Grid2>
      </Box>
      <Box
        sx={{
          width: { xs: "95%", md: "80%" },
          backgroundColor: theme.palette.grey[0],
          borderRadius: 2,
          boxShadow: 2,
        }}
      >
        <TableContainer>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Category</TableCell>
                <TableCell>Date</TableCell>
                <TableCell>Note</TableCell>
                <TableCell>Amount</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {incomeData.map((income, index) => (
                <IncomeItem key={index} {...income} />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
      <Box
        sx={{
          width: { xs: "95%", md: "80%" },
          display: "flex",
          justifyContent: "end",
          pt: 3,
          pb: 4,
        }}
      >
        <Pagination
          count={10}
          siblingCount={0}
          variant="outlined"
          shape="rounded"
          sx={{
            "& .MuiPaginationItem-root": {
              backgroundColor: "white", // Set background color
              color: "black", // Set text color
              fontSize: { xs: 12, sm: 14, md: 16 },
            },
            "& .MuiPaginationItem-root.Mui-selected": {
              backgroundColor: "white", // Set color for selected page
              color: "green",
              borderColor: "green",
              fontSize: { xs: 12, sm: 14, md: 16 },
            },
          }}
        />
      </Box>
    </Box>
  );
}

export default Income;
