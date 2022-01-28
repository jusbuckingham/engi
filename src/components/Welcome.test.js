import { render, screen } from '@testing-library/react';
import Welcome from './Welcome';

test('renders <fill in property>', () => {
  render(<Welcome />);
  const linkElement = screen.getByText(/ /i);
  expect(linkElement).toBeInTheDocument();
});