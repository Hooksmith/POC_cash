import * as React from "react";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Chart } from "react-google-charts";
import { useTheme } from "@mui/material";

function BudgetAchievement() {
  const theme = useTheme();
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

  const splitAmount = () => {
    const amount = 1800;
    let formattedAmount = "";
    if (typeof amount === "number") {
      formattedAmount = amount.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
    }
    return formattedAmount.split(".");
  };

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant="body1" fontWeight="600">
          Budget achievement
        </Typography>
        <Typography
          sx={{
            color: theme.palette.primary.main,
            fontWeight: 700,
            fontSize: "28px",
            lineHeight: "24px",
            py: 2,
          }}
        >
          $ {splitAmount()[0]}
          <Typography
            variant="span"
            sx={{
              color: theme.palette.grey[200],
            }}
          >
            .{splitAmount()[1]}
          </Typography>
        </Typography>
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
