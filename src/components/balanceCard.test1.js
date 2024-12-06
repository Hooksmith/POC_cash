import { render, screen } from "@testing-library/react";
import BalanceCard from "./balanceCard";

test("renders BalanceCard with default props", () => {
  render(
    <BalanceCard title="Total Balance" amount={1000} percentageChange={10} />
  );

  const titleElement = screen.getByText("Total Balance");
  const amountElement = screen.getByText("$1,000.00");
  const percentageChangeElement = screen.getByText("↑ 10%");

  expect(titleElement).toBeInTheDocument();
  expect(amountElement).toBeInTheDocument();
  expect(percentageChangeElement).toBeInTheDocument();
});

test("renders BalanceCard with selected state", () => {
  render(
    <BalanceCard
      title="Total Balance"
      amount={1000}
      percentageChange={10}
      selectedBalance={0}
    />
  );
});
