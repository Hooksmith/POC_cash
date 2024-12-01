import * as React from "react";
import Typography from "@mui/material/Typography";

function Dashboard({ title, budgetAmount, progress }) {
  return (
    <Typography variant="h4" sx={{ marginBottom: 2 }}>
      Dashboard
    </Typography>
  );
}
export default Dashboard;
