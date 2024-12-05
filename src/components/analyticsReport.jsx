import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { Chart } from "react-google-charts";
import { Card } from "@mui/material";
import {
  LineChart,
  lineElementClasses,
  markElementClasses,
} from "@mui/x-charts";

function AnalyticsReport() {
  const uData = [
    25000, 50000, 65000, 55000, 20000, 15000, 50000, 80000, 75000, 50000, 30000,
    120000,
  ];
  const xLabels = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const chartData = [
    ["Month", "Earnings"],
    ["Jan", 25000],
    ["Feb", 50000],
    ["Mar", 65000],
    ["Apr", 55000],
    ["May", 20000],
    ["Jun", 15000],
    ["Jul", 50000],
    ["Aug", 80000],
    ["Sep", 75000],
    ["Oct", 50000],
    ["Nov", 30000],
    ["Dec", 120000],
  ];

  const chartOptions = {
    curveType: "function",
    legend: { position: "none" },
    vAxis: { format: "short", minValue: 0, maxValue: 140000 },
    hAxis: { log: true, logscale: true },
    series: [{ color: "#6DB33F" }],
  };

  const [filter, setFilter] = React.useState({
    totalEarning: "Total Earning",
    timeframe: "Monthly",
  });

  const handleFilterChange = (event) => {
    setFilter({ ...filter, [event.target.name]: event.target.value });
    // Update chartData based on the selected filter
  };

  return (
    <Box>
      <Typography variant="h4" component="h2" gutterBottom>
        Analytics Report
      </Typography>
      <Card>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end",
          }}
        >
          <Select
            value={filter.totalEarning}
            onChange={handleFilterChange}
            name="totalEarning"
          >
            <MenuItem value="Total Earning">Total Earning</MenuItem>
          </Select>
          <Select
            value={filter.timeframe}
            onChange={handleFilterChange}
            name="timeframe"
          >
            <MenuItem value="Monthly">Monthly</MenuItem>
          </Select>
        </Box>

        <Chart
          chartType="LineChart"
          data={chartData}
          options={chartOptions}
          width="100%"
          height="400px"
        />
      </Card>
    </Box>
  );
}

export default AnalyticsReport;
