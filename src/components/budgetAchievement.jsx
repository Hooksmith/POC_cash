import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Chart } from "react-google-charts";

function BudgetAchievement() {
  const chartData = [
    ["Year", "Achievement"],
    ["2022", 80],
    ["2023", 120],
    ["2024", 60],
  ];

  const chartOptions = {
    title: "Budget Achievement",
    legend: { position: "bottom" },
    hAxis: { title: "Year", minValue: 0, maxValue: 120 },
    vAxis: { title: "Achievement" },
    series: {
      0: { color: "#8BC34A" }, // Customize color for 2022
      1: { color: "#8BC34A" }, // Customize color for 2023
      2: { color: "#8BC34A" }, // Customize color for 2024
    },
  };

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant="h5" component="h2">
          Budget achievement
        </Typography>
        <Typography variant="h4" component="h2">
          $1,800.00
        </Typography>
        <Typography variant="body2">5 achievements</Typography>
        <Chart
          chartType="BarChart"
          width="100%"
          height="300px"
          data={chartData}
          options={chartOptions}
        />
      </CardContent>
    </Card>
  );
}

export default BudgetAchievement;
