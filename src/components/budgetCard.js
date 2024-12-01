import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import LinearProgress from "@mui/material/LinearProgress";
// import IconButton from "@mui/material/IconButton";
// import EditIcon from "@mui/icons-material/Edit";
// import DeleteIcon from "@mui/icons-material/Delete";

function BudgetCard({ title, amount, progress }) {
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
        <Typography variant="h6">{title}</Typography>
        <Box sx={{ display: "flex" }}>
          {/* <IconButton>
            <EditIcon />
          </IconButton>
          <IconButton>
            <DeleteIcon />
          </IconButton> */}
        </Box>
      </Box>

      <Box sx={{ display: "flex", alignItems: "center", marginTop: 2 }}>
        {/* Icon for the budget category */}
        <Typography variant="h5" sx={{ marginLeft: 1 }}>
          BUDGET GOAL
        </Typography>
        <Typography variant="h4" sx={{ marginLeft: 1 }}>
          Amount: ${amount}
        </Typography>
      </Box>

      <LinearProgress
        variant="determinate"
        value={progress}
        sx={{ width: "80%", marginTop: 2 }}
      />
      <Typography variant="body1">
        ${amount - (amount * progress) / 100} remaining to complete goal
      </Typography>
    </Box>
  );
}

export default BudgetCard;
