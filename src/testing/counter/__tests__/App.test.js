import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { App } from "../App";

test("should increment the counter when the button is clicked", async () => {
  render(<App />);

  screen.debug();

  const increment = screen.getByRole("button", { name: /increment/i });
  let result = screen.getByText(/count: 0/i);

  expect(result).toHaveTextContent("Count: 0");

  userEvent.click(increment);
  expect(result).toHaveTextContent("Count: 1");

  const reset = screen.getByRole("button", { name: /reset/i });
  userEvent.click(reset);

  await waitFor(() => {
    expect(result).toHaveTextContent("Count: 0");
  });
});
