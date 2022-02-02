import { Box, Flex, Button, Icon } from '@chakra-ui/react';
import { ProfileForm } from 'components/Context/Profile/ProfileForm';
import { PasswordUpdateModal } from 'components/Modals/Password/PasswordUpdateModal';
import { DashContainer } from 'components/Structure/DashContainer';
import { PageContent } from 'components/Structure/PageContent';
import { PageTitle } from 'components/Structure/PageTitle';
import { RiEdit2Line } from 'react-icons/ri';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'store';
import { setUserModalPassword } from 'store/users/users.ducks';

export function Profile() {
  const dispatch = useDispatch();
  const { modalPassword } = useSelector((state: RootState) => state.users);
  return (
    <DashContainer>
      <PasswordUpdateModal
        isOpen={modalPassword}
        onClose={() => dispatch(setUserModalPassword(false))}
      />
      <PageContent>
        <Box>
          <Flex mb="8" justify="space-between" align="center">
            <PageTitle>Meu Perfil</PageTitle>
            <Button
              as="a"
              size="sm"
              fontSize="sm"
              colorScheme="blue"
              leftIcon={<Icon as={RiEdit2Line} />}
              onClick={() => dispatch(setUserModalPassword(true))}
            >
              Alterar Senha
            </Button>
          </Flex>

          <ProfileForm />
        </Box>
      </PageContent>
    </DashContainer>
  );
}
