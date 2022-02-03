import { VStack, Avatar, SimpleGrid } from '@chakra-ui/react';
import { Input } from 'components/Form/Input';
import { useSelector } from 'react-redux';
import { RootState } from 'store';

export function ProfileForm() {
  const { user } = useSelector((state: RootState) => state.auth);
  return (
    <VStack spacing="2" justify="center">
      <Avatar
        name={`${user.firstName} ${user.lastName}`}
        size="xl"
        bg="blue.500"
        mb="4"
        title="Semana corrida não deu tempo de implementar a imagem, mas me contrate q eu termino tranquilo ^^"
      />

      <SimpleGrid minChildWidth="240px" spacing="8" w="100%">
        <Input label="Nome" name="firstName" disabled value={user.firstName} />
        <Input
          label="Sobrenome"
          name="lastName"
          disabled
          value={user.lastName}
        />
      </SimpleGrid>
      <SimpleGrid minChildWidth="240px" spacing="8" w="100%">
        <Input label="Email" name="email" disabled value={user.email} />
        <Input label="CPF" name="document" disabled value={user.document} />
      </SimpleGrid>
      <SimpleGrid minChildWidth="240px" spacing="8" w="100%">
        <Input
          label="Perfil"
          name="role"
          disabled
          value={user.role}
          textTransform="lowercase"
        />
        <Input label="ID" name="id" disabled value={user.id} />
      </SimpleGrid>
    </VStack>
  );
}
