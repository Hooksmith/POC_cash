import * as React from "react";
import Typography from "@mui/material/Typography";
import { Box, Card, CardContent, CircularProgress, Grid2 } from "@mui/material";
import AnalyticsReport from "../../components/analyticsReport";
import ExpenseSummary from "../../components/expenseSummary";
import BalanceCard from "../../components/balanceCard";
import BudgetCard from "../../components/budgetCard";
import BudgetAchievement from "../../components/budgetAchievement";
import TransactionTable from "../../components/transactionTable";

function Dashboard({ title, budgetAmount, progress }) {
  const budgetData = [
    { title: "Sale Of Goods", progress: 60, timePeriod: "1 month later" },
    { title: "Property Rental", progress: 70, timePeriod: "3 month later" },
    { title: "Design Services", progress: 43, timePeriod: "1 month later" },
    { title: "Service", progress: 10, timePeriod: "4 month later" },
    { title: "Sale Of Goods", progress: 60, timePeriod: "1 month later" },
  ];
  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Box sx={{ width: { xs: "95%", md: "80%" }, my: 4 }}>
        <Grid2 container spacing={4}>
          <Grid2 size={{ xs: 12, md: 8 }}>
            <Grid2 container spacing={2}>
              <Grid2 size={{ xs: 12, md: 6, lg: 3 }}>
                <BalanceCard
                  title="Total Balance"
                  amount={60}
                  percentageChange={60}
                />
              </Grid2>
              <Grid2 size={{ xs: 12, md: 6, lg: 3 }}>
                <BalanceCard title="Income" amount={60} percentageChange={60} />
              </Grid2>
              <Grid2 size={{ xs: 12, md: 6, lg: 3 }}>
                <BalanceCard title="Expend" amount={60} percentageChange={60} />
              </Grid2>
              <Grid2 size={{ xs: 12, md: 6, lg: 3 }}>
                <BalanceCard
                  title="Budget saving"
                  amount={60}
                  percentageChange={60}
                />
              </Grid2>
            </Grid2>
            <Box sx={{ mt: 4 }}>
              <AnalyticsReport />
            </Box>
            <Box sx={{ mt: 4 }}>
              <TransactionTable />
            </Box>
          </Grid2>
          <Grid2 size={{ xs: 12, md: 4 }}>
            <ExpenseSummary />
            <Card
              sx={{
                display: "flex",
                flexDirection: "column",
                p: { sx: 2, md: 4 },
                mt: 5,
              }}
            >
              <CardContent>
                <Typography
                  variant="h4"
                  component="h2"
                  gutterBottom
                  sx={{ mb: 2, ml: -2 }}
                >
                  Budget Progress
                </Typography>
                {budgetData.map((item, index) => (
                  <BudgetCard key={index} {...item} />
                ))}
              </CardContent>
            </Card>
            <Box
              sx={{
                mt: 5,
              }}
            >
              <BudgetAchievement />
            </Box>
          </Grid2>
        </Grid2>
      </Box>
    </Box>
  );
}
export default Dashboard;
