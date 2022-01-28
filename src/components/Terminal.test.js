import { render, screen } from '@testing-library/react';
import Terminal from './Terminal';

test('renders <fill in property>', () => {
  render(<Terminal />);
  const linkElement = screen.getByText(/ /i);
  expect(linkElement).toBeInTheDocument();
});