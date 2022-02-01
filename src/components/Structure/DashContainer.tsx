import { Box, Flex } from '@chakra-ui/react';
import { ReactNode, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'store';
import { SpinnerLoad } from 'components/Context/DashCointainer/SpinnerLoad';
import { getUserData } from 'utils/dataStorage';
import { refreshData } from 'store/auth/auth.ducks';
import { Header } from './Header';
import { Sidebar } from './Sidebar';

interface DashContainerProps {
  children: ReactNode;
}

export function DashContainer({ children }: DashContainerProps) {
  const storageData = getUserData();
  const apiLoading = useSelector((state: RootState) => state.loading.loading);
  const { user } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    if (Number(storageData.code) !== user.id) {
      dispatch(refreshData(Number(storageData.code)));
    }
  }, [dispatch, storageData.code, user.id]);
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
