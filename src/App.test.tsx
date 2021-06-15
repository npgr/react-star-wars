import { render, screen } from '@testing-library/react';
import App from './App';

describe('Given App', () => {
  test.skip('When route is home /', () => {
    // TODO: test each route
  });
  test('Then it should renders header bar', () => {
    render(<App />);
    const headerBar = screen.getByTestId('header-bar');
    expect(headerBar).toBeInTheDocument();
  });

  test('Then it should renders footer', () => {
    render(<App />);
    const footerText = screen.getByText('Made by Nuno Gonçalves 2021');
    expect(footerText).toBeVisible();
  });
});
