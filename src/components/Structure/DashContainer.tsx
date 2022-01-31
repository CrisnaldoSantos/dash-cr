import { Box, Flex } from '@chakra-ui/react';
import { ReactNode } from 'react';
import { Header } from './Header';
import { Sidebar } from './Sidebar';

interface DashContainerProps {
  children: ReactNode;
}

export function DashContainer({ children }: DashContainerProps) {
  return (
    <Box>
      <Header />
      <Flex w="100%" my="6" maxWidth={1180} mx="auto" px="6">
        <Sidebar />
        {children}
      </Flex>
    </Box>
  );
}
