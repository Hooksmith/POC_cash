import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import IconButton from "@mui/material/IconButton";
import { Card, useTheme } from "@mui/material";

function BudgetComplete({ title, amount, progress }) {
  const theme = useTheme();
  return (
    <Card>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "grey",
          px: 2,
        }}
      >
        <Typography variant="h6">{title}</Typography>
        <Box>
          <IconButton>
            <Box
              component="img"
              alt="logo"
              src="/more.png"
              width={24}
              sx={{ objectFit: "scale-down" }}
            />
          </IconButton>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          p: 3,
          mt: 2,
          borderRadius: 2,
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", mr: 2 }}>
          <Box
            sx={{
              backgroundColor: "green",
              px: 2,
              py: 1,
              borderRadius: "12px",
              justifyContent: "center",
              mr: 2,
            }}
          >
            <Box
              component="img"
              alt="logo"
              src="/watch.png"
              width={35}
              height={35}
              sx={{ objectFit: "scale-down" }}
            />
          </Box>
        </Box>
        <Box>
          <Typography variant="body1">{title}</Typography>
          <Typography variant="h5" sx={{ fontWeight: "bold" }}>
            Amount: ${amount}
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          px: 3,
          pb: 4,
        }}
      >
        <Typography variant="body2" sx={{ mt: 2, textAlign: "right" }}>
          {progress}%
        </Typography>
        <LinearProgress
          variant="determinate"
          value={progress}
          sx={{
            borderRadius: 5,
            [`&.${linearProgressClasses.colorPrimary}`]: {
              backgroundColor: theme.palette.grey[200],
              ...theme.applyStyles("dark", {
                backgroundColor: theme.palette.grey[800],
              }),
            },
            [`& .${linearProgressClasses.bar}`]: {
              borderRadius: 5,
              backgroundColor: "#1a90ff",
              ...theme.applyStyles("dark", {
                backgroundColor: "#308fe8",
              }),
            },
          }}
        />
        <Typography variant="body2" sx={{ mt: 2 }}>
          Congrats, Goal completed
        </Typography>
      </Box>
    </Card>
  );
}

export default BudgetComplete;
