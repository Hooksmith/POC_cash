import * as React from "react";
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
    legend: { position: "none" },
    hAxis: { minValue: 0, maxValue: 120 },
    colors: ["#6DB33F", "#8AC265", "#A7D18C"],
  };

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant="body1" fontWeight="600">
          Budget achievement
        </Typography>
        <Typography variant="h4">$1,800.00</Typography>
        <Typography variant="body1">5 achievements</Typography>
        <Chart
          chartType="BarChart"
          width="100%"
          height="150px"
          data={chartData}
          options={chartOptions}
        />
      </CardContent>
    </Card>
  );
}

export default BudgetAchievement;
