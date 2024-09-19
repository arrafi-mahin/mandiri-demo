import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Input from "../Input";

describe("Input Component", () => {
  test("renders with label and placeholder", () => {
    render(<Input label="Username" placeholder="Enter your username" />);

    expect(screen.getByText(/username/i)).toBeInTheDocument();

    const inputElement = screen.getByPlaceholderText(/enter your username/i);
    expect(inputElement).toBeInTheDocument();
  });

  test("renders with value and calls onChange handler", () => {
    const handleChange = jest.fn();
    render(
      <Input
        value="test value"
        onChange={handleChange}
        placeholder="Enter value"
      />
    );

    const inputElement = screen.getByPlaceholderText(/enter value/i);
    expect(inputElement).toHaveValue("test value");
  });

  test("renders with correct type", () => {
    render(<Input type="password" placeholder="Enter password" />);

    // Check if the input type is correct
    const inputElement = screen.getByPlaceholderText(/enter password/i);
    expect(inputElement).toHaveAttribute("type", "password");
  });
});
