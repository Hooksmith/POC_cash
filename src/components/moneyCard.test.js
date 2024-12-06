import { render, screen } from "@testing-library/react";
import MoneyCard from "./moneyCard";

test("renders MoneyCard correctly", () => {
  const icon = "/some/icon.png";
  const title = "Total Income";
  const amount = 1000;

  render(<MoneyCard icon={icon} title={title} amount={amount} />);

  const titleElement = screen.getByText(title);
  const amountElement = screen.getByText(`$${amount} USD`);
  const iconElement = screen.getByAltText("logo");

  expect(titleElement).toBeInTheDocument();
  expect(amountElement).toBeInTheDocument();
  expect(iconElement).toBeInTheDocument();
  expect(iconElement).toHaveAttribute("src", icon);
});
