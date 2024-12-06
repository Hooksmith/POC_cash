import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useTheme } from "@emotion/react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

function BalanceCard({
  index,
  selectedBalance,
  title,
  amount,
  percentageChange,
  onClick,
}) {
  const theme = useTheme();
  const textColor =
    selectedBalance === index
      ? theme.palette.text.white
      : theme.palette.text.primary;
  const bgColor =
    selectedBalance === index
      ? theme.palette.primary.main
      : theme.palette.grey[0];
  const percentageBgColor =
    selectedBalance === index
      ? theme.palette.grey[0]
      : theme.palette.primary.lighter;

  const splitAmount = () => {
    let formattedAmount = "";
    if (typeof amount === "number") {
      formattedAmount = amount.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
    }
    return formattedAmount.split(".");
  };

  return (
    <Box
      sx={{
        backgroundColor: bgColor,
        padding: 3,
        borderRadius: 2.5,
        display: "flex",
        flexDirection: "column",
      }}
      onClick={onClick}
    >
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography
          sx={{
            color: textColor,
            fontSize: "16px",
            lineHeight: "24px",
            fontWeight: 400,
          }}
        >
          {title}
        </Typography>
        {selectedBalance === index ? (
          <MoreVertIcon sx={{ color: textColor }} />
        ) : (
          <ArrowOutwardIcon sx={{ color: textColor }} />
        )}
      </Box>
      <Typography
        sx={{
          color:
            selectedBalance === index
              ? theme.palette.text.white
              : theme.palette.grey[900],
          fontWeight: selectedBalance === index ? 700 : 400,
          fontSize: "28px",
          lineHeight: "24px",
          py: 2,
        }}
      >
        $ {splitAmount()[0]}
        <Typography
          variant="span"
          sx={{
            color:
              selectedBalance === index
                ? theme.palette.primary.lighter
                : theme.palette.text.disabled,
          }}
        >
          .{splitAmount()[1]}
        </Typography>
      </Typography>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Typography
          sx={{
            backgroundColor: percentageBgColor,
            color: theme.palette.primary.main,
            py: 0.5,
            px: 1,
            borderRadius: 2.5,
            fontSize: "10px",
            mr: 0.5,
          }}
        >
          ↑ {percentageChange}%
        </Typography>

        <Typography
          sx={{ color: textColor, fontSize: "10px", lineHeight: "15px" }}
        >
          vs last month
        </Typography>
      </Box>
    </Box>
  );
}

export default BalanceCard;
