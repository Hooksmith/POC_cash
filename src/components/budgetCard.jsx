import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import ArrowForwardIcon from "@mui/icons-material/ArrowForwardIos";

function BudgetCard({ title, progress, timePeriod }) {
  return (
    <Card sx={{ width: "100%", mb: 3 }}>
      <CardContent>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Box sx={{ position: "relative", display: "inline-flex" }}>
              <CircularProgress
                variant="determinate"
                value={progress}
                sx={(theme) => ({
                  color: "#6DB33F",
                })}
                thickness={5}
                size={48}
              />
              <Box
                sx={{
                  top: 0,
                  left: 0,
                  bottom: 0,
                  right: 0,
                  position: "absolute",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Typography
                  variant="body2"
                  component="div"
                  sx={{ color: "text.secondary" }}
                >
                  {progress}%
                </Typography>
              </Box>
            </Box>
            <Box sx={{ ml: 3 }}>
              <Typography variant="subtitle1" component="h2">
                {title}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                {timePeriod}
              </Typography>
            </Box>
          </Box>

          <IconButton>
            <ArrowForwardIcon />
          </IconButton>
        </Box>
      </CardContent>
    </Card>
  );
}
export default BudgetCard;
