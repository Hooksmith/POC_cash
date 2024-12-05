import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

function MoneyCard({ icon, title, amount }) {
  return (
    <Card sx={{ backgroundColor: "lightgray", borderRadius: "12px", mr: 6 }}>
      <CardContent>
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
            <Typography variant="body1">{title}</Typography>
            <Typography variant="h5" component="h2">
              ${amount} USD
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}

export default MoneyCard;
