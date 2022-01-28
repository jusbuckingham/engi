import { render, screen } from '@testing-library/react';
import Frontend from './Frontend';

test('renders <fill in property>', () => {
  render(<Frontend />);
  const linkElement = screen.getByText(/ /i);
  expect(linkElement).toBeInTheDocument();
});