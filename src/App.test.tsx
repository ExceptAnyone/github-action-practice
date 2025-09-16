import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  it("renders the main heading", () => {
    render(<App />);

    const heading = screen.getByText("React + Storybook");
    expect(heading).toBeInTheDocument();
  });

  it("renders welcome message", () => {
    render(<App />);

    const welcomeMessage = screen.getByText(
      "Welcome to our Storybook testing environment!",
    );
    expect(welcomeMessage).toBeInTheDocument();
  });

  it("renders counter buttons", () => {
    render(<App />);

    const incrementButton = screen.getByRole("button", { name: /increment/i });
    const decrementButton = screen.getByRole("button", { name: /decrement/i });
    const resetButton = screen.getByRole("button", { name: /reset/i });

    expect(incrementButton).toBeInTheDocument();
    expect(decrementButton).toBeInTheDocument();
    expect(resetButton).toBeInTheDocument();
  });

  it("renders version information", () => {
    render(<App />);

    const versionInfo = screen.getByText(/app version/i);
    expect(versionInfo).toBeInTheDocument();
  });
});
