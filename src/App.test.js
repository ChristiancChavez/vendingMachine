import { render } from '@testing-library/react';
import App from './App';

test('renders App component', () => {
  const { getByText } = render(<App />);
  const textElement = getByText(/Vending Machine/i);

  expect(textElement).toBeInTheDocument();
});
