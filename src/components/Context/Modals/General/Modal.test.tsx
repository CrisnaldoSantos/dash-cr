import { render, screen } from '@testing-library/react';
import { Modal } from './Modal';

describe('Modal Component', () => {
  test('deve exibir as propriedades do modal', () => {
    render(
      <Modal isOpen onClose={() => {}} title="Teste" onSubmit={() => {}}>
        modal-testing
      </Modal>
    );

    const modalText = screen.getByText('modal-testing');
    const modalTitle = screen.getByText('Teste');
    expect(modalText).toBeInTheDocument();
    expect(modalTitle).toBeInTheDocument();
  });
});
