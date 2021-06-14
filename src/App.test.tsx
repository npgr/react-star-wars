import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  test('renders header bar', () => {
    render(<App />);
    const headerBar = screen.getByTestId('header-bar');
    expect(headerBar).toBeInTheDocument();
  });
});
