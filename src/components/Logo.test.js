import { render, screen } from "@testing-library/react";
import Logo from "./Logo";

test("renders Logo component", () => {
  render(<Logo />);

  const logoImage = screen.getByAltText("logo");

  expect(logoImage).toBeInTheDocument();
  expect(logoImage).toHaveAttribute("src", "/logo.png");
  expect(logoImage).toHaveStyle({ height: "40px" });
});
