import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

function BalanceCard({ title, amount, percentageChange }) {
  return (
    <Box
      sx={{
        backgroundColor: title === "Total Balance" ? "green" : "white",
        padding: 2,
        borderRadius: 2,
        display: "flex",
        flexDirection: "column",
        // alignItems: "center",
        // justifyContent: "center",
      }}
    >
      <Typography variant="h6" component="h2">
        {title}
      </Typography>
      <Typography variant="h4" component="h2">
        ${amount}
      </Typography>
      <Typography variant="body1" component="p">
        ↑ {percentageChange}% vs last month
      </Typography>
    </Box>
  );
}

export default BalanceCard;
