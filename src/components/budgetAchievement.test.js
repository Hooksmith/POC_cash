import { render, screen } from "@testing-library/react";
import BudgetAchievement from "./budgetAchievement";

jest.mock("react-google-charts", () => ({
  Chart: () => <div data-testid="chart" />,
}));

test("renders BudgetAchievement component", () => {
  render(<BudgetAchievement />);

  const title = screen.getByText("Budget achievement");
  const amount = screen.getByText("$ 1,800");
  const achievements = screen.getByText("5 achievements");
  const chart = screen.getByTestId("chart");

  expect(title).toBeInTheDocument();
  expect(amount).toBeInTheDocument();
  expect(achievements).toBeInTheDocument();
  expect(chart).toBeInTheDocument();
});
