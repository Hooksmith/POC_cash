import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Button, Card, Grid2 } from "@mui/material";
import MoneyCard from "../../components/moneyCard";

function BudgetComplete() {
  const budgetData = {
    categoryIcon: "",
    categoryName: "Bag",
    budgetGoal: 50,
    currentAmount: 10,
    description:
      "When you query timestamptz from the database, PostgreSQL converts the UTC value back to the time value of the timezone set by the database server, the user, or the current database connection.",
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Box sx={{ width: { xs: "95%", md: "60%" }, mt: 4, mb: 4 }}>
        <Typography sx={{ textAlign: "start", mb: 2 }} variant="h4">
          My Budget
        </Typography>
      </Box>
      <Card
        sx={{
          width: { xs: "95%", md: "60%" },
        }}
      >
        <Box sx={{ p: { xs: 2, md: 8 } }}>
          <Button variant="text" startIcon={<ArrowBackIosIcon />}>
            Back
          </Button>
          <Grid2 container spacing={2}>
            <Grid2 size={{ xs: 12, md: 6 }}>
              <Box sx={{ display: "flex", alignItems: "center", mt: 2 }}>
                <Box
                  sx={{
                    backgroundColor: "green",
                    padding: "4px",
                    borderRadius: "50%",
                    justifyContent: "center",
                  }}
                >
                  <Box
                    component="img"
                    alt="logo"
                    src="/briefcase.png"
                    width={24}
                    height={19}
                    sx={{ objectFit: "scale-down" }}
                  />
                </Box>

                <Typography variant="body1" sx={{ ml: 1 }}>
                  {budgetData.categoryName}
                </Typography>
              </Box>
            </Grid2>
            <Grid2 size={{ xs: 12, md: 3 }}></Grid2>
            <Grid2 size={{ xs: 12, md: 3 }}>
              <Box sx={{ position: "relative", display: "inline-flex", mb: 4 }}>
                <CircularProgress
                  variant="determinate"
                  value={100}
                  sx={(theme) => ({
                    color: "#6DB33F",
                  })}
                  size={150}
                  thickness={8}
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
                    variant="h6"
                    component="div"
                    sx={{ color: "text.secondary" }}
                  >
                    {`100%`}
                  </Typography>
                </Box>
              </Box>
            </Grid2>
          </Grid2>
          <Box sx={{ mt: 4, mb: 4 }}>
            <Typography variant="h5">Budget Goal</Typography>
            <Typography variant="h4">$50.00 USD</Typography>
          </Box>
          <Typography>Description</Typography>
          <Typography>{budgetData.description}</Typography>
        </Box>
      </Card>
    </Box>
  );
}
export default BudgetComplete;
