import { Flex, Icon, Input } from '@chakra-ui/react';
import { RiSearchLine } from 'react-icons/ri';

export function GlobalFilter({ filter, setFilter }: any) {
  return (
    <Flex
      as="label"
      flex="1"
      py="2"
      px="8"
      ml="6"
      mb="4"
      maxWidth={500}
      alignSelf="flex-end"
      color="blue.500"
      bg="gray.100"
      borderRadius="full"
    >
      <Input
        color="blue.700"
        variant="unstyled"
        placeholder="Buscar na tabela"
        _placeholder={{ color: 'gray.400' }}
        value={filter || ''}
        onChange={(e) => setFilter(e.target.value)}
      />
      <Icon as={RiSearchLine} fontSize="20" />
    </Flex>
  );
}
