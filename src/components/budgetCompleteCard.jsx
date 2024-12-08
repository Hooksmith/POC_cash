import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import IconButton from "@mui/material/IconButton";
import { Card, useTheme } from "@mui/material";
import { formatMoney } from "../utils";

function BudgetCompleteCard({ title, amount, progress, onClickComplete }) {
  const theme = useTheme();
  return (
    <Card
      sx={{
        borderRadius: "10px",
        border: `1px solid ${theme.palette.grey[100]}`,
      }}
      onClick={onClickComplete}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: theme.palette.grey[300],
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
              backgroundColor: theme.palette.primary.main,
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
          <Typography
            fontWeight="500"
            color={theme.palette.grey[400]}
            textTransform="uppercase"
            sx={{ fontSize: "12px" }}
          >
            {title}
          </Typography>
          <Typography
            variant="body2"
            fontWeight="400"
            color={theme.palette.grey[400]}
          >
            Amount:{" "}
            <Typography
              variant="span"
              sx={{ fontSize: "28px", color: theme.palette.grey[800] }}
            >
              {" "}
              {formatMoney(amount, "$")}
            </Typography>
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
            },
            [`& .${linearProgressClasses.bar}`]: {
              borderRadius: 5,
              backgroundColor: theme.palette.warning.main,
            },
          }}
        />
        <Typography
          variant="body2"
          sx={{ mt: 2 }}
          fontWeight="500"
          color={theme.palette.grey[400]}
        >
          Congrats, Goal completed
        </Typography>
      </Box>
    </Card>
  );
}

export default BudgetCompleteCard;
