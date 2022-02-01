import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Heading,
  SimpleGrid,
  VStack,
} from '@chakra-ui/react';
import { Input } from 'components/Form/Input';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Select } from 'components/Form/Select';
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch } from 'react-redux';
import { setUser } from 'store/users/users.ducks';
import { userModalValidationSchema } from './UserModalValidation';

interface CreateUserModalProps {
  isOpen: boolean;
  onClose: () => void;
}
type UserFormData = {
  firstName: string;
  lastName: string;
  email: string;
  document: string;
  password: string;
  password_confirmation: string;
  role: string;
};

export function CreateUserModal({ isOpen, onClose }: CreateUserModalProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserFormData>({
    resolver: yupResolver(userModalValidationSchema),
  });

  const dispatch = useDispatch();

  const handleSave: SubmitHandler<UserFormData> = (data) => {
    const { firstName, lastName, email, document, password, role } = data;
    dispatch(setUser({ firstName, lastName, email, document, password, role }));
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="2xl">
      <ModalOverlay />
      <ModalContent as="form" p="4" onSubmit={handleSubmit(handleSave)}>
        <ModalHeader>
          <Heading size="md" fontWeight="Bold">
            Novo Usuário
          </Heading>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
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
              <Input
                type="password"
                label="Senha"
                error={errors.password}
                {...register('password')}
              />
              <Input
                type="password"
                label="Confirmação da senha"
                error={errors.password_confirmation}
                {...register('password_confirmation')}
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
        </ModalBody>
        <ModalFooter>
          <Button bgColor="gray.100" mr={3} onClick={onClose}>
            Cancelar
          </Button>
          <Button type="submit" colorScheme="blue">
            Salvar
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}