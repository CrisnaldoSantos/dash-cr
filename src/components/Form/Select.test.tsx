import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Select } from './Select';

describe('Select Component', () => {
  it('deve renderizar corretamente o Select', () => {
    const selectName = 'select-teste';
    render(<Select name={selectName} />);

    const selectFeedback = screen.getByRole('combobox');
    expect(selectFeedback).toBeInTheDocument();
  });

  it('deve renderizar corretamente o Select com a label', () => {
    const selectName = 'select-teste';
    const selectLabel = 'select-label';
    render(<Select name={selectName} label={selectLabel} />);

    const selectFeedback = screen.getByRole('combobox', { name: selectLabel });
    expect(selectFeedback).toBeInTheDocument();
  });

  it('deve renderizar a mensagem de erro no Select', () => {
    const selectName = 'select-teste';
    const selectLabel = 'select-label';
    const error = { type: '', message: 'error-testing' };

    render(<Select name={selectName} label={selectLabel} error={error} />);

    const errorSelectFeedback = screen.getByText(error.message);

    expect(errorSelectFeedback).toBeInTheDocument();
  });

  it('deve renderizar o Select vazio no seu estado inicial', () => {
    const selectName = 'select-teste';
    const selectLabel = 'select-label';
    render(
      <Select name={selectName} label={selectLabel}>
        <option value="ADMIN">Admin</option>
        <option value="USER">User</option>
      </Select>
    );
    const selectFeedback = screen.getByRole('combobox', { name: selectLabel });
    expect(selectFeedback).toBeInTheDocument();
  });

  it('deve renderizar as opções do Select ao ser clicado', () => {
    const selectName = 'select-teste';
    const selectLabel = 'select-label';

    const options = [
      { value: 'ADMIN', label: 'Admin' },
      { value: 'USER', label: 'User' },
    ];
    render(
      <Select name={selectName} label={selectLabel}>
        <option value={options[0].value}>{options[0].label}</option>
        <option value={options[1].value}>{options[1].label}</option>
      </Select>
    );
    const selectFeedback = screen.getByRole('combobox', { name: selectLabel });
    userEvent.click(selectFeedback);

    const optionText0 = screen.getByText(options[0].label);
    const optionText1 = screen.getByText(options[0].label);

    expect(optionText0).toBeInTheDocument();
    expect(optionText1).toBeInTheDocument();
  });
});
