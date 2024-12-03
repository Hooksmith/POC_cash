import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CircularProgress from "@mui/material/CircularProgress";
// import { PieChart } from "react-google-charts";
import { Chart } from "react-google-charts";
// import { PieChart } from "google-charts";

function ExpenseSummary() {
  const data = [
    ["Category", "Amount"],
    ["Watch", 10],
    ["Health Care", 20],
    ["Travelling", 70],
  ];

  const options = {
    pieHole: 0.4,
    pieSliceText: "none",
    legend: { position: "none" },
    tooltip: { trigger: "none" },
    colors: ["#FF9800", "#F15F79", "#673AB7"],
    chartArea: { width: "100%", height: "100%" },
  };

  return (
    <Card>
      <CardContent>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 2,
          }}
        >
          <Typography variant="h6">Your Spending Summary</Typography>
          <Typography variant="body2">This Week</Typography>
        </Box>

        <Typography variant="h4">$1,800.00</Typography>
        <Typography variant="body1">10 transactions</Typography>

        <Chart
          chartType="PieChart"
          data={data}
          options={options}
          width={"100%"}
          height={"400px"}
        />

        {/* Category Details */}
        <Box sx={{ mt: 2 }}>
          <Typography variant="body1">Watch: 10%</Typography>
          <Typography variant="body1">Health Care: 20%</Typography>
          <Typography variant="body1">Travelling: 70%</Typography>
        </Box>
      </CardContent>
    </Card>
  );
}

export default ExpenseSummary;
