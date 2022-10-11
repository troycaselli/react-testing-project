import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import userEvent from '@testing-library/user-event';
import App from './App';
import Counter from './Counter';

test('verifies that certain elements exist', () => {
  // arrange
  const simulatedDOM = render(
    <App />
  );
  // in this case, simulatedDOM is the same as screen (interchangeable)
  console.log(simulatedDOM.debug())
  console.log(screen.debug())

  // act
  // getByText fails the test immediately if selector is not found while queryByText simply returns null if selector is not found
  const element = simulatedDOM.getByText(/hello, world!/i);
  const heading = screen.queryByText(/react testing/i);
  const link = screen.getByText(/Top/i);
  // console.log(heading);
  // console.log(heading.textContent);

  // assert
  expect(element).toBeInTheDocument(); // jest-dom matcher
  expect(element).toBeTruthy(); // jest matcher
  expect(element).toBeVisible(); // hest-dom matcher
  expect(heading).toBeVisible();
  expect(link).toBeVisible();
});

test('increments count when increment button is clicked', async () => {
  // arrange (set up virtual DOM)
  render(<Counter />);

  // act
  // 1. grab elements from virtual DOM
  const count = screen.getByText(/0/);
  const incrementButton = screen.getByText(/increment/i);

  // 2. simulate user click
  await userEvent.click(incrementButton);
  // alternatively, once fireEvent is imported::: fireEvent.click(incrementButton);

  // assert
  expect(count).toHaveTextContent('1');
  expect(count).not.toHaveTextContent('0');
});