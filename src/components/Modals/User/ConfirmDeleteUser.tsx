import { Modal } from 'components/Context/Modals/General/Modal';
import { Text } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { deleteUser } from 'store/users/users.ducks';

interface ConfirmDeleteUserProps {
  isOpen: boolean;
  onClose: () => void;
  id: number;
  nameUser: string;
}
export function ConfirmDeleteUser({
  isOpen,
  onClose,
  id,
  nameUser,
}: ConfirmDeleteUserProps) {
  const dispatch = useDispatch();

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Confirmar exclusão"
      onSubmit={() => dispatch(deleteUser(id))}
      labelSubmitButton="Confirmar"
    >
      <Text>Confirma a exclusão do usuário: {`${id} - ${nameUser} ?`}</Text>
    </Modal>
  );
}
