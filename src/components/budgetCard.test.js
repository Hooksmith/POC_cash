import { render, screen } from "@testing-library/react";
import BudgetCard from "./budgetCard";

test("renders BudgetCard correctly", () => {
  render(
    <BudgetCard
      title="Sale of Goods"
      progress={60}
      timePeriod="1 month later"
    />
  );

  const title = screen.getByText("Sale of Goods");
  const progressPercentage = screen.getByText("60%");
  const timePeriodText = screen.getByText("1 month later");
  const forwardButton = screen.getByRole("button");

  expect(title).toBeInTheDocument();
  expect(progressPercentage).toBeInTheDocument();
  expect(timePeriodText).toBeInTheDocument();
  expect(forwardButton).toBeInTheDocument();
});

test("renders BudgetCard with different props", () => {
  render(
    <BudgetCard
      title="Property Rental"
      progress={80}
      timePeriod="3 months later"
    />
  );

  const title = screen.getByText("Property Rental");
  const progressPercentage = screen.getByText("80%");
  const timePeriodText = screen.getByText("3 months later");

  expect(title).toBeInTheDocument();
  expect(progressPercentage).toBeInTheDocument();
  expect(timePeriodText).toBeInTheDocument();
});
