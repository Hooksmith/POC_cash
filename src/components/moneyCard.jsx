import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";

function MoneyCard({ icon, title, amount }) {
  return (
    <Card
      sx={{ backgroundColor: "#F5F5F5", borderRadius: "12px", px: 2, py: 1 }}
    >
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Box
          component="img"
          alt="logo"
          src={icon}
          width={51}
          height={51}
          sx={{ objectFit: "scale-down" }}
        />
        <Box sx={{ ml: 4 }}>
          <Typography variant="body1" fontWeight="400">
            {title}
          </Typography>
          <Typography variant="h5" fontWeight="400">
            ${amount} USD
          </Typography>
        </Box>
      </Box>
    </Card>
  );
}

export default MoneyCard;
