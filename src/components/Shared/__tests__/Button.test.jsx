import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Button from "../Button";

describe("Button Component", () => {
  test("renders the button with the correct label", () => {
    render(<Button>click me</Button>);
    const buttonElement = screen.getByText(/click me/i);
    expect(buttonElement).toBeInTheDocument();
  });
});
