import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ActionsButtons } from './ActionsButtons';

afterEach(() => {
  jest.clearAllMocks();
});

describe('ActionsButtons Component', () => {
  it('deve renderizar corretamente os dois botões', () => {
    render(<ActionsButtons handleEdit={() => {}} handleDelete={() => {}} />);
    const editActionButton = screen.getByRole('button', {
      name: 'edit-user',
    });
    const deleteActionButton = screen.getByRole('button', {
      name: 'delete-user',
    });

    expect(editActionButton).toBeInTheDocument();
    expect(deleteActionButton).toBeInTheDocument();
  });

  it('deve executar as função de editar ao botão ser clicado', () => {
    const handleEdit = jest.fn();
    const handleDelete = jest.fn();
    render(
      <ActionsButtons handleEdit={handleEdit} handleDelete={handleDelete} />
    );
    const editActionButton = screen.getByRole('button', {
      name: 'edit-user',
    });

    userEvent.click(editActionButton);
    expect(handleEdit).toBeCalled();
  });

  it('deve executar as função de deletar ao botão ser clicado', () => {
    const handleEdit = jest.fn();
    const handleDelete = jest.fn();
    render(
      <ActionsButtons handleEdit={handleEdit} handleDelete={handleDelete} />
    );

    const deleteActionButton = screen.getByRole('button', {
      name: 'delete-user',
    });

    userEvent.click(deleteActionButton);
    expect(handleDelete).toBeCalled();
  });
});
