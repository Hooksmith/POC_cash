import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";
import IconButton from "@mui/material/IconButton";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";

function BudgetProgress({ title, budgetAmount, spentAmount }) {
  const progress = (spentAmount / budgetAmount) * 100;
  const remainingAmount = budgetAmount - spentAmount;

  return (
    <Box
      sx={{
        width: "100%",
        border: "1px solid #ccc",
        borderRadius: 2,
        padding: 2,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <IconButton>
          <ArrowBackIcon />
        </IconButton>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <ShoppingBagIcon />
          <Typography variant="h6" sx={{ marginLeft: 1 }}>
            {title}
          </Typography>
        </Box>
      </Box>

      <Typography variant="h4" sx={{ marginBottom: 2 }}>
        ${budgetAmount.toFixed(2)} USD
      </Typography>

      <CircularProgress variant="determinate" value={progress} size={150} />
      <Typography variant="body1" sx={{ marginTop: 2 }}>
        {progress.toFixed(1)}%
      </Typography>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: 2,
          width: "100%",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          {/* Current money icon */}
          <Typography variant="body1">${spentAmount.toFixed(2)} USD</Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          {/* Money left icon */}
          <Typography variant="body1">
            ${remainingAmount.toFixed(2)} USD
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default BudgetProgress;
