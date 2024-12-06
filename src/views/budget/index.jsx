import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import BudgetProgress from "../../components/budgetProgress";
import { Grid2 } from "@mui/material";
import BudgetComplete from "../../components/budgetComplete";
import { useNavigate } from "react-router-dom";

function Budget() {
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
        <Typography variant="h4" gutterBottom fontWeight="600">
          My Budget
        </Typography>
      </Box>

      <Card sx={{ width: { xs: "95%", md: "80%" } }}>
        <CardContent>
          <Typography variant="h6" fontWeight="600">
            Transaction Budget
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end", // Align items to the end
            }}
          >
            <Button variant="contained" sx={{}} onClick={onClickCreate}>
              Create Budget
            </Button>
          </Box>
        </CardContent>
      </Card>

      <Box sx={{ width: { xs: "95%", md: "80%" }, mt: 3, mb: 4 }}>
        <Typography variant="h6" gutterBottom fontWeight="700" sx={{ mb: 4 }}>
          Active Budget
        </Typography>
        <Grid2 container spacing={3}>
          {budgetProgressData.map((budget, index) => (
            <Grid2 size={{ xs: 12, md: 6, lg: 4 }}>
              <BudgetProgress
                key={index}
                {...budget}
                onClickProgress={onClickProgress}
              />
            </Grid2>
          ))}
        </Grid2>
      </Box>

      <Box sx={{ width: { xs: "95%", md: "80%" }, mt: 3, mb: 4 }}>
        <Typography variant="h6" gutterBottom fontWeight="700" sx={{ mb: 4 }}>
          Achieved Budget
        </Typography>
        <Grid2 container spacing={3} rowSpacing={8}>
          {budgetComplateData.map((budget, index) => (
            <Grid2 size={{ xs: 12, md: 6, lg: 4 }}>
              <BudgetComplete
                key={index}
                {...budget}
                onClickComplete={onClickComplete}
              />
            </Grid2>
          ))}
        </Grid2>
      </Box>
    </Box>
  );
}
export default Budget;
