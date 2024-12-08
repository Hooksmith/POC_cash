import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import { useTheme } from "@mui/material";
import { formatMoney } from "../utils";

function MoneyCard({ icon, title, amount }) {
  const theme = useTheme();
  return (
    <Card
      sx={{
        backgroundColor: theme.palette.grey[200],
        borderRadius: "12px",
        px: 2,
        py: 1,
      }}
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
          <Typography
            variant="h5"
            fontWeight="400"
            color={
              title === "Current Money" ? "#24A19C" : theme.palette.primary.main
            }
          >
            {formatMoney(amount, "")} USD
          </Typography>
        </Box>
      </Box>
    </Card>
  );
}

export default MoneyCard;
