import { Flex, Box, Avatar, Text } from '@chakra-ui/react';

interface ProfileProps {
  showProfileData?: boolean;
}
export function Profile({ showProfileData = false }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Crisnaldo Carvalho</Text>
          <Text color="gray.300" fontSize="small">
            crisnaldo72@gmail.com
          </Text>
        </Box>
      )}
      <Avatar
        size="md"
        name="Crisnaldo Carvalho"
        src="https://avatars.githubusercontent.com/u/45441190?s=400&u=9b4cb53944a3fcff05a169bfcbbcb96a7868a809&v=4"
      />
    </Flex>
  );
}
