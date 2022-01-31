import {
  Box,
  Button,
  Checkbox,
  Flex,
  Heading,
  Icon,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';
import { Header } from 'components/Structure/Header';
import { Pagination } from 'components/Structure/Pagination';
import { Sidebar } from 'components/Structure/Sidebar';
import { Link } from 'react-router-dom';
import { RiAddLine } from 'react-icons/ri';

export function UserList() {
  return (
    <Box>
      <Header />
      <Flex w="100%" my="6" maxWidth={1180} mx="auto" px="6">
        <Sidebar />
        <Box flex="1" borderRadius={8} bg="gray.100" p="8">
          <Flex mb="8" justify="space-between" align="center">
            <Heading size="lg" fontWeight="normal">
              Usuários
            </Heading>
            <Link to="/users/create">
              <Button
                as="a"
                size="sm"
                fontSize="sm"
                colorScheme="pink"
                leftIcon={<Icon as={RiAddLine} />}
              >
                Criar Novo
              </Button>
            </Link>
          </Flex>

          <Table colorScheme="whiteAlpha">
            <Thead>
              <Tr>
                <Th px="6" color="gray.300" width="8">
                  <Checkbox colorScheme="pink" />
                </Th>
                <Th>Usuário</Th>
                <Th>Data de cadastro</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td px="6">
                  <Checkbox colorScheme="pink" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Crisnaldo Carvalho</Text>
                    <Text fontSize="sm" color="gray.300">
                      crisnaldo72@gmail.com
                    </Text>
                  </Box>
                </Td>
                <Td>05 de janeiro, 2022</Td>
              </Tr>
            </Tbody>
          </Table>

          <Pagination />
        </Box>
      </Flex>
    </Box>
  );
}
