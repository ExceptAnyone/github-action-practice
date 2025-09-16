import { render, screen, fireEvent } from "@testing-library/react";
import { Button } from "./Button";

describe("Button", () => {
  it("renders with secondary variant by default", () => {
    render(<Button label="Click me" />);

    const button = screen.getByRole("button", { name: /click me/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass("storybook-button--secondary");
  });

  it("renders with primary variant when specified", () => {
    render(<Button label="Primary" primary={true} />);

    const button = screen.getByRole("button", { name: /primary/i });
    expect(button).toHaveClass("storybook-button--primary");
  });

  it("renders with large size when specified", () => {
    render(<Button label="Large" size="large" />);

    const button = screen.getByRole("button", { name: /large button/i });
    expect(button).toHaveClass("storybook-button--large");
  });

  it("calls onClick handler when clicked", () => {
    const handleClick = vi.fn();
    render(<Button label="Clickable" onClick={handleClick} />);

    const button = screen.getByRole("button", { name: /clickable/i });
    fireEvent.click(button);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("applies custom background color", () => {
    render(<Button label="Colored" backgroundColor="#ff0000" />);

    const button = screen.getByRole("button", { name: /colored/i });
    expect(button).toHaveStyle({ backgroundColor: "rgb(255, 0, 0)" });
  });
});
