import { Box } from '@chakra-ui/react';
import { ReactNode } from 'react';
import { getUserData } from 'utils/dataStorage';

interface RoleGuardsProps {
  children: ReactNode;
}

export function RoleGuards({ children }: RoleGuardsProps) {
  const userData = getUserData();

  if (userData.role !== 'ADMIN') {
    return <></>;
  }
  return <Box>{children}</Box>;
}
