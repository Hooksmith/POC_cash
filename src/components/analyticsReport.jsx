import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { Chart } from "react-google-charts";
import { Card, FormControl } from "@mui/material";

function AnalyticsReport() {
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
  };

  return (
    <Box>
      <Typography variant="h5" gutterBottom sx={{ mb: 2, fontWeight: "700" }}>
        Analytics Report
      </Typography>
      <Card>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end",
            pt: 2,
            pr: 2,
          }}
        >
          <FormControl size="small" sx={{ mr: 2 }}>
            <Select
              value={filter.totalEarning}
              onChange={handleFilterChange}
              name="totalEarning"
              sx={{
                fontSize: "12px",
                borderRadius: "6px",
              }}
            >
              <MenuItem value="Total Earning">Total Earning</MenuItem>
            </Select>
          </FormControl>
          <FormControl size="small">
            <Select
              value={filter.timeframe}
              onChange={handleFilterChange}
              name="timeframe"
              sx={{
                fontSize: "12px",
                borderRadius: "6px",
              }}
            >
              <MenuItem value="Monthly">Monthly</MenuItem>
            </Select>
          </FormControl>
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
