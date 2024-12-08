import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { Card, Grid2, InputLabel, useTheme } from "@mui/material";
import { DateTimePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useNavigate } from "react-router-dom";
import dayjs from "dayjs";

function CreateBudget() {
  const theme = useTheme();
  const navigate = useNavigate();
  const [category, setCategory] = React.useState("");
  const [dateTime, setDateTime] = React.useState(null);
  const [amount, setAmount] = React.useState("");
  const [note, setNote] = React.useState("");

  const onClickCreate = () => {
    navigate("/save-budget");
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
        <Typography
          variant="h5"
          fontWeight="700"
          color={theme.palette.grey[900]}
          sx={{ mb: 4 }}
        >
          My Budget
        </Typography>
        <Typography
          variant="h6"
          fontWeight="600"
          color={theme.palette.grey[900]}
        >
          Transaction Budget
        </Typography>
      </Box>
      <Card sx={{ width: { xs: "95%", md: "80%" }, p: 6 }}>
        <Typography variant="h6" gutterBottom fontWeight="400">
          Take control of your expenses and save money with budgets!
        </Typography>

        <Grid2 container spacing={4} sx={{ mb: 2, mt: 3 }}>
          <Grid2 size={{ sm: 12, md: 4 }}>
            <InputLabel sx={{ fontSize: "14px", mb: 1 }}>
              Budget name
            </InputLabel>
            <TextField
              select
              size="small"
              value={category}
              fullWidth
              sx={{
                backgroundColor: "white",
                "& .MuiOutlinedInput-root": {
                  borderRadius: "5px",
                },
              }}
              onChange={(e) => setCategory(e.target.value)}
            >
              <MenuItem value="category1">Category 1</MenuItem>
              <MenuItem value="category2">Category 2</MenuItem>
            </TextField>
          </Grid2>
          <Grid2 size={{ sm: 12, md: 4 }}>
            <InputLabel sx={{ fontSize: "14px", mb: 1 }}>Amount</InputLabel>
            <TextField
              type="number"
              size="small"
              fullWidth
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
          <Grid2 size={{ sm: 12, md: 4 }}>
            <InputLabel sx={{ fontSize: "14px", mb: 1 }}>Duration</InputLabel>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DateTimePicker
                sx={{
                  width: "100%",
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
        </Grid2>

        <Box>
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
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
          }}
        >
          <Button variant="contained" sx={{ mt: 3 }} onClick={onClickCreate}>
            Create Budget
          </Button>
        </Box>
      </Card>
    </Box>
  );
}

export default CreateBudget;
