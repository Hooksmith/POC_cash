import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";
import IconButton from "@mui/material/IconButton";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";

function BudgetComplete({ title, budgetAmount, progress }) {
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
        Congrats, Goal completed!
      </Typography>

      <CircularProgress
        variant="determinate"
        value={progress}
        size={150}
        sx={{ color: "green" }}
      />
      <Typography variant="h4" sx={{ marginTop: 2 }}>
        ${budgetAmount.toFixed(2)} USD
      </Typography>

      <Typography variant="body1" sx={{ marginTop: 2 }}>
        When you query timestamptz from the database, PostgreSQL converts the
        UTC value back to the time value of the timezone set by the database
        server, the user, or the current database connection.  
      </Typography>
    </Box>
  );
}
export default BudgetComplete;
