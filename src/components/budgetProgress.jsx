import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import IconButton from "@mui/material/IconButton";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import { useTheme } from "@emotion/react";

function BudgetProgress({
  icon,
  title,
  goalAmount,
  progress,
  remainingAmount,
  onClickProgress,
}) {
  const theme = useTheme();

  return (
    <Card sx={{ borderRadius: "10px" }} onClick={onClickProgress}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "#F8F8F8",
          px: 2,
          py: 2,
        }}
      >
        <Typography variant="h6" fontWeight="500">
          {title}
        </Typography>
        <Box>
          <IconButton>
            <Box
              component="img"
              alt="logo"
              src="/edit.png"
              width={24}
              sx={{ objectFit: "scale-down" }}
            />
          </IconButton>
          <IconButton>
            <Box
              component="img"
              alt="logo"
              src="/delete.png"
              width={24}
              sx={{ objectFit: "scale-down" }}
            />
          </IconButton>
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
          px: 3,
          pt: 2,
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
          <Typography variant="body1" fontWeight="500">
            {title}
          </Typography>
          <Typography variant="h6" fontWeight="400">
            Amount: ${goalAmount}
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          px: 3,
          pb: 4,
        }}
      >
        <Typography
          variant="body2"
          fontWeight="500"
          sx={{ mt: 2, textAlign: "right" }}
        >
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
        <Typography variant="body2" sx={{ mt: 2 }} fontWeight="500">
          ${remainingAmount} remaining to complete goal
        </Typography>
      </Box>
    </Card>
  );
}
export default BudgetProgress;
