import * as React from "react";
import Typography from "@mui/material/Typography";

function Budget({ title, budgetAmount, progress }) {
  return (
    <Typography variant="h4" sx={{ marginBottom: 2 }}>
      Budget Page
    </Typography>
  );
}
export default Budget;
