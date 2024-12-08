import { render, screen } from "@testing-library/react";
import WelcomePage from "./WelcomePage";

test("renders WelcomePage correctly", () => {
  render(<WelcomePage />);

  const logoImage = screen.getByAltText("DocCast Logo");

  expect(logoImage).toBeInTheDocument();
  expect(logoImage).toHaveStyle({ width: "50%" });
});
