import { Flex, Box, Avatar, Text } from '@chakra-ui/react';
import { getUserData } from 'utils/dataStorage';

interface ProfileProps {
  showProfileData?: boolean;
}
export function Profile({ showProfileData = false }: ProfileProps) {
  const userData = getUserData();
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>{userData ? String(userData.fullname) : 'Usuário'}</Text>
          <Text color="gray.300" fontSize="small">
            {userData ? String(userData.email) : 'usuer@user.com'}
          </Text>
        </Box>
      )}
      <Avatar
        size="md"
        name={userData ? String(userData.fullname) : 'Usuário'}
        bgColor="blue.500"
        src=""
      />
    </Flex>
  );
}
