import { fireEvent, render, screen } from '@testing-library/react';
import { Input } from './Input';

describe('Input Component', () => {
  it('deve renderizar corretamente o Input', () => {
    const inputName = 'input-teste';
    render(<Input name={inputName} />);

    const inputFeedback = screen.getByRole('textbox');
    expect(inputFeedback).toBeInTheDocument();
  });

  it('deve renderizar corretamente o Input com a label', () => {
    const inputName = 'input-teste';
    const inputLabel = 'input-label';
    render(<Input name={inputName} label={inputLabel} />);

    const inputFeedback = screen.getByRole('textbox', { name: inputLabel });
    expect(inputFeedback).toBeInTheDocument();
  });

  it('deve renderizar o valor atribuído ao Input', () => {
    const inputName = 'input-teste';
    const inputLabel = 'input-label';
    const inputValue = 'testing';

    render(<Input name={inputName} label={inputLabel} />);

    const inputFeedback = screen.getByRole('textbox', { name: inputLabel });
    fireEvent.change(inputFeedback, { target: { value: inputValue } });
    const textInputFeedback = screen.getByDisplayValue(inputValue);

    expect(textInputFeedback).toBeInTheDocument();
  });

  it('deve renderizar a mensagem de erro no Input', () => {
    const inputName = 'input-teste';
    const inputLabel = 'input-label';
    const error = { type: '', message: 'error-testing' };

    render(<Input name={inputName} label={inputLabel} error={error} />);

    const errorInputFeedback = screen.getByText(error.message);

    expect(errorInputFeedback).toBeInTheDocument();
  });
});
