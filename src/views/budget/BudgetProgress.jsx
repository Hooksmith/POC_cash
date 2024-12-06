import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Button, Card, Grid2 } from "@mui/material";
import MoneyCard from "../../components/moneyCard";
import { useNavigate } from "react-router-dom";

function BudgetProgress() {
  const navigate = useNavigate();
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
        <Typography
          sx={{ textAlign: "start", mb: 4 }}
          variant="h4"
          fontWeight="600"
        >
          My Budget
        </Typography>
      </Box>
      <Card
        sx={{
          width: { xs: "95%", md: "60%" },
        }}
      >
        <Box
          sx={{
            px: { xs: 2, md: 8 },
            pb: { xs: 2, md: 8 },
            pt: { xs: 2, md: 2 },
          }}
        >
          <Button
            variant="text"
            startIcon={<ArrowBackIosIcon />}
            onClick={() => {
              navigate(-1);
            }}
          >
            Back
          </Button>
          <Grid2 container spacing={2}>
            <Grid2 size={{ xs: 12, md: 6 }}>
              <Box sx={{ display: "flex", alignItems: "center", mt: 2 }}>
                <Box
                  sx={{
                    backgroundColor: "green",
                    p: 1,
                    borderRadius: "50%",
                    justifyContent: "center",
                  }}
                >
                  <Box
                    component="img"
                    alt="logo"
                    src="/briefcase.png"
                    width={25}
                    height={25}
                    sx={{ objectFit: "scale-down" }}
                  />
                </Box>

                <Typography variant="h4" sx={{ ml: 1 }} fontWeight="600">
                  {budgetData.categoryName}
                </Typography>
              </Box>
              <Box sx={{ mt: 5, mb: 4 }}>
                <Typography variant="h5" fontWeight="500">
                  Budget Goal
                </Typography>
                <Typography variant="h2Z" fontWeight="500">
                  $50.00 USD
                </Typography>
              </Box>
            </Grid2>
            <Grid2 size={{ xs: 12, md: 2 }}></Grid2>
            <Grid2 size={{ xs: 12, md: 4 }}>
              <Box sx={{ position: "relative", display: "inline-flex", mb: 2 }}>
                <CircularProgress
                  variant="determinate"
                  value={70}
                  sx={(theme) => ({
                    color: "#6DB33F",
                  })}
                  size={200}
                  thickness={7}
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
                    70%
                  </Typography>
                </Box>
              </Box>
            </Grid2>
          </Grid2>
          <Typography variant="h5" fontWeight="500">
            Description
          </Typography>
          <Typography variant="h6" fontWeight="400">
            {budgetData.description}
          </Typography>
          <Grid2 container spacing={4} sx={{ mt: 4 }}>
            <Grid2 size={{ xs: 12, md: 6, lg: 5 }}>
              <MoneyCard icon="/pig.png" title="Current Money" amount={10} />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 6, lg: 5 }}>
              <MoneyCard icon="/bag.png" title="Money Left" amount={40} />
            </Grid2>
          </Grid2>
        </Box>
      </Card>
    </Box>
  );
}

export default BudgetProgress;
