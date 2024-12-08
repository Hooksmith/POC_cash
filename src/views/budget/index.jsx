import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import budgetProgressCard from "../../components/budgetProgressCard";
import { Grid2, useTheme } from "@mui/material";
import BudgetCompleteCard from "../../components/budgetCompleteCard";
import { useNavigate } from "react-router-dom";

function Budget() {
  const theme = useTheme();
  const navigate = useNavigate();

  const onClickProgress = () => {
    navigate("/budget-progress");
  };
  const onClickComplete = () => {
    navigate("/budget-complete");
  };

  const onClickCreate = () => {
    navigate("/create-budget");
  };
  const budgetProgressData = [
    {
      title: "Watch Budget",
      goalAmount: 50,
      progress: 75,
      remainingAmount: 20,
    },
    {
      title: "Fixed House Budget",
      goalAmount: 100,
      progress: 75,
      remainingAmount: 20,
    },
    {
      title: "Health Check Budget",
      goalAmount: 70,
      progress: 75,
      remainingAmount: 20,
    },
  ];
  const budgetComplateData = [
    {
      title: "Watch Budget",
      amount: 50,
      progress: 100,
    },
    {
      title: "Fixed House Budget",
      amount: 100,
      progress: 100,
    },
    {
      title: "Health Check Budget",
      amount: 70,
      progress: 100,
    },
    {
      title: "Watch Budget",
      amount: 50,
      progress: 100,
    },
    {
      title: "Fixed House Budget",
      amount: 100,
      progress: 100,
    },
    {
      title: "Health Check Budget",
      amount: 70,
      progress: 100,
    },
  ];

  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Box sx={{ width: { xs: "95%", md: "80%" }, mt: 4, mb: 4 }}>
        <Typography
          variant="h5"
          fontWeight="700"
          color={theme.palette.grey[900]}
          sx={{ mb: 4 }}
        >
          My Budget
        </Typography>

        <Card>
          <CardContent>
            <Typography
              variant="h6"
              fontWeight="600"
              color={theme.palette.grey[900]}
            >
              Transaction Budget
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-end",
              }}
            >
              <Button variant="contained" sx={{}} onClick={onClickCreate}>
                Create Budget
              </Button>
            </Box>
          </CardContent>
        </Card>

        <Box sx={{ mt: 4 }}>
          <Typography
            variant="h6"
            fontWeight="600"
            gutterBottom
            color={theme.palette.grey[900]}
          >
            Active Budget
          </Typography>
          <Grid2 container spacing={3}>
            {budgetProgressData.map((budget, index) => (
              <Grid2 size={{ xs: 12, md: 6, lg: 4 }}>
                <budgetProgressCard
                  key={index}
                  {...budget}
                  onClickProgress={onClickProgress}
                />
              </Grid2>
            ))}
          </Grid2>
        </Box>
        <Box sx={{ mt: 4 }}>
          <Typography
            variant="h6"
            gutterBottom
            fontWeight="700"
            color={theme.palette.grey[900]}
          >
            Achieved Budget
          </Typography>
          <Grid2 container spacing={3} rowSpacing={8}>
            {budgetComplateData.map((budget, index) => (
              <Grid2 size={{ xs: 12, md: 6, lg: 4 }}>
                <BudgetCompleteCard
                  key={index}
                  {...budget}
                  onClickComplete={onClickComplete}
                />
              </Grid2>
            ))}
          </Grid2>
        </Box>
      </Box>
    </Box>
  );
}
export default Budget;
