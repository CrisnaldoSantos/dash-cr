import { SimpleGrid, VStack } from '@chakra-ui/react';
import { Input } from 'components/Form/Input';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Select } from 'components/Form/Select';
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch, useSelector } from 'react-redux';
import { getUser, setUser, updateUser } from 'store/users/users.ducks';
import { Modal } from 'components/Context/Modals/General/Modal';
import { useEffect, useState } from 'react';
import { RootState } from 'store';
import { userModalEditValidationSchema } from './UserModalValidation';

interface EditUserModalProps {
  isOpen: boolean;
  onClose: () => void;
  id: number;
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

type UserFormData = Omit<UserData, 'id' | 'password'>;

export function EditUserModal({ isOpen, onClose, id }: EditUserModalProps) {
  const dispatch = useDispatch();

  const { user } = useSelector((state: RootState) => state.users);
  const [current, setCurrentUser] = useState<UserData>(user);

  useEffect(() => {
    if (id !== 0 && id !== current.id) {
      dispatch(getUser(id));
      setCurrentUser(user);
    }
  }, [current.id, dispatch, id, user]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserFormData>({
    resolver: yupResolver(userModalEditValidationSchema),
    defaultValues: current,
  });

  const handleSave: SubmitHandler<UserFormData> = (data) => {
    dispatch(updateUser({ ...data, id: user.id, password: user.password }));
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Atualizar Usuário"
      onSubmit={handleSubmit(handleSave)}
      size="2xl"
    >
      <VStack spacing="2">
        <SimpleGrid minChildWidth="240px" spacing="4" w="100%">
          <Input
            label="Nome"
            error={errors.firstName}
            {...register('firstName')}
          />
          <Input
            label="Sobrenome"
            error={errors.lastName}
            {...register('lastName')}
          />
        </SimpleGrid>
        <SimpleGrid minChildWidth="240px" spacing="4" w="100%">
          <Input
            label="CPF"
            error={errors.document}
            {...register('document')}
          />
          <Input
            type="email"
            label="E-mail"
            error={errors.email}
            {...register('email')}
          />
        </SimpleGrid>
        <SimpleGrid minChildWidth="240px" spacing="4" w="100%">
          <Select
            label="Perfil"
            placeholder="Selecione uma opção"
            error={errors.role}
            {...register('role')}
          >
            <option value="ADMIN">Admin</option>
            <option value="USER">User</option>
          </Select>
        </SimpleGrid>
      </VStack>
    </Modal>
  );
}
