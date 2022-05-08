import { render, screen } from '@testing-library/react';
import App from './App';

test('Check if App contains text Nav', () => {
  render(<App />);
  const linkElement = screen.getByText("Nav");
  expect(linkElement).toBeInTheDocument();
});
