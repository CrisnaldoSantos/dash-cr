import { Box, Flex, Button, Icon } from '@chakra-ui/react';
import { ProfileForm } from 'components/Context/Profile/ProfileForm';
import { DashContainer } from 'components/Structure/DashContainer';
import { PageContent } from 'components/Structure/PageContent';
import { PageTitle } from 'components/Structure/PageTitle';
import { RiEdit2Line } from 'react-icons/ri';

export function Profile() {
  return (
    <DashContainer>
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
              onClick={() => {}}
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
