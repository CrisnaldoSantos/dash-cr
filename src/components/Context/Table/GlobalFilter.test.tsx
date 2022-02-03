import { fireEvent, render, screen } from '@testing-library/react';
import { GlobalFilter } from './GlobalFIlter';

afterEach(() => {
  jest.clearAllMocks();
});

describe('GlobalFilter Component', () => {
  it('deve renderizar corretamente o GlobalFilter', () => {
    render(<GlobalFilter />);
    const inputGlobal = screen.getByRole('textbox');

    expect(inputGlobal).toBeInTheDocument();
  });

  it('deve renderizar corretamente as valores recebidos no GlobalFilter', () => {
    const filter = 'FilterText';

    render(<GlobalFilter filter={filter} />);

    const inputDataGlobal = screen.getByDisplayValue(filter);
    expect(inputDataGlobal).toBeInTheDocument();
  });

  it('deve chamar corretamente a função setFilter ao mudar o valor no GlobalFilter', () => {
    const setFilter = jest.fn();
    render(<GlobalFilter setFilter={setFilter} />);
    const inputGlobal = screen.getByRole('textbox');
    fireEvent.change(inputGlobal, { target: { value: 'testing' } });
    expect(setFilter).toBeCalled();
  });
});
