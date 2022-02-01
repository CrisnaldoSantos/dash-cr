/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-unstable-nested-components */
import { Box, Button, Flex, Heading, Icon, SimpleGrid } from '@chakra-ui/react';
import { RiAddLine } from 'react-icons/ri';
import { DashContainer } from 'components/Structure/DashContainer';
import { useMemo, useState } from 'react';

import { Table } from 'components/Structure/Table';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'store';
import { CreateUserModal } from 'components/Modals/User/CreateUserModal';
import {
  setUserModalCreate,
  setUserModalDelete,
  setUserModalEdit,
} from 'store/users/users.ducks';
import { ConfirmDeleteUser } from 'components/Modals/User/ConfirmDeleteUser';
import { ActionsButtons } from 'components/Context/Table/ActionsButtons';
import { UserGuards } from 'components/Guards/UserGuard';
import { RoleGuards } from 'components/Guards/RoleGuard';
import { EditUserModal } from 'components/Modals/User/EditUserModal';

export function UserList() {
  const dispatch = useDispatch();
  const { users, modalCreate, modalDelete, modalEdit } = useSelector(
    (state: RootState) => state.users
  );
  const [selectUserId, setSelectUserId] = useState(0);
  const [selectUserName, setSelectUserName] = useState('');

  function handleEdit(id: number, name: string) {
    setSelectUserId(id);
    setSelectUserName(name);
    dispatch(setUserModalEdit(true));
  }

  function handleDelete(id: number, name: string) {
    setSelectUserId(id);
    setSelectUserName(name);
    dispatch(setUserModalDelete(true));
  }

  const columns = useMemo(
    () => [
      { Header: 'ID', accessor: 'id' },
      {
        Header: 'Nome',
        accessor: 'firstName',
      },
      {
        Header: 'Sobrenome',
        accessor: 'lastName',
      },
      {
        Header: 'E-mail',
        accessor: 'email',
      },
      {
        Header: 'CPF',
        accessor: 'document',
      },
      {
        Header: 'Perfil',
        accessor: 'role',
      },
      {
        Header: ' ',
        accessor: ({ id, firstName }: any) => (
          <RoleGuards>
            <UserGuards userId={Number(id)}>
              <ActionsButtons
                handleEdit={() => handleEdit(id, firstName)}
                handleDelete={() => handleDelete(id, firstName)}
              />
            </UserGuards>
          </RoleGuards>
        ),
      },
    ],
    []
  );

  const data = useMemo(() => users, [users]);

  return (
    <DashContainer>
      <CreateUserModal
        isOpen={modalCreate}
        onClose={() => dispatch(setUserModalCreate(false))}
      />
      <ConfirmDeleteUser
        isOpen={modalDelete}
        id={selectUserId}
        nameUser={selectUserName}
        onClose={() => dispatch(setUserModalDelete(false))}
      />
      <EditUserModal
        isOpen={modalEdit}
        id={selectUserId}
        onClose={() => dispatch(setUserModalEdit(false))}
      />
      <Box
        flex="1"
        borderRadius={8}
        bg="white"
        p={['4', '8']}
        boxShadow="xl"
        pb="4"
      >
        <SimpleGrid
          flex="1"
          gap="4"
          minChildWidth="320px"
          align="flex-start"
          justify="center"
          flexDirection="column"
        >
          <Box>
            <Flex mb="8" justify="space-between" align="center">
              <Heading size="lg" fontWeight="Bold">
                Usuários
              </Heading>
              <RoleGuards>
                <Button
                  as="a"
                  size="sm"
                  fontSize="sm"
                  colorScheme="blue"
                  leftIcon={<Icon as={RiAddLine} />}
                  onClick={() => dispatch(setUserModalCreate(true))}
                >
                  Criar Novo
                </Button>
              </RoleGuards>
            </Flex>
            <Flex
              direction="column"
              overflowX="auto"
              overflowY="auto"
              maxh="80vh"
            >
              <Table columns={columns} data={data} />
            </Flex>
          </Box>
        </SimpleGrid>
      </Box>
    </DashContainer>
  );
}
