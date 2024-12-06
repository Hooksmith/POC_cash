import { render, screen } from "@testing-library/react";
import CategoryManagement from "./Category";

test("renders CategoryManagement component", () => {
  render(<CategoryManagement />);

  const createCategoryTitle = screen.getByText("Create a new category");
  const manageCategoryTitle = screen.getByText("Manage Category");

  expect(createCategoryTitle).toBeInTheDocument();
  expect(manageCategoryTitle).toBeInTheDocument();
});

test("renders form fields", () => {
  render(<CategoryManagement />);

  const iconInput = screen.getAllByText("Icon");
  const backgroundColorInput = screen.getByText("Backgound Color");
  const nameInput = screen.getAllByText("Name");

  expect(iconInput.length).toBe(2);
  expect(backgroundColorInput).toBeInTheDocument();
  expect(nameInput.length).toBe(4);
});

test("handles form submission", () => {});
