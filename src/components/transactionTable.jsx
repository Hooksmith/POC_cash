import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import SearchIcon from "@mui/icons-material/Search";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Pagination from "@mui/material/Pagination";
import { Card, Checkbox, InputAdornment, TextField } from "@mui/material";

function TransactionTable() {
  const transactions = [
    {
      id: 1,
      description: "Payment from Bonnie Green",
      date: "Apr 23, 2021",
      amount: "$2300",
      status: "Completed",
    },
    {
      id: 2,
      description: "Payment from Bonnie Green",
      date: "Apr 23, 2021",
      amount: "$2300",
      status: "Completed",
    },
    {
      id: 3,
      description: "Payment from Bonnie Green",
      date: "Apr 23, 2021",
      amount: "$2300",
      status: "Completed",
    },
    {
      id: 4,
      description: "Payment from Bonnie Green",
      date: "Apr 23, 2021",
      amount: "$2300",
      status: "Completed",
    },
    {
      id: 5,
      description: "Payment from Bonnie Green",
      date: "Apr 23, 2021",
      amount: "$2300",
      status: "Completed",
    },
    {
      id: 6,
      description: "Payment from Bonnie Green",
      date: "Apr 23, 2021",
      amount: "$2300",
      status: "Completed",
    },
  ];
  //   const [transactions, setTransactions] = React.useState([]);
  //   const [currentPage, setCurrentPage] = React.useState(1);
  //   const [itemsPerPage, setItemsPerPage] = React.useState(10);
  const [searchQuery, setSearchQuery] = React.useState("");
  const [timePeriod, setTimePeriod] = React.useState("Last 30 days");

  // ... (Implement data fetching and filtering logic)

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleTimePeriodChange = (event) => {
    setTimePeriod(event.target.value);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Typography variant="h5" component="h2" gutterBottom>
        Recent Transaction
      </Typography>
      <Card>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            my: 2,
            mx: 2,
          }}
        >
          <Select value={timePeriod} onChange={handleTimePeriodChange}>
            <MenuItem value="Last 30 days">Last 30 days</MenuItem>
          </Select>
          <TextField
            variant="outlined"
            placeholder="search"
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              },
            }}
          />
        </Box>
        <TableContainer>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead sx={{ backgroundColor: "grey" }}>
              <TableRow>
                <TableCell padding="checkbox">
                  <Checkbox />
                </TableCell>
                <TableCell>Transaction</TableCell>
                <TableCell>Date & Time</TableCell>
                <TableCell>Amount</TableCell>
                <TableCell>Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {transactions.map((transaction) => (
                <TableRow key={transaction.id}>
                  <TableCell padding="checkbox">
                    <Checkbox />
                  </TableCell>
                  <TableCell>{transaction.description}</TableCell>
                  <TableCell>{transaction.date}</TableCell>
                  <TableCell>{transaction.amount}</TableCell>
                  <TableCell
                    sx={{
                      color:
                        transaction.status === "Completed"
                          ? "green"
                          : transaction.status === "Cancelled"
                          ? "red"
                          : "orange",
                    }}
                  >
                    {transaction.status}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Card>
      <Box
        sx={{
          //   width: { xs: "95%", md: "80%" },
          display: "flex",
          justifyContent: "end",
          pt: 3,
          pb: 4,
        }}
      >
        <Pagination
          count={10}
          size="small"
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

export default TransactionTable;
