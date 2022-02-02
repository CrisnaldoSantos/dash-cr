import { render, screen } from '@testing-library/react';
import { SearchBox } from './SearchBox';

describe('SearchBox Component', () => {
  test('deve encontrar o placeholder utilizado na box', () => {
    render(<SearchBox />);

    const searchBoxText = screen.getByPlaceholderText('Buscar na plataforma');

    expect(searchBoxText).toBeInTheDocument();
  });
});
