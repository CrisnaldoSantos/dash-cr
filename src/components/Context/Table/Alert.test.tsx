import { render, screen } from '@testing-library/react';
import { Alert } from './Alert';

describe('Alert Component', () => {
  it('deve renderizar corretamente o alert e seu respectivo texto', () => {
    const text = 'Testing Alert';
    const status = 'info';

    render(<Alert text={text} status={status} />);

    const existsAlert = screen.getByRole('alert');
    const textAlert = screen.getByText(text);

    expect(existsAlert).toBeInTheDocument();
    expect(textAlert).toBeInTheDocument();
  });
});
