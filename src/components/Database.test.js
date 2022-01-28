import { render, screen } from '@testing-library/react';
import Database from './Database';

test('renders <fill in property>', () => {
  render(<Database />);
  const linkElement = screen.getByText(/ /i);
  expect(linkElement).toBeInTheDocument();
});