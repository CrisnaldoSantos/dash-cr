import { Modal } from 'components/Context/Modals/General/Modal';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { VStack, SimpleGrid, Input } from '@chakra-ui/react';
import { current } from '@reduxjs/toolkit';
import { userModalEditValidationSchema } from '../User/UserModalValidation';
import {
  defaultPasswordValues,
  passwordValidationSchema,
} from './passwordValidation';

interface UpdatePasswordModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type UserData = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  document: string;
  password: string;
  role: string;
};

type UserFormData = {
  password: string;
  new_password: string;
  new_password_confirmation: string;
};
export function UpdatePasswordModal({
  isOpen,
  onClose,
}: UpdatePasswordModalProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserFormData>({
    resolver: yupResolver(passwordValidationSchema),
    defaultValues: defaultPasswordValues,
  });

  const handleSave: SubmitHandler<UserFormData> = (data) => {
    console.log(data);
  };
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Alterar Senha"
      onSubmit={() => {}}
    >
      <VStack spacing="2">
        <SimpleGrid minChildWidth="240px" spacing="4" w="100%">
          <Input
            type="password"
            label="Senha"
            error={errors.password}
            {...register('password')}
          />
          <Input
            type="password"
            label="Nova Senha"
            error={errors.new_password}
            {...register('new_password')}
          />
          <Input
            type="password"
            label="Confirmação da senha"
            error={errors.new_password_confirmation}
            {...register('new_password_confirmation')}
          />
        </SimpleGrid>
      </VStack>
    </Modal>
  );
}
