import { render, screen } from '@testing-library/react';
import { CounterRegister } from './CounterRegister';

describe('CounterRegister Component', () => {
  test('deve exibir o valor das propriedades', () => {
    const label = 'text';
    const counter = 0;
    render(<CounterRegister label={label} counter={counter} />);
    const counterRegisterLabel = screen.getByText(label);
    const counterRegisterCounter = screen.getByText(counter);
    expect(counterRegisterLabel).toBeInTheDocument();
    expect(counterRegisterCounter).toBeInTheDocument();
  });

  test('deve alterar o valor do counter em até 1000ms ', async () => {
    const label = 'text';
    const counter = 4;
    render(<CounterRegister label={label} counter={counter} />);
    const counterRegisterCounter = await screen.findByText(counter);
    expect(counterRegisterCounter).toBeInTheDocument();
  });
});
