import { HStack, IconButton, Icon } from '@chakra-ui/react';
import { RiEdit2Line, RiDeleteBin2Line } from 'react-icons/ri';

interface ActionsButtonsProps {
  handleEdit: () => void;
  handleDelete: () => void;
}

export function ActionsButtons({
  handleEdit,
  handleDelete,
}: ActionsButtonsProps) {
  return (
    <HStack>
      <IconButton
        aria-label="edit-user"
        size="sm"
        icon={<Icon as={RiEdit2Line} />}
        bgColor="blue.200"
        title="Editar"
        shadow="xl"
        onClick={() => handleEdit()}
      />
      <IconButton
        aria-label="delete-user"
        size="sm"
        icon={<Icon as={RiDeleteBin2Line} />}
        bgColor="red.400"
        title="Excluir"
        shadow="xl"
        onClick={() => handleDelete()}
      />
    </HStack>
  );
}
