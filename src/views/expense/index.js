import * as React from "react";
import Typography from "@mui/material/Typography";

function Expense({ title, budgetAmount, progress }) {
  return (
    <Typography variant="h4" sx={{ marginBottom: 2 }}>
      Expense Page
    </Typography>
  );
}
export default Expense;
