// import necessary react testing library helpers here
import { render } from "@testing-library/react";
import { screen } from "@testing-library/react";
import { fireEvent } from "@testing-library/react";

// import the Counter component here
import Counter from "../components/Counter";

beforeEach(() => {
  // Render the Counter component here
  render(<Counter />);
})

test('renders counter message', () => {
  // Complete the unit test below based on the objective in the line above
  const counter_header = screen.getByText(/counter/i);
  expect(counter_header).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  // Complete the unit test below based on the objective in the line above
  const initial_count = screen.getByTestId('count');
  expect(initial_count).toHaveTextContent('0');
});

test('clicking + increments the count', () => {
  // Complete the unit test below based on the objective in the line above
  const increment_button = screen.getByText('+');
  fireEvent.click(increment_button);
  const count_value = screen.getByTestId('count');
  expect(count_value).toHaveTextContent('1');
  
});

test('clicking - decrements the count', () => {
  // Complete the unit test below based on the objective in the line above
  const decrement_button = screen.getByText('-');
  fireEvent.click(decrement_button);
  const count_value = screen.getByTestId('count');
  expect(count_value).toHaveTextContent('-1');
});
