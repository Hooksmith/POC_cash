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
import StatusPill from "../components/statusPill";
import Pagination from "@mui/material/Pagination";
import {
  Card,
  Checkbox,
  Chip,
  FormControl,
  Grid2,
  InputAdornment,
  TextField,
  useTheme,
} from "@mui/material";

function TransactionTable() {
  const theme = useTheme();
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
      status: "Cancelled",
    },
    {
      id: 4,
      description: "Payment from Bonnie Green",
      date: "Apr 23, 2021",
      amount: "$2300",
      status: "In Progress",
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
  const [timePeriod, setTimePeriod] = React.useState("Last 30 days");

  const handleTimePeriodChange = (event) => {
    setTimePeriod(event.target.value);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Typography
        variant="h5"
        gutterBottom
        sx={{ mb: 2, fontWeight: "700", color: theme.palette.grey[900] }}
      >
        Recent Transaction
      </Typography>
      <Card>
        <Grid2 container spacing={2} sx={{ px: 2, py: 2 }}>
          <Grid2 size={{ xs: 12, md: 7 }}>
            <FormControl size="small">
              <Select
                value={timePeriod}
                onChange={handleTimePeriodChange}
                sx={{
                  fontSize: "12px",
                  borderRadius: "6px",
                }}
              >
                <MenuItem value="Last 30 days">Last 30 days</MenuItem>
              </Select>
            </FormControl>
          </Grid2>
          <Grid2 size={{ xs: 12, md: 5 }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
              }}
            >
              <TextField
                variant="outlined"
                placeholder="search"
                fullWidth
                size="small"
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
          </Grid2>
        </Grid2>

        <TableContainer>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead
              sx={{
                backgroundColor: "#F9FAFB",
              }}
            >
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
                  <TableCell>
                    <StatusPill label={transaction.status} />
                    {/* <Chip label={transaction.status} /> */}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Card>
      <Box
        sx={{
          display: "flex",
          justifyContent: "end",
          pt: 3,
          pb: 4,
        }}
      >
        <Pagination
          count={10}
          // size="small"
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
