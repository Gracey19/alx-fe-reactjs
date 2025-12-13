import React from 'react';
import { render, screen } from '@testing-library/react';

const TestComponent = () => <h1>Hello, Jest!</h1>;

test('renders the test component successfully with JSX', () => {
  render(<TestComponent />);
  expect(screen.getByText('Hello, Jest!')).toBeInTheDocument();
});

