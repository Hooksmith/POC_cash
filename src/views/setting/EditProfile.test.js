/* eslint-disable testing-library/prefer-screen-queries */
import React from "react";
import { render, screen } from "@testing-library/react";
import EditProfile from "./EditProfile";

describe("EditProfile", () => {
  it("renders the profile information and edit button", () => {
    const { getByText } = render(<EditProfile />);

    expect(getByText("Phann Sothyro")).toBeInTheDocument();
    expect(getByText("Phnom Penh")).toBeInTheDocument();

    const textEdit = screen.getAllByText("Edit");
    expect(textEdit.length).toBe(3);
  });

  it("renders personal information sections", () => {
    const { getByText } = render(<EditProfile />);

    expect(getByText("Personal Information")).toBeInTheDocument();
    expect(getByText("Privacy")).toBeInTheDocument();

    expect(getByText("Email")).toBeInTheDocument();
    expect(getByText("name@gmail.com")).toBeInTheDocument();
  });
});
