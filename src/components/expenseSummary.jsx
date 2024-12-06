import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Chart } from "react-google-charts";
import { useTheme } from "@mui/material";
// import { PieChart } from "react-google-charts";
// import { PieChart } from "google-charts";

function ExpenseSummary() {
  const theme = useTheme();
  const amount = 1800;
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

  const splitAmount = () => {
    let formattedAmount = "";
    if (typeof amount === "number") {
      formattedAmount = amount.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
    }
    return formattedAmount.split(".");
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
          <Typography variant="subtitle1" fontWeight="bold">
            Your Spending Summary
          </Typography>
          {/* <Typography variant="body2">This Week</Typography>   */}
        </Box>

        {/* <Typography variant="h4">$1,800.00</Typography> */}
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
              color: theme.palette.grey[300],
            }}
          >
            .{splitAmount()[1]}
          </Typography>
        </Typography>
        <Typography variant="subtitle1">10 transactions</Typography>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box sx={{ width: "50%", py: 2, px: 2 }}>
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
