import { Modal } from 'components/Context/Modals/General/Modal';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { VStack, SimpleGrid } from '@chakra-ui/react';
import { useSelector, useDispatch } from 'react-redux';
import { Input } from 'components/Form/Input';

import { RootState } from 'store';
import { errorToast } from 'utils/toasts';
import { updateUser } from 'store/users/users.ducks';
import {
  defaultPasswordValues,
  passwordValidationSchema,
} from './passwordValidation';

interface UpdatePasswordModalProps {
  isOpen: boolean;
  onClose: () => void;
}

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
    reset,
    formState: { errors },
  } = useForm<UserFormData>({
    resolver: yupResolver(passwordValidationSchema),
    defaultValues: defaultPasswordValues,
  });
  const dispatch = useDispatch();
  const { user } = useSelector((state: RootState) => state.auth);

  const handleSave: SubmitHandler<UserFormData> = (data) => {
    if (data.password !== user.password) {
      errorToast('A senha atual está incorreta!');
    } else {
      const { id, firstName, lastName, email, document, role } = user;
      const updatedUser = {
        id,
        firstName,
        lastName,
        email,
        document,
        role,
        password: data.new_password,
      };
      dispatch(updateUser(updatedUser));
    }
  };
  return (
    <Modal
      isOpen={isOpen}
      onClose={() => {
        onClose();
        reset(defaultPasswordValues);
      }}
      title="Alterar Senha"
      onSubmit={handleSubmit(handleSave)}
    >
      <VStack spacing="2">
        <SimpleGrid minChildWidth="240px" spacing="4" w="100%">
          <Input
            type="password"
            label="Senha"
            error={errors.password}
            passwordInput
            {...register('password')}
          />
          <Input
            type="password"
            label="Nova Senha"
            error={errors.new_password}
            passwordInput
            {...register('new_password')}
          />
          <Input
            type="password"
            label="Confirmação da Nova Senha"
            passwordInput
            error={errors.new_password_confirmation}
            {...register('new_password_confirmation')}
          />
        </SimpleGrid>
      </VStack>
    </Modal>
  );
}
