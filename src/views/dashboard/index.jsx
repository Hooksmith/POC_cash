import * as React from "react";
import Typography from "@mui/material/Typography";
import { Box, Card, Grid2 } from "@mui/material";
import AnalyticsReport from "../../components/analyticsReport";
import ExpenseSummary from "../../components/expenseSummary";
import BalanceCard from "../../components/balanceCard";
import BudgetCard from "../../components/budgetCard";
import BudgetAchievement from "../../components/budgetAchievement";
import TransactionTable from "../../components/transactionTable";
import DashboardHeader from "../../components/dashboardHeader";

function Dashboard() {
  const [selectedBalance, setSelectedBalance] = React.useState(0);

  const balanceData = [
    { title: "Total Balance", amount: 5000, percentageChange: 6.12 },
    { title: "Income", amount: 3500, percentageChange: 6.12 },
    { title: "Expend", amount: 1800, percentageChange: 6.12 },
    { title: "Budget saving", amount: 1200, percentageChange: 6.12 },
  ];

  const budgetData = [
    { title: "Sale Of Goods", progress: 60, timePeriod: "1 month later" },
    { title: "Property Rental", progress: 70, timePeriod: "3 month later" },
    { title: "Design Services", progress: 43, timePeriod: "1 month later" },
    { title: "Service", progress: 10, timePeriod: "4 month later" },
    { title: "Sale Of Goods", progress: 60, timePeriod: "1 month later" },
  ];

  const onClickBalanceBox = (index) => {
    setSelectedBalance(index);
  };

  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Box sx={{ width: { xs: "95%", md: "90%" }, my: 4 }}>
        <DashboardHeader />
        <Grid2 container spacing={4}>
          <Grid2 size={{ xs: 12, md: 8 }}>
            <Grid2 container spacing={2}>
              {balanceData.map((item, index) => (
                <Grid2 size={{ xs: 12, md: 6, lg: 3 }} key={index}>
                  <BalanceCard
                    selectedBalance={selectedBalance}
                    index={index}
                    title={item.title}
                    amount={item.amount}
                    percentageChange={item.percentageChange}
                    onClick={() => onClickBalanceBox(index)}
                  />
                </Grid2>
              ))}
            </Grid2>

            <Box sx={{ mt: 4 }}>
              <AnalyticsReport />
            </Box>

            <Box sx={{ mt: 5 }}>
              <TransactionTable />
            </Box>
          </Grid2>

          <Grid2 size={{ xs: 12, md: 4 }}>
            <ExpenseSummary />
            <Card
              sx={{
                display: "flex",
                lexDirection: "column",
                p: { xs: 2, md: 4 },
                mt: 5,
              }}
            >
              <Box sx={{ width: "100%" }}>
                <Typography
                  variant="h6"
                  gutterBottom
                  sx={{ mb: 2 }}
                  fontWeight="600"
                >
                  Budget Progress
                </Typography>
                {budgetData.map((item, index) => (
                  <BudgetCard key={index} {...item} />
                ))}
              </Box>
            </Card>

            <Box sx={{ mt: 5 }}>
              <BudgetAchievement />
            </Box>
          </Grid2>
        </Grid2>
      </Box>
    </Box>
  );
}
export default Dashboard;
