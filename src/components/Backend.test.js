import { render, screen } from '@testing-library/react';
import Backend from './Backend';

test('renders <fill in property>', () => {
  render(<Backend />);
  const linkElement = screen.getByText(/ /i);
  expect(linkElement).toBeInTheDocument();
});