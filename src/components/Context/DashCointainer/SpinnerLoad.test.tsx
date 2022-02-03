import { render, screen } from '@testing-library/react';
import { SpinnerLoad } from './SpinnerLoad';

describe('SpinnerLoad Component', () => {
  test('deve renderizar corretamente o SpinnerLoad', async () => {
    render(<SpinnerLoad />);

    const spinnerFeedback = screen.getByText(/loading\.\.\./i);
    expect(spinnerFeedback).toBeInTheDocument();
  });
});
