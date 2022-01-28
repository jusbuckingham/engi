import { render, screen } from '@testing-library/react';
import About from './About';

test('renders <fill in property>', () => {
  render(<About />);
  const linkElement = screen.getByText(/ /i);
  expect(linkElement).toBeInTheDocument();
});