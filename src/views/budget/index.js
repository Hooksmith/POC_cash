import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import BudgetProgress from "../../components/budgetProgress";
import { Grid2 } from "@mui/material";
import BudgetComplete from "../../components/budgetComplete";

function Budget() {
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
        <Typography variant="h4" component="h2" gutterBottom>
          My Budget
        </Typography>
      </Box>

      <Card sx={{ width: { xs: "95%", md: "80%" } }}>
        <CardContent>
          <Typography variant="h6" component="h2">
            Transaction Budget
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end", // Align items to the end
            }}
          >
            <Button
              variant="contained"
              sx={
                {
                  // backgroundColor: theme.palette.background.primary,
                  // color: theme.palette.text.white,
                }
              }
            >
              Create Budget
            </Button>
          </Box>
        </CardContent>
      </Card>

      <Box sx={{ width: { xs: "95%", md: "80%" }, mt: 4, mb: 4 }}>
        <Typography variant="h4" component="h2" gutterBottom>
          Active Budget
        </Typography>
        <Grid2 container spacing={3}>
          {budgetProgressData.map((budget, index) => (
            <Grid2 size={{ xs: 12, md: 6, lg: 4 }}>
              <BudgetProgress key={index} {...budget} />
            </Grid2>
          ))}
        </Grid2>
      </Box>

      <Box sx={{ width: { xs: "95%", md: "80%" }, mt: 4, mb: 4 }}>
        <Typography variant="h4" component="h2" gutterBottom>
          Achieved Budget
        </Typography>
        <Grid2 container spacing={3} rowSpacing={8}>
          {budgetComplateData.map((budget, index) => (
            <Grid2 size={{ xs: 12, md: 6, lg: 4 }}>
              <BudgetComplete key={index} {...budget} />
            </Grid2>
          ))}
        </Grid2>
      </Box>
    </Box>
  );
}
export default Budget;
