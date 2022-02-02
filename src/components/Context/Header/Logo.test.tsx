import { render, screen } from '@testing-library/react';
import { Logo } from './Logo';

describe('Logo Component', () => {
  test('deve exibir o texto presente na logo', () => {
    render(<Logo />);

    const logoText = screen.getByText('DashCr');

    expect(logoText).toBeInTheDocument();
  });
});
