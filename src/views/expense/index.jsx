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

function Expense() {
  const theme = useTheme();
  const [addCategory, setAddCategory] = React.useState("");
  const [category, setCategory] = React.useState("");
  const [dateTime, setDateTime] = React.useState(null);
  const [amount, setAmount] = React.useState("");
  const [note, setNote] = React.useState("");
  const dataList = [
    {
      category: "Salary",
      categoryKey: "01",
      date: "03 June 2022",
      description: "Here is my income",
      amount: 5000000,
    },
    {
      category: "Business",
      categoryKey: "02",
      date: "03 June 2022",
      description: "Here is my income",
      amount: 5000000,
    },
    {
      category: "Gifts",
      categoryKey: "03",
      date: "03 June 2022",
      description: "Here is my income",
      amount: 5000000,
    },
    {
      category: "Extra Income",
      categoryKey: "04",
      date: "03 June 2022",
      description: "Here is my income",
      amount: 5000000,
    },
    {
      category: "Loan",
      categoryKey: "05",
      date: "03 June 2022",
      description: "Here is my income",
      amount: 5000000,
    },
    {
      category: "Parental Leave",
      categoryKey: "06",
      date: "03 June 2022",
      description: "Here is my income",
      amount: 5000000,
    },
    {
      category: "Insurance Payout",
      categoryKey: "07",
      date: "03 June 2022",
      description: "Here is my income",
      amount: 5000000,
    },
    {
      category: "Adjustment",
      categoryKey: "08",
      date: "03 June 2022",
      description: "Here is my income",
      amount: 5000000,
    },
  ];
  const [incomeData, setIncomeData] = React.useState(dataList);

  const categoryList = [
    { key: "01", label: "Salary" },
    { key: "02", label: "Business" },
    { key: "03", label: "Gifts" },
    { key: "04", label: "Extra Income" },
    { key: "05", label: "Loan" },
    { key: "06", label: "Parental Leave" },
    { key: "07", label: "Insurance Payout" },
    { key: "08", label: "Adjustment" },
  ];

  const onChangeCategory = (event) => {
    setCategory(event.target.value);
    const filterIncome = dataList.filter(
      (item) => item.categoryKey === event.target.value
    );
    setIncomeData(filterIncome);
  };

  const handleSubmit = () => {
    //
  };

  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Box sx={{ width: { xs: "95%", md: "80%" }, mt: 4, mb: 4 }}>
        <Typography
          variant="h5"
          fontWeight="700"
          color={theme.palette.grey[900]}
          sx={{ mb: 4 }}
        >
          My Expense
        </Typography>
        <Typography
          variant="h6"
          fontWeight="600"
          color={theme.palette.grey[900]}
        >
          Transaction Expense
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
          <Typography
            variant="h6"
            fontWeight="500"
            color={theme.palette.grey[900]}
          >
            Please Input Your Expense
          </Typography>
          <Grid2 container sx={{ mb: 4, mt: 3 }} spacing={2}>
            <Grid2 size={{ sm: 12, md: 4 }}>
              <InputLabel sx={{ fontSize: "14px", mb: 1 }}>
                Choose Category
              </InputLabel>
              <TextField
                select
                value={addCategory}
                size="small"
                fullWidth
                sx={{
                  minWidth: 200,
                  backgroundColor: "white",
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "5px",
                  },
                }}
                onChange={(e) => setAddCategory(e.target.value)}
              >
                {categoryList.map((item, index) => (
                  <MenuItem key={index} value={item.key}>
                    {item.label}
                  </MenuItem>
                ))}
              </TextField>
            </Grid2>
            <Grid2 size={{ sm: 12, md: 4 }}>
              <InputLabel sx={{ fontSize: "14px", mb: 1 }}>
                Date Time
              </InputLabel>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateTimePicker
                  sx={{
                    minWidth: "100%",
                    backgroundColor: "white",
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "5px",
                    },
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
            <Grid2 size={{ sm: 12, md: 12 }}>
              <InputLabel sx={{ fontSize: "14px", mb: 1 }}>Amount</InputLabel>
              <TextField
                type="number"
                fullWidth
                size="small"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                sx={{
                  mb: 2,
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "5px",
                  },
                }}
              />
            </Grid2>
            <Grid2 size={{ sm: 12, md: 12 }}>
              <InputLabel sx={{ fontSize: "14px", mb: 1 }}>
                Note (Optional)
              </InputLabel>
              <TextField
                multiline
                size="small"
                fullWidth
                value={note}
                onChange={(e) => setNote(e.target.value)}
                sx={{
                  mb: 2,
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "5px",
                  },
                }}
              />
            </Grid2>
          </Grid2>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
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
              Add Expense
            </Button>
          </Box>
        </Box>
      </Box>

      <Box sx={{ width: { xs: "95%", md: "80%" }, mt: 6 }}>
        <Typography
          variant="h5"
          fontWeight="700"
          color={theme.palette.grey[900]}
        >
          Filter Expense
        </Typography>

        <Grid2 container spacing={2} sx={{ mb: 4, mt: 3 }}>
          <Grid2 size={{ sm: 12, md: 3 }}>
            <InputLabel sx={{ fontSize: "14px", mb: 1 }}>
              Choose Category
            </InputLabel>
            <TextField
              select
              value={category}
              size="small"
              fullWidth
              sx={{
                backgroundColor: "white",
                borderRadius: "5px",
                "& .MuiOutlinedInput-root": {
                  borderRadius: "5px",
                },
              }}
              onChange={onChangeCategory}
            >
              {categoryList.map((item, index) => (
                <MenuItem key={index} value={item.key}>
                  {item.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid2>
          <Grid2 size={{ sm: 12, md: 3 }}></Grid2>
          <Grid2 size={{ sm: 12, md: 3 }}>
            <InputLabel sx={{ fontSize: "14px", mb: 1 }}>Date Time</InputLabel>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DateTimePicker
                sx={{
                  backgroundColor: "white",
                  borderRadius: "5px",
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "5px",
                  },
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
              backgroundColor: "white",
              color: "black",
              fontSize: { xs: 12, sm: 14, md: 16 },
            },
            "& .MuiPaginationItem-root.Mui-selected": {
              backgroundColor: "white",
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

export default Expense;
