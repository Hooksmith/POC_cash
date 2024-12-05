import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Chart } from "react-google-charts";
// import { PieChart } from "react-google-charts";
// import { PieChart } from "google-charts";

function ExpenseSummary() {
  const data = [
    ["Category", "Amount"],
    ["Watch", 70],
    ["Health Care", 20],
    ["Travelling", 10],
  ];

  const options = {
    pieHole: 0.6,
    pieSliceText: "none",
    legend: { position: "none" },
    tooltip: { trigger: "none" },
    colors: ["#6DB33F", "#8AC265", "#A7D18C"],
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
          }}
        >
          <Typography variant="h6">Your Spending Summary</Typography>
          <Typography variant="body2">This Week</Typography>
        </Box>

        <Typography variant="h4">$1,800.00</Typography>
        <Typography variant="body1">10 transactions</Typography>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box sx={{ width: "50%", mt: 2, p: 2 }}>
            <Chart
              chartType="PieChart"
              data={data}
              options={options}
              width={"100%"}
            />
          </Box>
          <Box sx={{ width: "50%" }}>
            <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
              <Box
                sx={{
                  width: 10,
                  height: 10,
                  borderRadius: "50%",
                  backgroundColor: "#6DB33F",
                  mr: 1,
                }}
              />
              <Typography variant="body1">Travelling: 70%</Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
              <Box
                sx={{
                  width: 10,
                  height: 10,
                  borderRadius: "50%",
                  backgroundColor: "#8AC265",
                  mr: 1,
                }}
              />
              <Typography variant="body1">Health Care: 20%</Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
              <Box
                sx={{
                  width: 10,
                  height: 10,
                  borderRadius: "50%",
                  backgroundColor: "#A7D18C",
                  mr: 1,
                }}
              />
              <Typography variant="body1">Watch: 10%</Typography>
            </Box>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}

export default ExpenseSummary;
