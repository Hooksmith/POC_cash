/* eslint-disable testing-library/prefer-screen-queries */
// EditProfile.test.js
import React from "react";
import { render, screen } from "@testing-library/react";
import EditProfile from "./EditProfile"; // Replace with your path

describe("EditProfile", () => {
  it("renders the profile information and edit button", () => {
    const { getByText } = render(<EditProfile />);

    // Check for user name and location
    expect(getByText("Phann Sothyro")).toBeInTheDocument();
    expect(getByText("Phnom Penh")).toBeInTheDocument();

    // Check for edit button text
    const textEdit = screen.getAllByText("Edit");
    expect(textEdit.length).toBe(3);
  });

  it("renders personal information sections", () => {
    const { getByText } = render(<EditProfile />);

    // Check for section titles
    expect(getByText("Personal Information")).toBeInTheDocument();
    expect(getByText("Privacy")).toBeInTheDocument();

    // Check for example information (adapt based on your data)
    expect(getByText("Email")).toBeInTheDocument();
    expect(getByText("name@gmail.com")).toBeInTheDocument();
  });
});
