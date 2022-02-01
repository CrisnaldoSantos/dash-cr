import { Box, Flex } from '@chakra-ui/react';
import { ReactNode, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from 'store/users/users.ducks';
import { RootState } from 'store';
import { SpinnerLoad } from 'components/Context/DashCointainer/SpinnerLoad';
import { Header } from './Header';
import { Sidebar } from './Sidebar';

interface DashContainerProps {
  children: ReactNode;
}

export function DashContainer({ children }: DashContainerProps) {
  const dispatch = useDispatch();
  const apiLoading = useSelector((state: RootState) => state.loading.loading);

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  return (
    <Box>
      <Header />
      <Flex w="100%" my="6" maxWidth={1280} mx="auto" px="6">
        <Sidebar />
        {apiLoading === 1 ? <SpinnerLoad /> : children}
      </Flex>
    </Box>
  );
}
