import { render, screen } from '@testing-library/react';
import { ROUTES } from '../../routes';

import Header from './Header';

describe('Given Header Component', () => {
  describe('When click on App Logo', () => {
    test('Then it should go to home Url', async () => {
      render(<Header savedCharacters={[]} />);

      const logoLink = screen.getByRole('link', { name: /home/i });
      expect(logoLink).toHaveAttribute('href', ROUTES.HOME);
    });
  });

  describe('When click on Characters link', () => {
    test('Then it should go to characters Url', () => {
      render(<Header savedCharacters={[]} />);

      const charactersLink = screen.getByRole('link', { name: /characters/i });
      expect(charactersLink).toHaveAttribute('href', ROUTES.CHARACTERS);
    });
  });

  describe('When exist characters visited', () => {
    test.skip('Then they should be rendered on header bar', () => {});
  });

  describe('When type on search field', () => {
    test.todo('Then it should list filtered characters by name');
  });
});
